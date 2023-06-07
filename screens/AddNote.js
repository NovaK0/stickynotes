import { StyleSheet, Text, TextInput, View,Button } from 'react-native'
import React, { useState } from 'react'
import { ScreenType } from '../constants/constants';

const AddNote = ({onSave,onExit}) => {
  const[enteredText,setEnteredText]=useState("");
  const handleChange=(val)=>{
    setEnteredText(val);
  }
  const handleClick=()=>{
     if(enteredText.trim().length>0){
      onSave(enteredText);
      onExit(ScreenType.allNotes);

    }
    else{
      alert("Please enter a note");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>

      <Text style={styles.title}>AddNote</Text>
<View>
  <TextInput style={styles.input} onChangeText={handleChange}/>
</View>
<Button onPress={handleClick} title="Add"/>
      </View>
     
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  formcontainer: {
    backgroundColor:'#f5f5f5',
    padding:10,
    marginHorizontal:10,
    marginVertical:10
  },
  title: {
    fontSize:20,
    fontWeight:'bold'
  },
  input:{
    marginVertical:20,
    width:'100%',
      borderBottomWidth:2,
      fontSize:16,
      padding:10
  }
})