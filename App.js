import React from 'react'
import StorybookUI from './storybook'
import { StackNavigator } from 'react-navigation'
import ConfScreen from './src/views/confScreen'
import DetailScreen from './src/views/detailScreen'

const App = StackNavigator({
  Home: { screen: ConfScreen },
  Detail: { screen: DetailScreen }
})

const useStorybook = false
module.exports = useStorybook ? StorybookUI : App
