import { useState } from "react";
import { Header } from "../../../../components/header/Index";
import { Item } from "../item/Index";
import style from "./styles.module.css";

export function Main() {
    return (
        <div className={style.container}>
            <Header />

            <h2>Pedidos de entrada no grupo</h2>

            <div className={style.groups_box}>
                <div className={style.row}>
                    <h4>Pedidos: 47</h4>
                </div>
                <br />

                <div className={style.groups_container}>
                    {[1, 1, 1, 1, 1, 1, 1]?.map((v, i) => (
                        <Item key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
