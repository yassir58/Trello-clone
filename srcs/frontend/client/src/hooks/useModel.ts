import { useContext } from "react";
import { ModalsContext } from "../context/modalContext";

const useModel = () => useContext(ModalsContext);

export default useModel;
