import { Gear, SignOut, UserSquare } from "phosphor-react";

import style from "./styles.module.css";

export function MenuModal() {
    return (
        <div className={style.modal}>
            <a href="#">
                <Gear color="rgb(116, 96, 238)" weight="duotone" size={20} />{" "}
                Configurações
            </a>
            <a href="#">
                <UserSquare
                    color="rgb(116, 96, 238)"
                    weight="duotone"
                    size={20}
                />{" "}
                Perfil
            </a>
            <a href="#">
                <SignOut color="rgb(116, 96, 238)" weight="duotone" size={20} />{" "}
                Sair
            </a>
        </div>
    );
}
