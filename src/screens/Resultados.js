import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "./services/api";

import apiKey from "../../apiKey";

const Resultados = ({ route }) => {
  /* usamos a prop route (do react navigation) para acessar os parametros desta rota de navegaçao e extrair os dados (neste caso, o filme) enviados para esta tela de resultaods */
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);
  /* assim que entrarmos em resultado, é executada a função async buscarFilmes que por sua vez através do axios executa */

  useEffect(() => {
    async function buscarFilmes() {
      try {
        /* aguardamos a resposta da consulta GET ao endpoint "search/movie" da api. observe que este endpoint precisa de parametros para a execução correta da consulta. estes parametros DEVEM ter o mesmo nome indicado na documentação do endpoint/api */
        const resposta = await api.get("/search/movie", {
          params: {
            /* api key deve ser criado aqui, por uma string ou função (não irá pro github) */
            api_key: apiKey,
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
