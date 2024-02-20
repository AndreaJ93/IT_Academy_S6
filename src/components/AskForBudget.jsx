import { Container, Form, Button, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import useService from "../hooks/useService";
import BudgetsInProgress from "./BudgetsInProgress";
import useBudgetProvider from "../hooks/useBudgetProvider";

function AskForBudget({ isSaving }) {
  const { total, serviceDataArray } = useService();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState(null);
  const { addBudget, budgetData } = useBudgetProvider();

  function handleOnSubmit() {
    const [services, pages, languages] = serviceDataArray;
    const [seo, ads, web] = services;

    setBudget({
      name: name,
      phone: phone,
      email: email,
      seo: seo,
      ads: ads,
      web: web,
      pages: pages,
      languages: languages,
      total: isSaving ? total * 0.8 : total,
      id: budgetData.length,
    });
  }

  useEffect(() => {
    addBudget(budget);
  }, [budget]);

  return (
    <div className="w-75 mx-auto mb-5">
      <Container className="shadow rounded-4 my-5 px-5 py-4 row justify-content-between">
        <h2 className="ps-0 mb-3 col-12">Demanar pressupost</h2>
        <Form className="col-12 row p-0 m-0" onSubmit={handleOnSubmit}>
          <Col xs={12} md={6} lg={3} style={{ paddingLeft: "0px" }}>
            <Form.Control
              xs={12}
              md={6}
              lg={3}
              type="text"
              placeholder="Nom"
              className="my-3"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6} lg={3} style={{ paddingLeft: "0px" }}>
            <Form.Control
              type="number"
              id="phone"
              placeholder="Telèfon"
              className="my-3"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6} lg={3} style={{ paddingLeft: "0px" }}>
            <Form.Control
              type="email"
              placeholder="Email"
              className="my-3"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6} lg={3} style={{ paddingRight: "0px" }}>
            <Button
              type="submit"
              className="my-3 border-0 w-100"
              style={{ backgroundColor: "#54B588" }}
            >
              Sol·licitar pressupost ⭢
            </Button>
          </Col>
        </Form>
      </Container>
      <BudgetsInProgress></BudgetsInProgress>
    </div>
  );
}

export default AskForBudget;
