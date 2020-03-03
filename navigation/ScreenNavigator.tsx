import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import StoreListScreen from '../screens/StoreListScreen';
import LandingScreen from '../screens/LandingScreen';
import OrderScreen from '../screens/OrderScreen';
import InformationScreen from '../screens/InformationScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';



const MealsNavigator = createStackNavigator({
  Landing: LandingScreen,
  Stores: StoreListScreen,
  Order: OrderScreen,
  Information: InformationScreen,
  Confirmation: ConfirmationScreen,
})

export default createAppContainer(MealsNavigator)