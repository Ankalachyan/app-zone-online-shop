import styles from "./ProductCart.module.scss"
import JsonObjects from "../../Jsons/All.json"

function ProductCart() {

    let elementId = localStorage.getItem("id");

    let FilteredProd = JsonObjects.filter(item => {
        return item.id === elementId
    })
    return (
        <>
            <hr />
            <div className={styles["big-box"]}>
                {
                    FilteredProd.map(item => {
                        return (
                            <>
                                <div className={styles['left-column']}>
                                    <img src={item.img} alt="" />
                                </div>

                                <div className={styles['right-column']}>
                                    <div className={styles["product-description"]}>
                                        <h1>{item.name}</h1>
                                        <p>{item.description}</p>
                                    </div>

                                    <div
                                        className={styles["product_price"]}
                                    >
                                        <p
                                            className={styles["price_name"]}>
                                            Գինը
                                        </p>
                                        <p
                                            className={styles["price"]}>
                                            {item.price} ֏
                                        </p>
                                    </div>
                                    {item.category === "Sale" &&
                                        <div
                                            className={styles["product_price"]}
                                        >
                                            <p
                                                className={styles["price_name"]}>
                                                Նոր Գին
                                            </p>
                                            <p
                                                className={styles["prices"]}>
                                                {item.newprice} ֏
                                            </p>
                                        </div>}


                                </div>
                            </>
                        )
                    })
                }


            </div>
            <hr />

        </>
    )
}
export default ProductCart