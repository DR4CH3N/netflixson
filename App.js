import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import logo from "./assets/images/logo.png";
const App = () => {
  const [fonteCarregada] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  /* a condicional abaixo serve apenas para dar um tempo suficiente para o carregamento do arquivo de fonte antes do return do componente. */
  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.tituloApp}>Netflixson</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Button title="Buscar filmes" />
        <Button title="Favoritos" />
      </View>

      <View style={estilos.viewRodape}>
        <Button title="Privacidade" />
        <Button title="Sobre" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
  },
  tituloApp: {
    fontFamily: "monoton",
    fontSize: 36,
    color: "#5451a6",
    // fontWeight: "bold",
  },
  logo: {
    width: 128,
    height: 128,
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    flex: 2,
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "80%",
    alignItems: "flex-start",
  },
  viewRodape: {
    alignItems: "center",
    flex: 0.5,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
});
