import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function UserImage() {
    return (
        <View style={styles.container} >
            <Image
                style={styles.image}
                source="https://picsum.photos/seed/696/3000/2000"
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        padding: '6%',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
    },
    image: {
        // resizeMode="cover",
        borderRadius: 20,
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
    },
});
