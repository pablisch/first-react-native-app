import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function handleOpenModal() {
    setModalVisibility(true);
  }

  function handleCloseModal() {
    setModalVisibility(false);
  }

  function addGoalHandler(newGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: newGoalText, key: Date.now() },
    ]);
    handleCloseModal();
  }

  function deleteGoalHandler(key) {
    console.log('delete');
    setCourseGoals((current) => current.filter((goal) => goal.key !== key));
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#99ddff'
          onPress={handleOpenModal}
        />
        {modalVisibility && (
          <GoalInput
            addGoalHandler={addGoalHandler}
            modalVisibility={modalVisibility}
            handleCloseModal={handleCloseModal}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem item={item} deleteGoalHandler={deleteGoalHandler} />
            )}></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 20,
    // backgroundColor: '#04085a'
  },
  goalsContainer: {
    flex: 4,
  },
});
