"use client";

import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store/Store";
import { useRouter } from "next/navigation";
import { addToCart } from "@/src/app/slice/cartslice";
import styles from "@/src/app/components/productDetail/ProductDetail.module.css";

function ProductDetail() {

    const {id} = useParams();
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const productCard = useSelector((state: RootState) => {
        return state.products.products.find((product) => 
            product.id === Number(id)
        );
    });

    if(!productCard){
        return <h2>Product loading failed....</h2>
    }
    
    return ( 
         <div className="container mt-5 ">
              <div
                className="row d-flex  align-items-center mb-3"
                style={{ height: "400px" }}
              >
                
                <div className="border-start col-4 border-end d-flex align-items-center justify-content-center h-100">
                  <img
                    src={productCard.image}
                    alt="Product image"
                    className={styles.productImage}
                  />
                </div>
                <div className="col-5 d-flex align-items-center border-end h-100">
                  <div className="card border-0 w-100 h-100">
                    <div className="card-body h-100">
                      <h3 className={styles.title}>{productCard.title}</h3>
                      <p className={styles.paragraph}>{productCard.description}</p>
                      <div className={styles.center}>
                        <div className={styles.rate}>
                          <div>{productCard.rating?.rate} ★</div>
                          <div>{productCard.rating?.count}+ bought last month</div>
                        </div>
                        <div className={styles.price}>
                          <b>₹{productCard.price}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-3 border-end d-flex flex-column justify-content-center align-items-center h-100"
                  style={{ height: "350px" }}
                >
                  <div className={styles.price}>
                    <b>₹{productCard.price}</b>
                  </div>
                  <div className={styles.description}>
                    {" "}
                    FREE delivery{" "}
                    <span>
                      <b>Saturday, 29 December</b>
                    </span>
                    . Or fastest delivery{" "}
                    <span>
                      <b>Tomorrow, 24 December</b>
                    </span>
                    . Order within{" "}
                    <span style={{ color: "green" }}>11 hrs 21 mins</span>.{" "}
                  </div>
                  <div style={{ color: "red" }}>Limited Stock Only</div>
                  <div className="mt-4 mb-4 ">
                    <button
                      type="button"
                      className="btn btn-warning btn-sm px-4"
                      onClick = {() =>  {
                        dispatch(addToCart(productCard));
                        router.push(`/components/cart`);}
                      }>
                
                      Add to Cart
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-info btn-sm "
                      onClick={() => 
                        router.push('../products')
                      }
                    >
                      Back to Products{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
     );
}

export default ProductDetail;