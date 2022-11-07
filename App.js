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
import { Ionicons } from "@expo/vector-icons";
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

      {/* pressable é um componente generico que permite a criação de botões (ou qualquer outra coisa pressionavel) customizados */}
      <View style={estilos.viewBotoes}>
        <Pressable style={estilos.botaoInicial}>
          <Ionicons name="search-circle" size={24} color="white" />
          <Text style={estilos.textoBotao}>Buscar filmes!</Text>
        </Pressable>

        <Pressable style={estilos.botaoInicial}>
          <Ionicons name="star" size={24} color="gold" />
          <Text style={estilos.textoBotao}>Favoritos</Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable>
          <Ionicons name="lock-closed" size={24} color="black" />
          <Text style={estilos.textoRodape}>Privacidade</Text>
        </Pressable>

        <Pressable>
          <Ionicons name="information-circle" size={24} color="black" />
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
