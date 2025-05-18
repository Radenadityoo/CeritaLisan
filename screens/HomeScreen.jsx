import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import StoryCard from '../components/StoryCard';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [ceritaList, setCeritaList] = useState([
    {
      id: 1,
      judul: 'Malin Kundang',
      daerah: 'Sumatera Barat',
      deskripsi: 'Seorang anak durhaka dikutuk menjadi batu.',
    },
    {
      id: 2,
      judul: 'Timun Mas',
      daerah: 'Jawa Tengah',
      deskripsi: 'Cerita tentang gadis pemberani yang melawan raksasa.',
    },
  ]);

  const [search, setSearch] = useState('');

  const filteredData = ceritaList.filter(item =>
    item.judul.toLowerCase().includes(search.toLowerCase())
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
        onPress={() => navigation.navigate('Tambah Cerita')}
      >
        <Text style={styles.buttonText}>Form Tambah Cerita</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail Cerita', {
                judul: item.judul,
                daerah: item.daerah,
                deskripsi: item.deskripsi,
              })
            }
          >
            <StoryCard
              judul={item.judul}
              daerah={item.daerah}
              deskripsi={item.deskripsi}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
