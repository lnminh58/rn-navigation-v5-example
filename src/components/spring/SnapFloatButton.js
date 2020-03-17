// @refresh reset
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useSpring, animated } from 'react-spring/native';

import { clamp } from 'lodash';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#00cec9',
  },
});

const AnimatedView = animated(View);

const SnapFloatButton = ({ children }) => {
  const [positionState, setPosistionState] = useState({
    x: 0,
    y: 0,
    v: 0,
    t: 0,
  });
  const prevPositionRef = useRef();
  useEffect(() => {
    prevPositionRef.current = positionState;
  });
  const velocity = clamp(positionState.v, 1, 8);
  const { translateX, translateY } = useSpring({
    translateX: positionState.x,
    translateY: positionState.y,
    config: { mass: velocity, tension: 500 * velocity, friction: 50 },
  });

  const setPosition = isRelase => ({ nativeEvent }) => {
    setPosistionState(() => {
      const { x, y, t } = prevPositionRef.current;
      const { pageX: newX, pageY: newY, timestamp: newT } = nativeEvent;
      const v = Math.sqrt((newX - x) ** 2 + (newY - y) ** 2) / Math.abs(newT - t);
      return {
        // eslint-disable-next-line no-nested-ternary
        x: isRelase
          ? newX > SCREEN_WIDTH / 2 - 30
            ? SCREEN_WIDTH - 60
            : 0
          : newX - 60,
        y: newY - 60,
        t: newT,
        v: isRelase ? 1 : v,
      };
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0984e3' }}>
      <AnimatedView
        style={[
          styles.container,
          {
            transform: [
              {
                translateX,
              },
              {
                translateY,
              },
            ],
          },
        ]}
        onResponderGrant={setPosition(false)}
        onResponderMove={setPosition(false)}
        onResponderRelease={setPosition(true)}
        onStartShouldSetResponderCapture={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderTerminationRequest={() => true}
      >
        {children}
      </AnimatedView>
    </View>
  );
};

export default SnapFloatButton;
