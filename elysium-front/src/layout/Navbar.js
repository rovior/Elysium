import React from 'react-router-dom';

import styles from './Navbar.module.css';

import logo from './src/img/icone192.png"'

function Navbar({ navega }) {
  return (
    <nav className={`${styles.navbar} ${styles.navigation}`}>
      <div className="container-fluid">


        {/* Botão Hamburguer */}
        <button
          className="navbar-toggler btn-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavbar"
          aria-controls="menuNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <a className="navbar-brand ms-3 text-light fw-bold" href="#">
          Elysium
        </a>

        <div className="collapse navbar-collapse" id="menuNavbar">
          <ul className={`navbar-nav ms-auto ${styles.navLinks}`}>
            <li className="nav-item">
              <button className={styles.navButton} onClick={() => navega('home')}>
                <i className="fa-solid fa-home"></i> Home
              </button>
            </li>
            <li className="nav-item">
              <button className={styles.navButton} onClick={() => navega('services')}>
                <i className="fa-solid fa-concierge-bell"></i> Serviços
              </button>
            </li>
            <li className="nav-item">
              <button className={styles.navButton} onClick={() => navega('profiles')}>
                <i className="fa-solid fa-file"></i> Profissionais
              </button>
            </li>
            <li className="nav-item">
              <button className={styles.navButton} onClick={() => navega('reviews')}>
                <i className="fa-solid fa-star"></i> Avaliações
              </button>
            </li>
          </ul>

          <a href="tel:+5548988900001" className="btn btn-light me-3">
            <i className="fa-solid fa-phone"></i> Contato
          </a>

          <a href="comfortaid_user_env.html" className="btn btn-primary" id="logout">
            <i className="fa-solid fa-sign-in-alt"></i> Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
