import { XCircle } from "phosphor-react";

import style from "./styles.module.css";

export function MakeSavingModal({ clsoe }) {
    return (
        <div className={style.profile}>
            <div className={style.box}>
                <h2>
                    Fazer Poupança{" "}
                    <button onClick={() => clsoe()}>
                        <XCircle size={25} color="#555" weight="duotone" />
                    </button>
                </h2>

                <div className={style.inputs_container}>
                    <div className={style.input_box}>
                        <label htmlFor="">Poupar</label>
                        <input type="text" />
                    </div>
                    <div className={style.input_box}>
                        <label htmlFor="">Fundo</label>
                        <input type="text" />
                    </div>
                </div>

                <div className={style.button}>
                    <button>CONCLUIR</button>
                </div>
            </div>
        </div>
    );
}
