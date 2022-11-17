import { formataData } from "../utils/funcoes";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";

import FotoAlternativa from "../../assets/images/foto-alternativa.jpg";
/* Prop de route para acesso aos dados trafegados
entre a navegação entre as telas/rotas */
const Detalhes = ({ route }) => {
  // console.log(route);

  /* Extraindo dos parametros da rota os 
  dados do objeto filme */
  const { filme } = route.params;

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          /* operador ternario pois if/else não funciona em componentes */
          source={
            filme.backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
                }
              : FotoAlternativa
          }
        >
          <Text style={estilos.titulo}>{filme.title}</Text>
        </ImageBackground>
        <View style={estilos.conteudo}>
          <ScrollView>
            <Text>
              Avaliação: {filme.vote_average} | Lançamento:{" "}
              {formataData(filme.release_date)}
            </Text>
            <Text style={estilos.descricao}>
              {filme.overview || "sem descrição"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: {
    flex: 1,
    /* aplicado aqui pois no iOS não funciona direto na SafeAreaView */
    padding: 8,
  },
  imagem: {
    height: 200,
    justifyContent: "center",
  },
  conteudo: {
    padding: 16,
    flex: 1, // necessario pro scrollview funcionar
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
  titulo: {
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
  },
});