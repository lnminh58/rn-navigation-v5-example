// @refresh reset
import React, { useState, Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSpring, animated } from 'react-spring/native';

const AnimatedView = animated(View);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

const FlipCard = ({
  frontComponent,
  backComponent,
  containerStyle,
  frontContainerStyle,
  backContainerStyle,
  duration,
  horizontal,
  flipped,
  scaleValue,
}) => {
  const [containerHeight, setContainerHeight] = useState(0);

  const { rotate, scale, opacity } = useSpring({
    from: {
      opacity: flipped ? 1 : 0,
      scale: scaleValue,
      rotate: flipped ? '180deg' : '0deg',
    },
    to: async next => {
      await next({ scale: scaleValue });
      await next({
        opacity: flipped ? 1 : 0,
        rotate: `${flipped ? 180 : 0}deg`,
      });
      await next({ scale: 1 });
    },
    config: { mass: 5, tension: 1000, friction: 80, duration },
  });

  const backRotate = rotate.interpolate(
    t => `${Number(t.split('deg')[0]) + 180}deg`,
  );

  return (
    <View
      style={[styles.container, { height: containerHeight }, containerStyle]}
    >
      <AnimatedView
        onLayout={({ nativeEvent }) => {
          setContainerHeight(
            Math.max(containerHeight, nativeEvent.layout.height),
          );
        }}
        style={[
          styles.contentContainer,
          {
            opacity: opacity.interpolate(o => 1 - o),
            transform: [
              { [`${horizontal ? 'rotateY' : 'rotateX'}`]: rotate },
              { scaleX: scale },
              { scaleY: scale },
            ],
          },
          frontContainerStyle,
        ]}
      >
        {frontComponent}
      </AnimatedView>
      <AnimatedView
        onLayout={({ nativeEvent }) => {
          setContainerHeight(
            Math.max(containerHeight, nativeEvent.layout.height),
          );
        }}
        style={[
          styles.contentContainer,
          {
            opacity,
            transform: [
              { [`${horizontal ? 'rotateY' : 'rotateX'}`]: backRotate },
              { scaleX: scale },
              { scaleY: scale },
            ],
          },
          backContainerStyle,
        ]}
      >
        {backComponent}
      </AnimatedView>
    </View>
  );
};

FlipCard.defaultProps = {
  duration: 500,
  horizontal: false,
  scaleValue: 0.8,
};

class PureFlipCard extends Component {
  shouldComponentUpdate(nextProps) {
    const { flipped } = this.props;
    return nextProps.flipped !== flipped;
  }

  render() {
    return <FlipCard {...this.props} />;
  }
}

export default PureFlipCard;
