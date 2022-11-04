import { Global } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './App';
import gothicOTF from './font/NanumGothic.otf';
import gothicTTF from './font/NanumGothic.ttf';
import gothicBoldOTF from './font/NanumGothicBold.otf';
import gothicBoldTTF from './font/NanumGothicBold.ttf';

function FontProvider() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'nanum_gothic',
            src: `url('${gothicOTF}') format("truetype"), url('${gothicTTF}') format("woff")`,
            fontStyle: 'normal',
            fontWeight: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'nanum_gothic',
            src: `url('${gothicBoldOTF}') format("truetype"), url('${gothicBoldTTF}') format("woff")`,
            fontStyle: 'normal',
            fontWeight: 'bold',
          },
        },
      ]}
    />
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <FontProvider />
    <App />
  </MantineProvider>,
);
