import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, Screen } from '../components/GamePassUI';
import { colors, spacing } from '../constants/theme';

const topics = [
  ['Como encontro um jogo?', 'Acesse o catálogo e use a busca para localizar títulos pelo nome ou gênero.'],
  ['Como salvo um jogo?', 'Abra os detalhes do jogo e toque no botão de favoritos. Ele ficará disponível na sua lista.'],
  ['Os preços são atualizados?', 'A tela de ofertas consulta uma API externa. É necessário estar conectado à internet.'],
  ['Meus favoritos ficam salvos?', 'Sim. Os favoritos são armazenados localmente no dispositivo usando AsyncStorage.'],
];

export default function Help() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <Header eyebrow="SUPORTE" title="Ajuda e suporte" />
        {topics.map(([title, answer]) => (
          <View key={title} style={styles.card}><Text style={styles.question}>{title}</Text><Text style={styles.answer}>{answer}</Text></View>
        ))}
        <Text style={styles.footer}>Game Pass Mock • Projeto acadêmico</Text>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  content: { paddingHorizontal: spacing.page, paddingBottom: 30 },
  card: { backgroundColor: colors.surface, borderRadius: 10, padding: 16, marginBottom: 12 },
  question: { color: colors.green, fontSize: 15, fontWeight: '800', marginBottom: 8 },
  answer: { color: colors.muted, lineHeight: 22, fontSize: 13 },
  footer: { color: colors.muted, textAlign: 'center', marginTop: 20, fontSize: 12 },
});
