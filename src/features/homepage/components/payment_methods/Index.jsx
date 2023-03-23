import style from "./styles.module.css";
import ImgOne from "./01.jpg";
import ImgTwo from "./02.jpg";
import ImgThree from "./03.jpg";
import ImgFour from "./04.jpg";
import ImgFive from "./05.jpg";
import ImgSix from "./06.jpg";

export function PaymentsMethods() {
    return (
        <div className={style.main_container}>
            <div className={style.header}>
                <span>CARTEIRAS MOVEIS & BANCOS</span>
                <h1>
                    Metodos De <span>Pagamentos</span>
                </h1>
                <p>
                    Levantamentos e Depósitos inteligentes num só click via
                    M-pesa, desde várias carteiras moveis e bancarias existentes
                    no nosso pais, integramos com o melhor do que podes ter ao
                    teu alcance e melhorar o seu status Financeiro.
                </p>
            </div>

            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgOne} alt="" />
                        <div>
                            Levantamento via: <span>M-Pesa</span>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgTwo} alt="" />
                        <div>
                            Levantamento via: <span>E-mola</span>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgThree} alt="" />
                        <div>
                            Levantamento via: <span>Ponto24</span>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgFour} alt="" />
                        <div>
                            Bancos Nacionais: <span>BIM,BCI, MozaBAnco</span>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgFive} alt="" />
                        <div>
                            Bancos Internacionais:{" "}
                            <span>
                                Standard Bank, NeDBank, Access Bank, UBA.
                            </span>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgSix} alt="" />
                        <div>
                            Carteiras Digitais:{" "}
                            <span>PayPal, BitCoin, Wise</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
