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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Connexion from "./screens/Connexion/Connexion";
import * as SecureStore from "expo-secure-store";
import Inscription from "./screens/Inscription/Inscription";

export default () => {
  const [connecte, setConnecte] = useState(SecureStore.getItem("jwt") != null);

  const onConnexion = (data) => {
    fetch("http://192.168.43.168:4000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((result) => result.json())
      .then((result) => {
        SecureStore.setItem("jwt", result.jwt);
        setConnecte(true);
      });
  };

  const onInscription = (data) => {
    console.log(data);
  };

  const onDeconnexion = () => {
    SecureStore.deleteItemAsync("jwt");
    setConnecte(false);
  };

  const NavigationPrincipale = createBottomTabNavigator();
  const NavigationConnexion = createNativeStackNavigator();

  const EcransConnexions = () => {
    const ConnexionProps = () => (
      <Connexion onConnexion={onConnexion}></Connexion>
    );

    const InscriptionProps = () => (
      <Inscription onInscription={onInscription}/>
    );

    return (
      <NavigationConnexion.Navigator>
        <NavigationConnexion.Screen
          component={ConnexionProps}
          name="connexion"
        />
        <NavigationConnexion.Screen
          component={InscriptionProps}
          name="inscription"
        />
      </NavigationConnexion.Navigator>
    );
  };

  const EcransPrincipaux = () => {
    const styles = AppStyles();

    const ProfilProps = () => <Profil onDeconnexion={onDeconnexion} />;

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
          component={ProfilProps}
        />
      </NavigationPrincipale.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        {connecte ? <EcransPrincipaux /> : <EcransConnexions />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
