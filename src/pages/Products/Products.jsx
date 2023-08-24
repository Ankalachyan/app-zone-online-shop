import styles from "./Products.module.scss";
import ProdData from "../../Jsons/All.json";
import { Link, useParams } from "react-router-dom";
import Cart from "../../assets/icons/faIcons";
import Swal from "sweetalert2";


function Products() {
    const paramsId = useParams();
    let filtredItems = ProdData;

    if (paramsId.id !== "main") {
        filtredItems = ProdData.filter((item) => {
            return item.category === paramsId.id;
        });
    }
    const ClickCart = (id)=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Added To Your Cart",
            showConfirmButton: false,
            timer: 1500
          })

          localStorage.setItem('id',id);
          localStorage.setItem('id',id);
         
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={styles["phones"]}>
                        {filtredItems.map((item) => {
                            return (
                                <div
                                    key={item.id + "phones_page"}
                                    className={styles["product_card"]}
                                >
                                    <div className={styles["product_image"]}>
                                        <img
                                            src={item.img}
                                            className={`${styles["image-card"]}  `}
                                        />
                                    </div>
                                    <div className={styles["product_title"]}>
                                        <p>
                                            <b>{item.name}</b>
                                        </p>
                                    </div>
                                    <div className="product_description">
                                        <p className="form-text">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className={styles["product_price"]}>
                                        <p className={styles["price_title"]}>
                                            Գինը
                                        </p>
                                        <p className={styles["price"]}>
                                            {item.price} ֏
                                        </p>
                                    </div>
                                    {item.newprice === undefined ? "" :
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
                                        </div>
                                    }

                                    <div className="d-flex">
                                        
                                            <button
                                            onClick={
                                                ()=>{
                                                    ClickCart(item.id)   
                                                }
                                            }
                                                type="button"
                                                className="btn mg-4 btn-outline-dark"
                                            >
                                                Գնել Հիմա
                                            </button>
                                        

                                        <Link to={item.id}>
                                            <Cart />
                                        </Link>

                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
