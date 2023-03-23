import { CaretDown, CaretUp, List, XCircle } from "phosphor-react";

import style from "./styles.module.css";
import IMG from "./image.png";
import { useContext, useState } from "react";
import { appContext } from "../../context/Index";
import { MenuModal } from "./modal/Index";

export function Header() {
    const { isSideBarVisible, setIsSideBarVisible } = useContext(appContext);
    const [dropped, setDropped] = useState(false);

    return (
        <header className={style.header}>
            <button
                className={style.menu_button}
                onClick={() => setIsSideBarVisible(!isSideBarVisible)}
            >
                {isSideBarVisible ? (
                    <XCircle color="#fff" size={24} />
                ) : (
                    <List color="#fff" size={24} />
                )}
            </button>

            <div className={style.info} onClick={() => setDropped(!dropped)}>
                <img src={IMG} alt="" />

                <div className={style.content}>
                    <span>Eufrasio Joao</span>
                    <span>Administrador</span>
                </div>

                {!dropped ? (
                    <CaretDown color="#666" size={20} />
                ) : (
                    <CaretUp color="#666" size={20} />
                )}
            </div>

            {dropped && <MenuModal />}
        </header>
    );
}
