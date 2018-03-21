import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { DemoCellRaw } from './demo-cell-raw'

const TALK = {
  speakerName: 'Gant Laborde',
  talkTitle: 'React Native Workshop',
  avatarUrl: 'https://placekitten.com/42/45',
  startTime: '9:00AM',
  duration: '30 Minutes'
}

storiesOf('DemoCell')
  .add('Basic DemoCellRaw', () => (
    <DemoCellRaw talk={TALK} onPress={() => window.alert('Open Something')} />
  ))
