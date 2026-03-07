import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'system' | 'winamp' | 'win95';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const VALID_THEMES: Theme[] = ['system', 'winamp', 'win95'];

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'system',
  setTheme: () => {},
});

function applyTheme(t: Theme) {
  if (t === 'system') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', t);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored && VALID_THEMES.includes(stored)) {
        setThemeState(stored);
        applyTheme(stored);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try { localStorage.setItem('theme', t); } catch {}
    applyTheme(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
