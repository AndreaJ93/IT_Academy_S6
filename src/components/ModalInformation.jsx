import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const infoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
  </svg>
);

function ModalInformation({ info }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="d-grid justify-content-center bg-transparent border-0"
        style={{ height: "30px", width: "30px" }}
        onClick={handleShow}
      >
        {infoIcon}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="border-0 p-5 pb-3 justify-content-center">
          <Modal.Title className="fw-bold fs-5">
            Número de {info === "infoPage" ? "pàgines" : "llenguatges"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5 pt-0 text-center">
          {info === "infoPage"
            ? "Afegeix les pàgines que necessitis per a dur a terme el teu projecte. El cost de cada pàgina és de 30€."
            : "Afeigeix els llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€"}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalInformation;
