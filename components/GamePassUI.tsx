import { Link } from 'expo-router';
import { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../constants/theme';
import { Game } from '../constants/games';

export function Screen({ children }: PropsWithChildren) {
  return <View style={styles.screen}>{children}</View>;
}

export function Header({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <View style={styles.header}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export function GameCard({ game, compact = false }: { game: Game; compact?: boolean }) {
  return (
    <Link href={{ pathname: '/details', params: { game: game.id } }} asChild>
      <Pressable style={StyleSheet.flatten([styles.gameCard, compact ? styles.compactCard : undefined])}>
        <View style={[styles.cover, { backgroundColor: game.accent }]}>
          <Text style={styles.coverText}>{game.title.substring(0, 2).toUpperCase()}</Text>
        </View>
        <View style={styles.gameInfo}>
          <Text style={styles.gameTitle}>{game.title}</Text>
          <Text style={styles.meta}>{game.genre}</Text>
          <Text style={styles.rating}>★ {game.rating}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

export function BottomNav({ active }: { active: 'home' | 'catalog' | 'library' | 'favorites' | 'profile' }) {
  const items = [
    { label: 'Início', icon: '⌂', href: '/home', key: 'home' as const },
    { label: 'Catálogo', icon: '▦', href: '/catalog', key: 'catalog' as const },
    { label: 'Biblioteca', icon: '▣', href: '/library', key: 'library' as const },
    { label: 'Favoritos', icon: '★', href: '/favorites', key: 'favorites' as const },
    { label: 'Perfil', icon: '◉', href: '/profile', key: 'profile' as const },
  ];

  return (
    <View style={styles.nav}>
      {items.map((item) => (
        <Link key={item.key} href={item.href} asChild>
          <Pressable style={styles.navItem}>
            <Text style={[styles.navIcon, active === item.key && styles.active]}>{item.icon}</Text>
            <Text style={[styles.navLabel, active === item.key && styles.active]}>{item.label}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: spacing.page, paddingTop: 18, paddingBottom: 14 },
  eyebrow: { color: colors.green, fontSize: 12, fontWeight: '800', letterSpacing: 1.4, textTransform: 'uppercase', marginBottom: 6 },
  title: { color: colors.text, fontSize: 30, fontWeight: '800' },
  gameCard: { width: 164, marginRight: 14, backgroundColor: colors.surface, borderRadius: spacing.radius, overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  compactCard: { width: '100%', flexDirection: 'row', marginRight: 0, marginBottom: 12 },
  cover: { height: 116, justifyContent: 'center', alignItems: 'center' },
  coverText: { color: '#ffffff', fontSize: 28, fontWeight: '900', letterSpacing: 1 },
  gameInfo: { padding: 12, flex: 1 },
  gameTitle: { color: colors.text, fontSize: 16, fontWeight: '800', marginBottom: 5 },
  meta: { color: colors.muted, fontSize: 13, marginBottom: 8 },
  rating: { color: colors.orange, fontSize: 13, fontWeight: '700' },
  nav: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: colors.surface, paddingTop: 10, paddingBottom: 18 },
  navItem: { alignItems: 'center', minWidth: 70 },
  navIcon: { color: colors.muted, fontSize: 22, marginBottom: 3 },
  navLabel: { color: colors.muted, fontSize: 11, fontWeight: '600' },
  active: { color: colors.green },
});
