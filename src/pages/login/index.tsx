import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons }  from '@expo/vector-icons';
import { RoundedButton } from '@/components/roundedButton';
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

export const LoginScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
          <Image
            style={styles.imageBackground}
            source={ require('../../assets/cover.png') }
          />
    
          <View style={styles.logoContainer}>
            <Image
              source={ require('../../assets/logo.png') }
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>Food APP</Text>
          </View>
    
          <View style={styles.form}>
            <Text style={styles.formText}>ENTRAR</Text>
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
    
            <View style={styles.formRegister}>
              <Text>Você ainda não tem uma conta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} >
                <Text style={styles.formRegisterText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }