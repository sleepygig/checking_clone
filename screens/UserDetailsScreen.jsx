import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

export default function UserDetailsScreen({ route, navigation }) {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://picsum.photos/seed/${user.id}/100` }}
        style={styles.image}
      />
      <Text style={styles.header}>{user.name}</Text>
      <Text style={styles.detail}>Username: {user.username}</Text>
      <Text style={styles.detail}>Email: {user.email}</Text>
      <Text style={styles.detail}>Phone: {user.phone}</Text>
      <Text style={styles.detail}>Website: {user.website}</Text>
      <Text style={styles.detail}>Company: {user.company.name}</Text>
      <Text style={styles.detail}>Address: {user.address.street}, {user.address.city}</Text>

    
      <Button title="Back to User List" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    marginBottom: 8,
  },
});
