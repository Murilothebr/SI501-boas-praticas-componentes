import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardComposition {
  Header: React.FC<{ children: React.ReactNode }>;
  Body: React.FC<{ children: React.ReactNode }>;
  Footer: React.FC<{ children: React.ReactNode }>;
}

const Card: React.FC<{ children: React.ReactNode }> & CardComposition = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

Card.Header = ({ children }) => <View style={styles.header}>{children}</View>;
Card.Body = ({ children }) => <View style={styles.body}>{children}</View>;
Card.Footer = ({ children }) => <View style={styles.footer}>{children}</View>;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  body: {
    marginBottom: 8,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 8,
  },
});

export default Card;
