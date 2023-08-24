import { useTranslation } from "react-i18next";
import styles from "./Home.module.scss";
import SliderSwiper from "./Slider/SliderSwiper";

function Home() {
    const { t } = useTranslation();
    return (
        <>
            <div className={styles["main-home"]}>
                <h1 className={styles["title"]}>{t("title_home")}</h1>
                <h2 className={styles["subtitle"]}>{t("subtitle_home")}</h2>
                <div className="icon-box"></div>
                <SliderSwiper />
            </div>
            
        </>
    );
}

export default Home;
