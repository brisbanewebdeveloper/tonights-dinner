//
// https://www.typescriptlang.org/docs/handbook/modules.html#exporting-a-declaration
//
export interface Category {
  key: string;
  name: string;
};

const Washoku: Category = {
  key: 'washoku',
  name: '和食 (メイン)',
};
const Hukusai: Category = {
  key: 'hukusai',
  name: '副菜 (サイド)',
};
const Kankoku: Category = {
  key: 'kankoku',
  name: '韓国料理',
};
const Chuka: Category = {
  key: 'chuka',
  name: '中華料理',
};
const Yoshoku: Category = {
  key: 'yoshoku',
  name: '洋食',
};
const Soup: Category = {
  key: 'soup',
  name: '汁物',
};
const Salad: Category = {
  key: 'salad',
  name: 'サラダ',
};

// - Not using Enum seems to be considered a bad and unreliable practice in typescript
// - Both type and as const have auto-fill and will complain when an invalid value is used
// https://stackoverflow.com/questions/49746638/how-to-use-enum-as-props-in-react-typescript
export const Categories = {
  Washoku,
  Hukusai,
  Kankoku,
  Chuka,
  Yoshoku,
  Soup,
  Salad,
};

export interface Food {
  category: Category;
  name: string;
};

// 和食（メイン）
export const WashokuMenus: Food[] = [
  {
    category: Washoku,
    name: '牛丼',
  },
  {
    category: Washoku,
    name: '親子丼',
  },
  {
    category: Washoku,
    name: '三食丼',
  },
  {
    category: Washoku,
    name: '豆腐丼',
  },
  {
    category: Washoku,
    name: '焼肉丼',
  },
  {
    category: Washoku,
    name: 'カレー',
  },
  {
    category: Washoku,
    name: '肉じゃが',
  },
  {
    category: Washoku,
    name: '唐揚げ',
  },
  {
    category: Washoku,
    name: '豚の生姜焼き',
  },
  {
    category: Washoku,
    name: '鶏むねの生姜焼き',
  },
  {
    category: Washoku,
    name: '塩ジャケ',
  },
  {
    category: Washoku,
    name: '野菜炒め',
  },
  {
    category: Washoku,
    name: '肉豆腐',
  },
  {
    category: Washoku,
    name: 'てりやきチキン',
  },
  {
    category: Washoku,
    name: 'チキン南蛮',
  },
  {
    category: Washoku,
    name: 'すき焼き',
  },
  {
    category: Washoku,
    name: '焼きそば',
  },
  {
    category: Washoku,
    name: '甘辛チキン',
  },
  {
    category: Washoku,
    name: 'お好み焼き',
  },
];

// 副菜（サイド）
export const HukusaiMenus: Food[] = [
  {
    category: Hukusai,
    name: 'きゅうりの漬物',
  },
  {
    category: Hukusai,
    name: '卵焼き',
  },
  {
    category: Hukusai,
    name: 'アスパラのベーコン焼き',
  },
  {
    category: Hukusai,
    name: 'れんこん揚げ',
  },
  {
    category: Hukusai,
    name: 'ほうれん草のおひたし',
  },
  {
    category: Hukusai,
    name: '豆腐ともやしのピリ辛',
  },
];

// 韓国料理
export const KankokuMenus: Food[] = [
  {
    category: Kankoku,
    name: 'ビビンバ',
  },
  {
    category: Kankoku,
    name: 'チヂミ',
  },
  {
    category: Kankoku,
    name: 'プルコギ',
  },
  {
    category: Kankoku,
    name: 'チャプチェ',
  },
  {
    category: Kankoku,
    name: 'ヤンニョムチキン',
  },
];

// 中華料理
export const ChukaMenus: Food[] = [
  {
    category: Chuka,
    name: '餃子',
  },
  {
    category: Chuka,
    name: 'シュウマイ',
  },
  {
    category: Chuka,
    name: '油淋鶏',
  },
  {
    category: Chuka,
    name: 'キャベツのかに玉',
  },
  {
    category: Chuka,
    name: 'チャーハン',
  },
  {
    category: Chuka,
    name: '野菜たっぷりラーメン',
  },
];

// 洋食
export const YoshokuMenus: Food[] = [
  {
    category: Yoshoku,
    name: 'ピザ',
  },
  {
    category: Yoshoku,
    name: 'ハンバーグ',
  },
  {
    category: Yoshoku,
    name: 'ハンバーガー',
  },
  {
    category: Yoshoku,
    name: 'カルボナーラパスタ',
  },
  {
    category: Yoshoku,
    name: 'ミートパスタ',
  },
  {
    category: Yoshoku,
    name: 'カレーパイ',
  },
  {
    category: Yoshoku,
    name: '野菜オムレツ',
  },
  {
    category: Yoshoku,
    name: 'オムライス',
  },
];

// 汁物
export const SoupMenus: Food[] = [
  {
    category: Soup,
    name: 'お味噌汁',
  },
  {
    category: Soup,
    name: '豚汁',
  },
  {
    category: Soup,
    name: '中華スープ',
  },
  {
    category: Soup,
    name: 'コーンスープ',
  },
  {
    category: Soup,
    name: 'コンソメスープ',
  },
];

// サラダ
export const SaladMenus: Food[] = [
  {
    category: Salad,
    name: 'ＡＬＤＩサラダ',
  },
  {
    category: Salad,
    name: 'しゃぶしゃぶサラダ',
  },
  {
    category: Salad,
    name: 'ポテトサラダ',
  },
  {
    category: Salad,
    name: 'シーザーサラダ',
  },
  {
    category: Salad,
    name: 'ハニーマスタードサラダ',
  },
];

export const Menus = {
  WashokuMenus,
  HukusaiMenus,
  KankokuMenus,
  ChukaMenus,
  YoshokuMenus,
  SoupMenus,
  SaladMenus,
};

export default Menus;
