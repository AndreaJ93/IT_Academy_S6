import { Form, Col } from "react-bootstrap";
import "../styles/principalPage.css";

function AnualBudget({ setIsSaving, isSaving }) {
  function handleAnual() {
    setIsSaving(!isSaving);
  }
  return (
    <Form className="row w-50 m-auto">
      <Col sm={6} className="text-end pe-0 fw-semibold">
        Pagament mensual
      </Col>
      <Col sm={6}>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Pagament anual"
          className="fw-semibold"
          onClick={handleAnual}
        />
      </Col>
    </Form>
  );
}

export default AnualBudget;
