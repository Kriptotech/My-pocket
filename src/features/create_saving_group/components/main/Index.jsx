import { File } from "phosphor-react";
import { Header } from "../../../../components/header/Index";
import style from "./styles.module.css";

export function Main() {
    return (
        <div className={style.container}>
            <Header />

            <h2>Criar grupo de popança</h2>

            <div className={style.form_box}>
                <form>
                    <div className={style.insert}>
                        <span>Inserir registros</span>
                    </div>

                    <div className={style.inputs_container}>
                        <div className={style.input_box}>
                            <label htmlFor="">Label de input</label>
                            <input type="text" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Label de input</label>
                            <input type="text" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Label de input</label>
                            <input type="text" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Label de input</label>
                            <input type="text" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Label de input</label>
                            <input type="text" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Label de input</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className={style.button}>
                        <button>CRIAR GRUPO</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
