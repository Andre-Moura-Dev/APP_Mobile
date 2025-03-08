import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

export function BarraSuperior() {
  return (
    <View style={styles.container}>
      <Image source={require('../../images/logo-min.png')} width={160} height={80} />

      <View style={styles.buttons}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <Image source={require('../../images/sanduiche.png')} width={20} height={20} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
            <Image source={require('../../images/lupa.png')} width={26} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


