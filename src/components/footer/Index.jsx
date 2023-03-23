import style from "./style.module.css";
import Logo from "./logo.png";
import {
    Anchor,
    Clock,
    Envelope,
    FacebookLogo,
    InstagramLogo,
    MapPin,
    Phone,
    TelegramLogo,
    WhatsappLogo,
} from "phosphor-react";

export function Footer() {
    return (
        <div className={style.container}>
            <div className={style.box} data-aos="fade-up">
                <div className={style.item}>
                    <img src={Logo} width={150} alt="" />
                    <br />
                    <p>
                        Oferecemos um gerenciamento abrangente de portfólio,
                        montamos uma carteira ideal para si, junto a outras
                        contas de investimento e gerenciamos um portfólio
                        projectado para atender às suas necessidades.
                    </p>
                    <a href="mailto:email: info@ifloatter.com">
                        <Envelope size={15} weight="fill" color="#6bb5ff" />{" "}
                        email: info@ifloatter.com
                    </a>
                </div>

                <div className={style.item}>
                    <h2>Atalhos Rapidos</h2>

                    <a href="/about">
                        <Anchor size={15} weight="fill" color="#6bb5ff" /> Sobre
                    </a>
                    <a href="/">
                        <Anchor size={15} weight="fill" color="#6bb5ff" /> Home
                    </a>
                    <a>
                        <Anchor size={15} weight="fill" color="#6bb5ff" /> FAQ'S
                    </a>
                    <a href="/services">
                        <Anchor size={15} weight="fill" color="#6bb5ff" />{" "}
                        Serviços
                    </a>
                </div>

                <div className={style.item}>
                    <h2>Redes sociais</h2>

                    <a href="https://api.whatsapp.com/send?1=pt_br&phone=258842201091">
                        <WhatsappLogo size={15} weight="fill" color="#6bb5ff" />{" "}
                        WhatsApp
                    </a>
                    <a>
                        <FacebookLogo size={15} weight="fill" color="#6bb5ff" />{" "}
                        Facebook
                    </a>
                    <a>
                        <TelegramLogo size={15} weight="fill" color="#6bb5ff" />{" "}
                        Telegram
                    </a>
                    <a>
                        <InstagramLogo
                            size={15}
                            weight="fill"
                            color="#6bb5ff"
                        />{" "}
                        Instagram
                    </a>
                </div>
            </div>

            <div className={style.rights}>
                <p>Av. do Trabalho, Rua da Unidade 5003, Grande Bazar</p>
                <p>Aberto: Segunda- Sabado {"(7h-19h)"}</p>
            </div>
            <div className={style.rights}>
                <p>
                    © Copyright 2023 <span>Floatter Investiment</span> All
                    Rights Reserved.
                </p>
                <p>
                    Developed & Powered by{" "}
                    <a target="_blank" href="https://kriptotech.netlify.app">
                        Kriptotech
                    </a>
                </p>
            </div>
        </div>
    );
}
