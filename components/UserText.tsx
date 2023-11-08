import { StyleSheet, View, Text } from 'react-native';

export default function UserImage() {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero velit nulla quidem explicabo illo cumque atque et commodi rem? Laboriosam autem ut</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: '6%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "fdfdfd",
    },
    text: {
        // resizeMode="cover",
        borderRadius: 20,
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        fontSize: 25,
        padding: "5%",
    },
});
