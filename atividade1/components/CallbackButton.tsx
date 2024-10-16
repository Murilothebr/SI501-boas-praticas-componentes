import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

interface CustomButtonProps {
  label: string;
  onPress: () => void; 
}

const CallbackButton: React.FC<CustomButtonProps> = ({ label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={label} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
  },
});

export default CallbackButton;
