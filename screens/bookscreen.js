import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Alert,AsyncStorage} from 'react-native'
import axios from 'axios';
import {IndicatorViewPager,PagerDotIndicator} from 'rn-viewpager';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
  
class Second extends Component {
    state = {
        value3Index:0,
        text:''
    }
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={this.props.data.questions.length} />;
        
    }
    answers ={}
    onSelect(index, value,q){
        this.answers[q] = index;
      }
    

   render() {
       return(
           <View style={{
            flex: 1, flexDirection: 'column',
            justifyContent: 'space-between',backgroundColor:'#3a3b3b'
        }} >
                <View style={styles.cardstyle}>
                    <Text style={[{ margin: 14 ,fontSize:20,fontWeight:'bold',fontStyle:'italic'}]}>The quiz for the subject: <Text style={{color:'#087ec1',}}>{this.props.data.name} </Text></Text>
                    <Text style={[{ margin: 14 ,fontSize:20,fontWeight:'bold',fontStyle:'italic'}]}>Your Score: <Text style={{color:'#087ec1',}}>{this.props.data.score}</Text></Text>
                    </View>

            <View style={{flex:1,marginTop:20,borderRadius:7,marginLeft:'10%',marginRight:'10%'}}>
                <IndicatorViewPager
                    style={{height:250}}
                    indicator={this._renderDotIndicator()}
                >
                {
                    this.props.data.questions.map((question,q) => (
                        <View style={{backgroundColor:'#b8babb',borderRadius:7}}>
                            <Text style={{fontSize:20,fontStyle:"italic",fontWeight:"bold"}}>{question.name}</Text>
                            <RadioGroup
                                onSelect = {(index, value) => this.onSelect(index, value,q+'')}
                            >
                            {question.options.map((op,i) => (
                                <RadioButton value={i} >
                                <Text>{op}</Text>
                                </RadioButton>
                            ))}
                               
                            </RadioGroup>
                            <Text>{this.state.text}</Text>
                            <Text>{JSON.stringify(this.state.q)}</Text>
                        </View>
                    ))
                }
                </IndicatorViewPager>
 
                <TouchableOpacity style={{height: 45, width: 114, borderRadius: 6, marginTop: 5,backgroundColor:"#b8babb", alignItems: 'center', borderColor: 'black', borderWidth: 1 }}
                 onPress={async () => {
                     let correct = []
                     this.props.data.questions.forEach((question,q) => {
                         let d=q+''
                        if(question.answer == this.answers[d]){
                            correct[q] = true;
                        } else correct[q]= false;

                     })
                     let email = await AsyncStorage.getItem('data')
                     let score = 0;
                     correct.forEach(val => {
                         if(val==true) score++;
                    
                     })
                     
                     Alert.alert(
                        'Score : '+score,
                        correct.map((val,i) => {
                            return `${i+1} : ${val == true ? 'Correct' : 'Wrong'}`
                        }).join('\n'),
                        [
                          {text: 'Try Again', onPress: () => {this.answers={}}},
                          {text: 'Submit', onPress: async () => {
                              await axios.post('http://192.168.43.65:7000/submit',{
                                email:JSON.parse(email),
                                bookId:this.props.data.id,
                                score
                            })
                            this.props.navigator.pop()
                        }},
                        ],
                        { cancelable: false }
                      )
                 }}>
                    <Text style={{fontSize:25,fontStyle:"italic",fontWeight:"bold",}}>Submit</Text>
                </TouchableOpacity>
                
            </View>

           </View>
       )
   }
};
const styles = {
    cardstyle: {
        height: 120,
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        marginLeft:'10%',  
        marginTop: 20,
        justifyContent: 'flex-start',
        borderRadius: 7,
        backgroundColor:'#b8babb',
        
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
export default Second;
