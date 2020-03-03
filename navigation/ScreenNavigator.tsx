import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import InformationScreen from '../screens/InformationScreen';
import LandingScreen from '../screens/LandingScreen';
import OrderScreen from '../screens/OrderScreen';
import StoreListScreen from '../screens/StoreListScreen';

const MealsNavigator = createStackNavigator({
  Landing: {
    screen: LandingScreen,
    navigationOptions: {
      header: null,
    },
  },
  Stores: {
    screen: StoreListScreen,
    navigationOptions: {
      header: null,
    },
  },
  Order: {
    screen: OrderScreen,
  },
  Information: {
    screen: InformationScreen,
  },
  Confirmation: {
    screen: ConfirmationScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(MealsNavigator);