import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Jared's React Native App! </Text>
      <TouchableWithoutFeedback onPress={() => console.log("image tapped")}>
        <Image
          fadeDuration={3000}
          blurRadius={1}
          source={{
            width: 300,
            height: 400,
            uri: "https://picsum.photos/200/300?grayscale",
            // https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/530574_4379220372808_161015231_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=de6eea&_nc_ohc=a-93pWIc4rsAX-7TwGo&_nc_ht=scontent-mia3-2.xx&oh=00_AT-WC3nGDa_GaMFyPiufHRIHleu9SWtTbGkO3EhSmGWEkw&oe=62875FBB
          }}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
