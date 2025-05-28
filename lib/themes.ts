export const themes = {
  dark: {
    primary: {
      DEFAULT: '#dab18b',
      hover: '#c53121',
      muted: '#9e634a',
    },
    secondary: {
      DEFAULT: '#70624e',
      hover: '#9d9c84',
      muted: '#643a29',
    },
    background: {
      DEFAULT: '#1e1912',
      secondary: '#413f34',
      muted: '#45455d',
    },
    text: {
      DEFAULT: '#dab18b',
      muted: '#9d9c84',
      dark: '#413f34',
    },
    border: {
      DEFAULT: 'rgba(218,177,139,0.2)',
      hover: 'rgba(218,177,139,0.4)',
      muted: 'rgba(112,98,78,0.3)',
    },
    gradient: {
      primary: ['#dab18b', '#9e634a', '#c53121'],
      secondary: ['#70624e', '#9d9c84', '#dab18b'],
      background: ['#1e1912', '#413f34', '#45455d'],
    },
  },
  light: {
    primary: {
      DEFAULT: '#9e634a',
      hover: '#c53121',
      muted: '#dab18b',
    },
    secondary: {
      DEFAULT: '#643a29',
      hover: '#70624e',
      muted: '#9d9c84',
    },
    background: {
      DEFAULT: '#faf6f1',
      secondary: '#f5ede4',
      muted: '#e8e8f0',
    },
    text: {
      DEFAULT: '#1e1912',
      muted: '#413f34',
      dark: '#45455d',
    },
    border: {
      DEFAULT: 'rgba(158,99,74,0.2)',
      hover: 'rgba(158,99,74,0.4)',
      muted: 'rgba(100,58,41,0.3)',
    },
    gradient: {
      primary: ['#9e634a', '#c53121', '#dab18b'],
      secondary: ['#643a29', '#70624e', '#9d9c84'],
      background: ['#faf6f1', '#f5ede4', '#e8e8f0'],
    },
  },
} as const; 