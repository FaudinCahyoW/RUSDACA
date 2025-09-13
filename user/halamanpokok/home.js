import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";
const { width } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();

  const [items, setItems] = React.useState([
    {
      title: "Profil PKK",
      image: require("../../assets/profil.png"),
      onPress: () => navigation.navigate("Profil"),
    },
    {
      title: "Struktur Organisasi",
      image: require("../../assets/struktur.png"),
      onPress: () => navigation.navigate("Struktur"),
    },
    {
      title: "Masukkan Data",
      image: require("../../assets/entry.png"),
      onPress: () => navigation.replace("Entry"),
    },
    {
      title: "Status Rumah",
      image: require("../../assets/status.png"),
      onPress: () => navigation.navigate("StatusRumah"),
    },
  ]);

  const handleImagePress = (item) => {
    if (item.onPress) {
      // Handle navigation for items with defined onPress
      item.onPress();
    } else {
      // Handle potential fallback or error message (optional)
      console.warn(`Navigation not defined for item: ${item.title}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source = {require("../../assets/Logo.png")} 
          style={styles.logo}
        />
        <Text style={styles.welcome}> Selamat Datang di Aplikasi RUSDACA</Text>
      </View>
      <FlatGrid
        itemDimension={150}
        data={items}
        spacing={10}
        style={styles.gridView}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent:"space-evenly"
        }}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => handleImagePress(item)}
            >
              <View style={styles.imagecontainer}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.itemName}>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridView: {
    flex: 1,
    marginTop: 10,
  },
  touch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",

    // shadow
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemName: {
    fontSize: 14,
    color: "black",
    fontWeight: "600",
    paddingTop: 7,
    textAlign: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  imagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    backgroundColor: "#1FC4F4",
    borderRadius: 8,
  },
  header: {
    alignItems: "center",
    paddingVertical: 15,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 5,
    resizeMode: "contain",
  },
  welcome: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
});


export default Home;
