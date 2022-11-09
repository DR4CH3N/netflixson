import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const FormBusca = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.texto}>Scarface? Star wars? blade runner?</Text>
      <Text style={estilos.texto}>
        Localize um filme que você viu ou gostaria de ver!
      </Text>

      <View style={estilos.viewForm}>
        <Ionicons name="film" size={44} color="black" />
        <TextInput style={estilos.campo} placeholder="pesquise aqui o filme" />
      </View>

      <View style={estilos.viewBotoes}>
        <Button style={estilos.botao} color="#5451a6" title="Pesquisar filme" />
      </View>
    </SafeAreaView>
  );
};

export default FormBusca;

const corPrimaria = "#5451a6";

const estilos = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  texto: {
    paddingVertical: 8,
  },
  viewForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  campo: {
    borderWidth: 1,
    padding: 8,
    // width: "80%",
    flex: 0.9,
  },
});
