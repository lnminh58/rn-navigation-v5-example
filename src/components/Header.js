import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  static propTypes = {
    height: PropTypes.number,
    onPress: PropTypes.func.isRequired,
    withAvatar: PropTypes.bool,
    animatedValue: PropTypes.instanceOf(Animated.Value),
  };

  static defaultProps = {
    height: 50,
    withAvatar: false,
    animatedValue: new Animated.Value(0),
  };

  getAvatar() {
    const { animatedValue, height } = this.props;

    const avatarScale = animatedValue.interpolate({
      inputRange: [0, height - 80],
      outputRange: [1, 0.5],
      extrapolateRight: 'clamp',
    });

    const avatarTranslateX = animatedValue.interpolate({
      inputRange: [-height + 80, 0, height - 80],
      outputRange: [60, 0, -80],
      extrapolateRight: 'clamp',
    });

    const avatarTranslateY = animatedValue.interpolate({
      inputRange: [-height + 80, 0, height - 80],
      outputRange: [50, 0, 190],
      extrapolateRight: 'clamp',
    });

    const textScale = animatedValue.interpolate({
      inputRange: [0, height - 80],
      outputRange: [1, 0.7],
      extrapolateRight: 'clamp',
    });

    const textTranslateX = animatedValue.interpolate({
      inputRange: [-height + 80, 0, height / 4],
      outputRange: [60, 0, 40],
      extrapolateRight: 'clamp',
    });

    const textTranslateY = animatedValue.interpolate({
      inputRange: [-height + 80, 0, height - 80],
      outputRange: [80, 0, 15],
      extrapolateRight: 'clamp',
    });

    return (
      <View>
        <Animated.Image
          style={[
            styles.avatar,
            {
              transform: [
                { scale: avatarScale },
                { translateX: avatarTranslateX },
                { translateY: avatarTranslateY },
              ],
            },
          ]}
          source={{
            uri:
              'https://images.unsplash.com/photo-1540547184829-84c9b874d511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80}',
          }}
        />

        <Animated.Text
          style={[
            styles.name,
            {
              transform: [
                { scale: textScale },
                { translateX: textTranslateX },
                { translateY: textTranslateY },
              ],
            },
          ]}
        >
          User Name
        </Animated.Text>
      </View>
    );
  }

  render() {
    const { withAvatar, onPress, animatedValue, height } = this.props;
    const opacity = withAvatar
      ? animatedValue.interpolate({
        inputRange: [0, height - 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      })
      : 1;

    const scale = withAvatar
      ? animatedValue.interpolate({
        inputRange: [0, 160],
        outputRange: [1, 0.8],
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
      : 1;

    const translateY = withAvatar
      ? animatedValue.interpolate({
        inputRange: [0, 160],
        outputRange: [0, 20],
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
      : 1;

    let wrapperStyle = {};

    if (withAvatar) {
      wrapperStyle = {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      };
    }

    return (
      <Animated.View
        style={[styles.wrapper, wrapperStyle]}
        pointerEvents="box-none"
      >
        <Animated.View
          style={[styles.background, { opacity }]}
          pointerEvents="box-none"
        />

        <Animated.View style={{ transform: [{ scale }, { translateY }] }}>
          {withAvatar ? (
            this.getAvatar()
          ) : (
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.header}>
                Welcome to React Native Parallax Scroll
              </Text>
            </TouchableOpacity>
          )}
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(51,51,51,1)',
  },
  header: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  name: {
    color: '#fff',
    fontSize: 26,
    marginLeft: 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 80,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 50,
  },
});
