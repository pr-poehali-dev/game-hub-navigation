import { useState } from 'react';
import { toast } from 'sonner';
import { Mode, District, discoveryDistricts, impactSectors } from '@/data/hub';
import TopBar from '@/components/hub/TopBar';
import CentralSphere from '@/components/hub/CentralSphere';
import EventsPanel from '@/components/hub/EventsPanel';
import TalentPanel from '@/components/hub/TalentPanel';
import MascotBar from '@/components/hub/MascotBar';
import Confetti from '@/components/hub/Confetti';

const Index = () => {
  const [mode, setMode] = useState<Mode>('discovery');
  const [level, setLevel] = useState(3);
  const [confetti, setConfetti] = useState(0);

  const districts = mode === 'discovery' ? discoveryDistricts : impactSectors;

  const handleReward = () => {
    setConfetti((c) => c + 1);
    setLevel((l) => l + 1);
    toast('🎉 Награда получена!', {
      description: 'Имя стало жирнее — уровень вырос!',
    });
  };

  const handleSelect = (d: District) => {
    toast(`${d.emoji} ${d.name}`, { description: `Залетаем в район «${d.culture}»...` });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0F1535] via-[#161B45] to-[#1A0F35]">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[120px]" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute h-0.5 w-0.5 animate-twinkle rounded-full bg-white"
            style={{ left: `${(i * 31) % 100}%`, top: `${(i * 17) % 100}%`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>

      <Confetti trigger={confetti} />

      <div className="relative z-10 flex min-h-screen flex-col">
        <TopBar mode={mode} setMode={setMode} level={level} />

        <main className="grid flex-1 grid-cols-1 gap-4 px-4 pb-4 md:px-6 lg:grid-cols-[280px_1fr_280px]">
          <div className="order-2 lg:order-1">
            <EventsPanel />
          </div>

          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <div className="flex-1">
              <CentralSphere mode={mode} districts={districts} onSelect={handleSelect} />
            </div>
            <MascotBar onReward={handleReward} />
          </div>

          <div className="order-3">
            <TalentPanel mode={mode} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
