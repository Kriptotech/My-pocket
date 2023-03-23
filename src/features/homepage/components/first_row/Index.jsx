import style from "./styles.module.css";

export function FirstRow() {
    return (
        <div className={style.container}>
            <div className={style.container_box}>
                <div className={style.container_content}>
                    <h2>Empresa de Confiança</h2>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                    </p>
                </div>

                <div className={style.container_content}>
                    <h2>Cancelamento a qualquer momento</h2>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                    </p>
                </div>

                <div className={style.container_content}>
                    <h2>Suporte Online</h2>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                    </p>
                </div>
            </div>
        </div>
    );
}
