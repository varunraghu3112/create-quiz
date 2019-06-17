import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity ,AsyncStorage} from 'react-native'
import axios from 'axios'
// import {textStyle} from '../styles';
// let val = await AsyncStorage.getItem('data');
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '', display: '' }
    }

    update = (cool) => {
        this.setState({ text: cool })
    }
    render() {
        return (
            <View style={{
                flex: 1, flexDirection: 'column',
                justifyContent:"space-between",backgroundColor:'#3a3b3b'}}
             >
                <View style={styles.cardstyle}>
                    <Text style={{ margin:10,fontSize:24,fontWeight:"bold",fontStyle:"italic", }}>Enter your Aptitude Book id</Text>
                    <TextInput style={{ height: 45, borderColor: 'black', width: '100%', borderTopWidth:1,marginTop:'2%' }}
                        placeholder={'Type here !'} onChangeText={this.update}
                        value={this.state.text} />
                    <TouchableOpacity
                        style={{ height: 40, width: 104, borderRadius: 5, marginTop: 3, alignItems: 'center', marginLeft: 200, borderColor: 'black', borderWidth: 1 ,backgroundColor:'#3a3b3b'}}
                        onPress={async () => {
                            let val = await AsyncStorage.getItem('data')
                            axios.get('http://192.168.43.65:7000/getbook/' + this.state.text + '/'+JSON.parse(val))

                                .then(res => {
                                    if (res.data.message == "Book not found") {
                                        alert("Cant find book");
                                    }
                                    else {
                                         this.props.navigator.push({
                                             screen: 'bookscreen',
                                             title: res.data.name,
                                             animated: true,
                                             passProps: {data:res.data},
                                             animationType:  'slide-horizontal',
                                    })}
                                }
                                )
                        }}>

                        <Text style={{fontSize:15,fontWeight:"bold",fontStyle:"italic",color:'#b8babb'}}> Submit </Text>
                    </TouchableOpacity>


                </View>
                <View >
                    <TouchableOpacity style={styles.end}
                        onPress={() => {
                            this.props.navigator.push({
                                screen: 'Create',
                                title: 'Create Book',
                                animated: true,
                                animationType: 'slide-horizontal',
                            })
                        }}>
                        <Text style={{ fontSize:20,fontWeight:"bold",fontStyle:"italic",alignSelf:'center',paddingBottom:7 }}> Click here to Create Quiz Book </Text>
                    </ TouchableOpacity>
                </View>

            </View>);
    }
}

const styles = {
    cardstyle: {
        height: 170,
        borderWidth: 3,
        borderColor: 'black',
        width: '80%',
        marginLeft: '10%',
         marginRight:'10%',
         marginTop:'10%',
        justifyContent: 'flex-start',
        borderRadius: 12,
        backgroundColor:'#b8babb',
        
    },
    end: {
        borderColor: 'black',
        borderWidth: 1,
        width: '100%', 
        height: 50,
        justifyContent: 'flex-end',
        backgroundColor: '#b8babb',

    }
}


export default Home;
