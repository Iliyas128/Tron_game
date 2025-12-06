import { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import leaderTopRobot from "@/assets/leader/leaderTopRobot.svg";
import leaderTopBackground from "@/assets/leader/leadersTopBackground.svg";
import leaderRewardFull from "@/assets/leader/leaderRewardFull.svg";
import leaderTopBackgroundReverse from "@/assets/leader/leadersTopBackgroundReverse.svg";
import leaderUserLogo from "@/assets/leader/leaderUserLogo.svg";
import leaderScoreFire from "@/assets/leader/leaderScoreFire.svg";

const tabs = ["Участники", "Кланы"];

const clanPlaces = [
  {
    id: 1,
    title: "Cyber Warriors",
    subtitle: "Элитный клан для опытных игроков",
    score: 775,
    badge: "1",
  },
];

const clanList = [
  {
    id: 1,
    title: "Cyber Warriors",
    subtitle: "Короткое описание клана...",
    score: 775,
    badge: "2",
  },
];

const participantsList = [
  {
    id: 1,
    title: "Cyber Warriors",
    subtitle: "Элитный клан для опытных игроков",
    score: 775,
    badge: "1",
  },
  {
    id: 2,
    title: "Cyber Warriors",
    subtitle: "Короткое описание клана...",
    score: 775,
    badge: "2",
  },
];

const Leaders = () => {
  const [activeTab, setActiveTab] = useState("Кланы");
  const [activePeriod, setActivePeriod] = useState<"Месяц" | "Всё время">("Месяц");

  const renderCard = (item: { id: number; title: string; subtitle: string; score: number; badge: string }) => (
    <div
      key={item.id}
      className="h-[60px] rounded-2xl border border-white/10 bg-white/5 px-3 py-2 flex items-center justify-between"
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="relative">
          <img src={leaderUserLogo} alt={item.title} className="w-12 h-12 rounded-xl" />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-yellow-400 text-black text-xs font-semibold flex items-center justify-center">
            {item.badge}
          </div>
        </div>
        <div className="flex flex-col leading-tight overflow-hidden">
          <div className="text-lg font-semibold truncate">{item.title}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <div className="text-xl font-semibold">{item.score}</div>
        <img src={leaderScoreFire} alt="score fire" className="w-4 h-4" />
      </div>
    </div>
  );

  return (
    <MobileLayout>
      <div className="min-h-screen bg-[#0c0709] text-white pb-10">
        {/* Hero section */}
        <div className="relative w-full h-[520px] bg-cover bg-center flex flex-col justify-end overflow-visible"
        style={{ backgroundImage: `url(${leaderTopBackground})` }}
        >
          <img
            src={leaderTopRobot}
            alt="leader robot"
            className="absolute -top-6 left-1/2 -translate-x-1/2 h-[360px] object-contain pointer-events-none"
          />
          {/* Reward banner */}
        <div className="-mt-10 w-full px-4 pb-16">
          <img
            src={leaderRewardFull}
            alt="leader rewards"
            className="w-full rounded-3xl shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)]"
          />
        </div>
        </div>

        {/* Clan place */}
        <div className="relative w-full h-[520px] bg-cover bg-center flex flex-col overflow-visible"
        style={{ backgroundImage: `url(${leaderTopBackgroundReverse})` }}
        >
        <div className="px-4 -mt-9 space-y-3">
          <h2 className="text-base font-normal">Моё место</h2>
          {clanPlaces.map(renderCard)}
        </div>

        {/* Tabs and list */}
        <div className="px-4 mt-10">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-base">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={` transition-colors ${
                    activeTab === tab ? "text-white border-b-2 border-white" : "text-white/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex gap-4 text-xs">
              {["Месяц", "Всё время"].map((period) => (
                <button
                  key={period}
                  onClick={() => setActivePeriod(period as "Месяц" | "Всё время")}
                  className={`transition-colors ${
                    activePeriod === period ? "text-white" : "text-white/40"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "Кланы" && (
            <div className="mt-5 space-y-3">
              {clanList.map(renderCard)}
            </div>
          )}

          {activeTab === "Участники" && (
            <div className="mt-5 space-y-3">{participantsList.map(renderCard)}</div>
          )}
        </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Leaders;