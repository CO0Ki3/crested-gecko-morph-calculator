import { AppShell, Header } from '@mantine/core';
import HeaderContents from './components/header';
import Main from './pages';

function App() {
  return (
    <AppShell
      header={
        <Header height={60} sx={{ borderBottom: 'none' }}>
          <HeaderContents />
        </Header>
      }
    >
      <Main />
    </AppShell>
  );
}

export default App;
