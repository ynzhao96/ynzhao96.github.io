export default function Resume() {
  return (
    <>
      <object
        width="100%"
        height="100%"
        data="/Yanning Zhao - Full-stack Engineer.pdf"
        type="application/pdf"
      />
      <div style={{ float: "right", fontSize: "18px" }}>
        <span>Problem with preview? </span>
        <a
          href="/Yanning Zhao - Full-stack Engineer.pdf"
          download="/Yanning Zhao - Full-stack Engineer.pdf"
        >
          download here
        </a>
      </div>
    </>
  );
}
