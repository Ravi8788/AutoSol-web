import { Link } from "react-router";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

export default function NotFound() {
  return (
    <>
    <Seo title="Page Not Found" description="The page you are looking for does not exist." />
    <section className="page-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <p className="eyebrow eyebrow--dark"><span />404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <div style={{ marginTop: "32px" }}>
          <Link to="/" className="button button--primary">Back to home <Arrow /></Link>
        </div>
      </div>
    </section>
    </>
  );
}
