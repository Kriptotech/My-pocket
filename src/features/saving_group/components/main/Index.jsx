import { useState } from "react";
import { Header } from "../../../../components/header/Index";
import { Member } from "../member/Index";
import { MakeSavingModal } from "../saving_modal/Index";
import style from "./styles.module.css";

export function Main() {
    const [savingModalVisible, setSavingModalVisible] = useState(false);

    return (
        <div className={style.container}>
            <Header />

            <h2>Grupo de popança: Bairro 13</h2>

            <div className={style.groups_box}>
                <div className={style.row}>
                    <h4>Membros: 47</h4>
                    <div>
                        <button onClick={() => setSavingModalVisible(true)}>
                            Poupar
                        </button>

                        <button>Historico</button>
                    </div>
                </div>
                <br />

                <div className={style.groups_container}>
                    {[1, 1, 1, 1]?.map((v, i) => (
                        <Member key={i} />
                    ))}
                </div>
            </div>

            {savingModalVisible && (
                <MakeSavingModal clsoe={() => setSavingModalVisible(false)} />
            )}
        </div>
    );
}
