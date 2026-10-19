# listok

Сайт на React.

Минимальная настройка, чтобы запустить React в Vite с горячей перезагрузкой и правилами Oxlint.

Сейчас доступны два официальных плагина:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) использует [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) использует [SWC](https://swc.rs/)

## React Compiler

В этом проекте включён React Compiler. Подробнее в [документации](https://react.dev/learn/react-compiler).

Это влияет на скорость разработки и сборки в Vite.
Можно также попробовать [экспериментальную встроенную поддержку React Compiler в plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler): в настройках плагина укажите `compiler: true` вместо Babel-плагина.

## Настройка Oxlint

Для продакшен-приложения лучше использовать TypeScript с правилами линтера, которые учитывают типы. В [TS-шаблоне](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) описано, как подключить TypeScript и связанные правила Oxlint.
