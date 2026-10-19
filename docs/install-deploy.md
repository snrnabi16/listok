# Инструкция по установке, деплое

Источник: [Google Docs](https://docs.google.com/document/d/19icc_rZIzr9rCpt-LGGimTsNLgqU6v0wIsuhlRMs8OU/edit)

## Создание проекта

Один раз на своём ПК:

```bash
npm install -g pnpm
```

1. `pnpm create vite@latest`
2. project-name
3. React
4. JavaScript + React Compiler
5. oxlint
6. yes

## Запустить проект

Откройте проект в VS Code, новый терминал:

```bash
pnpm dev
```

## Git

Если впервые хотите запушить на репозиторий:

1. `git init`
2. `git add .`
3. `git commit -m "..."`
4. `git remote add origin https://github.com/new-user/new-repo.git`
5. `git push origin master`

## Деплой

Один раз в проект добавляете библиотеку:

```bash
pnpm add gh-pages
```

Меняете `scripts` в файле `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build --base=./",
  "lint": "oxlint",
  "preview": "vite preview",
  "predeploy": "pnpm run build",
  "deploy": "gh-pages -d dist"
}
```

Деплой:

```bash
pnpm run deploy
```

## Если проект уже запушен и нужно внести изменения и заново задеплоить

1. `git add .`
2. `git commit -m "практика 2"`
3. `git push origin master`
4. `pnpm run deploy`
