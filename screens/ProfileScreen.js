import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import Firebase from '../firebase';



export default class ProfileScreen extends React.Component {

    signOutUser = () => {
        Firebase.auth().signOut();
    };
    render() {
        return (
            <View style={styles.container}>
         <StatusBar hidden/>

                <Text>Profile </Text>
                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});