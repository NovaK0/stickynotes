import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { ScreenType } from './constants/constants';
import React, { useState } from 'react'
import BackButton from './components/BackButton';
import AddNote from './screens/AddNote';
import AllNotesScreen from './screens/AllNotesScreen';

export default function App() {
  const [screen,setScreen] = useState(ScreenType.home);
  const[notes,setNotes] = useState([]);
  const updateScreen = (data)=>{
      setScreen(data);
  }
  let content;
  if(screen===ScreenType.addNote)
  {
    content=<AddNote
    onExit={updateScreen}
     onSave={(data)=>setNotes([...notes,{id:Date.now(),note:data}])}/>
  }
  else if(screen===ScreenType.allNotes)
  {
    content = <AllNotesScreen notes={notes}/>
  }
  else if(screen===ScreenType.home)
  {
    content=<HomeScreen onExit={updateScreen}/>
  }
  return (
    <View style={styles.container}>
    <Header/>
      <StatusBar style="auto" />
      {screen!=ScreenType.home &&(<BackButton onButtonClick={updateScreen}/>)}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
