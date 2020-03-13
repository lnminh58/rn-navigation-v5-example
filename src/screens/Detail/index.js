import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from '@/components';

import styles from './style';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text style={styles.title}>Detail screen</Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          containerStyle={{ backgroundColor: '#40739e' }}
        >
          Go Home
        </Button>
        <Button
          onPress={() => navigation.navigate('Inbox')}
          containerStyle={{ backgroundColor: '#0097e6' }}
        >
          Go Inbox
        </Button>
        <Button
          onPress={() => navigation.navigate('Setting')}
          containerStyle={{ backgroundColor: '#273c75' }}
        >
          Go Setting
        </Button>
      </View>
    );
  }
}

export default Detail;
