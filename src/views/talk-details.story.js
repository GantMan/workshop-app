import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { TalkDetails } from './talk-details'

const TALK = {
  speakerName: 'Gant Laborde',
  talkTitle: 'React Native Workshop',
  avatarUrl: 'https://placekitten.com/101/101',
  startTime: '9:00AM',
  duration: '30 Minutes',
  talkDescription: "A full day workshop on React Native - leverage your Web programming skills to build native apps!",
  aboutDescription: "Gant Laborde is committed to serving the best authentic Mexican cuisine in all of South Florida. With restaurants from Weston Broward to the beach, plus a food truck, you’re never far away from feasting on its award-winning dishes, lively libations and inviting atmosphere."
}

storiesOf('TalkDetails')
  .add('Basic TalkDetails', () => (
    <TalkDetails talk={TALK} />
  ))
