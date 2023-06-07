import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({note}) => {
  return (
    <View style={styles.listitem}>
      <Text style={styles.notetext}>{note}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    listitem:{
        marginTop:20,
        borderWidth:4,
        borderColor:'purple',
                padding:10,
                margin:10,
                borderRadius:5,
                backgroundColor:'#fff000'
    },
    notetext:{
        fontSize:20,
        fontWeight:'400',
    }
})