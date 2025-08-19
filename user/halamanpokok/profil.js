import React from "react"
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from "react-native";

const Profil = () => {
    return (
        <View style={styles.container}>
            <View style={styles.visi}>
                <Text style={styles.textvisi}>Visi</Text>
                <Text>Terwujudnya keluarga yang sehat, cerdas, mandiri, dan sejahtera melalui penguatan peran perempuan dalam keluarga dan masyarakat, peningkatan kualitas hidup yang berlandaskan nilai-nilai kebersamaan dan gotong royong, serta menciptakan lingkungan yang harmonis, adil, dan berkelanjutan untuk mendukung tercapainya kesejahteraan bersama di seluruh lapisan masyarakat.</Text>
            </View>

            <View style={styles.misi}>
                <Text style={styles.textmisi}>Misi</Text>
                <Text>Meningkatkan kualitas hidup keluarga melalui pemberdayaan di bidang pendidikan, kesehatan, dan ekonomi, serta memperkuat nilai gotong royong dan solidaritas sosial untuk menciptakan masyarakat yang sejahtera dan mandiri.</Text>
            </View>
        </View>
    )
}

export default Profil;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },

    visi:{
        borderColor:"black",
        borderWidth:1,
        padding:10,
        margin:10,
        borderRadius:5,
        marginTop:40
    },
    textvisi:{
        textAlign:"center",
        marginBottom:5,
        fontSize:24
    },
    misi:{
        borderColor:"black",
        borderWidth:1,
        padding:10,
        margin:10,
        borderRadius:5,
        marginTop:40
    },
    textmisi:{
        textAlign:"center",
        marginBottom:5,
        fontSize:24
    },



})