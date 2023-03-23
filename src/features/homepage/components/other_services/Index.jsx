import style from "./styles.module.css";
import {
    ChartBar,
    BagSimple,
    Cloud,
    Television,
    File,
    BoundingBox,
} from "phosphor-react";

export function OtherServices() {
    return (
        <div className={style.main_container}>
            <div className={style.header}>
                <span>Outros serviços</span>
                <h1>
                    Auditoria, Fiscalidade, e Contabilidade Segmento de Actuação
                </h1>
                <p>
                    A nossa segmentação está virada as empresas de pequena,
                    média e grande dimensão do sector privado nos vários ramos
                    de actividade económica e as organizações ou associações sem
                    fins lucrativos com domicílio no território nacional ou
                    estrangeiro.
                </p>
            </div>

            <div className={style.container}>
                <div className={style.box}>
                    <span>
                        <ChartBar color="#4298ef" size={30} weight="duotone" />
                    </span>
                    <h2>Consultoria</h2>
                    <p>
                        "Registo e estabelecimento de novas entidades; plano de
                        negócios, planos estratégicos e análise de
                        investimentos, apoio à gestão de insolvências e
                        liquidações e manutenção dos registos administrativos"
                    </p>
                </div>
                <div className={style.box}>
                    <span>
                        <BagSimple color="#4298ef" size={30} weight="duotone" />
                    </span>
                    <h2>Contabiliade</h2>
                    <p>
                        Assistência contabilística e preparação de demonstrações
                        financeiras de acordo com as normas nacionais e Normas
                        Internacionais de Relato Financeiro NIRF´s.
                    </p>
                </div>
                <div className={style.box}>
                    <span>
                        <Cloud color="#4298ef" size={30} weight="duotone" />
                    </span>
                    <h2>Gestão de Negocios</h2>
                    <p>
                        Cálculo, apuramento, preenchimento de modelos fiscais e
                        canalização de ISPC, IVA, IRPS, IRPC, outros impostos e
                        taxas, elaboração da declaração anual de informação
                        contabilística e fiscal a serem apresentadas às
                        entidades oficiais de acordo com a legislação em vigor.
                    </p>
                </div>
                <div className={style.box}>
                    <span>
                        <BoundingBox
                            color="#4298ef"
                            size={30}
                            weight="duotone"
                        />
                    </span>
                    <h2>Fiscalidade</h2>
                    <p>
                        Cálculo, apuramento, preenchimento de modelos fiscais e
                        canalização de ISPC, IVA, IRPS, IRPC, outros impostos e
                        taxas, elaboração da declaração anual de informação
                        contabilística e fiscal a serem apresentadas às
                        entidades oficiais de acordo com a legislação em vigor.
                    </p>
                </div>
                <div className={style.box}>
                    <span>
                        <Television
                            color="#4298ef"
                            size={30}
                            weight="duotone"
                        />
                    </span>
                    <h2>Treinamento</h2>
                    <p>
                        Contabilidade Financeira, Fiscalidade, Normas
                        Internacionais de Auditoria e NIRF´s – Normas
                        Internacionais de Relato Financeiro.
                    </p>
                </div>
                <div className={style.box}>
                    <span>
                        <File color="#4298ef" size={30} weight="duotone" />
                    </span>
                    <h2>Auditoria</h2>
                    <p>
                        Auditorias independentes de acordo com as Normas
                        Internacionais de Auditoria, auditoria de sistemas de
                        controlo interno, auditoria de procedimentos para
                        aquisição de bens e serviços, avaliação de riscos
                    </p>
                </div>
            </div>
        </div>
    );
}
