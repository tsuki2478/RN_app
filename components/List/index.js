import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import {purple, white,black} from '../../utils/colors'
import {connect} from 'react-redux'


//不同按钮
function SubmitBtn({onPress,name}) {
    return (
        <TouchableOpacity
            style={ name === "Start Quiz"
            ? styles.blackAndroidSubmitBtn
            : styles.AndroidSubmitBtn}
            onPress={onPress}>
            <Text style={ name === "Start Quiz"? styles.otherSubmitBtnText
            : styles.submitBtnText}>
            {name}</Text>
        </TouchableOpacity>
    )
}
  class List extends Component {

    //标题
    static navigationOptions = ({navigation}) => {
        const {name} = navigation.state.params

        return {title: `${name}`}
    }
    //刚进入页面
    componentWillMount() {
        name  = this.props.navigation.state.params.name
    }
    
    render() {
        const {Deck} =this.props

        return (
            <View  style={styles.container}>
            
            <View   style={styles.view}>
            <Text   style={styles.title}>{ Deck[name].title}  </Text>
            <Text   style={styles.cards}>{ Deck[name].questions.length} cards </Text>
            </View> 
            <SubmitBtn name="Add Card"    onPress={() => this.props.navigation.navigate('AddCard', { name: 'AddCard',key: Deck[name].title})}/>
            <SubmitBtn name="Start Quiz"  onPress={() =>  Deck[name].questions.length >=1 ?this.props.navigation.navigate('Test', { name: 'Test' }): alert('您的卡片集为空')}/>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    view:{
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop:100,
        paddingBottom:100
        
    },
    title: {
        fontSize:60,
        paddingBottom:20
    },
    cards:{
        fontSize:24,
        color:white
    },
    submitBtnText: {
        fontSize: 20,
        textAlign: 'center'
    },
    iosSubmitBtn: {
        backgroundColor: white,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    },
    AndroidSubmitBtn: {
        backgroundColor: white,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 10,
        height: 45,
        width :180,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blackAndroidSubmitBtn: {
        backgroundColor: black,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 10,
        height: 45,
        width :180,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    otherSubmitBtnText: {
        fontSize: 20,
        textAlign: 'center',
        color:white
    },
})

function mapStateToProps(Deck) {
    return {
        Deck
    }
}
export default connect(mapStateToProps)(List)
