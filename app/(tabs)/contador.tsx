import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Contador() {
  // Estado para almacenar el contador
  const [contador, setContador] = useState(0);

  // useEffect que se ejecuta cada vez que el contador cambia
  useEffect(() => {
    console.log(`El contador ha cambiado a: ${contador}`);

    // Si el contador es múltiplo de 5, mostramos un mensaje adicional
    if (contador % 5 === 0 && contador !== 0) {
      console.log("¡El contador ha alcanzado un múltiplo de 5!");
    }
  }, [contador]); 

  // Función para manejar el incremento del contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      {/* Botón para incrementar el contador */}
      <Button title="Incrementar contador" onPress={incrementarContador} />

      {/* Mostrar mensaje cuando el contador es múltiplo de 5 */}
      {contador % 5 === 0 && contador !== 0 && (
        <Text style={styles.mensaje}>¡Has alcanzado un múltiplo de 5!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
  
    
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});
