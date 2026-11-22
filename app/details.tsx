import { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { games } from '../constants/games';
import { colors } from '../constants/theme';
import { getFavorites, saveActivity, toggleFavorite } from '../services/storage';

export default function Details() {
  const { game: gameId } = useLocalSearchParams<{ game?: string }>();
  const game = games.find((item) => item.id === gameId) ?? games[0];
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    let active = true;
    getFavorites().then((ids) => { if (active) setFavorite(ids.includes(game.id)); });
    return () => { active = false; };
  }, [game.id]);

  async function handleFavorite() {
    const updated = await toggleFavorite(game.id);
    const isFavorite = updated.includes(game.id);
    setFavorite(isFavorite);
    await saveActivity(isFavorite ? `${game.title} foi adicionado aos favoritos` : `${game.title} saiu dos favoritos`);
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.back()}><Text style={styles.back}>‹  Voltar</Text></Pressable>
      <View style={[styles.hero, { backgroundColor: game.accent }]}><Text style={styles.heroText}>{game.title.substring(0, 2).toUpperCase()}</Text></View>
      <Text style={styles.eyebrow}>{game.status?.toUpperCase()}</Text>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.meta}>{game.genre}  •  ★ {game.rating}</Text>
      <Text style={styles.description}>Uma experiência criada para descobrir, explorar e jogar com liberdade. Incluído no catálogo do Game Pass.</Text>
      <Pressable style={styles.primary} onPress={handleFavorite}>
        <Text style={styles.primaryText}>{favorite ? '★  REMOVER DOS FAVORITOS' : '☆  ADICIONAR AOS FAVORITOS'}</Text>
      </Pressable>
      <View style={styles.infoRow}><Text style={styles.infoLabel}>Disponível em</Text><Text style={styles.infoValue}>Console  •  PC  •  Nuvem</Text></View>
      <View style={styles.infoRow}><Text style={styles.infoLabel}>Classificação</Text><Text style={styles.infoValue}>12 anos</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 42 },
  back: { color: colors.muted, fontSize: 16, marginBottom: 18 },
  hero: { height: 230, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  heroText: { color: '#ffffff', fontSize: 64, fontWeight: '900', letterSpacing: 2 },
  eyebrow: { color: colors.green, fontSize: 12, fontWeight: '900', letterSpacing: 1.3, marginBottom: 8 },
  title: { color: colors.text, fontSize: 34, fontWeight: '900', marginBottom: 7 },
  meta: { color: colors.orange, fontSize: 14, fontWeight: '700' },
  description: { color: colors.muted, fontSize: 16, lineHeight: 24, marginTop: 22, marginBottom: 24 },
  primary: { backgroundColor: colors.green, borderRadius: 8, alignItems: 'center', padding: 17, marginBottom: 26 },
  primaryText: { color: colors.background, fontWeight: '900', letterSpacing: 1 },
  infoRow: { borderTopWidth: 1, borderTopColor: colors.border, paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between' },
  infoLabel: { color: colors.muted, fontSize: 14 },
  infoValue: { color: colors.text, fontSize: 14, fontWeight: '700' },
});
