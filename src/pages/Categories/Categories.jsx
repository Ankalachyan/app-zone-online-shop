import { Link } from "react-router-dom";
import jsonCategoties from "../../Jsons/categories.json";
import styles from "./Categories.module.scss";
import { useTranslation } from "react-i18next";

function Categories() {

    const { t } = useTranslation();

    return (

        <div className={styles["phone-background"]}>
            <div className="container-sm">
                 <h1 className={styles["title"]}>{t("title_product")}</h1>
            <h2 className={styles["subtitle"]}>{t("subtitle_product")}  </h2>
            <div className={styles['prod-big-box']}>
                {jsonCategoties.map((item) => {
                    return (
                        <Link to={`/products/${item.categoriName}`}>
                            <div className={`card-body ${styles["card-background"]}`}>
                                <h5 className={styles["prod-title"]}>
                                    {item.categoriName}
                                </h5>
                            </div>
                        </Link>


                    );
                })}
            </div>
            </div>
           
        </div>
    );
}

export default Categories;
