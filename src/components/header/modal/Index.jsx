import { SignOut, UserSquare, XCircle } from "phosphor-react";
import { useState } from "react";

import style from "./styles.module.css";

export function MenuModal() {
    const [profileDropped, setProfileDropped] = useState(false);

    return !profileDropped ? (
        <div className={style.modal}>
            <span onClick={() => setProfileDropped(true)}>
                <UserSquare
                    color="rgb(116, 96, 238)"
                    weight="duotone"
                    size={20}
                />{" "}
                Perfil
            </span>
            <a href="#">
                <SignOut color="rgb(116, 96, 238)" weight="duotone" size={20} />{" "}
                Sair
            </a>
        </div>
    ) : (
        <div className={style.profile}>
            <div className={style.box}>
                <h2>
                    Alterar dados{" "}
                    <button onClick={() => setProfileDropped(false)}>
                        <XCircle size={25} color="#555" weight="duotone" />
                    </button>
                </h2>

                <div className={style.inputs_container}>
                    <div className={style.input_box}>
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                    </div>
                    <div className={style.input_box}>
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>
                    <div className={style.input_box}>
                        <label htmlFor="">Telefone</label>
                        <input type="text" />
                    </div>
                    <div className={style.input_box}>
                        <label htmlFor="">Senha</label>
                        <input type="text" />
                    </div>
                    <div className={style.input_box}>
                        <label htmlFor="">Endereço</label>
                        <input type="text" />
                    </div>
                </div>

                <div className={style.button}>
                    <button>SALVAR ALTERAÇÕES</button>
                </div>
            </div>
        </div>
    );
}
