import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoryCard = ({ judul, daerah, deskripsi }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{judul}</Text>
      <Text style={styles.cardRegion}>{daerah}</Text>
      <Text numberOfLines={2} style={styles.cardDesc}>{deskripsi}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardRegion: {
    color: 'gray',
  },
  cardDesc: {
    marginTop: 4,
  },
});

export default StoryCard;
