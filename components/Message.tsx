import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';
interface MessageType {
    text: string,
    time: number, // TODO: Change to timestamp
    recieved?: boolean,
    displayImage?: boolean,
}

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Message({ text, time, recieved = false, displayImage = false }: MessageType) {
    const [showTime, setShowTime] = useState(false);

    const SendRecievedStyles = StyleSheet.create({
        container: {
            alignItems: recieved ? 'flex-start' : 'flex-end',
            flexDirection: recieved ? 'row' : undefined,
            // paddingBottom: displayImage ? 10 : 0,
        },
        text: {
            backgroundColor: recieved ? "#ddd" : "#e9e2ff",
            color: recieved ? 'black' : 'black',
        }
    })
    const CombinedContainerStyles = StyleSheet.compose(styles.container, SendRecievedStyles.container);
    const CombinedTextStyles = StyleSheet.compose(styles.text, SendRecievedStyles.text);
    return (
        <View style={CombinedContainerStyles} >
            <View style={styles.ImageContainer}>
                <View style={{ flexGrow: 1 }} />
                {recieved && displayImage ?
                    <Image
                        style={styles.image}
                        source="https://picsum.photos/seed/696/3000/2000"
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                    /> : null
                }
            </View>
            <Pressable style={styles.pressable} onPress={() => setShowTime(!showTime)} >
                <Text style={CombinedTextStyles}>
                    {text}
                </Text>
                {showTime ?
                    <Text style={styles.time}>
                        {time}
                    </Text> : null
                }
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        paddingBottom: 2,
    },
    time: {
        color: "white",
    },
    text: {
        borderRadius: 15,
        backgroundColor: '#fff',
        fontSize: 15,
        padding: "3%",
    },
    pressable: {
        maxWidth: "60%",
    },
    image: {
        borderRadius: 20,
        width: '100%',
        backgroundColor: '#0553',
        aspectRatio: 1,
        alignItems: 'flex-end',
    },
    ImageContainer: {
        marginRight: 5,
        width: '10%',
        justifyContent: 'center',
        top: "3%", // 
    }
});
