import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import React from "react";

const Home = () => {
  return (


    <div className="body text-white p-2">
      <Helmet title="Inicio | Dr. Edmilson Fernandes"/>
      <Navbar />

      <main>

        <section className="jumbotron">
          <div className=" row p-4 d-flex align-items-center">
            <div className="col-md-6 col-sm-4 d-flex justify-content-center">
              <Image className="img-fluid rounded-circle perfil" src="/perfil.webp" width="400" height="400" alt="perfil" />
            </div>
            <div className="col-md-6 col-sm-8">
              <h2>Experiência em atendimento em ansiedade e inteligência emocional.</h2>
              <p>Psicologo, formando em 2019, experiência em tratamentos para ansiedade, insegurança e depressão.
                Participou de grupos de pesquisas com produções bibliográficas.
              </p>
            </div>
          </div>
        </section>

        <Main />

        <script async src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossOrigin="anonymous"></script>
        <script async src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></script>


        <Footer />
      </main>
    </div>
  );
};

export default Home;