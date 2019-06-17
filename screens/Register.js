import React,{Component} from 'react'
import {Text,View,TextInput,TouchableOpacity} from 'react-native'
import axios from 'axios'

class Register extends Component{
    constructor(props){
        super(props);
    this.state={name:'',email:'',password:''}
    }
        change1 = (name) => {
            this.setState({name})
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
        justifyContent: 'center',backgroundColor:'#3a3b3b'}} >
                <Text style={{fontSize:30,fontWeight:"bold",fontStyle:"italic",width:'100%',marginLeft:'20%',marginBottom:'5%',color:'#b8babb'}}>Enter Your Details</Text>
         <View style={{borderWidth: 3,
            borderColor: 'black',
            width: '92%',
            borderWidth: 3,
            borderColor: 'black',
            height: 330,
            marginLeft:'4%',
            marginRight:'4%',
            justifyContent: 'flex-start',
            borderRadius: 12,
            backgroundColor:'#b8babb',}}>
            <Text style={{marginTop:'5%',marginLeft:'2%',fontSize:20,fontWeight:"bold",fontStyle:"italic"}}>Your Name:</Text>
            <TextInput style={{height:45,borderColor:'black',width:'100%',borderTopWidth:0,marginLeft:'2%',}} 
                    placeholder={'Name'} onChangeText={this.change1}/> 
            <Text style={{marginTop:'5%',marginLeft:'2%',fontSize:20,fontWeight:"bold",fontStyle:"italic"}}>Enter a valid Email:</Text>
            <TextInput style={{height:45,borderColor:'black',width:'100%',borderTopWidth:0,marginLeft:'2%',}} 
                    placeholder={'Email'} onChangeText={this.change2}/> 
            <Text style={{marginTop:'5%',marginLeft:'2%',fontSize:20,fontWeight:"bold",fontStyle:"italic"}}>Your Password:</Text> 
            <TextInput style={{height:45,borderColor:'black',width:'100%',borderTopWidth:0,marginLeft:'2%',}} 
                    placeholder={'Its secure here..!!'} secureTextEntry={true} onChangeText={this.change3}/>
            <TouchableOpacity 
                   style ={{height:35,width:'100%',borderRadius:0,marginTop:7,alignItems:'center',borderColor:'black',borderWidth:0}}
                    onPress={() =>
                        {
                            if(this.state.name!="" || this.state.email!="" || this.state.password!="" )
                            {
                                    if(this.state.password.length>7)
                                    {
                                            if(this.state.email.match(mailformat))
                                            {
                                               
                                                axios.post('http://192.168.43.65:7000/register/', {
                                                        "name":this.state.name,
                                                        "email":this.state.email,
                                                        "password":this.state.password,
                                            
                                                    }) 
                                                    
                                                    .then(res => {alert(JSON.stringify(res.data))
                                                        
                                                    })
                                                    .catch(e => {alert(JSON.stringify(e))})
                                            }
                                            else
                                            alert("Enter a Valid email address")
                                    }
                                    else
                                    alert("Enter the password length between 8-15");
                            }
                            else
                            alert("Enter the fields correctly");
                        }
                
                      
                    }>
                    
            <Text style={{fontSize:25,fontStyle:"italic",fontWeight:"bold"}}> create account </Text>
            </TouchableOpacity>
            </View>
        </View>

            );
        }
    }
    styles={
        cardstyle: {
            height: 230,
            
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
export default Register;