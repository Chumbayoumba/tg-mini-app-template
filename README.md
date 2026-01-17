<div align="center">

# 📱 Telegram Mini App Template

[![Telegram](https://img.shields.io/badge/Telegram-Mini_App-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://core.telegram.org/bots/webapps)
[![TON](https://img.shields.io/badge/TON-Connect-0098EA?style=for-the-badge&logo=ton&logoColor=white)](https://ton.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

**Production-ready шаблон Telegram Mini App с TON Connect**

[🇷🇺 Русский](#) | [🇬🇧 English](#english)

[Live Demo](https://t.me/YourBot/app) • [Документация](#-структура)

</div>

---

## ⚡ Быстрый старт

```bash
# Клонируйте репозиторий
git clone https://github.com/Chumbayoumba/tg-mini-app-template.git
cd tg-mini-app-template

# Установите зависимости
npm install

# Запустите dev-сервер
npm run dev
```

---

## ✨ Особенности

- 📱 **@telegram-apps/sdk** — официальный SDK для Mini Apps
- 💰 **TON Connect** — интеграция кошельков TON
- ⚡ **Vite + React 18** — быстрая разработка
- 🎨 **Tailwind CSS** — адаптивные стили
- 📦 **TypeScript** — полная типизация
- 🌙 **Telegram Theme** — автоматические темы
- 🔐 **Auth** — валидация initData

---

## 📁 Структура проекта

```
src/
├── components/
│   ├── App.tsx             # Главный компонент
│   ├── MainButton.tsx      # Telegram MainButton
│   ├── BackButton.tsx      # Telegram BackButton
│   └── TonConnect.tsx      # TON Connect UI
├── hooks/
│   ├── useTelegram.ts      # Хук для Telegram WebApp
│   └── useTonConnect.ts    # Хук для TON Connect
├── pages/
│   ├── Home.tsx            # Главная страница
│   ├── Wallet.tsx          # Страница кошелька
│   └── Profile.tsx         # Профиль пользователя
├── utils/
│   ├── telegram.ts         # Telegram утилиты
│   └── ton.ts              # TON утилиты
├── main.tsx
└── index.css
```

---

## 🔧 Telegram SDK

### Инициализация

```typescript
import { init, miniApp, themeParams } from '@telegram-apps/sdk';

// Инициализация SDK
init();

// Получение данных
const user = miniApp.initDataUnsafe.user;
console.log(`Hello, ${user?.firstName}!`);
```

### MainButton

```typescript
import { mainButton } from '@telegram-apps/sdk';

// Показать кнопку
mainButton.setParams({
  text: 'Оплатить',
  isVisible: true,
  isEnabled: true,
});

// Обработчик клика
mainButton.onClick(() => {
  console.log('MainButton clicked!');
});
```

### BackButton

```typescript
import { backButton } from '@telegram-apps/sdk';

backButton.show();
backButton.onClick(() => {
  // Вернуться назад
});
```

---

## 💰 TON Connect

### Настройка

Создайте `tonconnect-manifest.json` в `/public`:

```json
{
  "url": "https://your-app.com",
  "name": "My Mini App",
  "iconUrl": "https://your-app.com/icon.png"
}
```

### Подключение кошелька

```typescript
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';

function WalletPage() {
  const address = useTonAddress();
  
  return (
    <div>
      <TonConnectButton />
      {address && <p>Кошелёк: {address}</p>}
    </div>
  );
}
```

### Отправка транзакции

```typescript
import { useTonConnectUI } from '@tonconnect/ui-react';

function PayButton() {
  const [tonConnectUI] = useTonConnectUI();
  
  const sendPayment = async () => {
    await tonConnectUI.sendTransaction({
      messages: [{
        address: 'EQ...',
        amount: '100000000', // 0.1 TON в нанотонах
      }],
    });
  };
  
  return <button onClick={sendPayment}>Оплатить 0.1 TON</button>;
}
```

---

## 🚀 Деплой

### 1. Создайте бота

1. Откройте [@BotFather](https://t.me/BotFather)
2. `/newbot` → следуйте инструкциям
3. `/newapp` → прикрепите Mini App к боту

### 2. Задеплойте приложение

```bash
# Vercel
npm i -g vercel && vercel

# Или соберите статику
npm run build
# Загрузите dist/ на хостинг
```

### 3. Настройте URL

В BotFather → `/myapps` → Edit Web App → установите URL

---

## 📦 Зависимости

```json
{
  "@telegram-apps/sdk": "^1.0.0",
  "@tonconnect/ui-react": "^2.0.0",
  "react": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "tailwindcss": "^3.4.0"
}
```

---

## 📝 Лицензия

MIT — используйте свободно!

---

<div align="center">

**Сделано с ❤️ [Egor Terskii](https://github.com/Chumbayoumba)**

[![Telegram](https://img.shields.io/badge/Вопросы-@longfest-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/longfest)

⭐ **Понравился шаблон? Поставьте звезду!**

</div>

---

<a name="english"></a>
## 🇬🇧 English

Production-ready Telegram Mini App template with TON Connect integration.

Features: @telegram-apps/sdk, TON Connect, React 18, TypeScript, Vite, Tailwind CSS.

```bash
git clone https://github.com/Chumbayoumba/tg-mini-app-template.git
npm install && npm run dev
```