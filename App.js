import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import Favoritos from "./src/screens/Favoritos";
import FormBusca from "./src/screens/FormBusca";
import Sobre from "./src/screens/Sobre";

import Home from "./src/screens/Home";
import Privacidade from "./src/screens/Privacidade";

const App = () => {
  return (
    /* opções para o barstyle: dark-content, light-content ou default */
    <>
      <StatusBar barStyle={"dark-content"} />
      <Favoritos />
      <FormBusca />
      <Sobre />
      <Privacidade />
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
