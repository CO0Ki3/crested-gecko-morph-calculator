import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

function HeaderContents() {
  const { t, i18n } = useTranslation();
  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='header'>
      {t('header')}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '10px', marginTop: '3px' }}>Language</div>
        <Select
          data={['kr', 'en']}
          defaultValue='kr'
          onSearchChange={onChangeLanguage}
        />
      </div>
    </div>
  );
}

export default HeaderContents;
