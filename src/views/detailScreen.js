import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TalkDetails } from './talk-details'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(204,214,254)'
  }
})

export default class DetailScreen extends React.PureComponent {
  render () {
    const {
      speakerName,
      talkTitle,
      avatarUrl,
      startTime,
      duration
    } = this.props.navigation.state.params.talkObj
    return (
      <View style={styles.container}>
        <TalkDetails talk={{
          speakerName,
          talkTitle,
          avatarUrl,
          startTime,
          duration,
          talkDescription: "A full day workshop on React Native - leverage your Web programming skills to build native apps!",
          aboutDescription: "Gant Laborde is committed to serving the best authentic Mexican cuisine in all of South Florida. With restaurants from Weston Broward to the beach, plus a food truck, you’re never far away from feasting on its award-winning dishes, lively libations and inviting atmosphere."
        }} />
      </View>
    )
  }
}
