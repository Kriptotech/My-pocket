import style from "./styles.module.css";
import { Main } from "../main/Index";
import { Sidebar } from "../../../../components/sidebar/Index";

export function Layout() {
    return (
        <div className={style.container}>
            <Sidebar />
            <Main />
        </div>
    );
}
