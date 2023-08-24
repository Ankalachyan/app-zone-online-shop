import { useState } from "react";
import Map from "../Map/Map";
import styles from "./Contact.module.scss";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";


function Contact() {
    const [Name, setName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [city,setCity] = useState("");
    const [states, setStates] = useState("");
    const [zip,setZip] = useState("")

    const [changeName, setChangeName] = useState("");
    const [changeLastName, setChangeLastName] = useState("");
    const [changeEmail, setChangeEmail] = useState("");
    const [changeAddress, setChangeAddress] = useState("");
    const [changeCity,setChangeCity] = useState("unChecked")
    const [changeStates, setChangeStates] = useState("unChecked");
    const [changeZip,setChangeZip] = useState("");

    const ChangeZip = (evt) =>{
        setChangeZip(evt.target.value);
        if (changeZip.length > 2 || changeZip.length < 2) {
            setZip('is-invalid')
        }else{
            setZip("is-valid")
        }
    }
    

    const ChangeCity = (evt) =>{
        
        setChangeCity(evt.target.value)
        if ("unChecked" == evt.target.value) {
            setCity("is-invalid");
        }else{
            setCity("is-valid");
        }
    };


    const ChangeStates = (evt) => {
        
        setChangeStates(evt.target.value);

        if ("unChecked" === evt.target.value) {
            setStates("is-invalid");
        } else {
            setStates("is-valid");
        }
    };

    const NameValid = (evt) => {
        setChangeName(evt.target.value);
        if (changeName.length < 3 || changeName.length > 15) {
            setName("is-invalid");
        } else {
            setName("is-valid");
        }
    };
    const LastNameValid = (evt) => {
        setChangeLastName(evt.target.value);
        if (changeLastName.length < 3 || changeLastName.length > 20) {
            setLastName("is-invalid");
        } else {
            setLastName("is-valid");
        }
    };

    const EmailValid = (evt) => {
        setChangeEmail(evt.target.value);
        if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                evt.target.value
            )
        ) {
            setEmail("is-valid");
        } else {
            setEmail("is-invalid");
        }
    };

    const AddressValid = (evt) => {
        setChangeAddress(evt.target.value);
        if (changeAddress.length < 3 || changeAddress.length > 10) {
            setAddress("is-invalid");
        } else {
            setAddress("is-valid");
        }
    };
    const Send = (evt) => {
        if (changeStates == "Checked") {
        }else if (
            Name == "is-valid" &&
            LastName == "is-valid" &&
            Email == "is-valid" &&
            Address == "is-valid" &&
            states == "is-valid" &&
            city== "is-valid" &&  
            zip == "is-valid"
        ) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Form Is Sent",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                setChangeName("");
                setChangeLastName("");
                setChangeEmail("");
                setChangeAddress("");
                setChangeStates("unChecked");
                setChangeCity("unChecked")
                setName("");
                setLastName("");
                setEmail("");
                setAddress("");
                setStates("");
                setZip("")
            });

        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please Try Again",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    const { t } = useTranslation();

    return (
        <>
            <div className={`${styles["contact-background"]}`}>
                <div className="container">
                     <h1 className={styles["title"]}>{t("title_contact")}</h1>
                <h2 className={styles["subtitle"]}>
                {t("subtitle_contact")} 
                </h2>
                </div>
               
                <div className={`${styles["contact-page"]} container`}>
                    <div className={styles["contact-form"]}>
                        <div className="row gx-5 gy-5">
                            <div className="col-sm-6">
                                <label
                                    htmlFor="firstName"
                                    className="form-label"
                                >
                                    {t("name")}
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${Name}`}
                                    onChange={NameValid}
                                    defaultValue={changeName}
                                />
                            </div>

                            <div className="col-sm-6">
                                <label
                                    htmlFor="lastName"
                                    className="form-label"
                                >
                                    {t("lastname")}
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${LastName}`}
                                    onChange={LastNameValid}
                                    defaultValue={changeLastName}
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">
                                {t("email")}
                                </label>
                                <input
                                    type="email"
                                    className={`form-control ${Email}`}
                                    onChange={EmailValid}
                                    placeholder="you@example.com"
                                    defaultValue={changeEmail}
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for
                                    shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">
                                {t("address")}
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    className={`form-control ${Address}`}
                                    onChange={AddressValid}
                                    defaultValue={changeAddress}
                                />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>


                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">
                                {t("country")}
                                </label>
                                <select
                                    className={`${city} form-select form-control`}
                                    id="country"
                                    required=""
                                    onChange={ChangeCity}
                                >
                                    <option
                                        value={changeCity === "unChecked"}
                                        defaultValue={"unChecked"}
                                    >
                                       {t("choose")}
                                    </option>
                                    <option>United States</option>
                                    <option>France</option>
                                    <option>Belgum</option>
                                    <option>Armenia</option>
                                </select>
                                <div className="invalid-feedback">
                                 Please select a valid country.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">
                                {t("state")}
                                </label>
                                <select
                                    className={`${states} form-select form-control`}
                                    id="state"
                                    required=""
                                    onChange={ChangeStates}
                                >
                                    <option 
                                    value={changeStates === "unChecked"}
                                    defaultValue={"unChecked"}
                                    > {t("choose")}</option>
                                    <option>California</option>
                                    <option>Los Angeles</option>
                                    <option>Texas</option>
                                    <option>Hawaii</option>
                                    <option>Արմավիրի Մարզ</option>
                                    <option>Կոտայքի Մարզ</option>
                                    <option>Գեղարքունիքի Մարզ</option>
                                    <option>Շիրակի Մարզ</option>

                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">
                                    {t("zip")}
                                </label>
                                <input
                                    type="text"
                                    className={`${zip} form-control`}
                                    
                                    onChange={ChangeZip}
                                />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                        <button type="button" className='btn btn-outline-dark button' onClick= {Send}>
                                {t("send")}  
                            </button>
                        </div>
                    </div>
                    <div className="container">
                          <Map />
                    </div>
                  
                </div>
            </div>
        </>
    );
}
export default Contact;
