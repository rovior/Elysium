import styles from './Project.module.css'

import { parse, v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Message from '../layout/Message'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Project() {
  const { id } = useParams()

  const [project, setProject] = useState({ category: {}, services: [] })
  const [services, setServices] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState(null)
  const [type, setType] = useState('')

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data)
          setServices(data.services)
        })
        .catch((err) => {
          console.error(err)
          setMessage('Erro ao carregar os dados do projeto.')
          setType('error')
        })
    }, 300)
  }, [id])



  function editPost(project) {
    setMessage('')

    if (project.budget < project.cost) {
      setMessage('Erro: O orçamento não pode ser menor que o custo.')
      setType('error')
      return
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    })
      .then((resp) => {
        if (!resp.ok) throw new Error(`Erro HTTP! Status: ${resp.status}`)
        return resp.json()
      })
      .then((data) => {
        setProject(data)
        setMessage('Projeto Atualizado!')
        setType('success')
        setTimeout(() => setShowProjectForm(false), 500)
      })
      .catch((err) => {
        console.error('Erro ao atualizar o projeto:', err)
        setMessage('Erro ao atualizar o projeto.')
        setType('error')
      })
  }


function createService(project) {
    setMessage('');
  
    // Certificar que o array de serviços existe
    if (!project.services) {
      project.services = [];
    }
  
    // Último serviço adicionado
    const lastService = project.services[project.services.length - 1];
  
    if (!lastService) {
      setMessage('Erro: Nenhum serviço encontrado.');
      setType('error');
      return;
    }
  
    lastService.id = uuidv4();
    const lastServiceCost = parseFloat(lastService.cost);
  
    if (isNaN(lastServiceCost)) {
      setMessage('Erro: O custo do serviço é inválido.');
      setType('error');
      return;
    }
  
    const newCost = parseFloat(project.cost) + lastServiceCost;
  
    // Validação do orçamento
    if (newCost > parseFloat(project.budget)) {
      setMessage('Erro: Orçamento ultrapassado, verifique o valor do serviço.');
      setType('error');
      project.services.pop(); // Remove o serviço inválido
      return;
    }
  
    // Atualiza o custo total
    project.cost = newCost;
  
    // Atualiza o projeto no backend
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`Erro HTTP! Status: ${resp.status}`);
        }
        return resp.json();
      })
      .then((data) => {
        setProject(data);
        setMessage('Serviço adicionado com sucesso!');
        setType('success');
      })
      .catch((err) => {
        console.error('Erro ao adicionar serviço:', err);
        setMessage('Erro ao adicionar serviço.');
        setType('error');
      });
  }
  


  function removeService(id) {
    const updatedServices = services.filter(service => service.id !== id)
    setServices(updatedServices)
  
    const updatedProject = { ...project, services: updatedServices }
    
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProject),
    })
      .then(resp => resp.json())
      .then(data => {
        setProject(data)
        setMessage('Serviço removido com sucesso!')
        setType('success')
      })
      .catch(err => {
        console.error('Erro ao remover serviço:', err)
        setMessage('Erro ao remover serviço.')
        setType('error')
      })
  }
  

  return (
    <>
      <div>
        {project?.name ? (
          <div className={styles.project_details}>
            <Container customClass="column">
              {message && <Message type={type} msg={message} />}
              <div className={styles.details_container}>
                <h1>Projeto: {project.name}</h1>
                <button className={styles.btn} onClick={() => setShowProjectForm(!showProjectForm)}>
                  {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                </button>
                {!showProjectForm ? (
                  <div className={styles.project_info}>
                    <p><span>Categoria:</span> {project.category?.name}</p>
                    <p><span>Total de Orçamento:</span> R${project.budget}</p>
                    <p><span>Total Utilizado:</span> R${project.cost}</p>
                  </div>
                ) : (
                  <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
                )}
              </div>

              <div className={styles.service_form_container}>
                <h2>Adicionar um serviço:</h2>
                <button className={styles.btn} onClick={() => setShowServiceForm(!showServiceForm)}>
                  {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                </button>
                {showServiceForm && (
                  <ServiceForm handleSubmit={createService} btnText="Adicionar Serviço" projectData={project} />
                )}
              </div>

              <h2>Serviços</h2>
              <Container customClass="start">
                {services.length > 0 && 
                  services.map((service) => (
                    <ServiceCard
                      id={service.id}
                      name={service.name}
                      cost={service.cost}
                      description={service.description}
                      key={service.id}
                      handleRemove={removeService}
                    />
                  ))
                }
                {services.lenght === 0 && <p>Não há serviços cadastrados.</p>}
              </Container>
            </Container>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  )
}

export default Project
