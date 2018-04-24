import React, {Component} from 'react'
import {View, Platform, StatusBar} from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
import {purple, white} from './utils/colors'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {Constants} from 'expo'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import Deck from "./components/Deck"
import NewDeck from "./components/New-Deck"
import AddCard from "./components/Add-Card"
import List from "./components/List"
import Test from "./components/Test"
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

function UdaciStatusBar({  backgroundColor,...props}) {
  return (
    <View
      style={{
      backgroundColor,
      height: Constants.statusBarHeight
    }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tabs = TabNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarOptions: "Deck",
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarOptions: "NewDeck",
      tabBarIcon: ({tintColor}) => <Ionicons name='burst-new' size={30} color={tintColor}/>
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios'
      ? purple
      : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios'
        ? white
        : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

// 导航
const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  AddCard: {
    screen: AddCard,
  },
  List: {
    screen: List,
  },
  Test: {
    screen:Test,
  }
},{
  navigationOptions: {  
    headerTintColor: white,
    headerStyle: {
      backgroundColor: purple,
      height: 40
    },
  },
  headerMode: 'screen',
  transitionConfig:()=>({
      screenInterpolator:CardStackStyleInterpolator.forHorizontal,
  })
});

export default class App extends React.Component {

  store = createStore(reducer)

  render() {
    console.disableYellowBox = true
    console.warn('YellowBox is disabled.');

    return (
      <Provider store={this.store}>
        <View style={{
          flex: 1
        }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content"/>
          <MainNavigator/>
        </View>
      </Provider>
    )
  }
}
