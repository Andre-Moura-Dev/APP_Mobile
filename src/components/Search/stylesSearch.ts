import { StyleSheet } from "react-native"
import { colors } from "../../styles/Color";
import { Font } from "../../styles/FontFamily";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: 60,
      padding: 8,
      zIndex: 1,
    },
    input: {
        color: colors.primaryFontColor,
        fontFamily: Font.medium,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 17,
    },
    // button: {
    //    gap: 8,
    //    justifyContent: 'center',
    //    alignItems: 'flex-end',
    //    textAlign: 'center',
    //    flexDirection: 'row',
    // },
    icon: {
       width: 20,
       height: 32
    },

  });