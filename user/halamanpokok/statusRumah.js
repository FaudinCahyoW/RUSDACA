import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, StyleSheet } from "react-native";

const StatusRumah = () => {
    const navigation = useNavigation();
    const [rumah, setRumah] = useState("")

    useEffect(() => {
        statusData()
    }, [])

    const statusData = async () => {
        const token = await AsyncStorage.getItem('token')
        try {
            if (token) {
                const res = await axios.get('http://api.rusdaca.com/auth/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                const pengguna = res.data.user;

                try {
                    const dataResponse = await axios.get(`http://api.rusdaca.com/data/ambildata/${pengguna.nik}`,
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        }
                    )
                    const dataRumah = dataResponse.data.data;
                    setRumah(dataRumah.status)

                } catch (error) {
                    console.error(error)
                }
            }

        } catch (dataError) {
            if (dataError.response?.status === 401) {
                console.error('Unauthorized: Token invalid atau expired.');
                Alert.alert('Token tidak valid atau kadaluarsa', 'Silahkan login kembali.');
                navigation.replace('Login');
            } else {
                console.error('Error fetching user data:', error);
                Alert.alert('Terjadi kesalahan', 'Silahkan coba lagi nanti.');
            }
        }
    }
    return (
        <View style={styles.containerRumah}>
                <Image style={styles.image} source={require("../../assets/status.png")}/>
            <View style={styles.styleRumah}>
                <Text style={styles.textRumah}>{rumah}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerRumah: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        height:"100%", 
    },
    styleRumah:{
        textAlign:"center",
        marginTop:20,
    },
    image:{
        height:100,
        width:100
    },
    textRumah:{
        fontSize:25
    }
})

export default StatusRumah