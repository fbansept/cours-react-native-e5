import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Accueil from "./screens/Accueil/Accueil";
import Chercher from "./screens/Chercher/Chercher";
import Vendre from "./screens/Vendre/Vendre";
import Message from "./screens/Message/Message";
import Profil from "./screens/Profil/Profil";
import { Icon } from "@rneui/base";
import AppStyles from "./AppStyles";

export default () => {
  const NavigationPrincipale = createBottomTabNavigator();

  const App = () => {
    const styles = AppStyles();

    return (
      <NavigationPrincipale.Navigator>
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="home" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="accueil"
          component={Accueil}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return (
                <Icon
                  type="font-awesome-5"
                  size={19}
                  name="search"
                  color={color}
                ></Icon>
              );
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="chercher"
          component={Chercher}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="euro" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="vendre"
          component={Vendre}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="email" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="message"
          component={Message}
        />
        <NavigationPrincipale.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon type="material" name="face" color={color}></Icon>;
            },
            tabBarActiveTintColor: styles.itemMenuActive.color,
            tabBarInactiveTintColor: styles.itemMenuInactive.color,
          }}
          name="profil"
          component={Profil}
        />
      </NavigationPrincipale.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <App></App>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
