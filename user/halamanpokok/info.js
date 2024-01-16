import * as React from 'react'
import { View, Image,StyleSheet, Text} from 'react-native'

const Info = () =>{
  return(
    <View>
      <Text style={styles.title}>Panduan penggunaan aplikasi RUSDACA</Text>
      <Image source={require("../../assets/info.png")} style={styles.info}/>
    </View>
  )
}
const styles = StyleSheet.create({
  info:{
    alignSelf:'center',
    marginTop:55
  },
  title:{
    alignSelf:'center',
    marginTop:30,
    fontSize:15,
    fontWeight:'bold'
  }
})
export default Info;
