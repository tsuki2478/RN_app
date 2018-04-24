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
import {purple, white} from '../../utils/colors'
import {submitQuestions,fetchAsyncStorage} from "../../utils/api"
import {addCardToDeck} from '../../actions'
import {connect} from 'react-redux'
import { NavigationActions } from 'react-navigation'

//Platform可以区分不同手机系统
function SubmitBtn({onPress}) {
    return (
        <TouchableOpacity
            style={Platform.OS === 'ios'
            ? styles.iosSubmitBtn
            : styles.AndroidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>SUBMIT</Text>
        </TouchableOpacity>
    )
}
class AddCard extends Component {
    state = {
        firstInput: "",
        secondInput:"",
    }
    //标题
    static navigationOptions = ({navigation}) => {
        const {name} = navigation.state.params
        
        return {title: `${name}`}
    }
    //刚进入页面
    componentWillMount() {
       const  {key}  = this.props.navigation.state.params
           id = key
    }

    //文本
    firstHandleTextChange = (firstInput) => {
        this.setState(() => ({firstInput}))
    }

    //文本
    secondHandleTextChange = (secondInput) => {
        this.setState(() => ({secondInput}))
    }
    //提交
    handleSubmit = (input) => {
        const {firstInput,secondInput} = this.state
    
        if(firstInput ===""||secondInput==="") {
            alert("您的问题或答案为空,请再次输入")
        }else{
            questions ={question:firstInput,answer:secondInput};
            submitQuestions(questions,id)
            this.props.dispatch(addCardToDeck(questions,id))
            this.props.navigation.goBack();  
        }
     
    }
    render() {
        const {firstInput,secondInput} = this.state
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput
                    value={firstInput}
                    style={styles.input}
                    onChangeText={this.firstHandleTextChange}
                    placeholder="Type here to translate!"
                    placeholderTextColor={purple}
                    textAlignVertical="center"/>

                <TextInput
                    value={secondInput}
                    style={styles.input}
                    onChangeText={this.secondHandleTextChange}
                    placeholder="Type here to translate!"
                    placeholderTextColor={purple}
                    textAlignVertical="center"/>

                <SubmitBtn onPress={this.handleSubmit}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 5,
        alignItems: 'center',
        paddingTop: 50,
    },
    input: {
        width: 380,
        height: 60,
        padding: 8,
        borderWidth: 1,
        borderColor: "#757575",
        margin: 15,
        borderRadius: 15
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
        justifyContent: 'center',
    },
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40
    },
    AndroidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        width:150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function mapStateToProps(Deck) {
    return {
        Deck
    }
}
export default connect(mapStateToProps)(AddCard)
