import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);

    
  };
  const [count1, setCount1] = useState(0);
  
  const incrementCount2 = () => {
    setCount1(count1 + 1);
  };
  const zerar = () => {
    setCount(0)
    setCount1(0);
  };
  return (
   
    <View style={styles.container}>
      <View style={styles.contador1}>
      <Text style={styles.title}>Jogador 1</Text>
      <Text style={styles.count}>{count}</Text>
      <Button title="Incrementar" onPress={incrementCount} />
      </View>
      <View style={styles.button}>
      <Button title="Zerar" onPress={zerar} />
     
      </View>
     
     <View style={styles.contador2}>
     <Text style={styles.title}>Jogador 2</Text>
      <Text style={styles.count}>{count1}</Text>
      <Button title="Incrementar" onPress={incrementCount2} />
      
   
      
      </View>


      <Image source={{uri:'http://i0.wp.com/quatrorodas.abril.com.br/wp-content/uploads/2016/11/5658bea052657372a11fab50lexus-lfa.jpeg?quality=70&strip=info&resize&w=720&ssl=1'}}
    style={{
      flex:1,
      justifyContent: 'center',
      resizeMode: 'cover',
    }}/> 
    </View>    

   
  );
}

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Display views side by side
    justifyContent: 'space-around', // Adjust as needed
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  contador1: {
    flex: 1, // Take half of the available space
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10, // Add some spacing between views
  },
  contador2: {
    flex: 1, // Take half of the available space
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10, // Add some spacing between views
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  count: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    marginTop: 10, // Add margin between button and count
  },
});


