import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Reloj() {
  // Estado para almacenar la hora actual
  const [hora, setHora] = useState('');

  // Función para actualizar la hora
  const actualizarHora = () => {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    setHora(`${horas}:${minutos}:${segundos}`);
  };

  // useEffect para iniciar el setInterval y actualizar la hora cada segundo
  useEffect(() => {
    
    actualizarHora();

    //aqui actualizamos
    const intervalo = setInterval(actualizarHora, 1000);

    //aqui limpiamos
    return () => clearInterval(intervalo);
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.hora}>{hora}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  hora: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
  },
});
