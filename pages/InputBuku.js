import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';

const InputBuku = () => {

  const inputTitle = React.createRef();
  const inputDesc = React.createRef();
  const inputAuthor = React.createRef();

  const [judul, setJudul] = useState();
  const [penulis, setPenulis] = useState();
  const [deskripsi, setDeskripsi] = useState();

  const onChangeJudul = (judul) => {
    setJudul(judul);
  };

  const onChangePenulis = (penulis) => {
    setPenulis(penulis);
  };

  const onChangeDeskripsi = (deskripsi) => {
    setDeskripsi(deskripsi);
  };

  const handleAddBook = () => {
    
    firestore()
    .collection('books')
    .add({
      title: judul,
      author: penulis,
      description: deskripsi,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
      inputTitle.current.clear();
      inputDesc.current.clear();
      inputAuthor.current.clear();
      alert('Book successfully added');
      // navigation.navigate('ViewProducts');
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
      alert(error);
    });

      // console.log(`judulnya adalah ${boardTitle} | Description : ${boardDesc} | Author : ${boardAuthor}`);    
  };

    return (
      <SafeAreaView style={styles.container}>
      
      <Text style={styles.createTitle}>Input Data Buku</Text>
      <Input
        placeholder="Judul"
        ref={inputTitle}
        onChangeText={(judul) => onChangeJudul(judul)}
        rightIcon={
          <Icon
            name='adn'
            size={24}
            color='black'
          />
        }
        
      />
      <Input
        placeholder="Penulis"
        ref={inputAuthor}
        onChangeText={(penulis) => onChangePenulis(penulis)}
        rightIcon={
          <Icon
            name='book'
            size={24}
            color='black'
          />
        }
        // onChangeText={(email) => onChangeEmail(email)}
      />
      <Input
        placeholder="Deskripsi"
        ref={inputDesc}
        onChangeText={(deskripsi) => onChangeDeskripsi(deskripsi)}
        rightIcon={
          <Icon
            name='user-circle'
            size={24}
            color='black'
          />
        }
        // onChangeText={(email) => onChangeEmail(email)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddBook}>
        <Text>
          <Icon
            name='save'
            size={24}
            color='black'
          />  Simpan</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00a4e4',
    width: '50%',
    padding: 10,
  },

  createTitle: {
    alignItems: 'center',
    marginBottom : 10,
    fontWeight: "bold",
    padding: 10,
  },
});



export default InputBuku;