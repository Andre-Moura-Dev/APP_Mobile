import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./stylesBarraSuperior";
import { useState } from 'react';
import { Search } from '../Search/Search';

type BarraSuperiorProps = {
  openDrawer: () => void
}

export function BarraSuperior({openDrawer}: BarraSuperiorProps) {

  const [searchField, setSearchField] = useState(false);

  function OpenSearch() {
    if(searchField == false) {
        setSearchField(true);
    } else {
        setSearchField(false);
    }
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo-min.png')} style={styles.logo} />
      </View>
      

      <View style={styles.buttons}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {openDrawer()}}>
            <Image source={require('../../assets/sanduiche.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => {OpenSearch()}}>
            <Image source={require('../../assets/lupa.png')} style={styles.iconLupa} />
        </TouchableOpacity>
      </View>
    </View>

    {
      searchField == true ? <Search /> : null
    }

    </>
    
  );
}


