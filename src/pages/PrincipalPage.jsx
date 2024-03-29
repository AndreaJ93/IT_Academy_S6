import ServiceCard from "../components/ServiceCard";
import { Container } from "react-bootstrap";
import "../styles/principalPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AskForBudget from "../components/AskForBudget";
import BudgetProvider from "../context/BudgetProvider";
import AnualBudget from "../components/AnualBudget";
import ServiceProvider from "../context/ServiceContext";

const serviceData = [
  {
    title: "SEO",
    description: "Campanya SEO completa per a la teva web.",
    price: 300,
    form: false,
  },
  {
    title: "Ads",
    description: "Campanya de publicitat completa per a la teva web.",
    price: 400,
    form: false,
  },
  {
    title: "Web",
    description: "Programació d'una web responsive completa.",
    price: 500,
    form: true,
  },
];

function PrincipalPage() {
  const [total, setTotal] = useState(0);

  const [serviceDataArray, setServiceDataArray] = useState([]);

  const [isSaving, setIsSaving] = useState(false);

  const contextServiceValue = {
    serviceData,
    total,
    setTotal,
    serviceDataArray,
    setServiceDataArray,
  };

  return (
    <ServiceProvider data={contextServiceValue}>
      <BudgetProvider>
        <Link to="/">
          <button className="btn rounded-3 text-white shadow onHover">
            {" "}
            ⭠ Pàgina de benvinguda
          </button>
        </Link>
        <Container className="rounded-4 my-5 py-5 background">
          <h1 className="text-center">Aconsegueix la millor qualitat</h1>
        </Container>
        <AnualBudget
          isSaving={isSaving}
          setIsSaving={setIsSaving}
        ></AnualBudget>
        {serviceData.map((_, index) => (
          <ServiceCard
            key={index}
            index={index}
            setServiceDataArray={setServiceDataArray}
            serviceDataArray={serviceDataArray}
            isSaving={isSaving}
          >
            {" "}
          </ServiceCard>
        ))}
        <div>
          {isSaving ? (
            <h2 className="text-end w-75 m-auto pb-5">
              Preu pressupostat: {total * 0.8}€
            </h2>
          ) : (
            <h2 className="text-end w-75 m-auto pb-5">
              Preu pressupostat: {total}€
            </h2>
          )}
        </div>
        <AskForBudget isSaving={isSaving}></AskForBudget>
      </BudgetProvider>
    </ServiceProvider>
  );
}

export default PrincipalPage;
