import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@gamepass/favorites';
const ACTIVITY_KEY = '@gamepass/activity';

export async function getFavorites(): Promise<string[]> {
  try {
    const saved = await AsyncStorage.getItem(FAVORITES_KEY);
    const parsed: unknown = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

export async function toggleFavorite(gameId: string): Promise<string[]> {
  const current = await getFavorites();
  const updated = current.includes(gameId) ? current.filter((id) => id !== gameId) : [...current, gameId];
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return updated;
}

export async function saveActivity(message: string): Promise<void> {
  try {
    const saved = await AsyncStorage.getItem(ACTIVITY_KEY);
    const parsed: unknown = saved ? JSON.parse(saved) : [];
    const current = Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
    await AsyncStorage.setItem(ACTIVITY_KEY, JSON.stringify([message, ...current].slice(0, 30)));
  } catch {
    // O histórico é complementar e não deve bloquear a navegação.
  }
}

export async function getActivity(): Promise<string[]> {
  try {
    const saved = await AsyncStorage.getItem(ACTIVITY_KEY);
    const parsed: unknown = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}
