import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BottomNav, Header, Screen } from '../components/GamePassUI';
import { colors, spacing } from '../constants/theme';

const links = [
  { title: 'Conquistas', href: '/achievements' as const, icon: '🏆' },
  { title: 'Atividade recente', href: '/activity' as const, icon: '🕘' },
  { title: 'Ofertas de jogos', href: '/deals' as const, icon: '🏷️' },
  { title: 'Ajuda e suporte', href: '/help' as const, icon: '❔' },
  { title: 'Definições', href: '/settings' as const, icon: '⚙️' },
];

export default function Profile() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <Header eyebrow="CONTA" title="Perfil" />
        <View style={styles.profile}>
          <View style={styles.avatar}><Text style={styles.avatarText}>A</Text></View>
          <View><Text style={styles.name}>Alex Garrido</Text><Text style={styles.gamertag}>@alexplayz</Text></View>
        </View>
        <View style={styles.stats}>
          <View><Text style={styles.statValue}>28</Text><Text style={styles.statLabel}>Jogos jogados</Text></View>
          <View><Text style={styles.statValue}>146</Text><Text style={styles.statLabel}>Conquistas</Text></View>
          <View><Text style={styles.statValue}>12</Text><Text style={styles.statLabel}>Dias ativos</Text></View>
        </View>
        {links.map((item) => (
          <Link key={item.href} href={item.href} asChild>
            <Pressable style={styles.option}>
              <Text style={styles.optionIcon}>{item.icon}</Text>
              <Text style={styles.optionText}>{item.title}</Text>
              <Text style={styles.arrow}>›</Text>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
      <BottomNav active="profile" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 22 },
  profile: { marginHorizontal: spacing.page, backgroundColor: colors.surface, borderRadius: 12, padding: 20, flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 62, height: 62, borderRadius: 31, backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center', marginRight: 15 },
  avatarText: { color: colors.background, fontSize: 30, fontWeight: '900' },
  name: { color: colors.text, fontSize: 19, fontWeight: '800', marginBottom: 5 },
  gamertag: { color: colors.muted, fontSize: 14 },
  stats: { flexDirection: 'row', justifyContent: 'space-around', margin: spacing.page, paddingVertical: 19, borderBottomWidth: 1, borderTopWidth: 1, borderColor: colors.border },
  statValue: { color: colors.green, textAlign: 'center', fontSize: 22, fontWeight: '900' },
  statLabel: { color: colors.muted, fontSize: 11, marginTop: 5 },
  option: { marginHorizontal: spacing.page, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: colors.border, flexDirection: 'row', alignItems: 'center' },
  optionIcon: { color: colors.green, fontSize: 19, width: 36 },
  optionText: { color: colors.text, fontSize: 15, flex: 1 },
  arrow: { color: colors.muted, fontSize: 24 },
});
