import style from "./styles.module.css";
import ImgOne from "./01.jpg";
import ImgTwo from "./02.jpg";
import ImgThree from "./03.jpg";
import ImgFour from "./04.jpg";

export function OurTeam() {
    return (
        <div className={style.main_container}>
            <div className={style.header}>
                <span>TEAM</span>
                <h1>
                    Meet Our <span>Experts</span>
                </h1>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                </p>
            </div>

            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgOne} alt="" />
                        <div>
                            Tonu Pinto <span>CEO & Founder</span>
                        </div>
                    </div>
                </div>
                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgTwo} alt="" />
                        <div>
                            Tonu Pinto <span>CEO & Founder</span>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgThree} alt="" />
                        <div>
                            Tonu Pinto <span>CEO & Founder</span>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.box_img}>
                        <img src={ImgFour} alt="" />
                        <div>
                            Tonu Pinto <span>CEO & Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
