import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

import { Collapsible, SnapFloatButton } from '@/components';

import styles from './styles';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SnapFloatButton />
      </View>
    );
  }
}

export default index;
