import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import PokemonCard from "../components/pokemonCard";

export default function Index() {
  const [results, setResults] = useState<any>([]);

  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {results.map((item: any) => {
        // 8 y 9. Reemplazar el Text y pasar props al componente (name y url)
        return <PokemonCard key={item.name} name={item.name} url={item.url} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
});

// import { useEffect, useState } from "react";
// import { Text, View } from "react-native";

// export default function Index() {
//   const [results, setResults] = useState<any>([]);

//   useEffect(() => {
//     console.log("Entre en pantalla");
//     getPokemons();
//   }, []);

//   const getPokemons = async () => {
//     const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
//     const response = await fetch(URL, {
//       method: "GET",
//     });
//     console.log(response);
//     const data = await response.json();
//     console.log(data.results);

//     setResults(data.results);
//   };

//   return (
//     <View>
//       {results.map((item) => {
//         return <Text key={item.name}>{item.name}</Text>;
//       })}
//     </View>
//   );
// }
