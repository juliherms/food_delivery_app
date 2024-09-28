import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles";


interface Props {
    text: string
}

export const RoundedButton = ({ text }: Props) => {
    return (
        <TouchableOpacity 
            style={styles.roundedButton}
            onPress={() => {}}
        >
            <Text style={styles.textNutton}>{ text }</Text>
        </TouchableOpacity>
    )
}
