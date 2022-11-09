import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const FormBusca = () => {
  // captura em tempo real do que é digitado no textInput através do evento onChangeText
  const filmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  };
  /* Hook useState para monitorar/armazenar o filme que será buscado a partir do formulario */
  const [filme, setFilme] = useState();

  /* função chamada toda vez que o botão for pressionado (usamos a prop onPress do button) */
  const burcarFilmes = () => {
    /* se filme (gerenciado pelo useState) estiver vazio/undefined/false */
    if (!filme) {
      return Alert.alert("Ops!", "Você deve digitar um filme!");
    }

    Alert.alert("Você procurou por: ", filme);
  };

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.texto}>Scarface? Star wars? blade runner?</Text>
      <Text style={estilos.texto}>
        Localize um filme que você viu ou gostaria de ver!
      </Text>

      <View style={estilos.viewForm}>
        <Ionicons name="film" size={44} color="black" />
        <TextInput
          style={estilos.campo}
          placeholder="pesquise aqui o filme"
          onChangeText={filmeDigitado}
        />
      </View>

      <View style={estilos.viewBotoes}>
        <Button
          style={estilos.botao}
          color="#5451a6"
          title="Pesquisar filme"
          onPress={burcarFilmes}
        />
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
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    // width: "80%",
    flex: 0.9,
  },
});
