import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://dummyimage.com/300x300/000/fff'
    }} style={styles.image} />
      <Text style={styles.title}>QuickCheck</Text>
      <Text style={styles.description}>
        QuickCheck is a famous test tool, originally developed for Haskell but
        ported to many other languages, that generates random sequences of API
        calls based on a model and verifies system properties that should hold
        true after each run.
      </Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20
  }
});
export default ScreenComponent;