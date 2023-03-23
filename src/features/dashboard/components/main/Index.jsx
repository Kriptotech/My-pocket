import { File } from "phosphor-react";
import { Header } from "../../../../components/header/Index";
import style from "./styles.module.css";
import { Chart } from "react-google-charts";

export function Main() {
    const data = [
        ["Year", "Visitations", { role: "style" }],
        ["2010", 10, "color: gray"],
        ["2020", 14, "color: #76A7FA"],
        ["2030", 16, "opacity: 0.2"],
        [
            "2040",
            22,
            "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF",
        ],
        [
            "2050",
            28,
            "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2",
        ],
    ];

    return (
        <div className={style.container}>
            <Header />

            <div className={style.first_row}>
                <div className={style.item}>
                    <div>
                        <File size={30} color="#fff" weight="fill" />
                    </div>
                    <div>
                        <span>3</span>
                        <span>Leitores</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div>
                        <File size={30} color="#fff" weight="fill" />
                    </div>
                    <div>
                        <span>3</span>
                        <span>Leitores</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div>
                        <File size={30} color="#fff" weight="fill" />
                    </div>
                    <div>
                        <span>3</span>
                        <span>Leitores</span>
                    </div>
                </div>
                <div className={style.item}>
                    <div>
                        <File size={30} color="#fff" weight="fill" />
                    </div>
                    <div>
                        <span>3</span>
                        <span>Leitores</span>
                    </div>
                </div>
            </div>

            <div className={style.second_row}>
                <div className={style.left}>
                    <Chart
                        width="100%"
                        height="100%"
                        data={data}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart...</div>}
                    />
                </div>
                <div className={style.right}>
                    <Chart
                        chartType="AreaChart"
                        width="100%"
                        height="100%"
                        data={[
                            ["Year", "Sales", "Expenses"],
                            ["2019", 1000, 400],
                            ["2020", 1170, 460],
                            ["2021", 660, 1120],
                            ["2022", 1030, 540],
                        ]}
                        options={{
                            title: "Company Performance",
                            Txis: {
                                title: "Year",
                                titleTextStyle: { color: "#333" },
                            },
                            vAxis: { minValue: 0 },
                            // chartArea: { width: "50%", height: "70%" },
                        }}
                    />
                </div>
            </div>

            <div className={style.last_chart_box}>
                <div className={style.last_chart}>
                    <Chart
                        chartType="ScatterChart"
                        data={[
                            ["Age", "Weight"],
                            [4, 5.5],
                            [8, 12],
                        ]}
                        width="100%"
                        height="100%"
                        legendToggle
                        options={{
                            title: " Performance",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
