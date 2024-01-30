import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

export default function GoalInput({ addGoalHandler, modalVisibility, handleCloseModal }) {
  const [goalInputText, setGoalInputText] = useState('');

  function goalInputHandler(enteredText) {
    setGoalInputText(enteredText);
    console.log(enteredText);
  }

  function handleAddGoal() {
    addGoalHandler(goalInputText);
    setGoalInputText('');
  }

  return (
    <Modal visible={modalVisibility} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={goalInputText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={handleAddGoal} color='#6f6' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={handleCloseModal} color='#f66' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#114488'
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#aaddff',
    width: '80%',
    padding: 8,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin:  20
  }
});
