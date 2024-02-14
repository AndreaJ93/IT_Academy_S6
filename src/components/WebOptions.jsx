import { useEffect, useState } from "react";
import useService from "../hooks/useService";
import { Form, Button, Col } from "react-bootstrap";
import ModalInformation from "./ModalInformation";

export default function WebOptions({ setPriceOptions, numPagesLanguages }) {
  const { total, setTotal } = useService();
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [totalOptions, setTotalOptions] = useState(0);
  let infoPage = "infoPage";
  let infoLanguage = "infoLanguage";

  let totalPriceOptions = (pages + languages) * 30;

  useEffect(() => {
    setTotalOptions(totalPriceOptions);
    getTotalWithOptions();
    numPagesLanguages(pages, languages);
  }, [pages, languages]);

  function getTotalWithOptions() {
    setTotal(total + totalPriceOptions - totalOptions);
    setPriceOptions(totalPriceOptions);
  }

  function reducePages() {
    if (pages != 0) {
      setPages(pages - 1);
    }
  }

  function addPages() {
    setPages(pages + 1);
  }

  function reduceLanguages() {
    if (languages != 0) {
      setLanguages(languages - 1);
    }
  }

  function addLanguages() {
    setLanguages(languages + 1);
  }

  return (
    <>
      <div className="row justify-content-end mb-3">
        <Col xs={12} md={6} lg={5} className="p-0 row justify-content-end">
          <Col xs={2}>
            <ModalInformation info={infoPage} />
          </Col>
          <Col xs={8} className="ps-0 text-center">
            <Form.Label className="d-grid text-end text-sm-center">
              Nombre de pàgines
            </Form.Label>
          </Col>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="row justify-content-end align-items-center"
        >
          <Col xs={3} md={3} lg={3} className="justify-content-center d-grid">
            <Button
              className="btn btn-light rounded-circle d-flex flex-column align-items-center justify-content-center"
              style={{
                height: 25 + "px",
                width: 25 + "px",
                borderColor: "#DDE1E5",
                color: "grey",
              }}
              onClick={reducePages}
            >
              -
            </Button>
          </Col>
          <Col xs={6} md={6} lg={6} className="justify-content-center d-grid">
            <Form.Control
              type="number"
              id="pages"
              className="mx-3 text-center px-0"
              // defaultValue={0}
              value={pages}
              style={{ width: 75 + "px" }}
              onChange={(e) => setPages(Number(e.target.value))}
            />
          </Col>
          <Col xs={3} md={3} lg={3} className="justify-content-center d-grid">
            <Button
              className="btn btn-light rounded-circle d-flex flex-column align-items-center justify-content-center"
              style={{
                height: 25 + "px",
                width: 25 + "px",
                borderColor: "#DDE1E5",
                color: "grey",
              }}
              onClick={addPages}
            >
              +
            </Button>
          </Col>
        </Col>
      </div>

      <div className="row justify-content-end">
        <Col xs={12} md={6} lg={5} className="p-0 row justify-content-end">
          <Col xs={2} className="pe-0">
            <ModalInformation info={infoLanguage} />
          </Col>
          <Col xs={8} className="ps-0 text-center">
            <Form.Label className="d-grid text-end text-sm-center fs-6">
              Nombre de llenguatges
            </Form.Label>
          </Col>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="row justify-content-end align-items-center"
        >
          <Col xs={3} md={3} lg={3} className="justify-content-center d-grid">
            <Button
              className="btn btn-light rounded-circle d-flex flex-column align-items-center justify-content-center"
              style={{
                height: 25 + "px",
                width: 25 + "px",
                borderColor: "#DDE1E5",
                color: "grey",
              }}
              onClick={reduceLanguages}
            >
              -
            </Button>
          </Col>
          <Col xs={6} md={6} lg={6} className="justify-content-center d-grid">
            <Form.Control
              type="number"
              id="languages"
              className="mx-3 text-center px-0"
              // defaultValue={0}
              value={languages}
              style={{ width: 75 + "px" }}
              onChange={(e) => setLanguages(Number(e.target.value))}
            />
          </Col>
          <Col xs={3} md={3} lg={3} className="justify-content-center d-grid">
            <Button
              className="btn btn-light rounded-circle d-flex flex-column align-items-center justify-content-center"
              style={{
                height: 25 + "px",
                width: 25 + "px",
                borderColor: "#DDE1E5",
                color: "grey",
              }}
              onClick={addLanguages}
            >
              +
            </Button>
          </Col>
        </Col>
      </div>
    </>
  );
}
