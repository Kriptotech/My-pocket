import { BookBookmark, UsersThree } from "phosphor-react";
import { useContext } from "react";
import { appContext } from "../../../context/Index";
import style from "./styles.module.css";

export function DesktopSidebar() {
    const { isSideBarVisible } = useContext(appContext);

    return (
        <aside className={isSideBarVisible ? style.aside : style.not_visible}>
            <div className={style.box}>
                <div className={style.logo}>
                    <BookBookmark
                        size={44}
                        color="rgb(184, 199, 206)"
                        weight="fill"
                    />
                    <div>
                        <span>Sistema</span>
                        <span>My Pocket</span>
                    </div>
                </div>

                <div className={style.area}>
                    <span>MENU NAVEGAÇÃO</span>
                </div>

                <div className={style.links}>
                    <a href="#">
                        <UsersThree
                            size={20}
                            color="rgb(184, 199, 206)"
                            weight="fill"
                        />{" "}
                        Grupos
                    </a>
                    <a href="/create_saving_group">
                        <UsersThree
                            size={20}
                            color="rgb(184, 199, 206)"
                            weight="fill"
                        />{" "}
                        Criar grupo de popança
                    </a>
                    <a href="#">
                        <UsersThree
                            size={20}
                            color="rgb(184, 199, 206)"
                            weight="fill"
                        />{" "}
                        Cadastros
                    </a>
                </div>
            </div>
        </aside>
    );
}
