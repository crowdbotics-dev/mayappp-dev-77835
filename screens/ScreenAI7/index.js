import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HypothesisTestingScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hypothesis Testing</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://dummyimage.com/300x300/000/fff'
      }} style={styles.image} />
        <Text style={styles.text}>
          Howden's book, Functional Testing and Analysis, introduced the use of
          hypothesis testing as a theoretical basis for random testing. The book
          also contained the development of a simple formula for estimating the
          number of tests n that are needed to have confidence at least 1-1/n in
          a failure rate of no larger than 1/n. The formula is the lower bound
          nlogn, which indicates the large number of failure-free tests needed
          to have even modest confidence in a modest failure rate bound.
        </Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#0077b6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25
  }
});
export default HypothesisTestingScreen;