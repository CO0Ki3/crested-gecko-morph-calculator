import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

function HeaderContents() {
  const { t, i18n } = useTranslation();
  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      style={{
        width: '100%',
        border: '1px solid rgb(230, 230, 230)',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '30px',
        justifyContent: 'space-between',
        paddingRight: '30px',
      }}
    >
      {t('header')}
      <Select
        data={['kr', 'en']}
        defaultValue='kr'
        onSearchChange={onChangeLanguage}
      />
    </div>
  );
}

export default HeaderContents;
