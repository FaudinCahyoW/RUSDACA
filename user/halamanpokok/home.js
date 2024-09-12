import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import {
  useNavigation,
} from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";


const Home = () => {
  const navigation = useNavigation();

  const [items, setItems] = React.useState([
    {
      title: "Profil PKK",
      image: require("../../assets/profil.png"),
      name: "/Profil",
    },
    {
      title: "Struktur Organisasi",
      image: require("../../assets/struktur.png"),
      onPress: () => navigation.replace('Struktur')
    },
    {
      title: "Masukkan Data",
      image: require("../../assets/entry.png"),
      onPress: () => navigation.replace('Entry'),
      style:styles.entry
    },
    {
      title: "Status Rumah",
      image: require("../../assets/status.png"),
      onPress: () => navigation.replace('StatusRumah')

    },
  ]);

  const handleImagePress = (item) => {
    if (item.onPress) {
      item.onPress();
    } else {
      console.warn(`Navigation not defined for item: ${item.title}`);
    }
  };

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      spacing={10}
      style={styles.gridView}
      renderItem={({ item }) => (
        <View
          style={[
            { backgroundColor: item.code },
          ]}
        >
          <TouchableOpacity
            style={styles.touch}
            onPress={() => handleImagePress(item)}
          >
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.itemName}>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  touch: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 0.5,
    height: 120,
    width: 130,
    alignSelf: "center",
    marginBottom: 100,
    backgroundColor: "white",
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },

  entry:{
    marginLeft:50
  },  

  itemName: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
    paddingTop: 7,
    alignSelf: "center",
  },
  image: {
    justifyContent: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
  },
  imageContainer: {
    display:"flex",
    justifyContent: "center",
    alignSelf: "center",
    width: 80,
    height: 80,
    backgroundColor: "#1FC4F4",
    borderRadius: 8,
  },
});

export default Home;
