import { createContext } from "react";

export const ServiceContext = createContext();

const ServiceProvider = ({ children, data }) => {
  return (
    <ServiceContext.Provider value={data}>{children}</ServiceContext.Provider>
  );
};

export default ServiceProvider;
