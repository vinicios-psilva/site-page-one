import Link from "next/link";
import Image from "next/image";
import styles from "../styles/styles.css";
import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm m-1">
                <Link href="/" legacyBehavior>
                    <a className="logo">
                        <Image className="logo" src="/logo.png" width="80" height="80"/>
                    </a>
                </Link>
                <div>
                    <h3 className="text-white m-3">Dr. Edmilson Fernandes</h3>
                    <h6 className="text-white m-3">Núcleo de Aprimoramento Humano</h6>
                </div>
                <div className="navbar-collapse justify-content-end" >
                    <ul className="navbar-nav mr-auto flex-row d-flex justify-content-center social">
                        <a className="bi bi-instagram" href="https://www.instagram.com/edmilsonfernandesss/" target="_blank"></a>
                        <a className="bi bi-youtube" href="https://www.youtube.com/channel/UCNEKhL1AURk8IJBieAVuaOQ" target="_blank"></a>
                        <a className="bi bi-linkedin" href="https://www.linkedin.com/in/edmilson-fernandes-da-silva-4357b528a/?originalSubdomain=br" target="_blank"></a>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <button className="btn m-2 button" type="button">
                            <a className="bi bi-whatsapp" style={{ color: "black" }} href="https://api.whatsapp.com/send?phone=5511942428336&text=Ol%C3%A1,%20eu%20estou%20vindo%20do%20seu%20site.%0A%0AQuero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento.%20" target="_blank">
                            </a> Fale pelo WhatsApp
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;