import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favoritos from "./src/screens/Favoritos";
import FormBusca from "./src/screens/FormBusca";
import Home from "./src/screens/Home";
import Privacidade from "./src/screens/Privacidade";
import Sobre from "./src/screens/Sobre";

const App = () => {
  /* Inicializando através de uma constante
  o gerenciador de navegação Stack (pilha de telas) */
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar />

      {/* O NavigationContainer deve envolver todas as telas
      navegáveis do nosso App. */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Home} name="Home" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
