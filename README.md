# Game Pass Mock

Aplicativo acadêmico inspirado em um catálogo de assinatura de jogos, desenvolvido com Expo, React Native, TypeScript e Expo Router.

## Telas

- Login
- Início
- Detalhes do jogo
- Biblioteca
- Perfil
- Definições
- Catálogo com filtro por gênero
- Busca por nome ou gênero
- Favoritos
- Ofertas de jogos
- Conquistas
- Atividade recente
- Ajuda e suporte

## Funcionalidades

- Navegação entre telas com Expo Router.
- Layouts construídos com StyleSheet e Flexbox.
- Busca e filtro dos jogos disponíveis no catálogo local.
- Favoritos salvos no dispositivo com AsyncStorage.
- Registro local das ações de favoritos.
- Consulta de ofertas de jogos pela API pública CheapShark. A tela de ofertas precisa de conexão com a internet.
- Tratamento de carregamento e erro na consulta da API.

## Como executar

Depois de clonar o repositório, instale as dependências:

```bash
npm install
npx expo start
```

No terminal do Expo, pressione `w` para abrir no navegador ou escaneie o QR Code com o Expo Go.

> A dependência AsyncStorage foi adicionada ao package.json. O comando `npm install` atualiza o package-lock.json localmente antes de iniciar o projeto.

## Organização

- `app/`: telas e rotas do aplicativo.
- `components/`: componentes compartilhados.
- `constants/`: catálogo local de jogos e tema visual.
- `services/`: integração com a API e armazenamento local.
