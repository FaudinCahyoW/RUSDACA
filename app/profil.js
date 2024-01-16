import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Profil = () => {
  return (
    <View>
    <Image
        source={require("../../assets/profil.png")}
        style={styles.image}
      />
      <Text style={styles.title}>PKK DESA CANDINATA</Text>
      <Image
        source={require("../../assets/profilpkk.png")}
        style={styles.profil}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    image:{
        alignSelf:'center',
        marginTop:10
    },
    profil:{
      alignSelf:'center',
      marginTop:55
    },
    title:{
      alignSelf:'center',
      marginTop:5,
      fontSize:15,
      fontWeight:'bold'
    }
  })
export default Profil