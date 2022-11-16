import { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "./services/api";

import Loading from "../components/Loading";

import apiKey from "../../apiKey";
import CardFilme from "../components/CardFilme";

import ItemSeparador from "../components/ItemSeparador";
import ItemVazio from "../components/ItemVazio";

const Resultados = ({ route }) => {
  /* usamos a prop route (do react navigation) para acessar os parametros desta rota de navegaçao e extrair os dados (neste caso, o filme) enviados para esta tela de resultaods */
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);
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

        /* simulando tempo de carregamento lento usando temporizador setInterval */
        setInterval(() => {
          setLoading(false);
        }, 3000);

        setResultados(resposta.data.results);
      } catch (error) {
        console.log("deu ruim na busca da API " + error.message);
      }
    }
    buscarFilmes();
  }, []);
  // forma 1
  // if (loading) return <Loading />;
  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
      {/* forma 2 */}
      {/* caso loading for true, componente Loading será executado (operador evaluate, só pode ser usado no JSX) */}
      {loading && <Loading />}

      <View style={estilos.viewFilmes}>
        {!loading && (
          <FlatList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparador}
            ListEmptyComponent={ItemVazio}
            data={resultados}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        )}
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
