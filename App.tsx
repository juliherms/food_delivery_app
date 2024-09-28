import { Text, View, Image, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons }  from '@expo/vector-icons';
import { RoundedButton } from '@/components/roundedButton';
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={ require('./src/assets/cover.png') }
      />

      <View style={styles.logoContainer}>
        <Image
          source={ require('./src/assets/logo.png') }
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
          <RoundedButton text='Login' />
        </View>

        <View style={styles.formRegister}>
          <Text>Você ainda não tem uma conta?</Text>
          <Text style={styles.formRegisterText}>Cadastrar</Text>
        </View>
        
      </View>
    </View>
  );
}