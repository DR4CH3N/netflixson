import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "./services/api";

const Resultados = ({ route }) => {
  /* usamos a prop route (do react navigation) para acessar os parametros desta rota de navegaçao e extrair os dados (neste caso, o filme) enviados para esta tela de resultaods */
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: "f627b1bce2605ba8ad0d24f2f55fcfc2",
            language: "pt-br",
            query: filme,
            include_adult: false,
          },
        });

        setResultados(resposta.data.results);
      } catch (error) {
        console.log("deu ruim na busca da API " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  console.log(resultados);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
      <View style={estilos.viewFilmes}>
        {resultados.map((resultado) => {
          return <Text key={resultado.id}> {resultado.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  viewFilmes: {
    marginVertical: 8,
  },
});
