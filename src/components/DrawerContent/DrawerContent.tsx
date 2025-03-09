import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles} from "./stylesDrawerContent";

type DrawerProps = {
    closePage: () => void
}

export function DrawerContent({closePage}: DrawerProps) {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Link href={"/"} onPress={closePage} >Home</Link>                
            </View>
            <View style={styles.options}>
                <View style={styles.label}>
                    <Text>Empresa</Text>
                </View>

                <View style={styles.label}>
                    <Link href={"/contatos"} onPress={closePage}>Contatos</Link>
                </View>
            </View>
        </View>
    )
}