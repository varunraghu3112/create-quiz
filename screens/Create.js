import React, { Component } from 'react';
import { Text, View, Picker, TouchableOpacity, TextInput, AsyncStorage, ScrollView, FlatList } from 'react-native';
import axios from 'axios';


class Create extends Component {
        _keyExtractor = (item, index) => index;
    state = { book:[],answer: 0, name: '', bookname: '',Idbook:'',op1: '',op2:'',op3:'',op4:''}

    updateUser = (answerforthequestion) => {
        this.setState({ answer: answerforthequestion })

    }
    update = () => {
        // this.setState({a, name:''});
        this.setState({ name: '', type: "text" })
    }
    addQuestion = (question) => {
        let q = [...this.state.book];
      q.push(question)
        this.setState({
          book: [...q]
        })
      }
      combine = () => {
          this.state.questions[0]=this.state.bookname;
          this.state.questions[1]=randomnum;
          this.state.questions[2]=this.state.book;
      }
    render() {
        
        
        return (
            
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' ,backgroundColor:'#3a3b3b'}}>

            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={{fontSize:30,color:"#09dbc3",fontWeight:"bold",fontStyle:"italic",marginTop:'6%'}}>Book name:  </Text>
                        </View>
                        <View>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 0, width: 250,color:'white',fontSize:20,marginTop:'6%',fontStyle:"italic"}}
                                placeholder={'Enter your book name'}
                                placeholderTextColor="#ababab"
                                onChangeText={
                                    (v) => {
                                        this.setState({ bookname: v })
                                    }
                                } />
                                
                        </View  >
                    </View>
                    <View>
                    <Text numberOfLines={1} style={{color:"#ababab"}}>               
    ______________________________________________________________________________
</Text>
                        <View style={{ flexDirection: 'column' }} >

                            <View >
                                <Text style={{fontSize:25,color:"#09dbc3",fontStyle:"italic"}}>Question</Text>
                                <TextInput
                                     style={{ height: 40, borderColor: 'gray', borderWidth: 0, width: 250,color:'white',fontSize:20,fontStyle:"italic"}}
                                    placeholder={'Your Question Here...!'}
                                    placeholderTextColor="#ababab"
                                    onChangeText={
                                        (v) => {
                                            this.setState({ name: v })
                                        }}
                                    value={this.state.name} />
                            </View>
                            <View >
                            <Text style={{fontSize:25,color:"#09dbc3",fontStyle:"italic"}}>Option 1</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 0, width: 250,color:'white',fontSize:20,fontStyle:"italic"}}
                                    placeholder={'Option 1'}
                                    placeholderTextColor="#ababab"
                                    onChangeText={
                                        (v) => {
                                            this.setState({ op1: v })
                                        }}
                                    value={this.state.op1} />
                            </View>
                            <View >
                            <Text style={{fontSize:25,color:"#09dbc3",fontStyle:"italic"}}>Option 2</Text>
                                <TextInput
                                     style={{ height: 40, borderColor: 'gray', borderWidth: 0, width: 250,color:'white',fontSize:20,fontStyle:"italic"}}
                                    placeholder={'Option 2'}
                                    placeholderTextColor="#ababab"
                                    onChangeText={
                                        (v) => {
                                            this.setState({ op2: v })
                                        }}
                                    value={this.state.op2} />
                            </View>
                            <View >
                            <Text style={{fontSize:25,color:"#09dbc3",fontStyle:"italic"}}>Option 3</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 0, width: 250,color:'white',fontSize:20,fontStyle:"italic"}}
                                    placeholder={'Option 3'}
                                    placeholderTextColor="#ababab"
                                    onChangeText={
                                        (v) => {
                                            this.setState({ op3: v })
                                        }}
                                    value={this.state.op3} />
                            </View>
                            <View >
                            <Text style={{fontSize:25,color:"#09dbc3",fontStyle:"italic"}}>option 4</Text>
                                <TextInput
                                     style={{ height: 40, borderColor: 'gray', borderWidth: 0, width: 250,color:'white',fontSize:20,fontStyle:"italic"}}
                                    placeholder={'Option 4'}
                                    placeholderTextColor="#ababab"
                                    onChangeText={
                                        (v) => {
                                            this.setState({ op4: v })
                                        }}
                                    value={this.state.op4} />
                            </View>
                            <View style={{ width: 100,fontSize:25,color:"white"}} >
                            <Text style={{fontSize:25,color:"#09dbc3",fontStyle:"italic"}}>Answer</Text>
                                <Picker selectedValue={this.state.answer} style={{color:'white',fontSize:25}} onValueChange={(v) => {
                                    this.setState({answer:v})
                                }}>
                                    <Picker.Item label="1" value={0} />
                                    <Picker.Item label="2" value={1} />
                                    <Picker.Item label="3" value ={2} /> 
                                    <Picker.Item label="4" value ={3} /> 
                                </Picker>

                            </View>
                            <View >
                                <TouchableOpacity style={{margin:'2%',backgroundColor:'#b8babb' , height: 50, width: '90%', borderRadius: 5, borderColor: 'black', borderWidth: 1 }}
                                    onPress={() => {
                                        
                                        let options = [this.state.op1,this.state.op2,this.state.op3,this.state.op4]
                                        this.addQuestion({
                                            question:this.state.name,
                                            answer:this.state.answer,
                                            options
                                          });
                                          this.setState({
                                            op1:'',op2:'',op3:'',op4:'',answer:"0",name:''
                                          })

                                    }

                                    }

                                >
                                    <Text style={{ fontSize: 20, margin:5 ,fontStyle:"italic"}}>Add a question to the book</Text></TouchableOpacity>

                            </View>
                            {/* <ScrollView>
                                {
                                    <Text>{JSON.stringify(this.state.book)}</Text>
                                }
                            </ScrollView> */}
                           <FlatList
                        data={this.state.book}
                        keyExtractor={this._keyExtractor}
                        renderItem={
                            ({ item }) => {
                                
                                return (
                                    <View style={{ flexDirection: 'column', height: 320 }}>
                                            
                                            <Text style={{fontSize:25,fontWeight:"bold",fontStyle:"italic",color:"#b8babb"}}>Question: </Text>
                                             <Text style={{fontSize:20,fontWeight:"bold",fontStyle:"italic",margin: 2 }}>{item.question}</Text>
                                            <Text style={{fontSize:25,fontWeight:"bold",fontStyle:"italic",color:"#b8babb"}}>Options:</Text>
                                             <Text style={{fontSize:20,fontWeight:"bold",fontStyle:"italic",margin: 2 }}>{item.options[0]}</Text>
                                             <Text style={{ fontSize:20,fontWeight:"bold",fontStyle:"italic",margin: 2 }}>{item.options[1]}</Text>
                                             <Text style={{ fontSize:20,fontWeight:"bold",fontStyle:"italic",margin: 2 }}>{item.options[2]}</Text>
                                             <Text style={{ fontSize:20,fontWeight:"bold",fontStyle:"italic",margin: 2 }}>{item.options[3]}</Text>
                                             <Text style={{fontSize:25,fontWeight:"bold",fontStyle:"italic",color:"#b8babb"}}>Answer:</Text>
                                             <Text style={{ fontSize:20,fontWeight:"bold",fontStyle:"italic",margin: 2}}>{item.options[item.answer]}</Text>
                                        
                                        
                                    </View>
                                    

                                )
                            }
                        }

                    ></FlatList>   


                        </View>
                    </View>
                    
                


                </View>
                </ScrollView>

                <View>
                    <View>
                        <TouchableOpacity style={styles.end}
                            onPress={async () => {
                                let randomnum=Math.floor(1000+Math.random()*9000);
                                axios.post('http://192.168.43.65:7000/createbook', {
                                    "name":this.state.bookname,
                                    "id":randomnum+'',
                                    "questions":this.state.book
                             })
                                 .then(res => {
                                     alert(JSON.stringify(res.data.message)+"BookId:"+randomnum)
                                     this.props.navigator.push({
                                        screen: 'Home',
                                        title: 'Home',
                                        animated: true,
                                        animationType: 'slide-horizontal',
                                    })
                                 }
                                )
                                .catch(e => {alert(JSON.stringify(e))})
                                    
                            }}>
                            <Text style={{ fontSize: 30 }}> Create Book </Text>
                        </ TouchableOpacity>
                    </View>
                </View>
                
            </View>

        );

    }
}
const styles = {
    end: {
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        height: 50,
        justifyContent: 'flex-end',
        backgroundColor: "#09dbc3",

    }
}
export default Create;