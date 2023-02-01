import React from 'react';
import {View, Text} from 'react-native';

interface Props {}

function Feed({item}: Props) {
  const {} = props;

  return (
    <View>
      <Text>{item.feedId}</Text>
    </View>
  );
}

export default Feed;
