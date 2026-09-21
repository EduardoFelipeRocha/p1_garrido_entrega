# Game Pass Mock

Mock acadêmico de um aplicativo de assinatura de jogos, criado com Expo e React Native. O projeto usa dados estáticos e reproduz seis telas do fluxo principal: Login, Home, Detalhes do jogo, Biblioteca, Perfil e Definições.

## Primeiro commit

Este foi o ponto inicial do trabalho, com o projeto Expo limpo e sem as telas do aplicativo. A partir dele, o desenvolvimento deve ser registrado em etapas pequenas:

1. Criar o projeto Expo e confirmar que ele abre.
2. Limpar o conteúdo inicial da tela.
3. Definir o tema visual escuro e a paleta verde.
4. Criar os dados mockados dos jogos.
5. Criar os componentes visuais compartilhados.
6. Configurar o layout do Expo Router.
7. Criar a tela de Login.
8. Criar a tela Home.
9. Criar a navegação inferior.
10. Criar a tela de detalhes do jogo.
11. Conectar cards à tela de detalhes.
12. Criar a tela Biblioteca.
13. Criar a tela Perfil.
14. Criar a tela Definições.
15. Ajustar espaçamentos e tipografia.
16. Revisar o fluxo de navegação.
17. Validar os tipos do TypeScript.
18. Testar no Expo Go ou na web.
19. Corrigir os últimos detalhes visuais.
20. Preparar a entrega do link do GitHub.

Comandos para registrar o commit inicial:

```bash
git init
git add .
git commit -m "chore: inicia projeto Expo limpo e documenta etapas"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Rotas do aplicativo

Como este projeto foi criado com Expo Router, as rotas ficam na pasta `app/`. O arquivo `app/_layout.tsx` configura a pilha de navegação e `app/index.tsx` redireciona para `/login`. Não é necessário criar um `App.js` com `NavigationContainer`: o `main` do `package.json` já aponta para `expo-router/entry`.

Rotas disponíveis:

- `/login`
- `/home`
- `/details`
- `/library`
- `/profile`
- `/settings`

## Estratégia de 20 commits

Depois do primeiro commit, execute uma etapa por vez:

```bash
git add app.json
git commit -m "chore: define identidade escura do aplicativo"
git add constants/theme.ts
git commit -m "feat: adiciona tema visual do Game Pass"
git add constants/games.ts
git commit -m "feat: adiciona dados mockados de jogos"
git add components/GamePassUI.tsx
git commit -m "feat: cria componentes visuais compartilhados"
git add app/_layout.tsx
git commit -m "feat: configura pilha de navegação"
git add app/index.tsx
git commit -m "feat: define redirecionamento inicial"
git add app/login.tsx
git commit -m "feat: cria tela de login"
git add app/home.tsx
git commit -m "feat: cria tela inicial do catálogo"
git add components/GamePassUI.tsx
git commit -m "feat: adiciona navegação inferior"
git add app/details.tsx
git commit -m "feat: cria tela de detalhes do jogo"
git add components/GamePassUI.tsx
git commit -m "feat: conecta cards aos detalhes"
git add app/library.tsx
git commit -m "feat: cria tela de biblioteca"
git add app/profile.tsx
git commit -m "feat: cria tela de perfil"
git add app/settings.tsx
git commit -m "feat: cria tela de definicoes"
git add app/
git commit -m "style: ajusta layout das telas"
git add .
git commit -m "fix: revisa fluxo entre as telas"
git add .
git commit -m "test: valida projeto com TypeScript"
git add README.md
git commit -m "docs: registra processo e rotas"
git add .
git commit -m "chore: revisa entrega acadêmica"
git add .
git commit -m "chore: finaliza mock para publicação"
```

Os comandos acima são uma sequência de referência. Faça cada commit somente depois de realizar a mudança correspondente e confirme o histórico com `git log --oneline`.

## Execução

Instale as dependências e inicie o Expo:

```bash
npm install
npx expo start
```

No terminal do Expo, pressione `w` para abrir no navegador. Para celular, escaneie o QR Code com o Expo Go. Também é possível usar `npx expo start --android` com um emulador Android configurado.