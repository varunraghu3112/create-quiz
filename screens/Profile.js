import React,{Component} from 'react'
import {Text,View,AsyncStorage,TouchableOpacity,Image} from 'react-native'
import entry from '../app/index'

class Profile extends Component{
render(){
    return(
    <View>
    <TouchableOpacity style={styles.end} 
       onPress={async () => {
         
          await AsyncStorage.removeItem('data');
          entry();
    }}>
        <Text style={{fontSize:30,marginLeft:'30%'}}> Log Out </Text>
    </ TouchableOpacity>
            <Text style={{ fontSize: 40, fontWeight: "bold", fontStyle: "italic", marginLeft: '14%',marginTop:'5%', marginBottom: '5%', color: '#b8babb' }}>"HAVE A NICE DAY"</Text>
    </View>);
}}

export default Profile;