import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: PokemonCardProps) {
  // 4. Obtener el id desde la Url
  // .split('/') separa la url por las diagonales creando un arreglo.
  // .filter(Boolean) quita los espacios vacíos del arreglo (como el del final).
  // .pop() saca y nos devuelve el último elemento del arreglo (el número).
  const id = url.split("/").filter(Boolean).pop();

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />

      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

// Unos estilos básicos para que cada tarjeta se vea bien
const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 5,
  },
});
