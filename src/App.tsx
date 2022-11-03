import { AppShell, Header } from '@mantine/core';
import HeaderContents from './components/header';
import Main from './pages';
import DescriptionList from './pages/description';

function App() {
  return (
    <AppShell
      header={
        <Header height={60} sx={{ borderBottom: 'none' }}>
          <HeaderContents />
        </Header>
      }
    >
      <DescriptionList />
      <Main />
    </AppShell>
  );
}

export default App;
