import { router } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BarraSuperior} from "../components/BarraSuperior/BarraSuperior";

export default function Index() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
        }}>

            <Text>Olá</Text>
        </View>
    )
}