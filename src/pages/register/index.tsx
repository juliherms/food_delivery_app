import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons }  from '@expo/vector-icons';
import { RoundedButton } from '@/components/roundedButton';
import { styles } from "./styles";

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
          <Image
            style={styles.imageBackground}
            source={ require('../../assets/cover.png') }
          />
    
          <View style={styles.logoContainer}>
            <Image
              source={ require('../../assets/icone_novo_usuario.png') }
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>SELECIONE UMA IMAGEM</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.formText}>REGISTRAR</Text>
            <View style={styles.formInput}>
              <FontAwesome  name="user" size={32} color="black" />
              <TextInput
                style={styles.formTextInput}
                placeholder='seu nome'
                keyboardType='default'
                />
            </View>
            <View style={styles.formInput}>
              <FontAwesome  name="user" size={32} color="black" />
              <TextInput
                style={styles.formTextInput}
                placeholder='seu e-mail'
                keyboardType='email-address'
                />
            </View>
            <View style={styles.formInput}>
              <MaterialIcons name="password" size={32} color="black" />
              <TextInput
                style={styles.formTextInput}
                placeholder='sua senha'
                keyboardType='default'
                secureTextEntry={true}
                />
            </View>
            <View style={{ marginTop: 30 }}>
              <RoundedButton text='Login' onPress={() => ToastAndroid.show("Olá",ToastAndroid.SHORT)} />
            </View>
          </View>
        </View>
      );
    }