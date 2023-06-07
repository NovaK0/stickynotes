import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}> 
    <Text  style={styles.headertitle}>Sticky Notes</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        width: '100%',
        height:'16%',
        backgroundColor:Platform.OS=="android"? "purple" : "white",
        padding:30

    },
headertitle:{
    color: Platform.OS=="android"?"black":"purple",
    fontSize:30,
    fontWeight:"bold",
    padding:10,
    marginTop:10
}

})