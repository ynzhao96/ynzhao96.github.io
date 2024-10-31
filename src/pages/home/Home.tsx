import { Image } from "antd";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.image}>
        <Image src="/RW.jpg" preview={false} width="33vw" />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>😃Hello, I'm Yanning Zhao</div>
        <div className={styles.content}>
          <div className={styles.row}>I am:</div>
          <li className={styles.row}>
            👨‍💻 A full-stack developer with 3 years experience.
          </li>
          <li className={styles.row}>
            👨‍🎓 Graduated from Washington University in Saint Louis.
          </li>
          <li className={styles.row}>🐈‍⬛ A cute black cat's favourite human.</li>
          <li className={styles.row}>🏀 A basketball enthusiastic.</li>
        </div>
      </div>
    </div>
  );
}
