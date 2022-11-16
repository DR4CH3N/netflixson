import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;

  const navigation = useNavigation();

  const LeiaMais = () => {
    // Alert.alert("vai!", "detalhes do filme...");
    navigation.navigate("Detalhes", { filme });
  };
  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
        }}
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title} </Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao} onPress={LeiaMais}>
            <Text style={estilos.textobotao}>
              <Ionicons name="book" size={14} color="5451a6" /> leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textobotao}>
              <Ionicons name="add-circle" size={14} color="5451a6" /> salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardFilme;

const estilos = StyleSheet.create({
  imagem: {
    height: 150,
    width: 100,
    flex: 1,
  },
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botao: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#5451a6",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  textobotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  corpo: {
    flex: 2,
  },
});
