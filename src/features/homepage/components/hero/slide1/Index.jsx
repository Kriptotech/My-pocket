import style from "./styles.module.css";

export function SlideOne() {
    return (
        <div className={style.container}>
            <div data-aos="fade-down" className={style.box}>
                <span>Floatter Investiment!</span>
                <h1>
                    Contactando a Floatter tens “o melhor negócio para uma vida
                    melhor”
                </h1>
                <p>
                    No entanto, nosso objetivo é aconselhar e oferecer soluções
                    para todas as necessidades de serviços financeiros de nossos
                    clientes.
                </p>

                <div>
                    <a href="/contact">Contactar</a>
                    <a href="/about">Floatter</a>
                </div>
            </div>
        </div>
    );
}
