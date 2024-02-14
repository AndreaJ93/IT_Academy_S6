import React, { useEffect, useState } from "react";
import useService from "../hooks/useService";
import { Form, Container, Row, Col } from "react-bootstrap";
import WebOptions from "./WebOptions";
import "../styles/principalPage.css";

export default function ServiceCard({ index, setServiceDataArray, isSaving }) {
  const { serviceData, total, setTotal } = useService();
  const nonSelectedArray = [false, false, false];
  const [selected, setSelected] = useState(nonSelectedArray);
  let service = serviceData[index];
  const [isChecked, setIsChecked] = useState(false);
  const [priceOptions, setPriceOptions] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [numLanguages, setNumLanguages] = useState(0);

  function getTotal() {
    let checkbox = document.getElementById(`check${index}`);

    checkbox.checked
      ? (setTotal(total + service.price), setIsChecked(!isChecked))
      : (setTotal(total - service.price - priceOptions),
        setIsChecked(!isChecked));
  }

  useEffect(() => {
    const selectedArray = selected.map((value, i) => {
      let checkbox = document.getElementById(`check${i}`);
      if (checkbox.checked) {
        return (value = true);
      } else if (checkbox.checked === false) {
        return (value = false);
      } else {
        return value;
      }
    });
    setSelected(selectedArray);
    setServiceDataArray([selectedArray, numPages, numLanguages]);
  }, [isChecked, index, numPages, numLanguages]);

  function numPagesLanguages(pages, languages) {
    setNumPages(pages);
    setNumLanguages(languages);
  }

  let isCheckedID = "shadow rounded-4 my-5 p-5";
  isChecked
    ? (isCheckedID = "checkedID rounded-4 my-5 p-5")
    : "shadow rounded-4 my-5 p-5";

  return (
    <main className="w-75 mx-auto">
      <Container className={isCheckedID}>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Col>
          <Col xs={6} md={3} lg={3}>
            {isSaving ? (
              <>
                <p
                  style={{
                    color: "orange",
                    textAlign: "center",
                    marginBottom: "0px",
                  }}
                >
                  Estalvia un 20%
                </p>
                <h2 className="text-center">{service.price * 0.8}€</h2>
              </>
            ) : (
              <h2 className="text-center">{service.price}€</h2>
            )}
          </Col>
          <Col xs={6} md={3} lg={3}>
            <Form className="d-grid justify-content-end">
              <Form.Check
                type="checkbox"
                id={`check${index}`}
                label="Afegir"
                name={`service.${index}`}
                value={service.price}
                onClick={getTotal}
              />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            {service.form && isChecked === true ? (
              <WebOptions
                setPriceOptions={setPriceOptions}
                numPagesLanguages={numPagesLanguages}
              ></WebOptions>
            ) : null}
          </Col>
        </Row>
      </Container>
    </main>
  );
}
