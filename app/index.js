import { Navigation } from 'react-native-navigation';
import {AsyncStorage} from 'react-native';
import Home from '../screens/first';
import Profile from'../screens/Profile';
import Create from '../screens/Create';
import Login from '../screens/login';
import Register from '../screens/Register';
import bookscreen from '../screens/bookscreen';
import quizscreen from '../screens/quizscreen';



Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Profile',() => Profile);
Navigation.registerComponent('Create',() => Create);
Navigation.registerComponent('Register',() => Register);
Navigation.registerComponent('bookscreen',()=>bookscreen );
Navigation.registerComponent('quizscreen',()=>quizscreen );


export default async function () {
    
   
  if (!(await AsyncStorage.getItem('data'))){
  Navigation.startSingleScreenApp({
    screen: {
      screen:'Login', // unique ID registered with Navigation.registerScreen
      title: 'Welcome', // title of the screen as appears in the nav bar (optional)
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    }
  }
 )
}

else
    {
Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: 'Home', 
        icon: require('../img/home.png'),
        selectedIcon: require('../img/home.png'), 
        title: 'Home'
      },
      
      {
        label: 'Profile',
        screen: 'Profile',
        icon: require('../img/profile.png'),
        selectedIcon: require('../img/profile.png'), 
        title: 'Profile'
      }
    ],
    passProps: {
      email:'varun@gmail.com'
    }
  })
}
}       
            
        
    




