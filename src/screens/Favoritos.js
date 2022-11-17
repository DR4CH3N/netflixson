import { Alert, Button, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const filmes = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(filmes);
        }
        console.log(dados);
      } catch (error) {
        console.log("boa sorte resolvendo isso: " + error.message);
      }
    }

    carregarFavoritos();
  }, []);

  const excluirFavoritos = async () => {
    await AsyncStorage.removeItem("@favoritos");
    setListaFavoritos([]);
    Alert.alert("Favoritos", "Favoritos excluidos!");
  };
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <Text>Quantidade: {listaFavoritos.length} </Text>
        <Button title="Excluir favoritos" onPress={excluirFavoritos}></Button>

        {listaFavoritos.map((filmeFavorito) => {
          return (
            <Pressable style={estilos.itemFilme}>
              <Text key={filmeFavorito.id}>Titulo: {filmeFavorito.title}</Text>
              <Pressable style={estilos.botaoExcluir}>
                <Ionicons name="trash" size={24} color={"black"} />
              </Pressable>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "light-red",
    padding: 12,
  },
});
