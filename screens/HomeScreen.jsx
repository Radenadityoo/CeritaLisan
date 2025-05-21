import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  TextInput,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import StoryCard from '../components/StoryCard';
import { getCerita } from '../utils/api';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const stories = await getCerita();
      setData(stories);
    } catch (error) {
      console.error('Failed to load:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadData);
    return unsubscribe;
  }, [navigation]);

  const filtered = data.filter(item =>
    item.judul.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CeritaLisan</Text>
      <TextInput
        style={styles.input}
        placeholder="Cari cerita rakyat..."
        value={search}
        onChangeText={setSearch}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tambah Cerita')}>
        <Text style={styles.buttonText}>Tambah Cerita</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail Cerita', {
                  id: item.id,
                  judul: item.judul,
                  daerah: item.daerah,
                  deskripsi: item.deskripsi,
                })
              }>
              <StoryCard
                judul={item.judul}
                daerah={item.daerah}
                deskripsi={item.deskripsi}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 16},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
