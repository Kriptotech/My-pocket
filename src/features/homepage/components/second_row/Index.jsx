import style from "./styles.module.css";

export function SecondRow() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h2>500</h2>
                <p>+ Projectos feitos</p>
            </div>
            <div className={style.box}>
                <h2>250</h2>
                <p>+ Clientes satisfeitos</p>
            </div>

            <div className={style.box}>
                <h2>120</h2>
                <p>+ Experts</p>
            </div>

            <div className={style.box}>
                <h2>50</h2>
                <p>+ Premios</p>
            </div>
        </div>
    );
}
