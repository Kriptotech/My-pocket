import { HouseLine } from "phosphor-react";
import style from "./styles.module.css";

export function Main() {
    return (
        <div className={style.container}>
            <div className={style.box} data-aos="fade-down">
                <h1>
                    <span>4</span>0<span>4</span>
                </h1>
                <p>Oops... Pagina náo encontrada!</p>
                <small>
                    A pagina que estás a procura não esta disponivel ou foi
                    removida.
                </small>
                <a href="/">
                    <HouseLine color="white" size={25} weight="fill" /> Voltar
                </a>
            </div>
        </div>
    );
}
