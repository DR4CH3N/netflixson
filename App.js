import {
  Button,
  Image,
  Pressable,
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
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>Buscar filmes!</Text>
        </Pressable>

        <Pressable style={estilos.botaoInicial}>
          <Text>Favoritos</Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable>
          <Text style={estilos.textoRodape}>Privacidade</Text>
        </Pressable>

        <Pressable>
          <Text style={estilos.textoRodape}>Sobre</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "gray",
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
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
    color: "white",
  },
  textoBotao: {
    color: "white",
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
    width: "100%",
    backgroundColor: "#5451a6",
  },
  textoRodape: {
    color: "white",
    padding: 16,
  },
});
