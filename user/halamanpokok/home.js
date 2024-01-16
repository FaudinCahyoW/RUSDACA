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
import {useRouter} from 'expo-router'
import {Profil} from "./profil"

const Home = () => {
  const router = useRouter()

  const [items, setItems] = React.useState([
    {
      title: "Profil PKK",
      image: require("../../assets/profil.png"),
      name: "/Profil",
    },
    {
      title: "Struktur Organisasi",
      image: require("../../assets/struktur.png"),
    },
    {
      title: "Masukkan Data",
      image: require("../../assets/entry.png"),
    },
    {
      title: "Status Rumah",
      image: require("../../assets/status.png"),
    },
  ]);

  const handleImagePress = (item) => {
    if (item.name) {
      navigation.navigate(item.name);
    }
  };

  return (
      <FlatGrid
        itemDimension={130}
        data={items}
        spacing={10}
        style={styles.gridView}
        renderItem={({ item}) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <TouchableOpacity
              style={styles.touch}
              onPress={()=> router.push({pathname: '/profil'})}
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
  imagecontainer: {
    justifyContent: "center",
    alignSelf: "center",
    width: 80,
    height: 80,
    backgroundColor: "#1FC4F4",
    borderRadius: 8,
  },
});

export default Home;
