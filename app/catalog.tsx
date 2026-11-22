import { useMemo, useState } from 'react';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BottomNav, GameCard, Header, Screen } from '../components/GamePassUI';
import { games } from '../constants/games';
import { colors, spacing } from '../constants/theme';

export default function Catalog() {
  const [genre, setGenre] = useState('Todos');
  const genres = ['Todos', ...Array.from(new Set(games.map((game) => game.genre)))];
  const filteredGames = useMemo(() => genre === 'Todos' ? games : games.filter((game) => game.genre === genre), [genre]);

  return (
    <Screen>
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Header eyebrow="EXPLORE" title="Catálogo" />
          <Text style={styles.description}>Encontre seu próximo jogo favorito.</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
            {genres.map((item) => (
              <Text key={item} onPress={() => setGenre(item)} style={[styles.filter, genre === item && styles.selectedFilter]}>{item}</Text>
            ))}
          </ScrollView>
          <Text style={styles.count}>{filteredGames.length} jogos encontrados</Text>
          {filteredGames.map((game) => <GameCard key={game.id} game={game} compact />)}
          <Link href="/search" style={styles.searchLink}>Procurar um jogo pelo nome ›</Link>
        </ScrollView>
        <BottomNav active="catalog" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { paddingBottom: 32, paddingHorizontal: spacing.page },
  description: { color: colors.muted, marginBottom: 16, fontSize: 14 },
  filters: { gap: 8, paddingBottom: 18 },
  filter: { color: colors.muted, backgroundColor: colors.surface, borderRadius: 20, overflow: 'hidden', paddingHorizontal: 14, paddingVertical: 9, fontSize: 12, fontWeight: '700' },
  selectedFilter: { color: colors.background, backgroundColor: colors.green },
  count: { color: colors.muted, fontSize: 13, marginBottom: 14 },
  searchLink: { color: colors.green, fontWeight: '800', marginTop: 12 },
});
