interface TelegramWebApp {
    ready: () => void;
    expand: () => void;
    close: () => void;
    disableVerticalSwipes?: () => void; // Добавляем ? на случай если метод не доступен
    enableClosingConfirmation: () => void;
    isVerticalSwipesEnabled?: boolean;
    isClosingConfirmationEnabled?: boolean;
    BackButton: {
      show: () => void;
      hide: () => void;
      onClick: (callback: () => void) => void;
    };
  }
  
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }