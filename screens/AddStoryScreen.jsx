/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {postCerita} from '../utils/api';
import { showStoryAddedNotification } from '../utils/notifications'; // adjust path if needed


export default function AddStoryScreen({navigation}) {
  const [judul, setJudul] = useState('');
  const [daerah, setDaerah] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSubmit = async () => {
  if (!judul || !daerah || !deskripsi) {
    Alert.alert('Semua field harus diisi!');
    return;
  }

  try {
    await postCerita({
      judul,
      daerah,
      deskripsi,
    });

    // ✅ Show local notification
    await showStoryAddedNotification();

    Alert.alert('Cerita berhasil ditambahkan!');
    navigation.goBack();
  } catch (error) {
    Alert.alert('Gagal menambahkan cerita');
    console.error('POST error:', error);
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Judul Cerita</Text>
      <TextInput style={styles.input} value={judul} onChangeText={setJudul} />

      <Text style={styles.label}>Daerah Asal</Text>
      <TextInput style={styles.input} value={daerah} onChangeText={setDaerah} />

      <Text style={styles.label}>Deskripsi Cerita</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        multiline
        value={deskripsi}
        onChangeText={setDeskripsi}
      />

      <Button title="Simpan Cerita" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 16, backgroundColor: '#fff', flex: 1},
  label: {fontSize: 16, marginBottom: 6},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
  },
});
