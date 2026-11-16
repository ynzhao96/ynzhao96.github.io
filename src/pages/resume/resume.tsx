const resumeFilename = "Yanning Zhao - Full-stack Engineer.pdf";
const resumeUrl = `${import.meta.env.BASE_URL}${encodeURIComponent(resumeFilename)}`;

export default function Resume() {
  return (
    <>
      <object
        width="100%"
        height="100%"
        data={resumeUrl}
        type="application/pdf"
      />
      <div style={{ float: "right", fontSize: "18px" }}>
        <span>Problem with preview? </span>
        <a
          href={resumeUrl}
          download={resumeFilename}
        >
          download here
        </a>
      </div>
    </>
  );
}
