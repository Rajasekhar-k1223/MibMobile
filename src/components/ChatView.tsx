import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatHeader from './messages/ChatHeader';
import MessagesList from './messages/MessagesList';
import ChatInput from './messages/ChatInput';
function ChatView({navigation, route}) {
  // const dim = Dimensions.get('screen');
  const {username, bio, picture, isBlocked, isMuted} = route.params;
  const [reply, setReply] = useState('');
  const [isLeft, setIsLeft] = useState();

  const swipeToReply = (message, isLeft) => {
    setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
    setIsLeft(isLeft);
  };

  const closeReply = () => {
    setReply('');
  };

  return (
    <View style={{flex: 1}}>
      {/* <ChatHeader
        onPress={() => {}}
        username={username}
        picture={picture}
        onlineStatus={'Online'}
      /> */}
      <MessagesList onSwipeToReply={swipeToReply} />
      <ChatInput
        reply={reply}
        isLeft={isLeft}
        closeReply={closeReply}
        username={'Rajasekhar'}
      />
    </View>
  );
}

export default ChatView;
const styles = StyleSheet.create({
  recived: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#B9F3FC',
    color: '#fff',
    flexWrap: 'wrap',
    //minWidth: 10,
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  sender: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#BA94D1',
    color: '#fff',
    flexWrap: 'wrap',
    //minWidth: 10,
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  messageFont: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },
});
