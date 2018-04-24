import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity
} from "react-native"
import {purple, white, black} from '../../utils/colors'
import {connect} from 'react-redux'
import SwipeCards from './SwipeCards.js'
import Swiper   from './Swiper.js'
class Test extends Component {
    //标题
    static navigationOptions = ({navigation}) => {
        const {name} = navigation.state.params
        return {title: `${name}`}
    }

 //刚进入页面
 componentWillMount() {
   
}

render() {
    const {Deck} = this.props
    return (
        <View  style={styles.container}>
        <SwipeCards style={{flex: 1}}  />
        </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    }
})

function mapStateToProps(Deck) {
    return {Deck}
}
export default connect(mapStateToProps)(Test)
