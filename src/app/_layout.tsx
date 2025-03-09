import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, DrawerLayoutAndroid } from "react-native";
import { BarraSuperior } from "../components/BarraSuperior/BarraSuperior";
import { 
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold
} from "@expo-google-fonts/montserrat";
import { colors} from "../styles/Color";
import { useRef } from "react";
import { DrawerContent } from "../components/DrawerContent/DrawerContent";

export default function Layout() {

    const drawer = useRef<DrawerLayoutAndroid>(null)
    const navigation = () => (
        <DrawerContent closePage={() => drawer.current?.closeDrawer()} />
    )

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold
    })

    if(!fontsLoaded) {
        return <ActivityIndicator style={{ flex: 1, alignItems: "center", justifyContent: "center", }} color={colors.primaryColor} size={50} />
    }

    return (
        <DrawerLayoutAndroid 
            ref={drawer}
            drawerWidth={265}
            drawerPosition="right"
            renderNavigationView={navigation}
        >
        <StatusBar translucent style="light" />
        <BarraSuperior openDrawer={() => drawer.current?.openDrawer()} />
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#f4f4f4"
                }
            }}
        />
        </DrawerLayoutAndroid>
    )
}