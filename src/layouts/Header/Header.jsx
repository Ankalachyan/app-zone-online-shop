import { NavLink, Link } from "react-router-dom";
import Cart from "../../assets/icons/cart";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState } from "react";
import style from "./Header.module.scss"
function Header() {
  const lang = [
    {
      img: 'https://foreach.am/static/en-us-b9eb34d6c7a150e3a145ce6107536310.png',
      title: 'English',
      id: 1,
      value: "en"
    },
    {
      img: 'https://foreach.am/static/ru-ru-c70687e703377cf4ce8af3becd53e496.png',
      title: 'Русский',
      id: 2,
      value: "ru"
    },
    {
      img: "https://foreach.am/static/hy-am-1a3015e5fe82102ea1a448284b09c0f3.png",
      title: 'Հայերեն',
      id: 3,
      value: "am"
    },
  ];

  const [selectLang, useselectLang] = useState(
    {
      img: 'https://foreach.am/static/en-us-b9eb34d6c7a150e3a145ce6107536310.png',
      title: 'English',
      id: 1,
      value: "en"
    }
  )

  const { t, i18n } = useTranslation();

  const selected = (id) => {
    lang.filter(el => {
      if (el.id === id) {
        useselectLang(el)
        i18next.changeLanguage(el.value);
        localStorage.setItem("lang", el.value);
      }
    })
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">App Zone</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">{t("home")}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">{t("about")}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">{t("contact")}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products/main">{t("product")}</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search" >
            <li className="dropdown">
              <div className="dropdown-selected dropdowm-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img alt="" className={style["image"]}src={selectLang.img} draggable="false" />
              </div>
              <div className="dropdown-menu">
                <ul style={{ paddingLeft: '0rem', backgroundColor: "transparent" }}>
                  {
                    lang.map(el =>
                      <li selected={"en" == i18n.language} value="en" onClick={() => selected(el.id)} key={el.id} >
                        <div className="dropdown-item" >
                          <img alt="" className={style['image']} src={el.img} draggable="false" selected={"en" == i18n.language} value="en" />
                          <span>  {el.title}</span>
                        </div>
                      </li>
                    )
                  }
                </ul>
              </div>
            </li>
            <Link to={"/cart"}>
              <Cart />
            </Link>

            <input className="form-control me-2 w-200px" type="search" placeholder={t("search")} aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">{t("search")}</button>
          </form>
        </div>
      </div>
    </nav>

  );
}

export default Header;
