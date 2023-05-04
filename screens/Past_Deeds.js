import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  
  import React, { useState } from 'react';
  import AsyncStorage from '@react-native-community/async-storage';
  
  const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
   
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('inputValue', inputValue);
        await AsyncStorage.setItem('inputValue1', inputValue1);
   
      } catch (error) {
        console.error(error);
      }
    };
  
    const retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('inputValue');
        const value1 = await AsyncStorage.getItem('inputValue1');
     
        if (
          value !== null || value1 !== null  ) {
          setInputValue(value);
          setInputValue1(value1);
       
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    React.useEffect(() => {
      retrieveData();
    }, []);
  
    return (
      <View>
        <TextInput //title
          multiline={true}
          numberofLines={10}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          onBlur={saveData}
        />
  
        <View>
          <TextInput //grades
          multiline={true}
          numberofLines={10}
          value={inputValue1}
          onChangeText={(text) => setInputValue1(text)}
          onBlur={saveData}
        />
      
        </View>
        
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomePage')}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default App;