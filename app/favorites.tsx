import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { GameCard, Header, Screen } from '../components/GamePassUI';
import { games } from '../constants/games';
import { getFavorites } from '../services/storage';
import { colors, spacing } from '../constants/theme';

export default function Favorites() {
  const [ids, setIds] = useState<string[]>([]);
  useFocusEffect(useCallback(() => {
    let active = true;
    getFavorites().then((saved) => { if (active) setIds(saved); });
    return () => { active = false; };
  }, []));
  const favorites = games.filter((game) => ids.includes(game.id));

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <Header eyebrow="SUA LISTA" title="Favoritos" />
        <Text style={styles.count}>{favorites.length} jogo(s) salvo(s)</Text>
        {favorites.length ? favorites.map((game) => <GameCard key={game.id} game={game} compact />) : (
          <Text style={styles.empty}>Você ainda não salvou jogos. Abra os detalhes de um título e toque em favoritar.</Text>
        )}
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  content: { paddingHorizontal: spacing.page, paddingBottom: 30 },
  count: { color: colors.muted, marginBottom: 16 },
  empty: { color: colors.muted, lineHeight: 23, marginTop: 24, textAlign: 'center' },
});
