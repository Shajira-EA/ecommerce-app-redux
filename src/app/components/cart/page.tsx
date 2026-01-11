"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store/Store";
import { useRouter } from "next/navigation";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../../slice/cartslice";
import { toast} from "react-toastify";
import styles from "@/src/app/components/cart/Cart.module.css";

function Cart() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const cartProduct = useSelector((state: RootState) => {
    return state.cart.cartProduct;
  });

  const totalAmountToPay = cartProduct.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  if (cartProduct.length === 0) {
    return (
      <div className="container  mt-5">
        <h3 style={{ color: "darkblue" }}>The Cart is Empty.</h3>
        <button
          type="button"
          className="btn btn-info btn-sm px-2"
          onClick={() => {
            router.push("/components/products");
          }}
        >
          Go to products
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {
      cartProduct.map((product) => {
        return (
          <div key={product.id} className="row border-bottom pb-4 d-flex mb-3 align-items-center" style={{ height: "200px" }}>
            <div className=" col-4 d-flex align-items-center ">
              <img
                src={product.image}
                alt="selected Prducts"
                className={styles.selectedProduct}
              />
            </div>
            <div className=" col-8 ">
              <div className={styles.carttext}>
                <span>
                  <img src="/tickmark.png" className={styles.tick} />
                </span>
                Added to cart.
              </div>
              <div className={styles.title}>{product.title}</div>
              <div className="cartprice">
                Price : <b>₹{product.price * product.quantity}</b>
              </div>
              <div className="d-flex align-items-center ">
                <button
                  className="rounded-circle "
                  onClick={() => {
                    dispatch(decrementQuantity(product.id));
                  }}
                >
                  -
                </button>
                <label className=" px-3 rounded">{product.quantity}</label>
                <button
                  className="rounded-circle "
                  onClick={() => {
                    dispatch(incrementQuantity(product.id));
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-warning btn-sm px-4 mt-3"
                onClick={() => {
                  dispatch(removeFromCart(product.id));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );}
      )}
            <div className="row mt-5 mb-5">
              <div className="col  d-flex justify-content-center gap-3 ">
                <label>
                  <h5 style={{ color: "darkblue" }}>
                    Total Price to Pay: <b>{totalAmountToPay.toFixed(2)}</b>
                  </h5>
                </label>
                <button
                  type="button"
                  className="btn btn-warning btn-sm px-4"
                  onClick={() => {
                    dispatch(clearCart());
                    toast.success("Order Placed Successfully! Happy Shopping!!!",{style: {width: "420px", color: "darkblue",  }, });
                    router.push('/');
                  }}
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-sm px-2"
                  onClick={() => {
                    router.push("/components/products");
                  }}
                >
                  Add More
                </button>
              </div>
            </div>
            </div>
  );
}

export default Cart;
