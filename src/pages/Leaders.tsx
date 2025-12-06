import { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import leaderTopRobot from "@/assets/leader/leaderTopRobot.svg";
import leaderTopBackground from "@/assets/leader/leadersTopBackground.svg";
import leaderRewardFull from "@/assets/leader/leaderRewardFull.png";
import leaderTopBackgroundReverse from "@/assets/leader/leadersTopBackgroundReverse.svg";
import leaderUserLogo from "@/assets/leader/leaderUserLogo.svg";
import leaderScoreFire from "@/assets/leader/leaderScoreFire.svg";
import redFrame517 from "@/assets/leader/redFrame538.svg";
import firstPlaceLogo from "@/assets/firstPlaceLogo.png";
import secondPlaceLogo from "@/assets/secondPlaceLogo.png";
import thirdPlaceLogo from "@/assets/thirdPlaceLogo.png";

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
  const [showRewards, setShowRewards] = useState(false);

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
        <div className="-mt-10 w-full px-4 pb-10">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)]">
            <img
              src={leaderRewardFull}
              alt="leader rewards"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="pl-4 pr-2 py-4 max-w-[60%] text-white space-y-2">
                <h3 className="text-base font-semibold leading-tight">Награды за декабрь</h3>
                <p className="text-xs text-white/70">
                  Сражайся в PVP-сражениях,<br/>побеждай и получай награды.
                </p>
                <button
                  className="mt-3 inline-flex items-center justify-center h-8 px-5 rounded-2xl bg-[#b10000] text-white text-xs font-semibold shadow-[0_12px_36px_-12px_rgba(177,0,0,0.8)]"
                  onClick={() => setShowRewards(true)}
                >
                  Посмотреть награды
                </button>
              </div>
            </div>
          </div>
          
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

      {showRewards && (
        <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowRewards(false)}
          />
          <div className="relative w-full max-w-[430px] mx-auto px-2 sm:pb-0">
            <div
              className="relative w-full h-[538px] overflow-hidden rounded-[32px]"
              style={{
                backgroundImage: `url(${redFrame517})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <button
                className="absolute top-7 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white text-3xl leading-none"
                onClick={() => setShowRewards(false)}
              >
                ×
              </button>
              <div className="px-5 pt-8 space-y-4">
                <h3 className="text-2xl font-normal text-white">Список наград</h3>
                <div className="space-y-3">
                  {[
                    { label: "1", icon: firstPlaceLogo },
                    { label: "2", icon: secondPlaceLogo },
                    { label: "3", icon: thirdPlaceLogo },
                    { label: "4-10" },
                    { label: "10-50" },
                    { label: "50-100" },
                    { label: "100-500" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="w-full h-[50px] rounded-2xl bg-[#2b2b2b] flex items-center px-4 gap-3 text-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]"
                    >
                      <div className="flex items-center gap-2 w-24">
                        {item.icon ? (
                          <img src={item.icon} alt={item.label} className="w-6 h-6" />
                        ) : null}
                        <span className="text-base font-semibold">{item.label}</span>
                      </div>
                      <div className="flex-1 text-right text-sm text-gray-400">
                        Нажми «Подписаться» внизу экрана.
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MobileLayout>
  );
};

export default Leaders;