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
import {connect} from 'react-redux'
import {submitEntry,fetchAsyncStorage} from "../../utils/api"
import {getDeck} from '../../actions'

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
 class NewDeck extends Component {

    state = {
        input: "",
        showInput: false
    }
    componentWillMount() {}

    //切换
    handleToggleSwitch = () => {
        this.setState((state) => ({
            showInput: !state.showInput
        }))
    }
    //文本
    handleTextChange = (input) => {
        this.setState(() => ({input}))
    }


    //提交
    handleSubmit = () => {
            const input =this.state.input
            if(input !== ""&& input !== null) {
                submitEntry(input);
                this.props.dispatch(getDeck(input))
                this.props.navigation.navigate('Deck', { name: 'Deck' })
            }else {
                alert('Cant be an empty value!')
            }
    }

  
    render() {
        const {input, showInput} = this.state
        const { navigate } = this.props.navigation;
        const {Deck} =this.props
        console.log('props',Deck)
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Switch value={showInput} onValueChange={this.handleToggleSwitch}/>
                <Text style={styles.title}>
                    What is the title of your new deck?
                </Text>

                {showInput === true && (<TextInput
                    value
                    ={input}
                    style={styles.input}
                    onChangeText={this.handleTextChange}
                    placeholder="Type here to translate!"
                    placeholderTextColor={purple}
                    textAlignVertical="center"
                    onSubmitEditing={this.handleSubmit}/>)}
                <SubmitBtn onPress={this.handleSubmit}/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 54,
        textAlign: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 380,
        height: 60,
        padding: 8,
        borderWidth: 1,
        borderColor: "#757575",
        margin: 50,
        borderRadius: 15
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
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
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapStateToProps(Deck) {
    return {
        Deck
    }
}
    
export default connect(mapStateToProps)(NewDeck)