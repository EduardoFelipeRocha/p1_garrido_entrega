import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Header, Screen } from '../components/GamePassUI';
import { getActivity } from '../services/storage';
import { colors, spacing } from '../constants/theme';

export default function Activity() {
  const [items, setItems] = useState<string[]>([]);
  useFocusEffect(useCallback(() => {
    let active = true;
    getActivity().then((history) => { if (active) setItems(history); });
    return () => { active = false; };
  }, []));

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <Header eyebrow="CONTA" title="Atividade recente" />
        {items.length ? items.map((item, index) => <Text key={index} style={styles.item}>•  {item}</Text>) : (
          <Text style={styles.empty}>Suas ações, como favoritar um jogo, vão aparecer aqui.</Text>
        )}
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  content: { paddingHorizontal: spacing.page, paddingBottom: 30 },
  item: { color: colors.text, backgroundColor: colors.surface, padding: 15, borderRadius: 9, marginBottom: 9, lineHeight: 21 },
  empty: { color: colors.muted, textAlign: 'center', marginTop: 30, lineHeight: 22 },
});
