import * as React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

const Struktur = () =>{
    const [items, setItems] = React.useState([
        {
            title:"Ketua",
            image: require("../../assets/avatar.png"),
            nama:"ibu xxxxxx"
        },
        {
            title:"Sekretaris I",
            image: require("../../assets/avatar.png"),
            nama:"ibu xxxxxx"
        },
        {
            title:"Sekretaris II",
            image: require("../../assets/avatar.png"),
            nama:"ibu xxxxxx"
        },
        {
            title:"Bendahara",
            image: require("../../assets/avatar.png"),
            nama:"ibu xxxxxx"
        },
        {
            title:"Ketua Bidang",
            image: require("../../assets/avatar.png"),
            nama:"ibu xxxxxx"
        },
        {
            title:"Ketua Bidang",
            image: require("../../assets/avatar.png"),
            nama:"ibu xxxxxx"
        },
    ])

    return(
      <>
        <FlatGrid
            itemDimension={130}
            data={items}
            spacing={10}
            style={styles.gridView}
            renderItem={({item})=> (
                <View style={styles.container}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                    <Image source={item.image} style={styles.image}/>
                    <Text style={styles.nama}>{item.nama}</Text>
                </View>
            )}
        />
      </>
    )
}

const styles = StyleSheet.create({
    gridView:{
        flex: 1,    
        marginTop:10
    },
    container: {
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      flex:1,
      padding:5,
      marginBottom:40,
      marginTop:18,
      height:145,
      width:130,
      backgroundColor:'#ededed',
      borderRadius:6,
      shadowColor: '#000',
      shadowOffset: {width:2, height:2},
      shadowOpacity: 0.4,
      shadowRadius: 0.8,
    },
    nama:{
      marginTop:5,
      marginBottom:5
    },
    title:{
      fontSize:12,
      marginTop:5,
      marginLeft:10,
    },
    titleContainer:{
      width:130,
      backgroundColor:'#A6CE38',
      height:26,
      borderRadius:6
    },
    image:{
      marginTop:5
    }
})
export default Struktur