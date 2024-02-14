import { createContext } from "react";

const ServiceContext = createContext([
  {
    title: null,
    description: null,
    price: null,
    form: false,
  },
]);

export default ServiceContext;
