import { MenuCategoryPage } from '../../../components/menu-category-page/menu-category-page';
import { useLanguage } from '../../../contexts/language-context';
import { useMenuPrice } from '../../../hooks/use-menu-price';

const allDrinkItems = [
  { labelKey: 'all_drinks.coffee', den: 100, euro: 1.7 },
  { labelKey: 'all_drinks.water_small', den: 40, euro: 0.7 },
  { labelKey: 'all_drinks.mineral_water_small', den: 50, euro: 0.9 },
  { labelKey: 'all_drinks.dobra_voda', den: 60, euro: 1 },
  { labelKey: 'all_drinks.cedevita', den: 70, euro: 1.2 },
  { labelKey: 'all_drinks.coca_cola', den: 70, euro: 1.2 },
  { labelKey: 'all_drinks.fanta', den: 70, euro: 1.2 },
  { labelKey: 'all_drinks.sprite', den: 70, euro: 1.2 },
  { labelKey: 'all_drinks.fresh_orange', den: 120, euro: 2 },
  { labelKey: 'all_drinks.skopsko', den: 100, euro: 1.7 },
  { labelKey: 'all_drinks.smooth', den: 100, euro: 1.7 },
  { labelKey: 'all_drinks.heineken', den: 120, euro: 2 },
];

const AllDrinks = () => {
  const { t } = useLanguage();
  const { menuPrice } = useMenuPrice();

  return (
    <MenuCategoryPage backLink='/drinks' titleKey='drink.all_drinks'>
      {allDrinkItems.map(({ labelKey, den, euro }) => (
        <tr key={labelKey}>
          <td>{t(labelKey)}</td>
          <td>{menuPrice(den, euro)}</td>
        </tr>
      ))}
    </MenuCategoryPage>
  );
};

export default AllDrinks;
