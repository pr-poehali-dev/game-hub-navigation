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

export const currencies = [
  { id: 'crystals', emoji: '💎', label: 'Кристаллы', value: '2 480', color: 'text-fuchsia-300' },
  { id: 'energy', emoji: '⚡', label: 'Энергия', value: '74', color: 'text-amber-300' },
  { id: 'karma', emoji: '🌐', label: 'Карма', value: '15.2k', color: 'text-emerald-300' },
];