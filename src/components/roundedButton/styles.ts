import { MyColors } from "@/theme/appTheme";
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 50,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },

    textNutton: {
        color:'white',
        fontWeight: 'bold'
    }

});