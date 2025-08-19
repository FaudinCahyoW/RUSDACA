import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, Alert, TouchableOpacity,  ScrollView } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import { useNavigation } from "@react-navigation/native";

const StatusRumah = () => {
    const navigation = useNavigation();
    const [rumahData, setRumahData] = useState([]);  // Menyimpan data array rumah
    const [tableHead] = useState(['Nama Lengkap', 'Status Rumah', 'Action']); // Header tabel

    useEffect(() => {
        statusData();
    }, []);

    const statusData = async () => {
        try {
            const dataResponse = await axios.get(`https://api.rusdaca.com/data/ambildata`);
            const dataRumah = dataResponse.data.data;
            setRumahData(dataRumah);  // Menyimpan seluruh data
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to fetch data');
        }
    }

    // Mengonversi data rumah menjadi format untuk Rows
    const tableData = rumahData.map(item => [
        item.nama_lengkap, 
        item.status,
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('EditData', { rand: item.rand })} // Navigasi ke halaman EditData
        >
            <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
    ]);

    return (
        <ScrollView style={styles.containerRumah}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Row data={tableHead} style={styles.header} textStyle={styles.headerText} />
                <Rows data={tableData} textStyle={styles.text} />
            </Table>
        </ScrollView>
    );
};

export default StatusRumah;

const styles = StyleSheet.create({
    containerRumah: {
        flexGrow: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 50,
        backgroundColor: '#f1f1f1'
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        margin: 6,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        width: 70,
        margin: 20,


    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign:"center"
    },
});
