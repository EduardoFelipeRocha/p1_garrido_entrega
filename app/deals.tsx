import { useCallback, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BottomNav, Header, Screen } from '../components/GamePassUI';
import { colors, spacing } from '../constants/theme';
import { fetchGameDeals, GameDeal } from '../services/deals';

export default function Deals() {
  const [items, setItems] = useState<GameDeal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadDeals = useCallback(async () => {
    setLoading(true);
    setError('');
    try { setItems(await fetchGameDeals()); }
    catch (err) { setError(err instanceof Error ? err.message : 'Erro ao consultar as ofertas.'); }
    finally { setLoading(false); }
  }, []);

  return (
    <Screen>
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.content}>
          <Header eyebrow="LOJA" title="Ofertas de jogos" />
          <Text style={styles.description}>Preços consultados em tempo real na CheapShark.</Text>
          <Pressable style={styles.button} onPress={loadDeals} disabled={loading}>
            <Text style={styles.buttonText}>{loading ? 'BUSCANDO...' : 'CARREGAR OFERTAS'}</Text>
          </Pressable>
          {!!error && <Text style={styles.error}>{error}</Text>}
          {items.map((item) => (
            <View key={item.dealID} style={styles.card}>
              <Image source={{ uri: item.thumb }} style={styles.cover} />
              <View style={styles.info}>
                <Text style={styles.name} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.price}>US$ {item.salePrice}</Text>
                <Text style={styles.oldPrice}>Antes: US$ {item.normalPrice}</Text>
                <Text style={styles.saving}>-{Math.round(Number(item.savings))}%</Text>
              </View>
            </View>
          ))}
          {!items.length && !loading && !error && <Text style={styles.empty}>Toque no botão para consultar as ofertas disponíveis.</Text>}
        </ScrollView>
        <BottomNav active="home" />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { flexGrow: 1, paddingHorizontal: spacing.page, paddingBottom: 30 },
  description: { color: colors.muted, marginBottom: 16 },
  button: { backgroundColor: colors.green, borderRadius: 9, padding: 15, alignItems: 'center', marginBottom: 18 },
  buttonText: { color: colors.background, fontWeight: '900' },
  error: { color: '#ff8c8c', marginBottom: 14 },
  empty: { color: colors.muted, textAlign: 'center', marginTop: 28, lineHeight: 22 },
  card: { flexDirection: 'row', backgroundColor: colors.surface, borderRadius: 10, padding: 10, marginBottom: 12, gap: 12 },
  cover: { width: 92, height: 92, borderRadius: 7, backgroundColor: colors.border },
  info: { flex: 1, justifyContent: 'center' },
  name: { color: colors.text, fontWeight: '800', marginBottom: 7 },
  price: { color: colors.green, fontSize: 18, fontWeight: '900' },
  oldPrice: { color: colors.muted, fontSize: 12, marginTop: 3 },
  saving: { color: colors.orange, fontSize: 12, fontWeight: '800', marginTop: 4 },
});
