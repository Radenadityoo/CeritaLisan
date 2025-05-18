import React from 'react';
import {Text, StyleSheet, ScrollView } from 'react-native';
import StoryCard from '../components/StoryCard';

const sampleStories = [
  {
    id: 1,
    judul: 'Legenda Sangkuriang',
    daerah: 'Jawa Barat',
    deskripsi: 'Cerita rakyat tentang terbentuknya Gunung Tangkuban Perahu.',
  },
  {
    id: 2,
    judul: 'Asal Mula Danau Toba',
    daerah: 'Sumatera Utara',
    deskripsi: 'Kisah seorang anak setengah ikan dan danau besar yang menyimpan rahasia.',
  },
];

export default function DiscoverScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Jelajahi Cerita Baru</Text>
      {sampleStories.map(story => (
        <StoryCard
          key={story.id}
          judul={story.judul}
          daerah={story.daerah}
          deskripsi={story.deskripsi}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
