import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function GroupChat() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hiii',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg",
                },
            },
            {
                _id: 2,
                text: 'Hello ',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://i.pinimg.com/564x/62/8a/11/628a118941a52efc9e6715a724e0b29b.jpg',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: 'blue',
                        padding: 5
                    },
                }}
                textStyle={{
                    right: {
                        color: '#fff',
                    },
                }}
            />
        );
    };
    return (
      <ImageBackground
      style={{ flex: 1 }}
      source={require('../assets/water.png')}
  >
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
        />
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})