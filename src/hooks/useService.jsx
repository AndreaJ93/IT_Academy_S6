import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";

const useService = () => useContext(ServiceContext);

export default useService;
