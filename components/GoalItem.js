// import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalItem({ item, deleteGoalHandler }) {
  return (
      <View style={styles.goalItem}>
        <Pressable
          // android_ripple={{ color: '#8822cc' }}
          style={({ pressed }) => pressed && styles.pressedGoal}
          onPress={() => deleteGoalHandler(item.key)}>
          <Text style={styles.goalText}>{item.text}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5588dd',
    marginVertical: 6,
    borderRadius: 8,
  },
  goalText: {
    padding: 8,
    color: '#fff',
  },
  pressedGoal: {
    opacity: 0.8,
    backgroundColor: '#2255ff',
    borderRadius: 8,
  },
});
