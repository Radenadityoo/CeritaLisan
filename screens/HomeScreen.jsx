import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  StyleSheet,
} from 'react-native';
import StoryCard from '../components/StoryCard';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


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

  const tambahCerita = () => {
    const idBaru = ceritaList.length + 1;
    setCeritaList(prev => [
      ...prev,
      {
        id: idBaru,
        judul: `Cerita Baru ${idBaru}`,
        daerah: 'Daerah Baru',
        deskripsi: 'Deskripsi cerita baru yang ditambahkan.',
      },
    ]);
  };

  const filteredData = ceritaList.filter(item =>
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
      <Button title="Tambah Cerita Baru" onPress={tambahCerita} />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail Cerita', {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 16},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
});
