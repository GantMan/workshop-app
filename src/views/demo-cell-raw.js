import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { PropTypes } from "prop-types"

export class DemoCellRaw extends React.Component {
  static propTypes = {
    talk: PropTypes.object,
    speakerName: PropTypes.string,
    talkTitle: PropTypes.string,
    avatarUrl: PropTypes.string,
    startTime: PropTypes.string,
    duration: PropTypes.string,
    onPress: PropTypes.func.isRequired
  }

  static defaultProps = {
    talk: {
      speakerName: 'Gant Laborde',
      talkTitle: 'React Native Workshop',
      avatarUrl: 'https://placekitten.com/42/45',
      startTime: '9:00AM',
      duration: '30 Minutes'
    }
  }

  renderTop () {
    const { speakerName, talkTitle, avatarUrl } = this.props.talk
    return (
      <View style={[styles.topContainer, {backgroundColor: 'cadetblue'}]}>
        <View style={[styles.topText, {backgroundColor: 'orange', height: 30}]}>
          {/* <Text style={styles.speakerName}>{speakerName}</Text>
          <Text style={styles.talkTitle}>{talkTitle}</Text> */}
        </View>
        <View style={[{justifyContent: 'center', flex: 1, backgroundColor: 'purple', height: 30}]}>
          {/* <Image style={styles.image} source={{uri: avatarUrl}} /> */}
        </View>
      </View>
    )
  }

  renderBottomLeft () {
    const { startTime, duration } = this.props.talk
    return (
      <View style={[styles.leftSide, {backgroundColor: 'red', flex: 1, height: 30}]}>
        <View style={styles.bottomItemWrapper}>
          {/* <Text style={styles.bottomTitle}>Start</Text>
          <Text style={styles.bottomSubtitle}>{startTime}</Text> */}
        </View>
        <View style={[styles.bottomItemWrapper, {paddingLeft: 20}]}>
          {/* <Text style={styles.bottomTitle}>Duration</Text>
          <Text style={styles.bottomSubtitle}>{duration}</Text> */}
        </View>
      </View>
    )
  }

  renderBottomRight () {
    return (
      <View style={[styles.rightSide, {backgroundColor: 'green', flex: 1, height: 30}]}>
        <View style={[styles.bottomItemWrapper, {paddingRight: 20}]}>
          {/* <Image style={{width: 40, height: 40}} source={require('../images/twitter-logo.png')} /> */}
        </View>
        <View style={styles.bottomItemWrapper}>
          {/* <Image style={{width: 25, height: 25}} source={require('../images/github-logo.png')} /> */}
        </View>
      </View>
    )
  }

  renderBottom () {
    return (
      <View style={[styles.bottomContainer, {backgroundColor: 'navy'}]}>
        {this.renderBottomLeft()}
        {this.renderBottomRight()}
      </View>
    )
  }

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        {this.renderTop()}
        {this.renderBottom()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 6,
    overflow: 'hidden'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  topText: {
    flex: 5,
    paddingRight: 10
  },
  speakerName: {
    fontSize: 13,
    color: 'gray'
  },
  talkTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rebeccapurple'
  },
  bottomItemWrapper: {
    justifyContent: 'center'
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    backgroundColor: 'ghostwhite'
  },
  bottomTitle: {
    fontSize: 11,
    color: 'gray'
  },
  bottomSubtitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'rebeccapurple'
  },
  leftSide: {
    flexDirection: 'row', flex: 1
  },
  rightSide: {
    flexDirection: 'row', flex: 1, justifyContent: 'flex-end'
  }
})
