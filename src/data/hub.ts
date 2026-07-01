export type Mode = 'discovery' | 'impact';

export interface District {
  id: number;
  name: string;
  emoji: string;
  culture: string;
  color: string;
  glow: string;
  locked: boolean;
}

export const discoveryDistricts: District[] = [
  { id: 1, name: 'Остров Самоцветов', emoji: '💎', culture: 'Бразилия', color: 'from-emerald-400 to-teal-500', glow: '52 100% 55%', locked: false },
  { id: 2, name: 'Неон-Хохлома', emoji: '🪆', culture: 'Россия', color: 'from-rose-400 to-pink-500', glow: '340 90% 60%', locked: false },
  { id: 3, name: 'Мандала-Процессор', emoji: '🕉️', culture: 'Индия', color: 'from-orange-400 to-amber-500', glow: '32 95% 58%', locked: false },
  { id: 4, name: 'Техно-Бамбук', emoji: '🎋', culture: 'Китай', color: 'from-lime-400 to-green-500', glow: '90 80% 55%', locked: true },
  { id: 5, name: 'Афро-Футуризм', emoji: '🦁', culture: 'ЮАР', color: 'from-yellow-400 to-orange-500', glow: '45 95% 55%', locked: true },
  { id: 6, name: 'Лотосовый Сад', emoji: '🪷', culture: 'Синтез', color: 'from-fuchsia-400 to-purple-500', glow: '300 85% 65%', locked: true },
  { id: 7, name: 'Кристальное Ядро', emoji: '🔮', culture: 'БРИКС+', color: 'from-violet-400 to-indigo-500', glow: '270 90% 65%', locked: true },
];

export const impactSectors: District[] = [
  { id: 1, name: 'Сектор Знаний', emoji: '🧠', culture: 'Образование', color: 'from-cyan-400 to-blue-500', glow: '200 90% 60%', locked: false },
  { id: 2, name: 'Сектор Влияния', emoji: '📡', culture: 'Медиа', color: 'from-pink-400 to-rose-500', glow: '340 90% 60%', locked: false },
  { id: 3, name: 'Сектор Капитала', emoji: '⚡', culture: 'Финтех', color: 'from-amber-400 to-orange-500', glow: '38 95% 58%', locked: false },
  { id: 4, name: 'Сектор Сообществ', emoji: '🌐', culture: 'Социум', color: 'from-emerald-400 to-green-500', glow: '150 80% 55%', locked: false },
  { id: 5, name: 'Сектор Инноваций', emoji: '🚀', culture: 'Технологии', color: 'from-violet-400 to-purple-500', glow: '270 90% 65%', locked: true },
  { id: 6, name: 'Сектор Менторства', emoji: '🛰️', culture: 'Наставники', color: 'from-fuchsia-400 to-pink-500', glow: '320 90% 65%', locked: true },
  { id: 7, name: 'Орбитальное Ядро', emoji: '✦', culture: 'Лидерство', color: 'from-indigo-400 to-blue-600', glow: '230 90% 65%', locked: true },
];

export interface WorldEvent {
  id: number;
  type: string;
  dot: string;
  title: string;
  reward: string;
  timer: string;
}

export const worldEvents: WorldEvent[] = [
  { id: 1, type: 'Конкурс', dot: 'bg-orange-400', title: 'Битва Талантов БРИКС', reward: '+250 💎', timer: '02:14:33' },
  { id: 2, type: 'Вебинар', dot: 'bg-purple-400', title: 'AI в культуре будущего', reward: '+80 ⚡', timer: '05:40:12' },
  { id: 3, type: 'Соцпроект', dot: 'bg-pink-400', title: 'Чистый океан 2026', reward: '+1.2k 🌐', timer: '1 день' },
  { id: 4, type: 'Аукцион', dot: 'bg-yellow-400', title: 'Редкий аватар «Дракон»', reward: 'NFT', timer: '00:48:09' },
];

export interface Quest {
  id: number;
  title: string;
  desc: string;
  icon: string;
  reward: string;
  progress: number;
  difficulty: string;
}

export const districtQuests: Quest[] = [
  { id: 1, title: 'Первое открытие', desc: 'Изучи историю района и его культурный код', icon: 'BookOpen', reward: '+120 💎', progress: 100, difficulty: 'Лёгкий' },
  { id: 2, title: 'Творческий вызов', desc: 'Создай работу в стиле этой культуры', icon: 'Palette', reward: '+250 💎', progress: 45, difficulty: 'Средний' },
  { id: 3, title: 'Командная миссия', desc: 'Объединись с 3 исследователями района', icon: 'Users', reward: '+80 ⚡', progress: 0, difficulty: 'Средний' },
  { id: 4, title: 'Мастер района', desc: 'Заверши все квесты и получи титул', icon: 'Crown', reward: '🏆 Титул', progress: 0, difficulty: 'Сложный' },
];

export type DirectionId = 'creativity' | 'science' | 'sport' | 'leadership';

export interface DirectionTrack {
  id: string;
  title: string;
  subtitle: string;
  week: number;
  total: number;
  done: boolean;
}

export interface DirectionAchievement {
  icon: string;
  label: string;
  earned: boolean;
}

export interface Direction {
  id: DirectionId;
  emoji: string;
  name: string;
  tagline: string;
  accent: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  heroBg: string;
  stat1Label: string;
  stat1Value: string;
  stat2Label: string;
  stat2Value: string;
  stat3Label: string;
  stat3Value: string;
  tracks: DirectionTrack[];
  quests: Quest[];
  achievements: DirectionAchievement[];
}

export const directions: Record<DirectionId, Direction> = {
  creativity: {
    id: 'creativity',
    emoji: '🎨',
    name: 'Творчество',
    tagline: 'Создавай. Выражай. Вдохновляй.',
    accent: 'hsl(340 80% 56%)',
    accentBg: 'bg-rose-50',
    accentText: 'text-rose-600',
    accentBorder: 'border-rose-200',
    heroBg: 'from-rose-50 via-pink-50 to-fuchsia-50',
    stat1Label: 'Работ создано',
    stat1Value: '12',
    stat2Label: 'Рейтинг',
    stat2Value: '#48',
    stat3Label: 'Кристаллы',
    stat3Value: '840 💎',
    tracks: [
      { id: 'c1', title: 'Основы визуального языка', subtitle: 'Цвет, форма, ритм в цифровом арте', week: 1, total: 6, done: true },
      { id: 'c2', title: 'Сторителлинг через образы', subtitle: 'Создай серию из 3 работ с единым нарративом', week: 2, total: 8, done: true },
      { id: 'c3', title: 'Культурный код БРИКС+', subtitle: 'Интерпретируй традиционный орнамент современно', week: 3, total: 10, done: false },
      { id: 'c4', title: 'Коллаборация с музыкантом', subtitle: 'Создай визуальный ряд к треку участника', week: 4, total: 10, done: false },
    ],
    quests: [
      { id: 1, title: 'Цветовой этюд', desc: 'Создай 5 работ в ограниченной палитре — только 3 цвета', icon: 'Palette', reward: '+90 💎', progress: 100, difficulty: 'Лёгкий' },
      { id: 2, title: 'Культурная интерпретация', desc: 'Переосмысли традиционный орнамент одной из стран БРИКС+', icon: 'Brush', reward: '+200 💎', progress: 60, difficulty: 'Средний' },
      { id: 3, title: 'Арт-резиденция', desc: 'Прими участие в онлайн-резиденции с 10 участниками', icon: 'Users', reward: '+120 ⚡', progress: 30, difficulty: 'Средний' },
      { id: 4, title: 'Галерея таланта', desc: 'Собери портфолио из 20 работ — получи персональную выставку', icon: 'ImagePlay', reward: '🏆 Выставка', progress: 12, difficulty: 'Сложный' },
    ],
    achievements: [
      { icon: '🎨', label: 'Первая работа', earned: true },
      { icon: '🌈', label: '5 стилей', earned: true },
      { icon: '🤝', label: 'Коллаборация', earned: false },
      { icon: '🏛️', label: 'Галерея', earned: false },
    ],
  },
  science: {
    id: 'science',
    emoji: '🔬',
    name: 'Наука',
    tagline: 'Исследуй. Доказывай. Открывай.',
    accent: 'hsl(210 80% 52%)',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-200',
    heroBg: 'from-blue-50 via-cyan-50 to-sky-50',
    stat1Label: 'Экспериментов',
    stat1Value: '7',
    stat2Label: 'Рейтинг',
    stat2Value: '#21',
    stat3Label: 'Энергия',
    stat3Value: '230 ⚡',
    tracks: [
      { id: 's1', title: 'Научный метод', subtitle: 'Гипотеза → эксперимент → анализ → вывод', week: 1, total: 5, done: true },
      { id: 's2', title: 'Данные и визуализация', subtitle: 'Превращай данные в понятные графики и инсайты', week: 2, total: 7, done: true },
      { id: 's3', title: 'AI-эксперименты', subtitle: 'Протестируй 3 ML-модели на реальных задачах', week: 3, total: 10, done: false },
      { id: 's4', title: 'Публикация результатов', subtitle: 'Оформи исследование и представь сообществу', week: 4, total: 12, done: false },
    ],
    quests: [
      { id: 1, title: 'Первый эксперимент', desc: 'Сформулируй гипотезу и проверь её за 72 часа', icon: 'FlaskConical', reward: '+80 💎', progress: 100, difficulty: 'Лёгкий' },
      { id: 2, title: 'Анализ данных', desc: 'Обработай датасет из 1000+ строк и найди паттерн', icon: 'BarChart2', reward: '+180 💎', progress: 75, difficulty: 'Средний' },
      { id: 3, title: 'Peer Review', desc: 'Проверь и оцени исследования 5 других участников', icon: 'ClipboardCheck', reward: '+60 ⚡', progress: 20, difficulty: 'Средний' },
      { id: 4, title: 'Научная публикация', desc: 'Опубликуй исследование, набравшее 50+ лайков', icon: 'BookMarked', reward: '🏆 Учёный', progress: 0, difficulty: 'Сложный' },
    ],
    achievements: [
      { icon: '🔬', label: 'Первый опыт', earned: true },
      { icon: '📊', label: 'Аналитик', earned: true },
      { icon: '🤓', label: 'Рецензент', earned: false },
      { icon: '📜', label: 'Публикация', earned: false },
    ],
  },
  sport: {
    id: 'sport',
    emoji: '⚽',
    name: 'Спорт',
    tagline: 'Двигайся. Побеждай. Расти.',
    accent: 'hsl(142 65% 44%)',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    accentBorder: 'border-emerald-200',
    heroBg: 'from-emerald-50 via-green-50 to-teal-50',
    stat1Label: 'Активных дней',
    stat1Value: '18',
    stat2Label: 'Рейтинг',
    stat2Value: '#7',
    stat3Label: 'Карма',
    stat3Value: '1.4k 🌐',
    tracks: [
      { id: 'sp1', title: 'Фундамент движения', subtitle: 'Базовые тренировки и разминка без инвентаря', week: 1, total: 7, done: true },
      { id: 'sp2', title: 'Выносливость и ритм', subtitle: '21-дневный челлендж: активность каждый день', week: 2, total: 21, done: true },
      { id: 'sp3', title: 'Командный вид спорта', subtitle: 'Организуй или вступи в онлайн-турнир', week: 3, total: 5, done: false },
      { id: 'sp4', title: 'Ментор-тренер', subtitle: 'Помоги 3 новичкам достичь первого результата', week: 4, total: 3, done: false },
    ],
    quests: [
      { id: 1, title: 'Старт!', desc: 'Выполни первую тренировку и запиши результат', icon: 'Play', reward: '+60 💎', progress: 100, difficulty: 'Лёгкий' },
      { id: 2, title: '7 дней подряд', desc: 'Не пропусти ни одной тренировки за неделю', icon: 'Flame', reward: '+150 💎', progress: 85, difficulty: 'Средний' },
      { id: 3, title: 'Спортивный вызов БРИКС', desc: 'Участвуй в онлайн-соревновании с командами других стран', icon: 'Trophy', reward: '+200 ⚡', progress: 0, difficulty: 'Средний' },
      { id: 4, title: 'Атлет года', desc: 'Набери 300 активных дней за сезон', icon: 'Medal', reward: '🏆 Атлет', progress: 6, difficulty: 'Сложный' },
    ],
    achievements: [
      { icon: '🏃', label: 'Первый шаг', earned: true },
      { icon: '🔥', label: '7 дней', earned: true },
      { icon: '🤝', label: 'Командный', earned: false },
      { icon: '🥇', label: 'Чемпион', earned: false },
    ],
  },
  leadership: {
    id: 'leadership',
    emoji: '👑',
    name: 'Лидерство',
    tagline: 'Веди. Вдохновляй. Меняй мир.',
    accent: 'hsl(38 90% 50%)',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-600',
    accentBorder: 'border-amber-200',
    heroBg: 'from-amber-50 via-yellow-50 to-orange-50',
    stat1Label: 'Проектов',
    stat1Value: '3',
    stat2Label: 'Рейтинг',
    stat2Value: '#14',
    stat3Label: 'Карма',
    stat3Value: '4.8k 🌐',
    tracks: [
      { id: 'l1', title: 'Основы лидерства', subtitle: 'Стили управления, EQ и коммуникация', week: 1, total: 6, done: true },
      { id: 'l2', title: 'Управление командой', subtitle: 'Собери команду из 5+ участников и запусти проект', week: 2, total: 8, done: false },
      { id: 'l3', title: 'Публичные выступления', subtitle: 'Проведи 3 выступления перед аудиторией 20+', week: 3, total: 3, done: false },
      { id: 'l4', title: 'Социальный проект', subtitle: 'Запусти инициативу с реальным влиянием на 100 человек', week: 4, total: 1, done: false },
    ],
    quests: [
      { id: 1, title: 'Манифест лидера', desc: 'Опиши свои ценности и опубликуй манифест для сообщества', icon: 'FileText', reward: '+100 💎', progress: 100, difficulty: 'Лёгкий' },
      { id: 2, title: 'Первая команда', desc: 'Соберь команду из 3+ участников и проведи kick-off', icon: 'Users', reward: '+220 💎', progress: 40, difficulty: 'Средний' },
      { id: 3, title: 'Открытый диалог', desc: 'Организуй AMA-сессию, ответь на 20+ вопросов', icon: 'MessageSquare', reward: '+90 ⚡', progress: 0, difficulty: 'Средний' },
      { id: 4, title: 'Лидер БРИКС+', desc: 'Твой проект охватил участников из 5+ стран', icon: 'Globe', reward: '🏆 Лидер', progress: 0, difficulty: 'Сложный' },
    ],
    achievements: [
      { icon: '📝', label: 'Манифест', earned: true },
      { icon: '🧭', label: 'Команда', earned: false },
      { icon: '🎙️', label: 'Спикер', earned: false },
      { icon: '🌍', label: 'Глобал', earned: false },
    ],
  },
};

export const currencies = [
  { id: 'crystals', emoji: '💎', label: 'Кристаллы', value: '2 480', color: 'text-fuchsia-300' },
  { id: 'energy', emoji: '⚡', label: 'Энергия', value: '74', color: 'text-amber-300' },
  { id: 'karma', emoji: '🌐', label: 'Карма', value: '15.2k', color: 'text-emerald-300' },
];