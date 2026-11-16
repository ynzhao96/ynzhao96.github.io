import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.homePage} aria-labelledby="home-title">
        <div>
          <h1 id="home-title" className={styles.title}>Hello, I'm Yanning Zhao.</h1>
          <p className={styles.intro}>
            I'm a software engineer who builds web applications for travel and logistics,
            from React interfaces to APIs and databases.
          </p>
          <p className={styles.details}>
            I earned a master's in computer science from Washington University in
            St. Louis. Outside of work, I'm a basketball fan and a black cat's
            favourite human.
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
      <section className={styles.work} aria-labelledby="work-title">
        <h2 id="work-title">Selected work</h2>
        <div className={styles.projects}>
          <article>
            <h3>Warehouse management system</h3>
            <p>
              At Kerun International Shipping, I built React and TypeScript
              interfaces for receiving and tracking ship supplies. I used MySQL
              transactions and row locks in the Node.js API to prevent duplicate
              stock additions.
            </p>
          </article>
          <article>
            <h3>Frontend infrastructure</h3>
            <p>
              At Trip.com, I helped standardize more than 20 frontend projects.
              Using Vite to build separate page bundles brought measured load time
              from 1.6 seconds to 0.65 seconds in the best case.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
