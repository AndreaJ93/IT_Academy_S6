import { Button, Col, Container, Form, FormCheck } from "react-bootstrap";
import "../styles/budgetsInProgress.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const [url, setUrl] = useState(false);
  console.log(card.seo);

  function getUrl() {
    setUrl(!url);
    let urlSingleBudget = `/singleBudget/${card.seo}/${card.ads}/${card.web}/${card.pages}/${card.languages}`;
    // seo={card.seo}&ads={card.ads}&web=
    //       {card.web}&pages={card.pages}&lang={card.languages};
    console.log(urlSingleBudget);
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
      <Button
        className="border-0 bg-transparent w-25 text-black mt-3 text-end"
        onClick={getUrl}
      >
        URL ⇨
      </Button>
      {url ? (
        <Link
          to={`/singleBudget/${card.seo}/${card.ads}/${card.web}/${card.pages}/${card.languages}`}
          className="w-50 mb-0 mt-3 d-grid align-content-center"
        >
          http://localhost:5173/singleBudget/{card.seo ? "true" : "false"}/
          {card.ads ? "true" : "false"}/{card.web ? "true" : "false"}/
          {card.pages}/{card.languages}
        </Link>
      ) : null}
    </Container>
  );
}

export default BudgetCard;
