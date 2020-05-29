import React,{useState} from 'react';
import {
  Text, View,SafeAreaView,Image,TextInput, ScrollView,TouchableOpacity, Alert
} from 'react-native';
import {styles} from '../styles/Globalstyles'
import firebase from 'firebase'
import 'firebase/firestore';
import FirebaseConnectivity from '../utils/firebaseAuth.js'

FirebaseConnectivity();
export default function Signup({navigation})
{
  const [username, setUser] = useState("");
  const [Password, setPassword] = useState(" ");
  const [ConfirmPassword, setCPassword] = useState("");
  const [email, setEmail] = useState(" ");
  const [Error,seterror] = useState("Email Already Exist")

storeData=()=> {
    firebase.auth().createUserWithEmailAndPassword(email,Password)
    .then(()=>
    {
      alert('Welcome to the Application')
      navigation.navigate('Dash')
      
    })
    .catch(()=>{
      alert(Error)
    }
    )
  }


  btnSignUpTapped = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+).{5,}$/;
    const regName = /^[^!-\/:-@\[-`{-~]*$/;
    var message = "";
    if (username.trim()==='') {
      alert('Username Must Not be Empty')
    } else if (regName.test(username.trim()) != true) {
      alert('Choose Correct Username')
    } else if (Password.trim()==='') {
      alert('Password Must not be empty')
    } else if (regPassword.test(Password.trim()) != true) {
      alert('Password Error')
    } else if (ConfirmPassword.trim()==='') {
      alert('Confirm Your Password')
    } else if (regPassword.test(ConfirmPassword.trim()) != true) {
      alert('Confirm Password Error')
    } else if (ConfirmPassword != Password) {
      alert('Password Did not Match')
    } else if (email.trim()==='') {
      alert('Email Must Not be Empty')
    } else if (reg.test(email.trim()) != true) {
      alert('Email must be abc@abc.com')
    }else {
      storeData(); 
    }
  };


  return(
    <ScrollView>
    <SafeAreaView style ={styles.container}>
      <View style={{flex:0.3}}>
      <Image source={require('../icons/MainLogo.png')} style={styles.logo}/>
      </View>
          <View style ={styles.view}>
          <View style={styles.input}>
          <Image source={require('../icons/Username.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="UserName"
                keyboardType='default'
                onChangeText={(username) => setUser(username)}
              />
          </View>

          <View style={styles.input}>
          <Image source={require('../icons/Password.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="Password"
                keyboardType='default'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
          </View>

          <View style={styles.input}>
          <Image source={require('../icons/Password.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="Confirm Password"
                keyboardType='default'
                secureTextEntry={true}
                onChangeText={(Cpassword) => setCPassword(Cpassword)}
              />
          </View>

          <View style={styles.input}>
          <Image source={require('../icons/Email.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="Email"
                keyboardType='default'
                onChangeText={(Email) => setEmail(Email)}
              />
          </View>
         
          </View>
          <View style= {styles.buttonsView}>
          <TouchableOpacity onPress={()=>btnSignUpTapped()}>
            <Text style={styles.button}>Signup</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:'80%',flexDirection:"row",justifyContent:'center'}}>
            <Text style={styles.additional}>Already Have An Account?   </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.additionallink}>Login</Text>
          </TouchableOpacity>
          </View>
    </SafeAreaView>
    </ScrollView>
  )
}
