import { Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/SingleBudget.css";

function SingleBudget() {
  const url = window.location.pathname;
  let urlInParts = url.split("/");
  let seo = urlInParts[2];
  let ads = urlInParts[3];
  let web = urlInParts[4];
  let pages = urlInParts[5];
  let lang = urlInParts[6];
  console.log(urlInParts);

  let total =
    (seo === "true" ? 300 : null) +
    (ads === "true" ? 400 : null) +
    (web === "true" ? 500 : null) +
    pages * 30 +
    lang * 30;
  let totalWithDiscount = total * 0.8;

  let pageOrpages = "";
  let languageOrLanguages = "";

  if (pages === 1) {
    pageOrpages = "pàgina";
  } else {
    pageOrpages = "pàgines";
  }

  if (lang === 1) {
    languageOrLanguages = "llenguatge";
  } else {
    languageOrLanguages = "llenguatges";
  }

  return (
    <>
      <Link to="/principalPage">
        <Button className="btn rounded-3 text-white shadow onHover">
          ⭠ Pàgina Principal
        </Button>
      </Link>
      <h2 className="m-3 text-center">Resum del serveis seleccionats</h2>
      <Container className="shadow rounded-4 my-5 p-5 row w-75 m-auto">
        <Col sm={12} md={4} lg={5} className="mt-sm-3 mt-lg-0">
          <p className="fw-bold m-0">Serveis contractats:</p>
          {seo === "true" ? <p className="m-0 p-2">· SEO</p> : null}
          {ads === "true" ? <p className="m-0 p-2">· Ads</p> : null}
          {web === "true" ? (
            <p className="m-0 p-2">
              · Web ({pages} {pageOrpages}, {lang} {languageOrLanguages})
            </p>
          ) : null}
        </Col>
        <Col sm={12} md={8} lg={7} className="mt-sm-3 mt-lg-0">
          <p className="pb-1 m-0 fw-bold">Total:</p>
          <p className="p-2 m-0">
            · Preu mensual:
            <span className="fw-bold fs-3"> {total} €</span>
          </p>
          <p className="p-2 m-0">
            · Preu anual amb descompte:
            <span className="fw-bold fs-3"> {totalWithDiscount} €</span>
          </p>
        </Col>
      </Container>
    </>
  );
}

export default SingleBudget;
