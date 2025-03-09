import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#113d3b',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      width: '100%',
      height: 160,
      padding: 5,
      paddingBottom: 40,
    },
    buttons: {
      gap: 8,
      justifyContent: 'center',
      alignItems: 'flex-end',
      textAlign: 'center',
      flexDirection: 'row',
    },
    icon: {
      width: 50,
      height: 50
    },
    iconLupa: {
      width: 50,
      height: 50,
      marginBottom: 6
   },
   logoContainer: {
      justifyContent: "center",
      alignItems: "center",
   },
   logo: {
      // width: 70,
      // height: 40,
      // paddingLeft: 10
   }
});