import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import {connect} from 'react-redux'

class Card extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
          <Text>{this.props.text}</Text>
        </View>
      )
    }
  }
  
  class NoMoreCards extends React.Component {
    constructor(props) {
      super(props);
    }


    render() {
      console.log('props',this.props)
      
      return (
        <View>
          <Text style={styles.noMoreCardsText}>No more cards</Text>
        </View>
      )
    }
  }
   class Swiper extends React.Component  {

    constructor(props) {
      super(props);
      this.state = {
        card :[],
  
      };
    }
    //刚进入页面
    componentWillMount() {
      const {Deck } = this.props
      NewDeck  = Object.keys(Deck).map((item, index) => ({key: item, value:Deck[item]}))
      NewDeck.map((d)=>{
        const{ key, value} = d
        if(key ===name){
          const{ questions,title} = value
          card=Object.keys(questions).map((item, index) => ({text: questions[item].question, answer:questions[item].answer,backgroundColor:'purple'}))
          this.setState(() => ({card}))
        }
      })
     
    }

    handleYup (card,i) {
      console.log(card)
      console.log(i)
    }
    handleNope (card,i) {
      console.log(card)
      console.log(i)
    }
    handleMaybe (card,i) {
      console.log(card)
      console.log(i)
    }
    render() {
      console.log(this.state)
      
      return (
        <SwipeCards
          cards={this.state.card}
          renderCard={(cardData) => <Card {...cardData} />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          handleMaybe={this.handleMaybe}
          hasMaybeAction
        />
      )
    }
  }
  
  const styles = StyleSheet.create({
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 300,
    },
    noMoreCardsText: {
      fontSize: 22,
    }
  })

  function mapStateToProps(Deck) {
    return {Deck}
}
export default connect(mapStateToProps)(Swiper)
