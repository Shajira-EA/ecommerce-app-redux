"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch} from "@/src/app/store/Store";
import { searchByCategory, searchByText, clearCategory ,clearsearch} from "../../slice/searchSlice";
import { useRef } from "react";
import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const pathName = usePathname();
  // const [searchText, setSearchText] = useState("");
  const searchRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const cartQuantity = useSelector((state: RootState) => {
      return state.cart.cartProduct.reduce((sum, cartAddedProducts) => 
    sum + cartAddedProducts.quantity,0);
  });



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-items-center">
        <div className="d-flex justify-content-between align-items-center pt-2 gap-5">
      <Link href={"/"} className="navbar-brand mx-5">
        <img src="/amazon_logo.png" className={styles.logo} alt="Logo" />
      </Link>
      <div className="m-0">
      <div className="input-group" style={{width: "500px"}}>
        <button 
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          All
        </button>
        <ul className="dropdown-menu"  >
          <li>
            <button className={`dropdown-item ${styles.dropdown}`} onClick={() => {dispatch(searchByCategory("men's clothing"));dispatch(clearsearch());}}>
              Men's Collection
              
            </button>
            
          </li>
          <li>
            <button className={`dropdown-item ${styles.dropdown}`} onClick={() => {dispatch(searchByCategory("women's clothing"));dispatch(clearsearch());}}>
              Women's Collection
            </button>
          </li>
          <li>
            <button className={`dropdown-item ${styles.dropdown}`} onClick={() => {dispatch(searchByCategory("jewelery"));dispatch(clearsearch());}}>
              Jewellery
            </button>
          </li>
          <li>
            <button className={`dropdown-item ${styles.dropdown}`} onClick={() => {dispatch(searchByCategory("electronics"));dispatch(clearsearch());}}>
              Electronics
            </button>
          </li>
        </ul>
        <input
          type="text"
          ref={ searchRef}
          placeholder="men's collecton,women's collection,jewellery,electronics.."
          // onChange={(e) => setSearchText(e.target.value)}
          className="form-control border-0 shadow-none"
          aria-label="Text input with dropdown button"
          style={{fontSize: "12px"}}
        ></input>
        <button className="btn btn-light">
          <img
            src="/search-icon.png"
            alt="search icon"
            onClick={() => {
                const value = searchRef.current?.value?.trim();
                if(value){
                  dispatch(searchByText(value));
                  dispatch(clearCategory());
                }
                if (searchRef.current) {
                  searchRef.current.value = "";
    }
            }}
            className={styles.search}
          />
        </button>
      </div>
      </div>
      <ul className="navbar-nav  ">
        <li className="nav-item ">
          <Link
            className={`nav-link mt-1 ${styles.nav_link} ${
              pathName === "/" ? styles.active : ""
            }`}
            href="/"
          >
            HOME{" "}
          </Link>
        </li>
         <Link
            className={`nav-link mt-1 ${styles.nav_link} ${
              pathName.startsWith("/login") ? styles.active : ""
            }`}
            href="/components/login"
          >
            LOGIN
          </Link>
        <li className="nav-item">
          <Link
            className={`nav-link mt-1 ${styles.nav_link} ${
              pathName.startsWith("/products") ? styles.active : ""
            }`}
            href="/components/products"
          >
            PRODUCTS
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link mt-1 ${styles.nav_link} ${pathName === '/about-us' ? styles.active: ""}`} href="/components/about-us">
            ABOUT US
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link mt-1 ${styles.nav_link} ${pathName.startsWith('/contactus') ? styles.active: ""}`} href="/components/contactus">
            CONTACT US
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link position-relative ${styles.nav_link}`} href="/components/cart">
                <img src='/cart.png' alt="cart image" className={`${styles.cart} ${styles.buttoncart}`}/>
                  {cartQuantity > 0 && (
              <span
                className="position-absolute top-0 start-80 translate-middle badge rounded-circle "
                style={{ backgroundColor: "orange" }}
              >
                {cartQuantity}
              </span>
            )}
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Header;
