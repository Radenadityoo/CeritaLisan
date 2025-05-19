import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

export default function StoryCard({ judul, daerah, deskripsi }) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Start invisible
  const slideAnim = useRef(new Animated.Value(20)).current; // Start slightly lower


  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }).start();
}, [fadeAnim, slideAnim]);

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
      <Text style={styles.title}>{judul}</Text>
      <Text style={styles.region}>{daerah}</Text>
      <Text style={styles.desc}>{deskripsi}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  region: {
    fontSize: 14,
    color: '#666',
  },
  desc: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
});
