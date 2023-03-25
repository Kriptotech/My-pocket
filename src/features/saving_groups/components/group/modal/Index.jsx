import { XCircle } from "phosphor-react";

import style from "./styles.module.css";

export function ConfirmModal({ clsoe }) {
    return (
        <div className={style.profile}>
            <div className={style.box}>
                <h2>
                    Confirme por favor{" "}
                    <button onClick={() => clsoe()}>
                        <XCircle size={25} color="#555" weight="duotone" />
                    </button>
                </h2>

                <div className={style.button}>
                    <span>
                        Tem certeza que deseja particpar do grupo "Grupo
                        Qualquer"?
                    </span>
                    <button>Sim</button>
                </div>
            </div>
        </div>
    );
}
