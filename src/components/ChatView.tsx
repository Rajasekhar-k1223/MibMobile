import React from 'react';
import {
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
function ChatView() {
  const dim = Dimensions.get('screen');
  return (
    <View>
      <Text>ChatView</Text>
      <View style={{flexDirection: 'column'}}>
        <ScrollView
          style={{maxHeight: dim.height - 225, minHeight: dim.height - 225}}>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>{dim.height}</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>{dim.height}</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>{dim.height}</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>{dim.height}</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
          <Text>ChatView</Text>
        </ScrollView>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 130}>
          <View
            style={{
              backgroundColor: '#fff',
            }}>
            <TextInput />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

export default ChatView;
