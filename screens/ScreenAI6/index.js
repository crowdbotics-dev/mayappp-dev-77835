import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RandomTestingScreen = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://dummyimage.com/300x300/000/fff'
    }} style={styles.image} />
      <Text style={styles.title}>Random Testing</Text>
      <Text style={styles.description}>
        Random testing is a black-box software testing technique where programs
        are tested by generating random, independent inputs. Results of the
        output are compared against software specifications to verify that the
        test output is pass or fail. In case of absence of specifications the
        exceptions of the language are used which means if an exception arises
        during test execution then it means there is a fault in the program, it
        is also used as a way to avoid biased testing.
      </Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center'
  }
});
export default RandomTestingScreen;