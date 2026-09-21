import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../constants/theme';

export default function Login() {
  return (
    <View style={styles.screen}>
      <View style={styles.brandMark}><Text style={styles.brandX}>X</Text></View>
      <Text style={styles.brand}>GAME PASS</Text>
      <Text style={styles.title}>Jogue onde quiser.</Text>
      <Text style={styles.subtitle}>Entre para continuar sua jornada.</Text>
      <TextInput placeholder="E-mail" placeholderTextColor={colors.muted} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Senha" placeholderTextColor={colors.muted} style={styles.input} secureTextEntry />
      <Pressable style={styles.button} onPress={() => router.replace('/home')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </Pressable>
      <Text style={styles.note}>Acesso demonstrativo - sem conexão necessária</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', padding: 28 },
  brandMark: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.green, justifyContent: 'center', alignItems: 'center', marginBottom: 18 },
  brandX: { color: colors.background, fontSize: 38, fontWeight: '900' },
  brand: { color: colors.green, fontSize: 15, fontWeight: '900', letterSpacing: 2.5, marginBottom: 48 },
  title: { color: colors.text, fontSize: 34, fontWeight: '800', marginBottom: 8 },
  subtitle: { color: colors.muted, fontSize: 16, marginBottom: 28 },
  input: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 8, color: colors.text, padding: 16, marginBottom: 12, fontSize: 16 },
  button: { backgroundColor: colors.green, borderRadius: 8, padding: 17, alignItems: 'center', marginTop: 8 },
  buttonText: { color: colors.background, fontSize: 14, fontWeight: '900', letterSpacing: 1 },
  note: { color: colors.muted, textAlign: 'center', fontSize: 12, marginTop: 22 },
});