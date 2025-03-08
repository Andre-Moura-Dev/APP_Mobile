import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BarraSuperior} from "../components/BarraSuperior/BarraSuperior";

export default function Index() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start"
        }}>
            <StatusBar translucent style="light" />
            <BarraSuperior />

            {/* <Text>Olá</Text>
            <TouchableOpacity onPress={() => 
                router.navigate("/modal")
            }><Text>Modal</Text></TouchableOpacity> */}
        </View>
    )
}