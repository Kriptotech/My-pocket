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
                            <label htmlFor="">Nome do grupo</label>
                            <input type="text" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Inicio da poupança</label>
                            <input type="date" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Fim da poupança</label>
                            <input type="date" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Valor minimo a se poupar</label>
                            <input type="number" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Hora que a poupança inicia</label>
                            <input type="text" />
                        </div>
                        <div className={style.input_box}>
                            <label htmlFor="">Periodicidade da poupança </label>
                            <select name="" id="">
                                <option value="">Diaria</option>
                                <option value="">Semanal</option>
                                <option value="">Mensal</option>
                            </select>
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
