import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Register() {
  // Estado para almacenar el nombre y la edad
  const [usuario, setUsuario] = useState({
    nombre: '',
    edad: ''
  });

  // Función para manejar el cambio de los valores del formulario
  const manejarCambio = (field: string, value: string) => {
    setUsuario(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  // Función para validar la edad y mostrar el mensaje
  const handleSubmit = () => {
    const edad = parseInt(usuario.edad, 10);

    if (usuario.nombre === '' || usuario.edad === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }
    if (isNaN(edad) || edad <= 0 || edad > 99) {
        //Alert.alert('Error', 'La edad debe ser un número válido entre 1 y 99.');
    

    // Si todo está bien, muestra el mensaje
    }
    Alert.alert('Bienvenido', `Hola, ${usuario.nombre} Tienes ${usuario.edad} años.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Usuario</Text>

      {/* Input para el nombre */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={usuario.nombre}
        onChangeText={text => manejarCambio('nombre', text)}
      />

      {/* Input para la edad */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        value={usuario.edad}
        maxLength={2}
        keyboardType="phone-pad"
        onChangeText={text => manejarCambio('edad', text)}
      />

      {/* Botón para enviar el formulario */}
      <Button title="Enviar" onPress={handleSubmit} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'green'
  }
});