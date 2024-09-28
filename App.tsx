import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid } from 'react-native';
import { FontAwesome, MaterialIcons }  from '@expo/vector-icons';
import { RoundedButton } from '@/components/RoundedButton';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'    
  },

  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7
  },

  form: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },

  formText: {
    fontWeight: "bold",
    fontSize: 16
    
  },

  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },

  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15
  },

  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "15%"
  },

  logoImage: {
    width: 100,
    height: 100
  },

  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold"
  },

  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  },

  formRegisterText: {
    fontStyle: "italic",
    color: "orange",
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    fontWeight: "bold",
    marginLeft: 10
  }

});
