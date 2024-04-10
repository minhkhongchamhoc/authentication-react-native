import { StyleSheet, Text, View } from 'react-native';

function OrderScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={[styles.title, styles.titleTop]}>YOUR ORDER</Text>
    </View>
  );
}

export default OrderScreen;

const styles = StyleSheet.create({
  rootContainer: {
  
    alignItems: 'center',
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  titleTop: {
    marginTop: 5,
  },
});
