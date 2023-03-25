import { Eye, Plus } from "phosphor-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../../../components/header/Index";
import { ConfirmModal } from "../confirm_modal/Index";
import style from "./styles.module.css";

export function Main() {
    const [confirmModalVisible, setConfirmgModalVisible] = useState(false);
    const locationData = useLocation()?.state;

    return (
        <div className={style.container}>
            <Header />

            <h2>Atribuir cargo a {locationData}</h2>

            <div className={style.groups_box}>
                <div className={style.row}>
                    <h4>Escolha um cargo para atribuir ao {locationData}</h4>
                </div>
                <br />

                <div className={style.groups_container}>
                    <div className={style.item}>
                        <button onClick={() => setConfirmgModalVisible(true)}>
                            Adiministrador
                        </button>
                    </div>
                    <div className={style.item}>
                        <button onClick={() => setConfirmgModalVisible(true)}>
                            Tesoreiro
                        </button>
                    </div>
                </div>
            </div>

            {confirmModalVisible && (
                <ConfirmModal
                    data={locationData}
                    clsoe={() => setConfirmgModalVisible(false)}
                />
            )}
        </div>
    );
}
