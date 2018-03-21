import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import StorybookUI from './storybook'
import SpeakerCell from './src/views/demo-cell'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(204,214,254)'
  },
  row: {
    flex: 1,
    backgroundColor: 'rgb(224,234,254)'
  },
  listContent: {
    marginTop: 30
  }
})

class App extends React.PureComponent {

  state = {
    dataObjects: []
  }

  constructor (props) {
    super(props)
    fetch('https://gist.githubusercontent.com/GantMan/5b6cfc14ef96ea3a6b977dcb92f54fdd/raw/7efb49ba6af45e1ebf0cc71cf43c6a4813db90e5/full_schedule.json')
      .then(response => response.json())
      // .then(response => window.alert(JSON.stringify(response)))
      .then(jsonData => this.setState({
        dataObjects: jsonData.schedule.conference.days[1].rooms['React (Orleans)']
      }))
      .catch(err => window.alert(err))
  }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow ({item}) {
    const url = (item.persons[0] && `https://cfp.connectevents.io/${item.persons[0].avatar_path}`) || 'http://placekitten.com/g/300/300'
    const name = (item.persons[0] && item.persons[0].full_public_name) || ''
    return (
      <SpeakerCell talk={{
        speakerName: name,
        talkTitle: item.title,
        avatarUrl: url,
        startTime: item.start,
        duration: item.duration
      }} />
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const useStorybook = false
module.exports = useStorybook ? StorybookUI : App
