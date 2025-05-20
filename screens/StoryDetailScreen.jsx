import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { putCerita, deleteCerita } from '../utils/api';

export default function StoryDetailScreen({ route, navigation }) {
  const { id, judul, daerah, deskripsi } = route.params;

  const [newJudul, setNewJudul] = useState(judul);
  const [newDaerah, setNewDaerah] = useState(daerah);
  const [newDeskripsi, setNewDeskripsi] = useState(deskripsi);

  const handleUpdate = async () => {
    try {
      await putCerita(id, {
        judul: newJudul,
        daerah: newDaerah,
        deskripsi: newDeskripsi,
      });
      Alert.alert('Berhasil diperbarui!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Gagal update:', err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCerita(id);
      Alert.alert('Cerita berhasil dihapus!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Gagal menghapus cerita');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Judul</Text>
      <TextInput value={newJudul} onChangeText={setNewJudul} style={styles.input} />

      <Text style={styles.label}>Daerah</Text>
      <TextInput value={newDaerah} onChangeText={setNewDaerah} style={styles.input} />

      <Text style={styles.label}>Deskripsi</Text>
      <TextInput
        value={newDeskripsi}
        onChangeText={setNewDeskripsi}
        multiline
        style={[styles.input, { height: 100 }]}
      />

      <Button title="Perbarui Cerita" onPress={handleUpdate} />
      <View style={{ height: 12 }} />
      <Button title="Hapus Cerita" onPress={handleDelete} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#fff' },
  label: { fontWeight: 'bold', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
});
