import "../styles/welcomePage.css";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="body p-5 align-items-center d-grid">
      <div className="row p-5">
        <div className="col-12 row">
          <h1 className="col-8 fw-bold textShadow text-center pt-5">
            Aconsegueix la millor qualitat
          </h1>
          <p
            className="col-4 border-start border-black rounded-end-4 fw-bold textShadow p-4"
            style={{ backgroundColor: "#FCF4EC" }}
          >
            Crea els teus pressupostos en funció de les teves necessitats. Podem
            oferir un servei SEO, Web i de publicitat a la teva mida.
          </p>
        </div>
        <div className="col-12 row p-5 text-center">
          <Link to="/principalPage">
            <button className="btn rounded-3 text-white shadow onHover">
              Pàgina Principal ⭢
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
