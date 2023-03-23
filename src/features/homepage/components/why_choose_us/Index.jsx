import style from "./styles.module.css";
import { ArrowCircleRight } from "phosphor-react";

export function WhyChooseUs() {
    return (
        <div className={style.container}>
            <div className={style.left}></div>

            <div className={style.right}>
                <div data-aos="fade-left">
                    <span>FLOATTER INVESTIMENT</span>
                    <h2>Vantagens Da Plataforma</h2>
                    <p>Levantar Dinheiro, Flexivel e Simples.</p>

                    <h3>Pacotes & Valor</h3>
                    <p>
                        Pacote mínimo de 20mt "vinte meticais", comece a
                        investir com investimentos mínimos no valor certo que
                        confere ao teu bolso. Uma plataforma de fácil acesso e
                        simples de usar.
                    </p>

                    <h3>Investir & Bónus</h3>
                    <p>
                        Não há restrições na plataforma em relação ao número de
                        Pacotes a Investir que podem ser pacotes em simultâneo.
                        Você pode comprar vários pacotes ao mesmo tempo e
                        continuar negociando e ganhar bónus diariamente.
                    </p>

                    <h3>Ganhos Passivos</h3>
                    <p>
                        Na Floatter os Investidores não precisam trabalhar para
                        obter os ganhos passivos os bónus, desde que tenha o
                        pacote activo e começa a ganha os seus lucros diários.
                    </p>
                    <a href="/services">
                        Descubra mais{" "}
                        <ArrowCircleRight
                            color="white"
                            size={20}
                            weight="fill"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
