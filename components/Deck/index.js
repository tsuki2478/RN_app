import React, {Component} from 'react'
import {Foundation} from '@expo/vector-icons'
import {purple, white, pink,gray} from '../../utils/colors'
import {
    View,
    Text,
    ImageEditor,
    setStatety,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Button,
    ScrollView
} from "react-native"
import {ImagePicker} from "expo"
import CountDownTimer from './CountDownTimer'
import {fetchAsyncStorage, setDummyData} from "../../utils/api"
import {connect} from 'react-redux'
import {getDecks} from '../../actions'


class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            start: false
        }
    }

    //刚进入页面
    componentWillMount() {
        const {dispatch} = this.props
        const Deck = setDummyData()
        dispatch(getDecks(Deck))
    }



    //FlatList 每行显示什么
    _renderItem = ({item}) => {
        // return <Review {...item} />
     const {key, value} =item
     if(value.questions) {
      cards = value.questions.length+"cards";
     }else {
      cards = "0cards";
     }
        return (
            <TouchableOpacity
                style={styles.row}
                onPress={() => this.props.navigation.navigate('List', {name: key})}>
                <Text style={styles.title}>
                {key}
                </Text>
                <Text style={styles.cards}>
                {cards}
                </Text>
            </TouchableOpacity >
        )

    }
    //每行过渡
    _separator = () => {
        return <View
            style={{
            height: 2,
            backgroundColor: white
        }}/>;
    }
    //加载的头部和尾部。。
    _header = () => {
        return  null ;
    }

    _footer = () => {
        return <Text >这是尾部</Text>;
    }

    // 下拉刷新
    refreshing() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('下拉刷新成功')
        }, 300)
    }

    //上啦加载 onEndReachedThreshold 设置距离底部还有多少距离
    _onload() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('上啦加载成功')
        }, 300)
    }

    render() {
        const {image} = this.state
        const {Deck} = this.props
        console.log('props', this.props)
        NewDeck  = Object.keys(Deck).map((item, index) => ({key: item, value:Deck[item]}))
        return (
            <View style={styles.container}>
                       
            <View>
                <CountDownTimer
                    date="2018-05-01T00:00:00+08:00"
                    days={{
                    plural: 'Days ',
                    singular: 'day '
                }}
                    hours=':'
                    mins=':'
                    segs=''
                    daysStyle={styles.time}
                    hoursStyle={styles.time}
                    minsStyle={styles.time}
                    secsStyle={styles.time}
                    firstColonStyle={styles.colon}
                    secondColonStyle={styles.colon}/>
            </View>

            <View style={styles.flat}>

            <Button
                title='滚动到指定位置'
                onPress={() => {
                this
                    ._flatList
                    .scrollToOffset({animated: true, offset: 100});
            }}/>
                <FlatList
                    data={ NewDeck}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._separator}
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onload}
                    initialNumToRender={4}
                    ref={(flatList) => this._flatList = flatList}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop:20,
    },
    flat:{
       marginTop:10,
       alignItems: 'center',
    },
    title: {
        fontSize: 24,
    },
    cards:{
        fontSize:15,
        color:white
    },
    top: {
       paddingBottom:10
    },
    row: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 170,
        width: 350,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom:20,
        borderColor: pink,
        backgroundColor: pink
    },
})

function mapStateToProps(Deck) {
    return {Deck}
}

export default connect(mapStateToProps)(Deck)