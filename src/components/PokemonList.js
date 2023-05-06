import { FlatList } from "react-native";
import { styles } from "../assets/styles/styles";
import PokemonCard from "../components/PokemonCard";

export default function PokemonList(props) {
  const { pokemons } = props;
  console.log(props);
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}
