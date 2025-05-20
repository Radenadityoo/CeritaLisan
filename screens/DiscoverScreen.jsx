import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import StoryCard from '../components/StoryCard';
import { getCerita } from '../utils/api';
import { useNavigation } from '@react-navigation/native';

export default function DiscoverScreen() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCerita();
        setStories(data);
      } catch (err) {
        console.error('Error fetching stories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Jelajahi Cerita Baru</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        stories.map((story) => (
          <TouchableOpacity
            key={story.id}
            onPress={() =>
              navigation.navigate('Detail Cerita', {
                id: story.id,
                judul: story.judul,
                daerah: story.daerah,
                deskripsi: story.deskripsi,
              })
            }
          >
            <StoryCard
              judul={story.judul}
              daerah={story.daerah}
              deskripsi={story.deskripsi}
            />
          </TouchableOpacity>
        ))
      )}
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
