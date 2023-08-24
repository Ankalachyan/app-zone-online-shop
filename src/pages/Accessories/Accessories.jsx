import styles from "./Accessories.module.scss"
import accessoriesJson from "../../Jsons/All.json";
function Accessories() {
    let accesssorieJson = accessoriesJson.filter((item) => {
        return item.category == "Accessories"
    })
    return (
        <>
            <div className={styles["accessories-background"]}>
                <h1 className={styles['title']}>
                    Our Products
                </h1 >
                <h2 className={styles['subtitle']}>
                    Here you can find available accessories in our shop
                </h2>
                <h3 className={styles['name']}>
                    Accessories
                </h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles["phones"]}>
                            {accesssorieJson.map((item) => {
                                return (
                                    <div
                                        key={item.id + "accessories_page"}
                                        className={styles["product_card"]}>
                                        <div className={styles['product_image']}>
                                            <img src={item.img} />
                                        </div>
                                        <div className={styles['product_title']}>
                                            <p> {item.name}</p>
                                        </div>
                                        <div className="product_description">
                                            <p>{item.description}</p>
                                        </div>
                                        <div className={styles["product_price"]}>
                                            <p className={styles["price_title"]}>Գինը</p>
                                            <p className={styles["price"]}>
                                                {item.price} ֏
                                            </p>
                                        </div>
                                        <button type="button" className="btn mg-4 btn-outline-dark">Գնել</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Accessories;