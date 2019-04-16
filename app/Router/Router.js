import HomeScreen from '../HomeScreen'
import SecondScreen from '../SecondScreen'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Profile: SecondScreen,
});

const Route = createAppContainer(MainNavigator);

export default Route;
  