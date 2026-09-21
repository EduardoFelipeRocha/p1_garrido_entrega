import { ScrollView, StyleSheet, Text } from 'react-native';
import { BottomNav, GameCard, Header, Screen } from '../components/GamePassUI';
import { games } from '../constants/games';
import { colors, spacing } from '../constants/theme';

export default function Library() {
  return <Screen><ScrollView contentContainerStyle={styles.content}><Header eyebrow="SUA COLEÇÃO" title="Biblioteca" /><Text style={styles.count}>4 jogos no catálogo pessoal</Text>{games.map((game) => <GameCard key={game.id} game={game} compact />)}</ScrollView><BottomNav active="library" /></Screen>;
}

const styles = StyleSheet.create({ content: { paddingBottom: 20, paddingHorizontal: spacing.page }, count: { color: colors.muted, fontSize: 14, marginBottom: 17 }, });