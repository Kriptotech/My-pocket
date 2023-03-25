import { XCircle } from "phosphor-react";
import { useState } from "react";

import style from "./styles.module.css";

export function ConfirmModal({ clsoe, data }) {
    const [debting, setDebting] = useState("no");

    const handleChange = (event) => {
        setDebting(event.target.value);
    };

    return (
        <div className={style.main}>
            <div className={style.box}>
                <h2>
                    Confirme por favor{" "}
                    <button onClick={() => clsoe()}>
                        <XCircle size={25} color="#555" weight="duotone" />
                    </button>
                </h2>
                <br />

                <div className={style.button}>
                    <span>
                        Tem certeza que deseja atribuir esse cargo ao {data}?
                    </span>
                    <button>CONCLUIR</button>
                </div>
            </div>
        </div>
    );
}
