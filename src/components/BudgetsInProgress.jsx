import { Button, Col, Form } from "react-bootstrap";

import BudgetCard from "./BudgetCard";
import "../styles/budgetsInProgress.css";
import { useEffect, useState } from "react";
import { useBudgetProvider } from "../context/BudgetProvider";

const arrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width="12"
    height="12"
  >
    <path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path>
  </svg>
);

const search = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path>
  </svg>
);

function BudgetsInProgress() {
  const [isFocusData, setIsFocusData] = useState(false);
  const [isFocusImport, setIsFocusImport] = useState(false);
  const [isFocusNom, setIsFocusNom] = useState(false);
  const { budgetData } = useBudgetProvider();
  const [searching, setSearching] = useState(false);
  let focusValue = "nonFocus";
  const [nom, setNom] = useState("");

  searching ? (focusValue = "searching") : "nonFocus";

  return (
    <div className="mx-auto pt-5" style={{ borderTop: "5px dotted #CDD1D5" }}>
      <h2 className="my-3">Pressupostos en curs:</h2>
      <div className="text-end row ms-auto mt-5 justify-content-end">
        <Col sm={2} className="px-0">
          <div className="border rounded-3 row pe-2" id={focusValue}>
            <Col sm={9}>
              <Form.Control
                type="search"
                className="m-0 bg-transparent focusNone border-0 w-75 px-0"
                aria-label="Search"
                onFocus={() => setSearching(true)}
                onBlur={() => setSearching(false)}
                onChange={(e) => setNom(e.target.value)}
              />
            </Col>
            <Col sm={3} className="d-grid align-items-center position-relative">
              <span>{search}</span>
            </Col>
          </div>
        </Col>
        <Col sm={2} className="text-center ms-3 pe-0">
          <Button
            id="Data"
            className="border-0 bg-transparent text-black searchButton pe-0"
            onFocus={() => setIsFocusData(true)}
            onBlur={() => setIsFocusData(false)}
          >
            Data
            {isFocusData ? arrowDown : null}
          </Button>
        </Col>
        <Col sm={2} className="text-center px-0">
          <Button
            className="border-0 bg-transparent text-black searchButton px-0"
            onFocus={() => setIsFocusImport(true)}
            onBlur={() => setIsFocusImport(false)}
          >
            Import
            {isFocusImport ? arrowDown : null}
          </Button>
        </Col>
        <Col sm={2} className="text-center ps-0">
          <Button
            className="border-0 bg-transparent text-black searchButton ps-0"
            onFocus={() => setIsFocusNom(true)}
            onBlur={() => setIsFocusNom(false)}
          >
            Nom
            {isFocusNom ? arrowDown : null}
          </Button>
        </Col>
      </div>
      {isFocusData
        ? budgetData
            .sort((a, b) => b.id - a.id)
            .map((budget, index) => (
              <BudgetCard key={index} index={index} card={budget}></BudgetCard>
            ))
        : isFocusImport
        ? budgetData
            .sort((a, b) => b.total - a.total)
            .map((budget, index) => (
              <BudgetCard key={index} index={index} card={budget}></BudgetCard>
            ))
        : isFocusNom
        ? budgetData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((budget, index) => (
              <BudgetCard key={index} index={index} card={budget}></BudgetCard>
            ))
        : searching
        ? budgetData
            .filter((budget) =>
              budget.name.toLowerCase().includes(nom.toLowerCase())
            )
            .map((budget, index) => (
              <BudgetCard key={index} index={index} card={budget}></BudgetCard>
            ))
        : budgetData.map((budget, index) => (
            <BudgetCard key={index} index={index} card={budget}></BudgetCard>
          ))}
    </div>
  );
}

export default BudgetsInProgress;
