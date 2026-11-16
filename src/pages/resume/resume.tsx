import styles from "./resume.module.css";

const resumeFilename = "Yanning Zhao - Software Engineer.pdf";
const resumeUrl = `${import.meta.env.BASE_URL}${encodeURIComponent(resumeFilename)}`;

export default function Resume() {
  return (
    <section className={styles.resume} aria-labelledby="resume-title">
      <h1 id="resume-title">Resume</h1>
      <div className={styles.actions}>
        <a href={resumeUrl}>Open PDF</a>
        <a href={resumeUrl} download={resumeFilename}>Download PDF</a>
      </div>
      <object
        className={styles.preview}
        data={resumeUrl}
        type="application/pdf"
        aria-label="Resume PDF preview"
      >
        <p>PDF preview is unavailable. <a href={resumeUrl}>Open the resume</a>.</p>
      </object>
    </section>
  );
}
