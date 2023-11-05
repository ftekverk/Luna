
import EditScreenInfo from '../../../components/EditScreenInfo';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { update } from '../../../reducers/userReducer';
import { RootState } from '../../../state/store';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  );
}


const ProfileScreen = ({ }) => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);
  const [newUsername, setNewUsername] = useState('');

  const saveUsername = () => {
    // in case the username hasnt been updated
    if (newUsername === '') return;

    dispatch(update(newUsername));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: 'white' }}>Welcome TEST {user}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 12, padding: 8, color: 'white' }}
        onChangeText={text => setNewUsername(text)}
        value={newUsername}
        placeholder='New Username'
        placeholderTextColor='white'
      />
      <Button
        // style={{ height: 40, width: 160, backgroundColor: 'white', borderRadius: 8, marginTop: 10 }}
        title='Save'
        onPress={() => saveUsername()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
