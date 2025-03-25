# 📁 Template Front-end: HTML, CSS e JavaScript Puro

## Descrição

Este repositório é um **Template Repository** pronto para iniciar projetos front-end simples utilizando **HTML5**, **CSS3** e **JavaScript puro**.

Ele já vem configurado com:

- Ferramentas de qualidade de código (**ESLint**, **Prettier** e **Stylelint**)
- Pipeline automatizada com **GitHub Actions** para validar Pull Requests
- Estrutura básica de pastas para scripts, estilos e HTML inicial

Ideal para projetos pequenos, testes, ou inícios de landing pages e aplicações simples!

---

## Estrutura do Template

```
front-end-template/
├── .github/workflows/
│   ├── pr-check.yml             # Pipeline para validação de PRs (Lint, Prettier, Build)
│   └── sync-develop.yml         # Pipeline opcional para manter develop sincronizada
├── src/
│   ├── scripts/
│   │   └── script.js            # JS principal
│   ├── styles/
│   │   └── style.css            # Estilização
│   └── index.html               # Estrutura HTML inicial
├── .eslintrc.config.js          # Configuração do ESLint
├── .prettierrc                  # Configuração do Prettier
├── .stylelintrc.json            # Configuração do Stylelint
├── package.json                 # Scripts e dependências npm
└── README.md                    # Documentação
```

---

## Tecnologias Incluídas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **ESLint**
- **Prettier**
- **Stylelint**
- **GitHub Actions (CI/CD)**

---

## Como usar este template

1. Clique no botão verde **"Use this template"** no topo do repositório.
2. Dê um nome ao seu novo projeto.
3. Clone o repositório recém-criado:

```bash
git clone https://github.com/seu-usuario/seu-novo-projeto.git
```

4. Instale as dependências:

```bash
npm install
```

5. Utilize os scripts para garantir qualidade:

```bash
npm run lint
npm run prettier:check
npm run stylelint
```

6. Abra `index.html` diretamente no navegador para visualizar.

---

## Scripts Disponíveis

| Comando                  | O que faz                                         |
| ------------------------ | ------------------------------------------------- |
| `npm run lint`           | Roda o ESLint                                     |
| `npm run prettier:check` | Checa formatação com Prettier                     |
| `npm run prettier:fix`   | Corrige automaticamente a formatação              |
| `npm run stylelint`      | Valida CSS com Stylelint                          |
| `npm run stylelint:fix`  | Corrige CSS automaticamente                       |
| `npm run build`          | Dummy build (personalizável para outros projetos) |

---

## Regras de Merge e CI/CD

Este template possui configurações de **Branch Protection Rules** recomendadas:

- ❌ Não é permitido merge direto na `develop` ou `main` sem PR.
- ✅ Pull Requests obrigatoriamente passam por:
  - ESLint (JS)
  - Prettier (formatação)
  - Stylelint (CSS)
- Merge é bloqueado se qualquer check falhar.
- Atualiza automaticamente `develop` após merge na `main` (opcional).

---

## Autor

Mantido por [Pedro Andrade](https://github.com/peandrade) 👨‍💻

---
