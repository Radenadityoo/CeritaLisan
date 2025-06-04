import notifee, { AndroidImportance } from '@notifee/react-native';

export async function showStoryAddedNotification() {
  await notifee.requestPermission();

  const channelId = await notifee.createChannel({
    id: 'story',
    name: 'Story Notifications',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: 'Cerita Baru Ditambahkan 🎉',
    body: 'Terima kasih telah menambahkan cerita rakyat ke CeritaLisan!',
    android: {
      channelId,
    },
  });
}
