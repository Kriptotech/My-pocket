import { useNavigate } from "react-router-dom";
import { Header } from "../../../../components/header/Index";
import style from "./styles.module.css";

export function Main() {
    const navigate = useNavigate();

    return (
        <div className={style.container}>
            <Header />

            <h2>Meus grupos de popança</h2>

            <div className={style.groups_box}>
                <div className={style.groups_container}>
                    <div className={style.item}>
                        <div>
                            <p>Nome: Grupo qualquer</p>
                            <p>Membros: 43</p>
                        </div>
                        <div>
                            <button onClick={() => navigate("/saving_group")}>
                                Entrar
                            </button>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div>
                            <p>Nome: Grupo qualquer</p>
                            <p>Membros: 43</p>
                        </div>
                        <div>
                            <button onClick={() => navigate("/saving_group")}>
                                Entrar
                            </button>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div>
                            <p>Nome: Grupo qualquer</p>
                            <p>Membros: 43</p>
                        </div>
                        <div>
                            <button onClick={() => navigate("/saving_group")}>
                                Entrar
                            </button>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div>
                            <p>Nome: Grupo qualquer</p>
                            <p>Membros: 43</p>
                        </div>
                        <div>
                            <button onClick={() => navigate("/saving_group")}>
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
