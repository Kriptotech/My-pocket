import style from "./styles.module.css";
import { Check, X } from "phosphor-react";

export function Item() {
    let name = `hahs sajnsa ${
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
                <p>Nome: {name}</p>
            </div>
            <div>
                <button>
                    <Check
                        color="rgb(116, 96, 238)"
                        weight="duotone"
                        size={20}
                    />
                </button>
                <button>
                    <X color="rgb(116, 96, 238)" weight="duotone" size={20} />
                </button>
            </div>
        </div>
    );
}
