import Button from "../Props/Buttons"
import styles from "./MainType.module.scss"
import ProductsJson from "../../Jsons/All.json"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function MainTypes() {
    const paramsId = useParams();

    let filteredProduct = ProductsJson.filter(item => {
        return item.id === paramsId.id
    })
    const ClickCart = (id) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Added To Your Cart",
            showConfirmButton: false,
            timer: 1500
        })

        localStorage.setItem('id', id);
        localStorage.setItem('id', id);

    }

    return (
        <>
            <div className="container d-flex my-5">
                {
                    filteredProduct.map((item) => {
                        {
                            return (
                                <>

                                    <div key={item.id + "each_products"} className={styles['left-column']}>
                                        <img src={item.img} alt="" />
                                    </div>

                                    <div className={styles['right-column']}>
                                        <div className={styles["product-description"]}>
                                            <h1>{item.name}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className={styles["product-price"]}>
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
                                                <button className={`${styles['button']} btn btn-outline-dark`}
                                                onClick={
                                                () => {
                                                    ClickCart(item.id)
                                                }
                                            } 
                                                >
                                                    Buy Now
                                                </button>

                                        </div>


                                    </div>
                                
                                </>
            )
                        }
                    })
                }

        </div>
        </>
    )
}

export default MainTypes