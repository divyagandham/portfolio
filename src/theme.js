import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { BiBorderRadius } from 'react-icons/bi';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('black', 'black')(props), // Fallback color
      color: mode('white', 'white')(props),
      // fontSize: 'lg',
      // backgroundImage: "url('https://www.pixelstalk.net/wp-content/uploads/2016/06/Black-And-Red-Backgrounds-1.jpg')",
      backgroundSize: 'cover', // Cover the entire viewport
      backgroundRepeat: 'no-repeat', // Prevent repeating the image
      backgroundPosition: 'center', // Center the image
    },
  }),
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

const fontSizes = {
  sm: '0.875rem', // Small size (14px)
  md: '1rem', // Medium size (16px)
  lg: '1.125rem', // Large size (18px)
  xl: '1.25rem', // Extra Large size (20px)
  '2xl': '1.5rem', // 2x Large size (24px)
  '3xl': '1.875rem', // 3x Large size (30px)
  '4xl': '2.25rem', // 4x Large size (36px)
  '5xl': '3rem', // 5x Large size (48px)
  '6xl': '3.75rem', // 6x Large size (60px)
};

const theme = extendTheme({ config, styles, fonts, fontSizes });

export default theme;