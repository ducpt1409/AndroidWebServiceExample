import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.movies
        })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <FlatList
          padding={30}
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <View style={{ height: 50 }}>
              <Text style={{ height: 50 }}>{item.title} - {item.releaseYear}</Text>
              <View style={{ height: 1, backgroundColor: 'gray' }}></View>
            </View>

          }
        />

      </View>
    )
  }
}