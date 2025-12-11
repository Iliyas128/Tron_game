import { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import leaderTopRobot from "@/assets/leader/leaderTopRobot.svg";
import leaderTopBackground from "@/assets/leader/leadersTopBackground.svg";
import leaderRewardFull from "@/assets/leader/leaderRewardFull1.png";
import leaderTopBackgroundReverse from "@/assets/leader/leadersTopBackgroundReverse.svg";
import leaderUserLogo from "@/assets/mainUserLogo.svg";
import leaderScoreFire from "@/assets/leader/leaderScoreFire.svg";
import redFrame517 from "@/assets/leader/redFrame538.svg";
import firstPlaceLogo from "@/assets/firstPlaceLogo.svg";
import secondPlaceLogo from "@/assets/secondPlaceLogo.svg";
import thirdPlaceLogo from "@/assets/thirdPlaceLogo.svg";

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
      className="h-[60px] rounded-2xl border border-white/10 bg-[#0e0e0e] px-3 py-2 flex items-center justify-between"
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="relative">
          <img src={leaderUserLogo} alt={item.title} className="w-12 h-12 rounded-xl" />
          <div className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-yellow-400 text-black text-xs font-semibold flex items-center justify-center">
            {item.badge}
          </div>
        </div>
        <div className="flex flex-col leading-tight overflow-hidden">
          <div className="text-[14px] font-semibold truncate font-montserrat">{item.title}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <div className="text-[14px] font-semibold">{item.score}</div>
        <img src={leaderScoreFire} alt="score fire" className="w-4 h-4" />
      </div>
    </div>
  );

  return (
    <MobileLayout>
      <div className="min-h-[100svh] bg-[#0c0709] text-white pb-10 font-montserrat">
        {/* Hero section */}
        <div
          className="relative w-full min-h-[60vh] max-h-[540px] bg-cover bg-center flex flex-col justify-end overflow-visible"
          style={{ backgroundImage: `url(${leaderTopBackground})` }}
        >
          <img
            src={leaderTopRobot}
            alt="leader robot"
            className="absolute -top-[4vh] left-1/2 -translate-x-1/2 h-[44vh] max-h-[360px] min-h-[260px] object-contain pointer-events-none"
          />
          {/* Reward banner */}
        <div
          className="w-full px-4 pb-14"
          style={{ marginTop: "clamp(-48px, -6vh, -28px)" }}
        >
          <div className="relative w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)]">
            <img
              src={leaderRewardFull}
              alt="leader rewards"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="pl-6 pt-7 max-w-[62%] text-white space-y-2">
                <h3 className="font-semibold leading-[1.1] font-montserrat text-[clamp(14px,3.8vw,16px)]">
                  Награды за декабрь
                </h3>
                <p className="text-white/70 font-montserrat leading-snug text-[clamp(11px,3.2vw,13px)]">
                  Сражайся в PVP-сражениях,<br/>побеждай и получай награды.
                </p>
                <button
                  className="mt-3 inline-flex items-center justify-center h-[34px] px-5 rounded-xl bg-[#b10000] font-montserrat text-white font-semibold shadow-[0_12px_36px_-12px_rgba(177,0,0,0.8)] text-[clamp(10px,2.8vw,12px)]"
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
        <div
          className="relative w-full min-h-[58vh] max-h-[540px] bg-cover bg-center flex flex-col overflow-visible pb-12 pt-6"
          style={{ backgroundImage: `url(${leaderTopBackgroundReverse})` }}
        >
        <div
          className="px-4 space-y-3"
          style={{ marginTop: "clamp(-36px, -4vh, -16px)" }}
        >
          <h2 className="font-semibold text-sm font-montserrat">Моё место</h2>
          {clanPlaces.map(renderCard)}
        </div>

        {/* Tabs and list */}
        <div className="px-4 mt-10">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-sm">
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
              <div className="relative px-5 pt-9 pb-5 space-y-4">
                <h3 className="text-[24px] font-jura font-bold ml-2 text-white">Список наград</h3>
                <div className="space-y-3 font-montserrat">
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
                      <div className="flex-1 text-right font-montserrat text-[12px] text-gray-400">
                        Нажми «Подписаться» <br /> внизу экрана.
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