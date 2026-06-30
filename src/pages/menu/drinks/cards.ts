import { useLanguage } from '../../../contexts/language-context';

export const useDrinkCards = () => {
  const { t } = useLanguage();

  return [
    {
      title: t('drink.all_drinks'),
      img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      link: '/drinks/all',
    },
    {
      title: t('drink.cocktails'),
      img: 'https://images.unsplash.com/photo-1626169278883-03a6e71e381d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      link: '/drinks/coctails',
    },
  ];
};
