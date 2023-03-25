import { Header } from "../../../../components/header/Index";
import { Group } from "../group/Index";
import style from "./styles.module.css";

export function Main() {
    return (
        <div className={style.container}>
            <Header />

            <h2>Meus grupos de popança</h2>

            <div className={style.groups_box}>
                <div className={style.groups_container}>
                    {[1, 1, 1, 1]?.map((v, i) => {
                        return <Group key={i} />;
                    })}
                </div>
            </div>
        </div>
    );
}
