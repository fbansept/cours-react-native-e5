import { Image, Pressable, Text, View } from "react-native";
import AppArticleCardStyles from "./AppArticleCardStyles";

export default ({ onPress, article }) => {
  const styles = AppArticleCardStyles();

  return (
    <Pressable style={[styles.container, { margin: 10 }]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: article.photos[0] }}
          cachePolicy="memory-disk"
          style={styles.image}
        />
      </View>
      <Text>{article.titre}</Text>
      <Text>{article.prix}€</Text>
    </Pressable>
  );
};
