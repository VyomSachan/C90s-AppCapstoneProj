import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Home_Page extends Component {
    render(){
        return(
            <SafeAreaView style={styles.androidSafeArea}>
                <View>
                    <Text>Nature Updates</Text>
                </View>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate("Upcoming_Events")}
                >
                    <Text> Upcoming Events </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate("Past_Deeds")}
                >
                    <Text> Past Deeds </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3E5AB"
    },
    androidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    sectionStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#333333",
    },
})