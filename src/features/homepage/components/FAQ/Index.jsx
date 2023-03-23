import style from "./styles.module.css";
import { ArrowCircleDown, ArrowCircleRight, Question } from "phosphor-react";
import { useState } from "react";

export function FAQ() {
    const [droppedFirst, setDroppedFirst] = useState(true);
    const [droppedSecond, setDroppedSecond] = useState(false);
    const [droppedThird, setDroppedThird] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.left} data-aos="fade-right">
                <span>FAQ'S</span>
                <h2>
                    Preguntas feitas <span>Frequentemente</span>
                </h2>
                <p>
                    Aqui estão as perguntas feitas regularmente pelos nossos
                    clientes. Caso queira fazer uma pergunta, clique no botão
                    abaixo envie-nos uma pergunta.
                </p>

                <a href="/contact">
                    Faça uma pergunta{" "}
                    <ArrowCircleRight color="white" size={20} weight="fill" />
                </a>
            </div>

            <div className={style.right} data-aos="fade-left">
                <div className={style.row}>
                    <div
                        className={style.row_header}
                        onClick={() => {
                            setDroppedSecond(false);
                            setDroppedThird(false);
                            setDroppedFirst(true);
                        }}
                    >
                        <div>
                            <span>
                                <Question
                                    size={30}
                                    weight="fill"
                                    color="white"
                                />
                            </span>
                            A vossa segmentação está virada as empresas de
                            pequena dimensão?
                        </div>
                        <ArrowCircleDown size={25} weight="fill" color="#555" />
                    </div>
                    {droppedFirst && (
                        <p>
                            A nossa segmentação está virada as empresas de
                            pequena, média e grande dimensão do sector privado.
                        </p>
                    )}
                </div>
                {/* <div className={style.row}>
                    <div
                        className={style.row_header}
                        onClick={() => {
                            setDroppedFirst(false);
                            setDroppedThird(false);
                            setDroppedSecond(true);
                        }}
                    >
                        <div>
                            <span>
                                <Question
                                    size={30}
                                    weight="fill"
                                    color="white"
                                />
                            </span>
                            We denounce with righteous indignation
                        </div>
                        <ArrowCircleDown size={25} weight="fill" color="#555" />
                    </div>
                    {droppedSecond && (
                        <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demoralized by the
                            charms of pleasure of the moment, so blinded by
                            desire.
                        </p>
                    )}
                </div>
                <div className={style.row}>
                    <div
                        className={style.row_header}
                        onClick={() => {
                            setDroppedFirst(false);
                            setDroppedSecond(false);
                            setDroppedThird(true);
                        }}
                    >
                        <div>
                            <span>
                                <Question
                                    size={30}
                                    weight="fill"
                                    color="white"
                                />
                            </span>
                            We denounce with righteous indignation
                        </div>
                        <ArrowCircleDown size={25} weight="fill" color="#555" />
                    </div>
                    {droppedThird && (
                        <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demoralized by the
                            charms of pleasure of the moment, so blinded by
                            desire.
                        </p>
                    )}
                </div> */}
            </div>
        </div>
    );
}
