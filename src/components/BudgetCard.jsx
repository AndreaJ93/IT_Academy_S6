import { Col, Container } from "react-bootstrap";

function BudgetCard({ card }) {
  // const [name, phone, email, total, seo, ads, web, pages, languages] = card;
  let pageOrpages = "";
  let languageOrLanguages = "";

  if (card.pages === 1) {
    pageOrpages = "pàgina";
  } else {
    pageOrpages = "pàgines";
  }

  if (card.languages === 1) {
    languageOrLanguages = "llenguatge";
  } else {
    languageOrLanguages = "llenguatges";
  }

  return (
    <Container className="shadow rounded-4 my-5 p-5 row">
      <Col sm={12} md={12} lg={4}>
        <h4 className="pb-1 m-0">{card.name}</h4>
        <p className="m-0">{card.phone}</p>
        <p className="m-0">{card.email}</p>
      </Col>
      <Col sm={12} md={8} lg={6} className="mt-sm-3 mt-lg-0">
        <p className="fw-bold m-0 pb-1">Serveis contractats:</p>
        {card.seo ? <p className="m-0">· SEO</p> : null}
        {card.ads ? <p className="m-0">· Ads</p> : null}
        {card.web ? (
          <p className="m-0">
            · Web ({card.pages} {pageOrpages}, {card.languages}{" "}
            {languageOrLanguages})
          </p>
        ) : null}
      </Col>
      <Col sm={12} md={4} lg={2} className="mt-sm-3 mt-lg-0">
        <p className="pb-1 m-0">Total:</p>
        <h4 className="fw-bold">{card.total} €</h4>
      </Col>
    </Container>
  );
}

export default BudgetCard;
