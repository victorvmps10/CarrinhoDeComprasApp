import { View, Text, FlatList } from 'react-native';
import { Container, List } from './styles';
import ListProduts from '../../components/ListProduts';
import Header from '../../components/Header';

export default function Home() {
    const DATA = [
        { id: 1, name: "Coca Cola", price: 19.9 },
        { id: 2, name: "Coxinha", price: 10.0 },
        { id: 3, name: "Chocolate", price: 6.9 },
        { id: 4, name: "Queijo 500g", price: 25.49 },
        { id: 5, name: "Guarana Lata", price: 6 },
        { id: 6, name: "Batata Frita", price: 12.90 }
    ]
    return (
        <Container>
            <Header title="Lista de produtos"/>
            <List
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ListProduts item={item} />}
            />
        </Container>
    );
}