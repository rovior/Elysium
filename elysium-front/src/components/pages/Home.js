import styles from './Home.module.css'
import savings from '../../img/undraw_joyride_mb833.png'
import LinkButton from '../layout/LinkButton'
import Carousel from '../home/Carousel';
import Promocoes from '../home/Promocoes';
import Recursos from '../home/Recursos';

function Home() {

    const navegarPara = (rota) => {
        window.location.href = `#${rota}`;
    };

    return (
        <section className={styles.container}>
            <h1>
                Bem-vindo a <span>Elysium</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>

            <LinkButton to="/newproject" text="Marca Horario" />
            <img src={savings} alt="Costs" />

            <div>
                <p>
                    Descubra o verdadeiro significado de <strong>conforto</strong>. Um aplicativo inovador que aproxima você de experiências relaxantes e revigorantes no conforto da sua casa. Com o Elysium, clientes que buscam massagens terapêuticas ou estéticas podem se conectar de forma prática e segura com profissionais qualificados que oferecem atendimento domiciliar.

                    <br /><br />
                    Relaxe, alivie tensões musculares e cuide dFo seu <strong>bem-estar</strong> com apenas alguns toques. Agendar sua próxima sessão nunca foi tão simples.
                </p>
            </div>

            <h1>Serviços</h1>
            <Carousel />

            <h1>Promoções</h1>
            <Promocoes />

            <h1>Recursos do Aplicativo</h1>
            <Recursos />


            {/* Chamada para ação */}
            <div className="text-center">
            <h3 className="text-dark fs-8">Liberte-se do estresse e encontre a paz com Elysium.</h3>
                <p>Permita-se respirar fundo, silenciar o caos e reconectar-se com<br />
                    o que realmente importa. Com Elysium, a tranquilidade não é um luxo<br />
                    é uma escolha. Faça essa escolha agora.</p>
                <button
                    type="button"
                    className="btn btn-primary m-3"
                    onClick={() => navegarPara('services')}
                >
                    Serviços
                </button>
                <button
                    type="button"
                    className="btn btn-secondary m-3"
                    onClick={() => navegarPara('register')}
                >
                    Cadastro
                </button>
            </div>

        </section>
    )
}

export default Home
