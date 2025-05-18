import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StoryDetailScreen({ route }) {
  const { judul, daerah, deskripsi } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{judul}</Text>
      <Text style={styles.region}>{daerah}</Text>
      <Text style={styles.description}>{deskripsi}</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  region: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});
