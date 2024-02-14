import ServiceContext from "../context/ServiceContext";
import ServiceCard from "../components/ServiceCard";
import { Container } from "react-bootstrap";
import "../styles/principalPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AskForBudget from "../components/AskForBudget";
import BudgetsInProgress from "../components/BudgetsInProgress";
import BudgetProvider from "../context/BudgetProvider";

function PrincipalPage() {
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

  const [total, setTotal] = useState(0);

  const [serviceDataArray, setServiceDataArray] = useState([]);

  return (
    <ServiceContext.Provider
      value={{ serviceData, total, setTotal, serviceDataArray }}
    >
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
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            setServiceDataArray={setServiceDataArray}
            serviceDataArray={serviceDataArray}
          >
            {" "}
          </ServiceCard>
        ))}
        <div>
          <h2 className="text-end w-75 m-auto pb-5">
            Preu pressupostat: {total}€
          </h2>
        </div>
        <AskForBudget></AskForBudget>
      </BudgetProvider>
    </ServiceContext.Provider>
  );
}

export default PrincipalPage;
