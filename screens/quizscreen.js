import React, { Component } from 'react'
import { Text, View, FlatList,TextInput,TouchableOpacity} from 'react-native'
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

class Second extends Component {
    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }
 
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
    
    _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
              
                
            },{
                text: 'Message',
              
                
            },{
                text: 'Profile',
                
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }
   render() {
       return(
           <View style={{
            flex: 1, flexDirection: 'column',
            justifyContent: 'space-between',
        }} >
                <View style={styles.cardstyle}>
                    <Text style={[{ margin: 14 }]}>hola </Text>
                </View>
                <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{height:200}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
 
                <IndicatorViewPager
                    style={{flex:1, paddingTop:20, backgroundColor:'white'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
                
                <IndicatorViewPager
                    style={{flex:1, paddingTop:20, backgroundColor:'white'}}
                    indicator={this._renderTabIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
            </View>
           </View>
       )
   }
};
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
export default Second;

