import { useState } from 'react';
import styles from './About.module.scss';
import { useTranslation } from "react-i18next";

function About() {

    const { t } = useTranslation();
    
    const [bold, setBold] = useState(true);
    let text = t('text'); 

          
    let lesstext = text.substring(0, 400)
    return (
        <div className={`${styles['about-background']} p-2`}>
            <h1 className={styles['title']}>
            {t("title_about")}
            </h1>
            <h2 className={styles['subtitle']}>
            {t("subtitle_about")}
            </h2>
            <div className={`${styles['info-box']}`}>
                <div className="container">
                    <p className={styles['info']}>
                        {bold ? lesstext : text}
                    </p>
                </div>

            </div>
            <div className={styles["btn-box"]}>
                <button type="button" className="btn btn-outline-dark" onClick={() => {
                    setBold(!bold)
                }}>

                    {bold ? "Show More" : "Show Less"}
                </button>

            </div>

        </div>
    )
}

export default About;