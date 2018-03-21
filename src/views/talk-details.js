import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { PropTypes } from "prop-types"

export class TalkDetails extends React.Component {
  static propTypes = {
    talk: PropTypes.object,
    speakerName: PropTypes.string,
    talkTitle: PropTypes.string,
    avatarUrl: PropTypes.string,
    startTime: PropTypes.string,
    duration: PropTypes.string
  }

  static defaultProps = {
    talk: {
      speakerName: 'Gant Laborde',
      talkTitle: 'React Native Workshop',
      avatarUrl: 'https://placekitten.com/101/101',
      startTime: '9:00AM',
      duration: '30 Minutes',
      talkDescription: "A full day workshop on React Native - leverage your Web programming skills to build native apps!",
      aboutDescription: "Gant Laborde is committed to serving the best authentic Mexican cuisine in all of South Florida. With restaurants from Weston Broward to the beach, plus a food truck, you’re never far away from feasting on its award-winning dishes, lively libations and inviting atmosphere."
    }
  }

  render () {
    const {
      speakerName,
      talkTitle,
      avatarUrl,
      startTime,
      duration,
      talkDescription,
      aboutDescription
    } = this.props.talk
    return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'purple'}}>
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.image} source={{uri: avatarUrl}} />
        </View>
        <View style={styles.topContainer}>
          <View style={styles.topText}>
            <Text style={styles.topHeader}>TALK</Text>
            <Text style={styles.talkTitle}>{talkTitle}</Text>
            <Text style={styles.talkDescription}>{talkDescription}</Text>
          </View>
          <View style={styles.topText}>
            <Text style={styles.topHeader}>ABOUT</Text>
            <Text style={styles.talkTitle}>{speakerName}</Text>
            <Text style={styles.talkDescription}>{aboutDescription}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingBottom: 20}}>
          <Image style={{width: 50, height: 50 }}source={require('../images/twitter-logo.png')}/>
          <Image style={{width: 30, height: 30, marginLeft: 20 }}source={require('../images/github-logo.png')}/>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={styles.bottomItemWrapper}>
              <Text style={styles.bottomTitle}>Start</Text>
              <Text style={styles.bottomSubtitle}>{startTime}</Text>
            </View>
            <View style={[styles.bottomItemWrapper, {paddingLeft: 20}]}>
              <Text style={styles.bottomTitle}>Duration</Text>
              <Text style={styles.bottomSubtitle}>{duration}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
            <View style={[styles.bottomItemWrapper, {paddingRight: 20}]}>
            </View>
            <View style={styles.bottomItemWrapper}>
            </View>
          </View>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    // overflow: 'hidden' // Talk about without
  },
  topContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -60
  },
  topHeader: {
    fontSize: 13,
    color: 'gray'
  },
  talkTitle: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rebeccapurple'
  },
  talkDescription: {
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 16,
    color: 'gray'
  },
  bottomItemWrapper: {
    justifyContent: 'center'
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    bottom: 50
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'ghostwhite',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6
  },
  bottomTitle: {
    fontSize: 12,
    color: 'gray'
  },
  bottomSubtitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'rebeccapurple'
  }
})
