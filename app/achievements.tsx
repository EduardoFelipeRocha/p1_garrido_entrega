import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, Screen } from '../components/GamePassUI';
import { colors, spacing } from '../constants/theme';

const achievements = [
  { icon: '🏆', title: 'Primeira partida', detail: 'Entre em um jogo pela primeira vez', points: '10 G' },
  { icon: '⭐', title: 'Colecionador', detail: 'Adicione seu primeiro favorito', points: '20 G' },
  { icon: '🎯', title: 'Explorador', detail: 'Conheça todos os espaços do app', points: '30 G' },
  { icon: '🔥', title: 'Na ativa', detail: 'Volte para jogar durante a semana', points: '50 G' },
];

export default function Achievements() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <Header eyebrow="PROGRESSO" title="Conquistas" />
        <View style={styles.summary}><Text style={styles.total}>4</Text><Text style={styles.summaryText}>conquistas disponíveis</Text></View>
        {achievements.map((item) => (
          <View key={item.title} style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <View style={styles.info}><Text style={styles.name}>{item.title}</Text><Text style={styles.detail}>{item.detail}</Text></View>
            <Text style={styles.points}>{item.points}</Text>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  content: { paddingHorizontal: spacing.page, paddingBottom: 30 },
  summary: { backgroundColor: colors.surface, borderRadius: 12, padding: 20, alignItems: 'center', marginBottom: 18 },
  total: { color: colors.green, fontSize: 38, fontWeight: '900' },
  summaryText: { color: colors.muted, marginTop: 4 },
  card: { backgroundColor: colors.surface, borderRadius: 10, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  icon: { fontSize: 28, marginRight: 13 },
  info: { flex: 1 },
  name: { color: colors.text, fontWeight: '800', marginBottom: 4 },
  detail: { color: colors.muted, fontSize: 12 },
  points: { color: colors.orange, fontWeight: '900' },
});
