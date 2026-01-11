

import styles from "@/src/app/components/login/Login.module.css";

function Login() {
    return ( 
      <div className="container d-flex align-items-center justify-content-center  mt-5 ">
    <form className={styles.formwidth}>
  <div className="form-group ">
    <label className="mb-2">Email address</label>
    <input type="email" className={` ${styles.address} form-control`}  placeholder="Enter Email" />
  </div>
  <div className="form-group mt-2 mb-3">
    <label className="mb-2">Password</label>
    <input type="password" className={` ${styles.address} form-control`} placeholder="Password" />
    <small className={styles.password}>Atleast 8 characters.Must Include Capital Letter and Special Characters.</small>

  </div>
  <hr></hr>
  <div className="d-flex justify-content-center gap-4">
    <a className={styles.link} href="#">New Registration</a>
    <a className={styles.link} href="#">Forgot Password?</a>
    <button type="submit" className={`${styles.button} btn`}>Sign in</button>
  </div>
</form>
</div>
     );
}

export default Login;