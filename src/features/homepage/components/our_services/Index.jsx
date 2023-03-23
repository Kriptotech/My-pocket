import style from "./styles.module.css";
import {
    ArrowCircleRight,
    Bank,
    Browsers,
    Buildings,
    Coins,
    DesktopTower,
    Cpu,
} from "phosphor-react";

export function OurServices() {
    return (
        <div className={style.main_container}>
            <div className={style.header}>
                <span>NOSSOS SERVIÇOS</span>
                <h1>
                    O Que <span>Oferecemos</span>
                </h1>
                <p>
                    Alto grau de sofisticação de seus investimentos, acesso a
                    fundos exclusivos e resiliência necessária frente a
                    volatilidade do mercado. Algoritmo que monitora até 13.000
                    combinações possíveis, para montar a carteira personalizada
                    para você.
                </p>
            </div>

            <div className={style.container}>
                <div className={style.box}>
                    <span>
                        <Coins weight="duotone" size={32} />
                    </span>
                    <h3>Liberdade Financeira</h3>
                    <p>
                        Uma carteira diversificada tem chances maiores e mais
                        probabilidade de alcançar objetivos.
                    </p>
                    <a href="/about">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <span>
                        <Buildings weight="duotone" size={32} />
                    </span>
                    <h3>Consultoria de Negocios</h3>
                    <p>
                        Alto grau de sofisticação de seus investimentos, acesso
                        a fundos exclusivos e resiliência necessária frente a
                        volatilidade do mercado.
                    </p>
                    <a href="/about">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <span>
                        <Browsers weight="duotone" size={32} />
                    </span>
                    <h3>Criação de sistemas de gestão</h3>
                    <p>
                        Oferecemos serviços de criação de sistemas de gestão,
                        criação de websites, Hospedagem de websites e criação de
                        dominios.
                    </p>
                    <a href="/about">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <span>
                        <Bank weight="duotone" size={32} />
                    </span>
                    <h3>Administração de Investimentos</h3>
                    <p>
                        Monitoramos o mercado, fazemos o rebalanceamento
                        periódico da sua carteira e você acompanha tudo pela
                        plataforma, enquanto faz o que ninguém pode fazer por
                        você: aproveitar a vida.
                    </p>
                    <a href="/about">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <span>
                        <Cpu weight="duotone" size={32} />
                    </span>
                    <h3>Tecnologia de Ponta e Especialistas de Mercado</h3>
                    <p>
                        Nosso algoritmo faz cálculos humanamente impossíveis
                        para otimizar sua carteira. As análises de mercado,
                        feitas pelos nossos especialistas, completam este dueto
                        virtuoso. O app é intuitivo e prático, você acompanha
                        tudo em tempo real.
                    </p>
                    <a href="/about">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
                <div className={style.box}>
                    <span>
                        <DesktopTower weight="duotone" size={32} />
                    </span>
                    <h3>Tecnologia</h3>
                    <p>
                        Oferecemos uma grande variedade serviços que irão
                        ajuda-lo a impulsionar o seu negocio com as melhores
                        tecnologias do mercado.
                    </p>
                    <a href="/about">
                        Saiba Mais <ArrowCircleRight />
                    </a>
                </div>
            </div>
        </div>
    );
}
