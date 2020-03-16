import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from '@/components';

import styles from './styles';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text style={styles.title}>Setting screen</Text>
        <Button onPress={() => navigation.navigate('Home')}>
          Go Home
        </Button>
      </View>
    );
  }
}

export default Setting;
