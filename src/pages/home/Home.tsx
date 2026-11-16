import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.homePage} aria-labelledby="home-title">
      <div>
        <h1 id="home-title" className={styles.title}>Hello, I’m Yanning Zhao.</h1>
        <p className={styles.intro}>I’m a full-stack developer with 3 years of experience.</p>
        <p className={styles.details}>
          I graduated from Washington University in St. Louis. Outside of work,
          I’m a basketball fan and a black cat’s favourite human.
        </p>
      </div>
      <img
        className={styles.image}
        src={`${import.meta.env.BASE_URL}RW.jpg`}
        alt="Illustration of a basketball player in a blue jersey"
        width="1080"
        height="1080"
      />
    </section>
  );
}
