import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text>Netflixson</Text>
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
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    backgroundColor: "green",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    flex: 2,
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "orange",
    width: "80%",
    alignItems: "flex-start",
  },
  viewRodape: {
    alignItems: "center",
    flex: 0.5,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "red",
    width: "80%",
  },
});
