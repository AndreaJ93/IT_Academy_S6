import React, { useEffect, useState } from "react";
import useService from "../hooks/useService";
import { Form, Container, Row, Col } from "react-bootstrap";
import WebOptions from "./WebOptions";

export default function ServiceCard({
  index,
  setServiceDataArray,
  serviceDataArray,
}) {
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

  return (
    <main className="w-75 mx-auto">
      <Container className="shadow rounded-4 my-5 p-5">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <h2>{service.price}€</h2>
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
