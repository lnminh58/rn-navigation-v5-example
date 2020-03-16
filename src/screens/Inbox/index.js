import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from '@/components';

import styles from './styles';

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text style={styles.title}>Inbox screen</Text>
        <Button onPress={() => navigation.navigate('Detail')}>Go Detail</Button>
      </View>
    );
  }
}

export default Inbox;
