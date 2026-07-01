import { useState } from 'react';
import { toast } from 'sonner';
import { Mode, District, DirectionId, discoveryDistricts, impactSectors } from '@/data/hub';
import TopBar from '@/components/hub/TopBar';
import CentralSphere from '@/components/hub/CentralSphere';
import EventsPanel from '@/components/hub/EventsPanel';
import TalentPanel from '@/components/hub/TalentPanel';
import MascotBar from '@/components/hub/MascotBar';
import Confetti from '@/components/hub/Confetti';
import DistrictView from '@/components/hub/DistrictView';
import DirectionView from '@/components/hub/DirectionView';

const Index = () => {
  const [mode, setMode] = useState<Mode>('discovery');
  const [level, setLevel] = useState(3);
  const [confetti, setConfetti] = useState(0);
  const [activeDistrict, setActiveDistrict] = useState<District | null>(null);
  const [activeDirection, setActiveDirection] = useState<DirectionId | null>(null);

  const districts = mode === 'discovery' ? discoveryDistricts : impactSectors;

  const handleReward = () => {
    setConfetti((c) => c + 1);
    setLevel((l) => l + 1);
    toast('🎉 Награда получена!', { description: 'Имя стало жирнее — уровень вырос!' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-primary/6 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/4 blur-[120px]" />
        {[...Array(24)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 animate-twinkle rounded-full bg-primary/25"
            style={{ left: `${(i * 31) % 100}%`, top: `${(i * 17) % 100}%`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>

      <Confetti trigger={confetti} />

      {/* Layer 3: Direction */}
      {activeDirection && (
        <DirectionView
          directionId={activeDirection}
          onBack={() => setActiveDirection(null)}
        />
      )}

      {/* Layer 2: District */}
      {activeDistrict && !activeDirection && (
        <DistrictView
          district={activeDistrict}
          onBack={() => setActiveDistrict(null)}
          onDirection={(id) => setActiveDirection(id)}
        />
      )}

      {/* Layer 1: Hub */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <TopBar mode={mode} setMode={setMode} level={level} />

        <main className="grid flex-1 grid-cols-1 gap-4 px-4 pb-4 md:px-6 lg:grid-cols-[280px_1fr_280px]">
          <div className="order-2 lg:order-1">
            <EventsPanel />
          </div>

          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <div className="flex-1">
              <CentralSphere mode={mode} districts={districts} onSelect={setActiveDistrict} />
            </div>
            <MascotBar onReward={handleReward} />
          </div>

          <div className="order-3">
            <TalentPanel mode={mode} onDirection={setActiveDirection} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
