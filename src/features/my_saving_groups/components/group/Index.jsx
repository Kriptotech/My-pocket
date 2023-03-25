import { useState } from "react";
import { ConfirmModal } from "./modal/Index";
import style from "./styles.module.css";

export function Group() {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className={style.item}>
            <div>
                <p>Nome: Grupo qualquer</p>
                <p>Membros: 43</p>
            </div>
            <div>
                <button onClick={() => setModalOpened(true)}>Entrar</button>
            </div>

            {modalOpened && (
                <ConfirmModal clsoe={() => setModalOpened(false)} />
            )}
        </div>
    );
}
