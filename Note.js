import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { render } from "react-dom";

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.notetxt}>{this.props.val.date}</Text>
        <Text style={styles.notetxt}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.delMethod}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeletetxt}>x</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
  },
  notetxt: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#e91e63",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeletetxt: {
    color: "#000",
    fontSize: 60,
  },
});
