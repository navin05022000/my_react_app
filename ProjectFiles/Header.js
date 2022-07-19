import React from "react";
import { StyleSheet, Text, View, Image } from "react-native-web";
import logo from '../assets/logo.png';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Image source={logo} style={{ width:50, height:50 }} />
            <View>
                <Text style={styles.titleText}>
                    {props.headerDisplay}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        widht: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
      }
})