import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FotoAlternativa from "../../assets/images/foto-alternativa.jpg";
// importa o AsyncStorage do expo. NÃO USE do react-native padrão
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;

  const navigation = useNavigation();

  const LeiaMais = () => {
    // Alert.alert("vai!", "detalhes do filme...");
    navigation.navigate("Detalhes", { filme });
  };

  const salvar = async () => {
    // return Alert.alert("favoritos", "salvando...");
    /* Etapa para uso do asyncStorage */
    // 1) carregamento do storage do aparelho (se houver, caso contrario retorna null)
    const filmesFavoritos = await AsyncStorage.getItem("@favoritos");

    // 2) havendo storage previo, transformamos os dados do filme em objeto e os guardamos numa lista (array) pois não podemos usar string para trazer dados
    let listaDeFilmes = JSON.parse(filmesFavoritos);
    // 3) se a lista for undefined/indefinida, vamos inicia-la com um array vazio
    if (!listaDeFilmes) {
      listaDeFilmes = [];
    }
    // 4) adicionamos os dados do filme na lista (array)
    listaDeFilmes.push(filme);

    // 5) finalmente, salvamos no storage do dispositivo
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeFilmes));

    Alert.alert("favoritos", "filme salvo com sucesso!");
  };
  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        source={
          poster_path
            ? {
                uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
              }
            : FotoAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title} </Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao} onPress={LeiaMais}>
            <Text style={estilos.textobotao}>
              <Ionicons name="book" size={14} color="5451a6" /> leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao} onPress={salvar}>
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
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#5451a6",
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
