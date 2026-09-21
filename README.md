# Game Pass Mock

Um mock acadêmico inspirado em um catálogo de assinatura de jogos. Foi desenvolvido com Expo, React Native e Expo Router, usando dados estáticos e uma interface escura.

O aplicativo possui seis telas:

- Login
- Início
- Detalhes do jogo
- Biblioteca
- Perfil
- Definições

## Como executar

Instale as dependências e inicie o projeto:

```bash
npm install
npx expo start
```

No terminal do Expo, pressione `w` para abrir no navegador ou escaneie o QR Code com o Expo Go.

As telas e a navegação ficam na pasta `app/`. Os dados dos jogos estão em `constants/games.ts` e os componentes compartilhados em `components/GamePassUI.tsx`.