import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./stylesSearch";

export function Search() {
    const [text, setText] = useState("");

    function ClearSearch() {
        if(text != null) {
            setText("")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Pesquise Aqui"
                value={text}
                onChangeText={(text) => setText(text)}
            />
            <TouchableOpacity onPress={() => {ClearSearch()}} activeOpacity={0.8}>
                <Image source={require('../../assets/X.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}