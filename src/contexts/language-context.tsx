import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'mk' | 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('mk');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['mk', 'en', 'el'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const translations = {
      // Navigation
      'nav.reform': {
        mk: 'Reform',
        en: 'Reform',
        el: 'Reform',
      },
      'nav.beach_bar': {
        mk: 'Beach Bar',
        en: 'Beach Bar',
        el: 'Παραλιακό Μπαρ',
      },

      // Menu
      'menu.drinks': {
        mk: 'Пиjалоци',
        en: 'Drinks',
        el: 'Ποτά',
      },
      'menu.food': {
        mk: 'Храна',
        en: 'Food',
        el: 'Φαγητό',
      },
      'menu.beach_offer': {
        mk: 'Понуда за плажа',
        en: 'Beach offer',
        el: 'Προσφορά παραλίας',
      },
      'menu.sunbed_umbrella': {
        mk: 'Лежалка + чадор',
        en: 'Sunbed + umbrella',
        el: 'Ξαπλώστρα + ομπρέλα',
      },
      'menu.sunbed_umbrella_offer_prefix': {
        mk: 'Со платени',
        en: 'For',
        el: 'Με',
      },
      'menu.sunbed_umbrella_offer_suffix': {
        mk: 'добивате кафе + вода, пиво или сок по избор.',
        en: 'you get coffee + water, beer, or any juice.',
        el: 'παίρνετε καφέ + νερό, μπύρα ή χυμό της επιλογής σας.',
      },

      // Capacity section
      'capacity.title': {
        mk: 'Реформ Броеви',
        en: 'Reform Numbers',
        el: 'Αριθμοί Reform',
      },
      'capacity.beach': {
        mk: 'Плажа',
        en: 'Beach',
        el: 'Παραλία',
      },
      'capacity.parking': {
        mk: 'Паркинг места',
        en: 'Parking spots',
        el: 'Θέσεις στάθμευσης',
      },
      'capacity.sunbeds': {
        mk: 'Лежалки',
        en: 'Sunbeds',
        el: 'Ξαπλώστρες',
      },
      'capacity.umbrellas': {
        mk: 'Чадори',
        en: 'Umbrellas',
        el: 'Ομπρέλες',
      },

      // Food categories
      'food.breakfast': {
        mk: 'Појадок',
        en: 'Breakfast',
        el: 'Πρωινό',
      },
      'food.salads': {
        mk: 'Салати',
        en: 'Salads',
        el: 'Σαλάτες',
      },
      'food.pasta': {
        mk: 'Тестенини',
        en: 'Pasta',
        el: 'Μακαρόνια',
      },
      'food.sandwiches': {
        mk: 'Сендвичи',
        en: 'Sandwiches',
        el: 'Σάντουιτς',
      },
      'food.toasts': {
        mk: 'Тостови',
        en: 'Toasts',
        el: 'Τοστ',
      },
      'food.burgers': {
        mk: 'Бургери',
        en: 'Burgers',
        el: 'Μπέργκερ',
      },
      'food.risotto': {
        mk: 'Рижота',
        en: 'Risotto',
        el: 'Ριζότο',
      },
      'food.appetizers': {
        mk: 'Предјадења',
        en: 'Appetizers',
        el: 'Ορεκτικά',
      },
      'food.desserts': {
        mk: 'Десерти',
        en: 'Desserts',
        el: 'Επιδόρπια',
      },

      // Drink categories
      'drink.all_drinks': {
        mk: 'Сите пиjалоци',
        en: 'All drinks',
        el: 'Όλα τα ποτά',
      },
      'drink.cocktails': {
        mk: 'Коктели',
        en: 'Cocktails',
        el: 'Κοκτέιλ',
      },
      'cocktail.categories': {
        mk: 'Категории на коктели',
        en: 'Cocktail categories',
        el: 'Κατηγορίες κοκτέιλ',
      },
      'cocktail.category.classics': {
        mk: 'Класични',
        en: 'Classics',
        el: 'Κλασικά',
      },
      'cocktail.category.signatures': {
        mk: 'Специјални',
        en: 'Signatures',
        el: 'Signature',
      },
      'cocktail.category.non_alcohol': {
        mk: 'Безалкохолни',
        en: 'Non-alcohol',
        el: 'Χωρίς αλκοόλ',
      },

      // Language switcher
      'language.macedonian': {
        mk: 'Македонски',
        en: 'Macedonian',
        el: 'Μακεδονικά',
      },
      'language.english': {
        mk: 'Англиски',
        en: 'English',
        el: 'Αγγλικά',
      },
      'language.greek': {
        mk: 'Грчки',
        en: 'Greek',
        el: 'Ελληνικά',
      },
      'language.menu_aria_prefix': {
        mk: 'Мени за јазик — ',
        en: 'Language menu — ',
        el: 'Μενού γλώσσας — ',
      },

      // Footer
      'footer.copyright': {
        mk: '© 2025 Mitko Devemit',
        en: '© 2025 Mitko Devemit',
        el: '© 2025 Mitko Devemit',
      },
      'footer.hours': {
        mk: 'Работно време',
        en: 'Opening hours',
        el: 'Ώρες λειτουργίας',
      },
      'footer.hours_schedule': {
        mk: 'Пон–чет: 09:00 - 00:00\nПет–нед: 09:00 - 01:00',
        en: 'Mon–Thu: 09:00 - 00:00\nFri–Sun: 09:00 - 01:00',
        el: 'Δευ–Πεμ: 09:00 - 00:00\nΠαρ–Κυρ: 09:00 - 01:00',
      },
      'footer.share': {
        mk: 'Сподели',
        en: 'Share',
        el: 'Κοινή χρήση',
      },
      'footer.shared': {
        mk: 'Копирано!',
        en: 'Link copied!',
        el: 'Αντιγράφηκε!',
      },

      'menu.choose_category': {
        mk: 'Изберете категорија',
        en: 'Choose category',
        el: 'Επιλέξτε κατηγορία',
      },
      'menu.share_text': {
        mk: 'Погледнете го нашето мени!',
        en: 'Check out our menu!',
        el: 'Δείτε το μενού μας!',
      },

      // Events section
      'events.title': {
        mk: 'Реформ',
        en: 'Reform',
        el: 'Reform',
      },
      'events.description': {
        mk: 'Добредојдовте во Реформ, каде што релаксацијата се среќава со возбудата на песочните брегови. Препуштете се на освежителните коктели, уживајте во сонцето на нашите лежалки и уживајте со вкусни залаци со панорамски поглед на езерските води. Без разлика дали барате мирно бегство или живописно искуство покрај плажа, Реформ нуди совршена мешавина од опуштен шарм и привлечност на езерото. Дојдете да се релаксирате, дружете се и создадете незаборавни спомени.',
        en: 'Welcome to Reform, where relaxation meets the excitement of sandy shores. Indulge in refreshing cocktails, bask in the sun on our sunbeds, and enjoy delicious treats with panoramic views of the lake waters. Whether you seek a peaceful escape or a vibrant beachside experience, Reform offers the perfect blend of relaxed charm and lakeside allure. Come to relax, socialize, and create unforgettable memories.',
        el: 'Καλώς ήρθατε στο Reform, όπου η χαλάρωση συναντά τον ενθουσιασμό των αμμώδων ακτών. Απολαύστε αναζωογονητικά κοκτέιλ, λιάζεστε στον ήλιο στις ξαπλώστρες μας και απολαύστε νόστιμα κεράσματα με πανοραμική θέα στις λιμναίες νερές. Είτε αναζητάτε μια ειρηνική διαφυγή είτε μια ζωντανή εμπειρία δίπλα στην παραλία, το Reform προσφέρει την τέλεια μείξη χαλαρού γοητεία και λιμναίας αίγλης. Ελάτε να χαλαρώσετε, να κοινωνικοποιηθείτε και να δημιουργήσετε αξέχαστες αναμνήσεις.',
      },

      // Events list
      'events.events_title': {
        mk: 'Настани',
        en: 'Events',
        el: 'Εκδηλώσεις',
      },
      'events.birthdays': {
        mk: 'Родендени',
        en: 'Birthdays',
        el: 'Γενέθλια',
      },
      'events.christenings': {
        mk: 'Крштенки',
        en: 'Christenings',
        el: 'Βαπτίσεις',
      },
      'events.pre_wedding': {
        mk: 'Предсвадбени настани',
        en: 'Pre-wedding events',
        el: 'Προ-γάμο εκδηλώσεις',
      },
      'events.business': {
        mk: 'Бизнис настани',
        en: 'Business events',
        el: 'Επιχειρηματικές εκδηλώσεις',
      },
      'events.private_parties': {
        mk: 'Приватни забави',
        en: 'Private parties',
        el: 'Ιδιωτικά πάρτι',
      },
      'events.proposals': {
        mk: 'Предлози за брак',
        en: 'Proposals',
        el: 'Προτάσεις γάμου',
      },
      'gallery.title': {
        mk: 'Галерија',
        en: 'Gallery',
        el: 'Γκαλερί',
      },
      'gallery.button': {
        mk: 'Галерија',
        en: 'Gallery',
        el: 'Γκαλερί',
      },
      'gallery.photo_alt': {
        mk: 'Фотографија од галерија',
        en: 'Gallery photo',
        el: 'Φωτογραφία γκαλερί',
      },
      'gallery.reform_alt': {
        mk: 'Поглед на Reform Beach & Bar',
        en: 'View of Reform Beach & Bar',
        el: 'Θέα στο Reform Beach & Bar',
      },
      'gallery.events_alt': {
        mk: 'Атмосфера за настани во Reform',
        en: 'Event atmosphere at Reform',
        el: 'Ατμόσφαιρα εκδηλώσεων στο Reform',
      },

      // Menu headers
      'menu.product': {
        mk: 'Производ',
        en: 'Product',
        el: 'Προϊόν',
      },
      'menu.price': {
        mk: 'Цена',
        en: 'Price',
        el: 'Τιμή',
      },

      // Allergens (EU Annex II)
      'allergen.title': {
        mk: 'Алергени (ЕУ)',
        en: 'Allergens (EU)',
        el: 'Αλλεργιογόνα (ΕΕ)',
      },
      'allergen.disclaimer': {
        mk: 'Соопштете му на персоналот за алергии и нетолеранции.',
        en: 'Please inform staff about allergies and intolerances.',
        el: 'Ενημερώστε το προσωπικό για αλλεργίες και δυσανεξίες.',
      },
      'allergen.gluten': {
        mk: 'Житарици што содржат глутен',
        en: 'Cereals containing gluten',
        el: 'Δημητριακά που περιέχουν γλουτένη',
      },
      'allergen.crustaceans': {
        mk: 'Ракчиња',
        en: 'Crustaceans',
        el: 'Καρκινοειδή',
      },
      'allergen.eggs': {
        mk: 'Јајца',
        en: 'Eggs',
        el: 'Αυγά',
      },
      'allergen.fish': {
        mk: 'Риба',
        en: 'Fish',
        el: 'Ψάρι',
      },
      'allergen.peanuts': {
        mk: 'Кикирики',
        en: 'Peanuts',
        el: 'Αράπικα φιστίκια',
      },
      'allergen.soy': {
        mk: 'Соја',
        en: 'Soybeans',
        el: 'Σόγια',
      },
      'allergen.milk': {
        mk: 'Млеко',
        en: 'Milk',
        el: 'Γάλα',
      },
      'allergen.nuts': {
        mk: 'Јаткасти плодови',
        en: 'Tree nuts',
        el: 'Ξηροί καρποί',
      },
      'allergen.celery': {
        mk: 'Целер',
        en: 'Celery',
        el: 'Σέλινο',
      },
      'allergen.mustard': {
        mk: 'Сенф',
        en: 'Mustard',
        el: 'Μουστάρδα',
      },
      'allergen.sesame': {
        mk: 'Сусам',
        en: 'Sesame',
        el: 'Σουσάμι',
      },
      'allergen.sulphites': {
        mk: 'Сулфитен диоксид и сулфити',
        en: 'Sulphur dioxide and sulphites',
        el: 'Διοξείδιο του θείου και θειώδη',
      },
      'allergen.lupin': {
        mk: 'Лупина',
        en: 'Lupin',
        el: 'Λούπινο',
      },
      'allergen.molluscs': {
        mk: 'Мекотели',
        en: 'Molluscs',
        el: 'Μαλάκια',
      },

      // Cocktail type groups
      'cocktail.type.classics': {
        mk: 'Класични',
        en: 'Classics',
        el: 'Κλασικά',
      },
      'cocktail.type.signatures': {
        mk: 'Специјални',
        en: 'Signatures',
        el: 'Signature',
      },
      'cocktail.type.non_alcohol': {
        mk: 'Безалкохолни',
        en: 'Non-alcohol',
        el: 'Χωρίς αλκοόλ',
      },

      // Cocktail products
      'cocktail.mojito': {
        mk: 'Мохито',
        en: 'Mojito',
        el: 'Μοχίτο',
      },
      'cocktail.pina_colada': {
        mk: 'Пина Колада',
        en: 'Pina Colada',
        el: 'Πίνα Κολάδα',
      },
      'cocktail.strawberry_colada': {
        mk: 'Строубери Колада',
        en: 'Strawberry Colada',
        el: 'Φραουλόκολαδα',
      },
      'cocktail.cosmopolitan': {
        mk: 'Космополитан',
        en: 'Cosmopolitan',
        el: 'Κοσμοπολίτης',
      },
      'cocktail.margarita': {
        mk: 'Маргарита',
        en: 'Margarita',
        el: 'Μαργαρίτα',
      },
      'cocktail.strawberry_margarita': {
        mk: 'Строубери маргарита',
        en: 'Strawberry Margarita',
        el: 'Φραουλόμαργαρίτα',
      },
      'cocktail.tequila_sunrise': {
        mk: 'Текила Санрајс',
        en: 'Tequila Sunrise',
        el: 'Τεκίλα Σάνραϊζ',
      },
      'cocktail.sandcastle': {
        mk: 'Сандкастл',
        en: 'Sandcastle',
        el: 'Κάστρο άμμου',
      },
      'cocktail.sex_on_beach': {
        mk: "Секс он д'бич",
        en: 'Sex On The Beach',
        el: 'Σεξ ον δε Μπιτς',
      },
      'cocktail.blue_lagoon': {
        mk: 'Блу Лагун',
        en: 'Blue Lagoon',
        el: 'Μπλε Λαγκούνα',
      },
      'cocktail.flamingo': {
        mk: 'Фламинго',
        en: 'Flamingo',
        el: 'Φλαμίνγκο',
      },
      'cocktail.blue_hawaii': {
        mk: 'Блу Хаваи',
        en: 'Blue Hawaii',
        el: 'Μπλε Χαβάη',
      },
      'cocktail.cuba_libre': {
        mk: 'Куба Либре',
        en: 'Cuba Libre',
        el: 'Κούβα Λίμπρε',
      },
      'cocktail.amf': {
        mk: 'А.М.Ф',
        en: 'A.M.F',
        el: 'Α.Μ.Φ',
      },
      'cocktail.arizona_twister': {
        mk: 'Аризона Твистер',
        en: 'Arizona Twister',
        el: 'Αριζόνα Τουίστερ',
      },
      'cocktail.long_island': {
        mk: 'Лонг Ајланд',
        en: 'Long Island',
        el: 'Λονγκ Άιλαντ',
      },

      // Food products - Breakfast
      'food.reform_breakfast': {
        mk: 'Реформ појадок',
        en: 'Reform Breakfast',
        el: 'Πρωινό Reform',
      },
      'food.omelet': {
        mk: 'Омлет',
        en: 'Omelet',
        el: 'Ομελέτα',
      },
      'food.brooklyn': {
        mk: 'Бруклин',
        en: 'Brooklyn',
        el: 'Μπρούκλιν',
      },

      // Food products - Salads
      'food.caesar_salad': {
        mk: 'Цезар',
        en: 'Caesar',
        el: 'Καίσαρας',
      },
      'food.tuna_salad': {
        mk: 'Туна',
        en: 'Tuna',
        el: 'Τόνος',
      },
      'food.greek_salad': {
        mk: 'Грчка',
        en: 'Greek',
        el: 'Ελληνική',
      },
      'food.shop_salad': {
        mk: 'Шопска',
        en: 'Shop',
        el: 'Σαλάτα καταστήματος',
      },

      // Food products - Burgers
      'food.hamburger': {
        mk: 'Хамбургер',
        en: 'Hamburger',
        el: 'Χάμπουργκερ',
      },
      'food.reform_cheeseburger': {
        mk: 'Реформ Чизбургер',
        en: 'Reform Cheeseburger',
        el: 'Τσίζμπουργκερ Reform',
      },
      'food.manhattan_burger': {
        mk: 'Менхетен Бургер',
        en: 'Manhattan Burger',
        el: 'Μπέργκερ Μανχάταν',
      },
      'food.american_classic': {
        mk: 'Американски класик',
        en: 'American Classic',
        el: 'Αμερικανικό κλασικό',
      },
      'food.chicken_burger': {
        mk: 'Чикенбургер',
        en: 'Chicken Burger',
        el: 'Μπέργκερ κοτόπουλο',
      },

      // All drinks products
      'all_drinks.coffee': {
        mk: 'Нес Кафе',
        en: 'Coffee',
        el: 'Καφές',
      },
      'all_drinks.water_small': {
        mk: 'Вода мала',
        en: 'Water small',
        el: 'Νερό μικρό',
      },
      'all_drinks.water_big': {
        mk: 'Вода голема',
        en: 'Water big',
        el: 'Νερό μεγάλο',
      },
      'all_drinks.mineral_water_small': {
        mk: 'Газирана вода мала',
        en: 'Mineral Water small',
        el: 'Μεταλλικό νερό μικρό',
      },
      'all_drinks.dobra_voda': {
        mk: 'Добра Вода',
        en: 'Dobra Voda',
        el: 'Ντόμπρα Βόντα',
      },
      'all_drinks.cedevita': {
        mk: 'Цедевита',
        en: 'Cedevita',
        el: 'Τσεντεβίτα',
      },
      'all_drinks.coca_cola': {
        mk: 'Кока кола',
        en: 'Coca Cola',
        el: 'Κόκα Κόλα',
      },
      'all_drinks.fanta': {
        mk: 'Фанта',
        en: 'Fanta',
        el: 'Φάντα',
      },
      'all_drinks.sprite': {
        mk: 'Спрајт',
        en: 'Sprite',
        el: 'Σπράιτ',
      },
      'all_drinks.fresh_orange': {
        mk: 'Цеден Портокал',
        en: 'Fresh Orange Juice',
        el: 'Φρέσκος χυμός πορτοκάλι',
      },
      'all_drinks.skopsko': {
        mk: 'Скопско',
        en: 'Skopsko',
        el: 'Σκόπσκο',
      },
      'all_drinks.smooth': {
        mk: 'Скопско Смут',
        en: 'Smooth',
        el: 'Σμουθ',
      },
      'all_drinks.heineken': {
        mk: 'Хајнекен',
        en: 'Heineken',
        el: 'Χάινεκεν',
      },

      // Pasta products
      'pasta.bolognese': {
        mk: 'Болоњезе',
        en: 'Bolognese',
        el: 'Μπολονέζε',
      },
      'pasta.carbonara': {
        mk: 'Карбонаре',
        en: 'Carbonara',
        el: 'Καρμπονάρα',
      },
      'pasta.four_cheeses': {
        mk: '4 Вида Сирење',
        en: '4 Types of Cheese',
        el: '4 Τύποι Τυριού',
      },

      // Sandwich products
      'sandwich.reform_club': {
        mk: 'Реформ Клуб',
        en: 'Reform Club',
        el: 'Κλαμπ Reform',
      },
      'sandwich.reform_royal': {
        mk: 'Реформ Ројал',
        en: 'Reform Royal',
        el: 'Ρόγιαλ Reform',
      },
      'sandwich.new_york': {
        mk: 'Њујорк',
        en: 'New York',
        el: 'Νέα Υόρκη',
      },
      'sandwich.pepperoni': {
        mk: 'Пеперони',
        en: 'Pepperoni',
        el: 'Πεπερονί',
      },

      // Toast products
      'toast.ham_cheese': {
        mk: 'Шунка Кашкавал',
        en: 'Ham Cheese',
        el: 'Ζαμπόν Τυρί',
      },
      'toast.kulen_cheese': {
        mk: 'Кулен Кашкавал',
        en: 'Kulen Cheese',
        el: 'Κούλεν Τυρί',
      },
      'toast.neck_cheese': {
        mk: 'Врат Кашкавал',
        en: 'Neck Cheese',
        el: 'Λαιμός Τυρί',
      },
      'toast.roast_cheese': {
        mk: 'Печеница Кашкавал',
        en: 'Roast Cheese',
        el: 'Ψητό Τυρί',
      },
      'toast.fries_extra': {
        mk: 'Помфрит Додаток',
        en: 'Fries Extra',
        el: 'Πατάτες Επιπλέον',
      },
      'toast.fries_portion': {
        mk: 'Порција Помфрит',
        en: 'Fries Portion',
        el: 'Μερίδα Πατάτες',
      },

      // Appetizer products
      'appetizer.chicken_fingers': {
        mk: 'Пилешки прсти',
        en: 'Chicken Fingers',
        el: 'Δάχτυλα κοτόπουλο',
      },

      // Dessert products
      'dessert.pancake_cream_banana': {
        mk: 'Палачинка Крем Банана',
        en: 'Pancake Cream Banana',
        el: 'Κρέπα κρέμα μπανάνα',
      },
      'dessert.ice_cream_ball': {
        mk: 'Сладолед Топка',
        en: 'Ice Cream Ball',
        el: 'Μπάλα παγωτό',
      },

      // Risotto products
      'risotto.vegetable_risotto': {
        mk: 'Рижото со зеленчук',
        en: 'Vegetable Risotto',
        el: 'Ριζότο με λαχανικά',
      },
      'risotto.reform_risotto': {
        mk: 'Реформ Рижото',
        en: 'Reform Risotto',
        el: 'Ριζότο Reform',
      },
      'risotto.chicken_risotto': {
        mk: 'Пилешко Рижото',
        en: 'Chicken Risotto',
        el: 'Ριζότο κοτόπουλο',
      },

      // Ingredient descriptions
      'ingredients.caesar_salad': {
        mk: 'марула, шери, пченка, пилешко, пармезан, дресинг,кубети, маслиново масло',
        en: 'lettuce, croutons, corn, chicken, parmesan, dressing, olive oil',
        el: 'μαρούλι, κρουτόν, καλαμπόκι, κοτόπουλο, παρμεζάνα, σάλτσα, κρουτόν, ελαιόλαδο',
      },
      'ingredients.tuna_salad': {
        mk: 'марула,туна, маслинки, домат, кромид, пченка, лимон, дресинг, маслиново масло',
        en: 'lettuce, tuna, olives, tomato, onion, corn, lemon, dressing, olive oil',
        el: 'μαρούλι, τόνος, ελιές, ντομάτα, κρεμμύδι, καλαμπόκι, λεμόνι, σάλτσα, ελαιόλαδο',
      },
      'ingredients.greek_salad': {
        mk: 'домат,краставица, кромид, сирење, маслиново масло, оригано',
        en: 'tomato, cucumber, young onion, cheese, olive oil, oregano',
        el: 'ντομάτα, αγγούρι, νεαρό κρεμμύδι, τυρί, ελαιόλαδο, ρίγανη',
      },
      'ingredients.shop_salad': {
        mk: 'домат, краставица, кромид, сирење, маслиново масло',
        en: 'tomato, cucumber, young onion, cheese, olive oil',
        el: 'ντομάτα, αγγούρι, νεαρό κρεμμύδι, τυρί, ελαιόλαδο',
      },
      'ingredients.reform_breakfast': {
        mk: 'јајца, едамер, печурки, домат, пршута, масло за јадење, доматен сос',
        en: 'eggs, edam cheese, mushrooms, tomato, ham, cooking butter, tomato sauce',
        el: 'αυγά, τυρί εντάμ, μανιτάρια, ντομάτα, ζαμπόν, βούτυρο μαγειρέματος, σάλτσα ντομάτας',
      },
      'ingredients.omelet': {
        mk: 'јајца, домат, краставичка, додаток по избор, шунка, кашкавал, печурки, масло за јадење',
        en: 'eggs, tomato, cucumber, choice of addition, ham, cheese, mushrooms, cooking butter',
        el: 'αυγά, ντομάτα, αγγούρι, επιλογή προσθήκης, ζαμπόν, τυρί, μανιτάρια, βούτυρο μαγειρέματος',
      },
      'ingredients.brooklyn': {
        mk: 'лепче, шунка, кашкавал, сланина, шампињони, домат, масло за јадење',
        en: 'bread, ham, cheese, bacon, mushrooms, tomato, cooking butter',
        el: 'ψωμί, ζαμπόν, τυρί, μπέικον, μανιτάρια, ντομάτα, βούτυρο μαγειρέματος',
      },
      'ingredients.hamburger': {
        mk: 'говедска плескавица, марула, домат, краставица, помфрит, лепче',
        en: 'beef patty, lettuce, tomato, cucumber, fries, bread',
        el: 'κεφτεδάκι βοδινού, μαρούλι, ντομάτα, αγγούρι, πατάτες, ψωμί',
      },
      'ingredients.reform_cheeseburger': {
        mk: 'говедска плескавица, зденка, едамер, марула, помфрит, лепче',
        en: 'beef patty, processed cheese spread, Edam cheese, lettuce, fries, bread',
        el: 'μοσχαρίσιο μπιφτέκι, αλειφώδες τυρί, τυρί ένταμ, μαρούλι, πατάτες τηγανητές, ψωμί',
      },
      'ingredients.manhattan_burger': {
        mk: 'говедска плескавица, сланина, кашкавал, марула, домат, кромид, помфрит, лепче',
        en: 'beef patty, bacon, cheese, lettuce, tomato, onion, fries, bread',
        el: 'κεφτεδάκι βοδινού, μπέικον, τυρί, μαρούλι, ντομάτα, κρεμμύδι, πατάτες, ψωμί',
      },
      'ingredients.american_classic': {
        mk: 'говедска плескавица, едамер, ббк сос, кисели краставички, марула, домат, помфрит, лепче',
        en: 'beef patty, edam cheese, bbq sauce, pickles, lettuce, tomato, fries, bread',
        el: 'κεφτεδάκι βοδινού, τυρί εντάμ, σάλτσα μπάρμπεκιου, πίκλες, μαρούλι, ντομάτα, πατάτες, ψωμί',
      },
      'ingredients.chicken_burger': {
        mk: 'пилешки стек, домат, краставица, марула, помфрит, лепче',
        en: 'chicken steak, tomato, cucumber, lettuce, fries, bread',
        el: 'μπριζόλα κοτόπουλο, ντομάτα, αγγούρι, μαρούλι, πατάτες, ψωμί',
      },
      'ingredients.pasta_bolognese': {
        mk: 'болоњезе сос, пармезан, шери, свеж босилек, тестенини по избор, маслиново масло',
        en: 'bolognese sauce, parmesan, croutons, fresh basil, pasta of choice, olive oil',
        el: 'σάλτσα μπολονέζε, παρμεζάνα, κρουτόν, φρέσκο βασιλικό, μακαρόνια επιλογής, ελαιόλαδο',
      },
      'ingredients.pasta_carbonara': {
        mk: 'панцета, јајца, пармезан, бел сос, магданос, свеж босилек, шери, тестенини по избор',
        en: 'pancetta, eggs, parmesan, white sauce, parsley, fresh basil, croutons, pasta of choice',
        el: 'παντσέτα, αυγά, παρμεζάνα, λευκή σάλτσα, μαϊντανός, φρέσκο βασιλικό, κρουτόν, μακαρόνια επιλογής',
      },
      'ingredients.pasta_four_cheeses': {
        mk: 'моцарела, горгонзота, пармезан, адамер, шери, магданос, маслиново масло, тестенини по избор',
        en: 'mozzarella, gorgonzola, parmesan, edam, croutons, parsley, olive oil, pasta of choice',
        el: 'μοτσαρέλα, γκοργκόνζολα, παρμεζάνα, εντάμ, κρουτόν, μαϊντανός, ελαιόλαδο, μακαρόνια επιλογής',
      },
      'ingredients.sandwich_reform_club': {
        mk: 'шунка, сланина, кашкавал, павлака, пармезан, домат, помфрит, лепче',
        en: 'ham, bacon, cheese, cream, parmesan, tomato, fries, bread',
        el: 'ζαμπόν, μπέικον, τυρί, κρέμα, παρμεζάνα, ντομάτα, πατάτες, ψωμί',
      },
      'ingredients.sandwich_reform_royal': {
        mk: 'пилешки стек, едамер, татар сос, марула, домати, помфрит, корнишон лепче',
        en: 'chicken steak, edam cheese, tartar sauce, lettuce, tomatoes, fries, cornichon bread',
        el: 'μπριζόλα κοτόπουλο, τυρί εντάμ, σάλτσα ταρτάρ, μαρούλι, ντομάτες, πατάτες, ψωμί κορνιχόν',
      },
      'ingredients.sandwich_new_york': {
        mk: 'печеница, едамер, павлака, салата, марула, помфрит, лепче',
        en: 'roast beef, edam cheese, cream, salad, lettuce, fries, bread',
        el: 'ψητό βοδινό, τυρί εντάμ, κρέμα, σαλάτα, μαρούλι, πατάτες, ψωμί',
      },
      'ingredients.sandwich_pepperoni': {
        mk: 'кулен, кашкавал, марула, домат, помфрит, лепче',
        en: 'kulen, cheese, lettuce, tomato, fries, bread',
        el: 'κούλεν, τυρί, μαρούλι, ντομάτα, πατάτες, ψωμί',
      },
      'ingredients.toast_ham_cheese': {
        mk: 'шунка, кашкавал, додаток по избор, лепче',
        en: 'ham, cheese, choice of addition, bread',
        el: 'ζαμπόν, τυρί, επιλογή προσθήκης, ψωμί',
      },
      'ingredients.toast_kulen_cheese': {
        mk: 'кулен, кашкавал, додаток по избор, лепче',
        en: 'kulen, cheese, choice of addition, bread',
        el: 'κούλεν, τυρί, επιλογή προσθήκης, ψωμί',
      },
      'ingredients.toast_neck_cheese': {
        mk: 'врат, кашкавал, додаток по избор, лепче',
        en: 'neck, cheese, choice of addition, bread',
        el: 'λαιμός, τυρί, επιλογή προσθήκης, ψωμί',
      },
      'ingredients.toast_roast_cheese': {
        mk: 'печеница, кашкавал, додаток по избор, лепче',
        en: 'roast beef, cheese, choice of addition, bread',
        el: 'ψητό βοδινό, τυρί, επιλογή προσθήκης, ψωμί',
      },
      'ingredients.chicken_fingers': {
        mk: 'пилешко брашно, јајце,презла, сусам,помфрит',
        en: 'chicken flour, egg, breadcrumbs, sesame, fries',
        el: 'αλεύρι κοτόπουλο, αυγό, τριμμένη φρυγανιά, σουσάμι, πατάτες',
      },
      'ingredients.pancake_cream_banana': {
        mk: 'крем банана',
        en: 'banana cream',
        el: 'κρέμα μπανάνα',
      },
      'ingredients.ice_cream_ball': {
        mk: 'Сладолед',
        en: 'Ice Cream',
        el: 'Παγωτό',
      },
      'ingredients.risotto_vegetable': {
        mk: 'басамати ориз, мешан зеленчук, свежи шампињони, маслиново масло, сол, бибер',
        en: 'basmati rice, mixed vegetables, fresh mushrooms, olive oil, salt, pepper',
        el: 'ρύζι μπασμάτι, μικτά λαχανικά, φρέσκα μανιτάρια, ελαιόλαδο, αλάτι, πιπέρι',
      },
      'ingredients.risotto_reform': {
        mk: 'басамати ориз, пилешко, пармезан, свежи печурки, кинеска мешавина',
        en: 'basmati rice, chicken, parmesan, fresh mushrooms, chinese mix',
        el: 'ρύζι μπασμάτι, κοτόπουλο, παρμεζάνα, φρέσκα μανιτάρια, κινεζικό μίγμα',
      },
      'ingredients.risotto_chicken': {
        mk: 'ориз, пилешко месо, зеленчук, шери, свеж босилек, печурки, маслиново масло, пармезан',
        en: 'rice, chicken meat, vegetables, croutons, fresh basil, mushrooms, olive oil, parmesan',
        el: 'ρύζι, κρέας κοτόπουλο, λαχανικά, κρουτόν, φρέσκο βασιλικό, μανιτάρια, ελαιόλαδο, παρμεζάνα',
      },
    };

    const translation = translations[key as keyof typeof translations];
    if (translation && translation[language]) {
      return translation[language];
    }

    // Fallback to key if translation not found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
