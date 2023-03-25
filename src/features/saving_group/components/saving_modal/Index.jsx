import { XCircle } from "phosphor-react";
import { useState } from "react";

import style from "./styles.module.css";

export function MakeSavingModal({ clsoe }) {
    const [debting, setDebting] = useState("no");

    const handleChange = (event) => {
        setDebting(event.target.value);
    };

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

                    <div className={style.input_box_radio}>
                        <label htmlFor="">Vai dever?</label>

                        <label htmlFor="1">Sim</label>
                        <input
                            type="radio"
                            id="1"
                            name="radio"
                            value="yes"
                            checked={debting === "yes"}
                            onChange={handleChange}
                        />

                        <label htmlFor="2">Não</label>
                        <input
                            type="radio"
                            id="2"
                            name="radio"
                            value="no"
                            checked={debting === "no"}
                            onChange={handleChange}
                        />
                    </div>

                    {debting === "yes" && (
                        <div className={style.input_box}>
                            <label htmlFor="">Valor a dever</label>
                            <input type="text" />
                        </div>
                    )}

                    <div className={style.input_box}>
                        <label htmlFor="">Numero Mpesa</label>
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
