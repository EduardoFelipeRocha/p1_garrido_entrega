import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BottomNav, GameCard, Header, Screen } from '../components/GamePassUI';
import { games } from '../constants/games';
import { colors, spacing } from '../constants/theme';

export default function Home() {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Header eyebrow="GAME PASS" title="Olá, Alex" />
        <View style={styles.feature}>
          <Text style={styles.featureLabel}>EM DESTAQUE</Text>
          <Text style={styles.featureTitle}>Starfield</Text>
          <Text style={styles.featureText}>Explore novos mundos em uma aventura épica.</Text>
          <Link href={{ pathname: '/details', params: { game: 'starfield' } }} style={styles.featureLink}>VER JOGO  ›</Link>
        </View>
        <Text style={styles.sectionTitle}>Recomendados para você</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
          {games.slice(0, 3).map((game) => <GameCard key={game.id} game={game} />)}
        </ScrollView>
        <Text style={styles.sectionTitle}>Continue jogando</Text>
        <View style={styles.progressRow}><View style={styles.progressCover}><Text style={styles.progressInitial}>HA</Text></View><View style={styles.progressInfo}><Text style={styles.progressTitle}>Halo Infinite</Text><Text style={styles.meta}>Conquista 62% concluída</Text><View style={styles.track}><View style={styles.progress} /></View></View></View>
      </ScrollView>
      <BottomNav active="home" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 22 },
  feature: { marginHorizontal: spacing.page, minHeight: 210, borderRadius: spacing.radius, padding: 22, justifyContent: 'flex-end', backgroundColor: '#263c35' },
  featureLabel: { color: colors.green, fontWeight: '900', fontSize: 11, letterSpacing: 1.2, marginBottom: 8 },
  featureTitle: { color: colors.text, fontSize: 34, fontWeight: '900' },
  featureText: { color: '#d4dfd9', fontSize: 14, marginTop: 5, marginBottom: 17 },
  featureLink: { color: colors.green, fontSize: 13, fontWeight: '900' },
  sectionTitle: { color: colors.text, fontSize: 19, fontWeight: '800', marginHorizontal: spacing.page, marginTop: 26, marginBottom: 13 },
  row: { paddingLeft: spacing.page },
  progressRow: { flexDirection: 'row', backgroundColor: colors.surface, marginHorizontal: spacing.page, borderRadius: 10, padding: 12 },
  progressCover: { width: 72, height: 72, backgroundColor: '#3d806e', borderRadius: 7, alignItems: 'center', justifyContent: 'center' },
  progressInitial: { color: '#d2e6d9', fontSize: 22, fontWeight: '900' },
  progressInfo: { flex: 1, justifyContent: 'center', paddingLeft: 13 },
  progressTitle: { color: colors.text, fontSize: 16, fontWeight: '800', marginBottom: 5 },
  meta: { color: colors.muted, fontSize: 13 },
  track: { height: 5, backgroundColor: colors.border, borderRadius: 5, marginTop: 10 },
  progress: { width: '62%', height: 5, backgroundColor: colors.green, borderRadius: 5 },
});