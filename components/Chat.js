import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import Fire from "../Fire";
import SafeAreaView from 'react-native-safe-area-view';

class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.getParam() || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.getParam(),
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
      </SafeAreaView>
    );
  }

  componentDidMount() {
    Fire.shared.on((message) =>
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default Chat;
