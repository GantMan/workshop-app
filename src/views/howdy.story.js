import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Howdy from './howdy'

storiesOf('Howdy')
  .add('Basic Howdy', () => (
    <Howdy/>
  ))
  .add('Howdy with props', () => (
    <Howdy name='Jake' />
  ))
