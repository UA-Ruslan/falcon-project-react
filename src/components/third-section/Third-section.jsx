import React from "react";
import maiImg from "../../img/thirdSection/analyze_date.webp"
import style from "./third-section.module.scss"
import {AnimationOnScroll} from 'react-animation-on-scroll';

const ThirdSection = () => {
    return (
        <AnimationOnScroll animateIn="animate__fadeIn">
            <div className={style.thirdSectionWrapper}>
                <div className={style.txtWrapper}>
                    <div className={style.titleWrapper}>
                        <p>
                            Collect, analyze, and visualize <br/> occupancy data
                        </p>
                    </div>
                    <div className={style.pWrapper}>
                        <p>
                            Visualize demand with dashboards for curb <br/> utilization and compliance.
                        </p>
                    </div>
                </div>
                <div className={style.imgWrapper}>
                    <img src={maiImg} width="100%" height="100%" alt="maiImg"/>
                </div>
            </div>
        </AnimationOnScroll>
    )
}

export default ThirdSection;