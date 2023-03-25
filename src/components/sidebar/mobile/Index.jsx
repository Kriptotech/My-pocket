import { useContext, useState } from "react";
import { appContext } from "../../../context/Index";
import style from "./styles.module.css";
import { BookBookmark, UsersThree, XCircle } from "phosphor-react";

export function MobileSidebar() {
    const { isSideBarVisible, setIsSideBarVisible } = useContext(appContext);

    return (
        <aside className={isSideBarVisible ? style.aside : style.not_visible}>
            <div className={style.box}>
                <div className={style.logo_box}>
                    <a href="/" className={style.logo}>
                        <BookBookmark
                            size={40}
                            color="rgb(184, 199, 206)"
                            weight="fill"
                        />
                        <div>
                            <span>Sistema</span>
                            <span>My Pocket</span>
                        </div>
                    </a>
                    <button onClick={() => setIsSideBarVisible(false)}>
                        <XCircle
                            size={40}
                            color="rgb(184, 199, 206)"
                            weight="fill"
                        />
                    </button>
                </div>

                <div className={style.area}>
                    <span>MENU NAVEGAÇÃO</span>
                </div>

                <div className={style.links}>
                    <a href="/saving_groups">
                        <UsersThree
                            size={20}
                            color="rgb(184, 199, 206)"
                            weight="fill"
                        />{" "}
                        Grupos de popança
                    </a>
                    <a href="/my_saving_groups">
                        <UsersThree
                            size={20}
                            color="rgb(184, 199, 206)"
                            weight="fill"
                        />{" "}
                        Meus grupos de popança
                    </a>
                    <a href="/create_saving_group">
                        <UsersThree
                            size={20}
                            color="rgb(184, 199, 206)"
                            weight="fill"
                        />{" "}
                        Criar grupo de popança
                    </a>
                </div>
            </div>
        </aside>
    );
}
