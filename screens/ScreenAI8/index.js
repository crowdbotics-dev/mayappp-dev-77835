import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to My App</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://via.placeholder.com/150'
      }} style={styles.image} />
        <Text style={styles.title}>Lorem Ipsum</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac bibendum velit. Sed euismod euismod libero, ac
          bibendum velit.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright © 2021</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
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
    textAlign: 'center',
    marginBottom: 20
  },
  footer: {
    height: 50,
    width: '100%',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    color: '#fff'
  }
});
export default ScreenComponent;