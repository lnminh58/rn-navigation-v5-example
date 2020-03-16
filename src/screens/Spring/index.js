import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { FadeText } from '@/components';

import styles from './styles';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <FadeText />
      </View>
    );
  }
}

export default index;
