import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cargando() {
  // Estado para manejar la simulación de carga
  const [cargando, setCargando] = useState(true);

  // useEffect para cambiar el estado 'cargando' después de 3 segundos
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCargando(false); // Después de 3 segundos, se actualiza el estado a false
    }, 3000);

    // Limpiar el timeout cuando el componente se desmonte
    return () => clearTimeout(timeout);
  }, []); 

  return (
    <View style={styles.container}>
      {/* Mostrar mensaje según el estado 'cargando' */}
      {cargando ? (
        <Text style={styles.texto}>Cargando...</Text>
      ) : (
        <Text style={styles.texto}>Bienvenido a la aplicación</Text>
      )}
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
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
