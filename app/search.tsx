import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { GameCard, Header, Screen } from '../components/GamePassUI';
import { games } from '../constants/games';
import { colors, spacing } from '../constants/theme';

export default function Search() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return games;
    return games.filter((game) =>
      game.title.toLocaleLowerCase().includes(normalized) ||
      game.genre.toLocaleLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Header eyebrow="BUSCA" title="Encontrar jogos" />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Digite o nome ou gênero..."
          placeholderTextColor={colors.muted}
          style={styles.input}
          autoCapitalize="none"
          returnKeyType="search"
        />
        <Text style={styles.count}>{results.length} resultado(s)</Text>
        {results.length ? results.map((game) => <GameCard key={game.id} game={game} compact />) : (
          <Text style={styles.empty}>Não encontramos nenhum jogo com esse nome.</Text>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: spacing.page, paddingBottom: 30 },
  input: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 10, color: colors.text, padding: 15, fontSize: 15, marginBottom: 18 },
  count: { color: colors.muted, fontSize: 13, marginBottom: 14 },
  empty: { color: colors.muted, textAlign: 'center', marginTop: 36, fontSize: 14 },
});
