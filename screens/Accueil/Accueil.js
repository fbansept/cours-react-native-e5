import { FlatList, Text, View } from "react-native";
import AppStyles from "../../AppStyles";
import { useEffect, useState } from "react";
import AppArticleCard from "../../components/AppArticleCard/AppArticleCard";
import * as SecureStore from "expo-secure-store";

export default () => {
  const [listeArticle, setListeArticle] = useState([]);

  useEffect(() => {
    fetch("http://192.168.43.168:4000/offres", {
      headers: { Authorization: "Bearer " + SecureStore.getItem("jwt") },
    })
      .then((result) => result.json())
      .then((result) => setListeArticle(result));
  }, []);

  const appStyles = AppStyles();

  if (listeArticle.length > 0) {
    return (
      <View style={[appStyles.container, appStyles.safeArea]}>
        <FlatList
          horizontal={true}
          data={listeArticle}
          renderItem={({ item }) => <AppArticleCard article={item} />}
          keyExtractor={(item) => item._id}
        />
      </View>
    );
  } else {
    <Text>Liste vide</Text>;
  }
};
