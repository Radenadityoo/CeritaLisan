import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  useEffect(() => {
    // Ask for permission on Android 13+ (API level 33+)
    const requestNotificationPermission = async () => {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: 'Izin Notifikasi',
            message: 'Aplikasi ini memerlukan izin untuk menampilkan notifikasi.',
            buttonNeutral: 'Nanti Saja',
            buttonNegative: 'Tolak',
            buttonPositive: 'Izinkan',
          },
        );
        console.log('Notifikasi permission:', granted);
      }
    };

    requestNotificationPermission();
  }, []);

  return <AppNavigator />;
}
