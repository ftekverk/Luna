import { StyleSheet, ScrollView } from 'react-native';

import UserImage from '../../../components/UserImage';
import UserText from '../../../components/UserText';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <UserImage />
      <UserText />
      <UserImage />
      <UserText />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  scrollView: {
    marginHorizontal: 0,
    backgroundColor: "#000"
  }
});
