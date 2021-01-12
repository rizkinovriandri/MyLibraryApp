import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const ListBuku = ({navigation}) => {
  const [data, setData] = useState();

  useEffect(() => {
    firestore()
      .collection('books')
      .onSnapshot((snapshot) => {
        const dataBoards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataBoards);
      });
  }, []);

  let deleteData = firestore().collection('books');

  const deleteBook = (key) => {
    deleteData
      .doc(key)
      .delete()
      .then(() => {
        alert('Board successfully deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.wrapper}>
              <View style={styles.product}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.author}>Penulis : {item.author}</Text>
                  <Text>{item.description}</Text>
                </View>
               
              </View>
              <View style={styles.action}>
                
                <Button
                  title="Hapus"
                  type="outline"
                  onPress={() => deleteBook(item.id)}
                />
              </View>
            </View>
          );
        }}
      />
      <Button
        title="Add Product"
        onPress={() => navigation.navigate('InputBuku')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    borderWidth: 1,
    borderColor: '#2e2e2e',
    padding: 20,
  },
  title: {
    fontSize:16,
    fontWeight:"bold",
  },
  author: {
    fontSize:15,
    fontStyle:"italic",
    fontSize:13,
  },
});

export default ListBuku;
