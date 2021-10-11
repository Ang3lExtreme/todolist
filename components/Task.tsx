import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { taskProps } from './types';

const Task = (props: taskProps) => {


  return(
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
        
        {
          props.end ? (<Text style={styles.cross}>{'✔'}</Text>) : <Text style={styles.cross}>{''}</Text>
        }
          
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
};

const styles = StyleSheet.create({
  item : {
    backgroundColor : '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft : {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square : {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
  alignItems: 'center',

  },
  itemText : {
    maxWidth: '80%',
  },
  circular : {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  }, 
  cross : {
    fontSize: 20,
    fontWeight : 'bold',

  }
}
)

export default Task;