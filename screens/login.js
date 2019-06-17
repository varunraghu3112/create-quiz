import React,{Component} from 'react'
import {Text,View,TextInput,TouchableOpacity,AsyncStorage} from 'react-native'
import axios from 'axios'
import entry from '../app/index'
class Login extends Component{
    constructor(props){
        super(props);
        this.state={text:'',display:'',store:''}
    }
    static navigatorStyle = {
        navBarHidden:true
    }
    change2 = (email) => {
        this.setState({email})
    }
    change3 = (password) => {
        this.setState({password})
    }
    
    render()
    {   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return(
        <View style={{flex:1,flexDirection: 'column',
        justifyContent: 'center',backgroundColor:'#3a3b3b'}}>
        <Text style={{fontSize:40,fontWeight:"bold",fontStyle:"italic",marginLeft:'28%',marginBottom:'5%',color:'#b8babb'}}>WELCOME</Text>
        <View style={styles.cardstyle}>
            <Text style={{marginTop:'5%',marginLeft:'2%',fontSize:20,fontWeight:"bold",fontStyle:"italic",}}>Enter a valid Email:</Text>
            <TextInput style={{height:45,borderColor:'black',width:'100%',borderWidth:0,marginLeft:'2%'}} 
                    type='email' placeholder={'Email'} onChangeText={this.change2}/> 
            <Text  style={{marginTop:'5%',marginLeft:'2%',fontSize:20,fontWeight:"bold",fontStyle:"italic"}}>Your Password:</Text> 
            <TextInput style={{color:'black',height:45,borderColor:'black',width:'100%',borderWidth:0,marginLeft:'2%',}} 
                    placeholder={'Its secure here..!!'} secureTextEntry={true} onChangeText={this.change3}/>
            <TouchableOpacity 
                    style ={{height:35,width:100,borderRadius:0,marginTop:7,alignItems:'center',marginLeft:'35%',borderColor:'black',borderWidth:0}} 
                    onPress={() => {
                    if(this.state.email!=null){
                        if(this.state.email.match(mailformat)){
                 axios.post('http://192.168.43.65:7000/login', {
                                "email":this.state.email,
                                "password":this.state.password,
                    
                         })
                             .then(res => {
                                 alert(JSON.stringify(res.data))
                                 if(res.data.hasOwnProperty('email'))
                                 {
                                    AsyncStorage.setItem('data',JSON.stringify(res.data.email));
                                    entry();
                                }
                             }
                            )
                            .catch(e => {alert(JSON.stringify(e))})
                            }
                        else{
                             {alert("Enter a Valid email address")};}
                             this.setState({store:this.state.email})}}
                        
                            }
                            
                      >
                    
            <Text style={{fontSize:25,fontStyle:"italic",fontWeight:"bold"}}> Login </Text>
            </TouchableOpacity>
        </View>
           <View>        
           <TouchableOpacity 
              onPress={() => {
                   this.props.navigator.push({
                       screen: 'Register',
                       title: 'Register here',
                       animated: true,
                       animationType:  'slide-horizontal',
                   })}}>
               <Text style={{fontSize:25,fontWeight:"bold",fontStyle:"italic",margin:'20%',marginTop:'2%',color:'#b8babb'}}>Click here to Register </Text>
           </ TouchableOpacity>
       </View>
       </View>
    );
    }
}
styles={
    cardstyle: {
        height: 230,
        borderWidth: 3,
        borderColor: 'black',
        width: '80%',
        marginLeft: '10%',
         marginRight:'10%',
        justifyContent: 'flex-start',
        borderRadius: 12,
        backgroundColor:'#b8babb',
        
    },
end:{
    borderColor:'black',
    borderWidth:3,
    marginTop:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    width:'80%',
    borderRadius: 12,
    height:60,
    justifyContent:'flex-end',
    backgroundColor:'#b8babb'  
}
}
export default Login;