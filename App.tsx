import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'
import { taskProps } from './components/types';
export default function App() {

  const [task, setTask] = useState<string>('')
  const [taskItems, setTaskItems] = useState<string[]>([])
  const [taskEnd, setTaskEnd] = useState<boolean[]>([])

  const handlerAddTask = () => {
    Keyboard.dismiss();
    if(task !== ''){
      setTaskItems([...taskItems, task])
      setTaskEnd([...taskEnd, false])
      setTask('');

    }

  }

  const completeTask = (index:  number ) => {
    console.log(taskEnd[index]);
    let itemsCopy = [...taskEnd];
    
    itemsCopy[index] = !taskEnd[index];
    setTaskEnd(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          Offer's Tasks
        </Text>
        <View style={styles.items}>
          {/*where the task goes*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>

                  <Task end={taskEnd[index]} key={index} text={item} />
                </TouchableOpacity>
                ) 
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} 
            placeholder={'Write a Task'} 
            value={task} 
            onChangeText={(text: string) => setTask(text)}></TextInput>
          
          <TouchableOpacity onPress={() => handlerAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
            </TouchableOpacity> 
          
          </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
 
  },
  taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
  },
  sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  items: {
    marginTop: 15, 
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
addText: {
  fontSize: 35,
},

});
