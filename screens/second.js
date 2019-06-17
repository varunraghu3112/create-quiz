import React,{Component} from 'react'
import {Text,View,FlatList,TextInput,TouchableOpacity,AsyncStorage} from 'react-native'
import axios from 'axios'
class Second extends Component{
 render(){   
        return (
            <View >
               <View style={styles.cardstyle}>
                    <Text style={[{ margin: 14 }]}>Default questions</Text>
                    
                    <TouchableOpacity
                        style={{ height: 25, width: 74, borderRadius: 5, marginTop: 3, alignItems: 'center', marginLeft: 200, borderColor: 'black', borderWidth: 1 }}
                        onPress={() => {
                            alert("hai")
                            
                                    }}
                                >

                        <Text > Enter Quiz </Text>
                    </TouchableOpacity>


                </View> 

          </View>
        );
 }
};
export default Second;
const styles = {
    cardstyle: {
        height: 130,
        borderWidth: 1,
        borderColor: 'black',
        width: '70%',
        marginLeft: 60,
        marginRight: 60,
        marginTop: 20,
        justifyContent: 'flex-start',
        borderRadius: 5
    },
    end: {
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        height: 50,
        justifyContent: 'flex-end',
        backgroundColor: 'powderblue',

    }
}