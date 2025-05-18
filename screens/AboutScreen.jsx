import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang CeritaLisan</Text>
      <Text style={styles.text}>
        CeritaLisan adalah aplikasi yang bertujuan mengumpulkan dan membagikan cerita rakyat dari berbagai daerah di Indonesia. Aplikasi ini dikembangkan untuk melestarikan budaya dan memperkenalkan kekayaan cerita nusantara kepada generasi muda.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});
