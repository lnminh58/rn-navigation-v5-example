import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from '@/components';

import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text style={styles.title}>Home screen</Text>
        <Button onPress={() => navigation.navigate('Detail')}>Go Detail</Button>

        <Button onPress={() => navigation.navigate('AnimateHeader')}>
          Go Animated header
        </Button>

        <Button onPress={() => navigation.navigate('FixedHeader')}>Go Fixed Header</Button>

        <Button onPress={() => navigation.navigate('HeaderCollapsibleTabs')}>Go Header Collapsible Tabs</Button>
      </View>
    );
  }
}

export default Home;
