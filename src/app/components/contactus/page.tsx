import styles from "./Contactus.module.css";

function Contactus() {
  return (
    <div className="m-4 mt-5">
      <h3 className={styles.title}>Contact Us</h3>
      <p className={styles.paragraph}>
        This is a demo e-commerce application created for educational and
        portfolio purposes. If you have any questions, feedback, or suggestions
        regarding this demo e-commerce application, Contact through,
      </p>
      <div className={styles.contact}>
        <b>Email  :</b> abc@gmail.com
      </div>
      <div className={styles.contact}>
        <b>Phone :</b> +91 000 000 00 00
      </div>
    </div>
  );

}

export default Contactus;
