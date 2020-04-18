import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
class Main extends React.Component {
  static navigationOptions = {
    title: "Chatter",
  };

  state = {
    name: "",
  };

  onPress = () =>
    this.props.navigation.navigate("Chat", { name: this.state.name });

  onChangeText = (name) => this.setState({ name });

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput style={styles.nameInput} onChangeText={this.onChangeText} />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Main;
