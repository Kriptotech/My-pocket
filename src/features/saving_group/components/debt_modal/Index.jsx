import { XCircle } from "phosphor-react";

import style from "./styles.module.css";

export function MakeDebtModal({ clsoe }) {
    return (
        <div className={style.profile}>
            <div className={style.box}>
                <h2>
                    Dever{" "}
                    <button onClick={() => clsoe()}>
                        <XCircle size={25} color="#555" weight="duotone" />
                    </button>
                </h2>

                <div className={style.inputs_container}>
                    <div className={style.input_box}>
                        <label htmlFor="">Dever</label>
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
