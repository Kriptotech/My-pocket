import style from "./styles.module.css";
import { Eye } from "phosphor-react";

export function Item() {
    let name = ` ${
        1 +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100)
    }`;

    return (
        <div className={style.item}>
            <div>
                <p>Registro: {name}</p>
            </div>
            <div>
                <button>
                    <Eye color="rgb(116, 96, 238)" weight="duotone" size={20} />
                </button>
            </div>
        </div>
    );
}
