
"use client";

import { RootState,AppDispatch } from "./store/Store";
import { fetchProducts } from "./slice/slice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { filteredProducts } from "./selector";
import { useRef } from "react";
import { clearCategory, clearsearch} from "./slice/searchSlice";
import styles from "@/src/app/components/products/ProductList.module.css";

export default function Home() {

    const router = useRouter();

    const searhRef = useRef<HTMLDivElement | null>(null);
    const autoScrolled = useRef(false);

    const dispatch = useDispatch<AppDispatch>();

    const category = useSelector((state: RootState) => { return state.search.category;});
    const searchText = useSelector((state: RootState) => { return state.search.searchText;});
    const isAnyFilterSelected = Boolean(category || searchText);
    
    const filterByCategory = useSelector(filteredProducts);


    const { status, products } = useSelector((state: RootState) => state.products);
    
        useEffect(() => {
          if(products.length === 0)
            dispatch(fetchProducts());
          },[dispatch, products.length]);

      useEffect(() => {
  if (category || searchText) {
    searhRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }
}, [category, searchText]);

         
     
            if (status === "loading") {
              return  (
              <div className="d-flex justify-content-center mb-5">
                <div className="spinner-border text-warning p-2" role="status">
                </div>
                <span>Loading...</span>
              </div>
              );}
    
            if (status === "failed") {
              return  (
              <div className="d-flex justify-content-center mt-5">
                <span>Failed To Load,Try Again After Some...</span>
              </div>
              );}
    

  return (
    <>
    <div
          id="carouselExampleIndicators"
          className="carousel slider"
          data-bs-ride="carousel" 
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
            ></button>
          </div>
          <div className="carousel-inner mt-2 mb-3">
            <div className="carousel-item active">
              <img className="d-block w-100" src='/slider1.png' alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src='/slider2.png' alt="Second slide" />
            </div>            
            <div className="carousel-item">
              <img className="d-block w-100" src='/slider4.png' alt="Fourth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src='../slider5.png' alt="Fifth slide" />
            </div>
          </div>
        </div>
  <div className="container mt-5" ref={searhRef}>
            <div className="row">
                {isAnyFilterSelected && filterByCategory.map((p) => {
                  return (
                    <div className="col-md-3 mb-3" key={p.id}>
                      <div className={`card h-100 ${styles.cardstyle}`}>
                        <img
                          className={`card-img-top ${styles.cardimg}`}
                          src={p.image}
                        />
                        <div className="card-body">
                          <h6>{p.title}</h6>                       
                          <div style={{ fontSize: "17px" }}>
                            <b>₹{p.price}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {filterByCategory.length > 0 && (
             <div className="d-flex justify-content-end mt-2 mb-3 mr-5">
                            <button
                              type="button"
                              className="btn btn-warning"
                              onClick={() => {
                                 router.push(`/components/products`);
                                 dispatch(clearCategory());
                                 dispatch(clearsearch());
                              }}
                            >
                              Explore More
                            </button>
                          </div>
                        )}
    </>
  );
}
