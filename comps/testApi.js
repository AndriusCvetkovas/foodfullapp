/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import axios from 'axios';
import {View,Text,ScrollView} from 'react-native';

export default class TestAxioApi extends React.Component {
    state = {
      posts: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:3000`)
        .then(res => {
          const posts = res.data;
          this.setState({ posts });
        })
    }
  
    render() {
      
      return (
        <View>
            <View>
              {this.state.posts.map(post => <Text>{post.organization}</Text>)}
            </View>
        </View>
      )
    }
  }


