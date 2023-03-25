import { XCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";

export function ConfirmModal({ clsoe }) {
    const navigate = useNavigate();

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
                    <span>Insira a senha para entrar no grupo</span>
                    <input type="password" />
                    <button onClick={() => navigate("/saving_group")}>
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    );
}
