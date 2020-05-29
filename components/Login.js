import React,{useState} from 'react';
import {
  Text, View,SafeAreaView,Image,TextInput, ScrollView,TouchableOpacity
} from 'react-native';
import {styles} from '../styles/Globalstyles'
import firebase from 'firebase'
import { color } from 'react-native-reanimated';


export default function Login({navigation})
{
const [email, setEmail] = useState("");
const [password,setPassword] = useState("")
const [Error,seterror] = useState("Email is not Registered")
fetchData=()=> {
  firebase.auth().signInWithEmailAndPassword(email,password)
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


btnLoginTapped = () => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+).{5,}$/;
  const regName = /^[^!-\/:-@\[-`{-~]*$/;
  var message = "";
  if (email.trim()==='') {
    alert('Email Must Not be Empty')
  } else if (reg.test(email.trim()) != true) {
    alert('Invalid Email')
  } else if (password.trim()==='') {
    alert('Password Must not be empty')
  } else if (regPassword.test(password.trim()) != true) {
    alert('Password Error')
  } else {
    fetchData(); 
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
          <Image source={require('../icons/Email.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="Email"
                keyboardType='default'
                onChangeText={(email) => setEmail(email)}
              />
          </View>
          <View style={styles.input}>
          <Image source={require('../icons/Password.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="Password"
                keyboardType='default'
                secureTextEntry={true}
                onChangeText={(Password) => setPassword(Password)}
              />
          </View>
          </View>
          <View style= {styles.buttonsView}>
          <TouchableOpacity  onPress={()=>btnLoginTapped()}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
          </View>
          <View style={{width:'80%',flexDirection:"row",justifyContent:'center'}}>
            <Text style={styles.additional} >Create An Account?   </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
            <Text style={styles.additionallink}>Signup</Text>
          </TouchableOpacity>
          </View>
    </SafeAreaView>
    </ScrollView>
  )
}
