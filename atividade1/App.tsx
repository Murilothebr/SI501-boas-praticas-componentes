import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import mockData from './data/MOCK_DATA.json';
import Card from './components/Card';
import CallbackButton from './components/CallbackButton';

interface MockItem {
  id: number;
  email: string;
  name: string;
  cripto_addres: string; // escrevi errado haha
}

const App: React.FC = () => {
  const handleButtonPress = (item: MockItem) => {
    alert(`Pague para: ${item.name}\n \n${item.cripto_addres}`);
  };

  const renderItem = ({ item }: { item: MockItem }) => (
    <Card>
      {item.name && (
        <Card.Header>
          <Text style={styles.headerText}>Nome: {item.name}</Text>
        </Card.Header>
      )}
      <Card.Body>
        <Text style={styles.bodyText}>Email: {item.email}</Text>
        <Text style={styles.bodyText}>Endereço Cripto: {item.cripto_addres}</Text>
      </Card.Body>
      <Card.Footer>
        <CallbackButton label="Clique aqui" onPress={() => handleButtonPress(item)} />
      </Card.Footer>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bodyText: {
    fontSize: 14,
    marginVertical: 4,
  },
});

export default App;
