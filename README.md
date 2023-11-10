<div align="center">

![banner](public/logo//light/logo256.png)

An open-source, all in one [solution](https://nua.vercel.app) for all your daily needs.

</div>

## Features

- 💯 Free & open-source.
- ⚙️ Customizable.
- ⚒️ Wide array of accessible tools.

## 🚀 Getting Started

> Visit [nua.vercel.app](https://nua.vercel.app) for all feature access without any setup.

Clone the repository to your local environment:

```bash
git clone https://github.com/DeathlyBower959/nua.git nua
cd nua
pnpm install
```

Setup the environment

```bash
mv .env.local.template .env.local
```

```bash
# .env.local
# Nothing in this file should need changing, but you may need to adjust some of them to match your needs

# Database
DATABASE_URL="http://localhost:4000"
# (not needed when running development turso server)
# DATABASE_AUTH_TOKEN=eyXXXXXXXXXXXXX

# Next-Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="development"
```

Then, run the app in development locally:

```bash
# Open each in their own terminal session
pnpm db:start
pnpm db:push
pnpm dev
```

> When deploying to production, update all env vars

## 📂 File Structure

```markdown
├── README.md # README file
├── .github # GitHub folder
├── .husky # Husky configuration
├── .vscode # VSCode configuration
├── public # Public assets folder
├── scripts # Scripts folder
├── src
│ ├── app # Next JS App (App Router)
│ ├── components # React components
│ ├── lib # Library folder
│ │ ├── auth # Authentication adapters (DrizzleORM)
│ │ ├── db # Database configuration
│ ├── providers # React context providers
├── LICENSE # LICENSE file
├── .env.local # Development environment vars
├── .env.production # Local production environment vars
├── .eslintignore # ESLint ignore
├── .eslintrc # ESLint configuration
├── .gitignore # gitignore
├── .prettierignore # Prettier ignore
├── .prettierrc # Prettier configuration
├── lint-staged.config.js # Lint-staged configuration
├── next.config.js # NextJS configuration
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
```

## 👤 Authors

- DeathlyBower959
  - Github: [@DeathlyBower959](https://github.com/DeathlyBower959)
- mysteriousitay
  - Github: [@mysteriousitay](https://github.com/mysteriousitay)

## 🤝 Contributing

- Missing something or found a bug? [Report here](https://github.com/DeathlyBower959/nua/issues).
- Want to contribute? Check out [Getting Started](#🚀-getting-started) and [Contributing](.github/CONTRIBUTING.md)

## 📝 License

This project is under the [GNU General Public License v3.0](https://github.com/DeathlyBower959/nua/blob/main/LICENSE).
