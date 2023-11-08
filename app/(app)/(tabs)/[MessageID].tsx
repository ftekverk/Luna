import { StyleSheet, View, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Message from '../../../components/Message';

interface TextType {
    text: string,
    recieved: boolean,
    time: number,
}

const MessagesTest: TextType[] = [
    { text: "Test1".repeat(Math.random() * 7 + 1), time: 1, recieved: false },
    { text: "Test2".repeat(Math.random() * 7 + 1), time: 2, recieved: false },
    { text: "Test3".repeat(Math.random() * 7 + 1), time: 3, recieved: true },
    { text: "Test4".repeat(Math.random() * 7 + 1), time: 4, recieved: true },
    { text: "Test5".repeat(Math.random() * 7 + 1), time: 5, recieved: true },
    { text: "Test6".repeat(Math.random() * 7 + 1), time: 6, recieved: false },
    { text: "Test7".repeat(Math.random() * 7 + 1), time: 7, recieved: true },
    { text: "Test8".repeat(Math.random() * 7 + 1), time: 8, recieved: false },
    { text: "Test9".repeat(Math.random() * 7 + 1), time: 9, recieved: true },
    { text: "Test10".repeat(Math.random() * 7 + 1), time: 10, recieved: true },
    { text: "Test11".repeat(Math.random() * 7 + 1), time: 11, recieved: true },
    { text: "Test12".repeat(Math.random() * 7 + 1), time: 12, recieved: true },
    { text: "Test13".repeat(Math.random() * 7 + 1), time: 13, recieved: false },
    { text: "Test12".repeat(Math.random() * 7 + 1), time: 12, recieved: true },
    { text: "Test13".repeat(Math.random() * 7 + 1), time: 13, recieved: false },
    { text: "Test12".repeat(Math.random() * 7 + 1), time: 12, recieved: true },
    { text: "Test13".repeat(Math.random() * 7 + 1), time: 13, recieved: false },
    { text: "Test12".repeat(Math.random() * 7 + 1), time: 12, recieved: true },
    { text: "Test13".repeat(Math.random() * 7 + 1), time: 13, recieved: false },
    { text: "Test12".repeat(Math.random() * 7 + 1), time: 12, recieved: true },
    { text: "Test13".repeat(Math.random() * 7 + 1), time: 13, recieved: false },
]

export default function Conversation() {
    const { MessageID } = useLocalSearchParams(); // Can be id of message eventually
    return (
        <ScrollView style={styles.scrollView}>
            <View style={{ transform: [{ scaleY: -1 }] }}>
                {MessagesTest.map((elem: TextType, i: number) =>
                    <Message key={i} {...elem} displayImage={elem.recieved && i < MessagesTest.length - 1 && MessagesTest[i + 1].recieved !== elem.recieved} />
                )}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: '6%',
    },
    text: {
        borderRadius: 20,
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        fontSize: 25,
        padding: "5%",
    },
    scrollView: {
        transform: [{ scaleY: -1 }],
        marginHorizontal: 0,
        backgroundColor: "#000",
        padding: '6%',
    }
});
