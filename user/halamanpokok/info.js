<<<<<<< HEAD
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
=======
import * as React from 'react'
import { View, Image,StyleSheet, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Info = () =>{
  return(
    <ScrollView>
      <Text style={styles.title}>Panduan Penggunaan Aplikasi RUSDACA</Text>
      <Image source={require("../../assets/info.png")} style={styles.info}/>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  info:{
    alignSelf:'center',
    marginTop:5
  },
  title:{
    alignSelf:'center',
    marginTop:5,
    fontSize:15,
    fontWeight:'bold'
  }
})
export default Info;
>>>>>>> 8052cfa (Initial commit)
