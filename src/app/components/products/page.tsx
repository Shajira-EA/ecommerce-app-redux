"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slice/slice";
import { addToCart } from "../../slice/cartslice";
import { AppDispatch, RootState } from "../../store/Store";
import { useRouter } from "next/navigation";

import styles from "@/src/app/components/products/ProductList.module.css"

function ProductList() {

    const dispatch = useDispatch<AppDispatch>();
    
    const {products } = useSelector(
        (state: RootState) => {
            return state.products;});
 

        const router = useRouter();

    return (  
        <div className="container mt-5">
            <div className="row">
                {products.map((p) => {
                  return (
                    <div className="col-md-3 mb-3" key={p.id}>
                      <div className={`card h-100 ${styles.cardstyle}`}>
                        <img
                          className={`card-img-top ${styles.cardimg}`}
                          src={p.image}
                          onClick={() => router.push(`/components/productDetail/${p.id}`)}
                        />
                        <div className="card-body">
                          <h6>{p.title}</h6>
                          <p className={`card-text ${styles.paragraph}`}>
                            {p.description}
                          </p>
                          <div style={{ fontSize: "13px" }}>
                      {p.rating.rate} stars
                          </div>
                          <div style={{ fontSize: "13px" }}>
                            {p.rating.count}+ bought last month
                          </div>
                          <div style={{ fontSize: "17px" }}>
                            <b>₹{p.price}</b>
                          </div>
        
                          <div>
                            <button
                              type="button"
                              className="btn btn-warning"
                              onClick={() => {
                                 dispatch(addToCart(p));
                                 router.push(`/components/cart/`);
                              }}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
    );
}

export default ProductList;
