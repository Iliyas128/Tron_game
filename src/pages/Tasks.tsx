import { useEffect, useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/layout/Header";
import tasksRobot from "@/assets/tasks/tasksRobot.webp";
import tasksClickLogo from "@/assets/tasks/tasksClickLogo.svg";
import tasksWatchLogo from "@/assets/tasks/tasksWatchLogo.svg";
import tasksDreamCoinLogo from "@/assets/tasks/tasksDreamCoinLogo.svg";
import diamondsIcon from "@/assets/diamonds.svg";
import starIcon from "@/assets/star.svg";
import { X } from "lucide-react";
import redFrame517 from "@/assets/redFrame517.svg";

type TaskType = "action" | "reward";

type TaskItem = {
  id: string;
  title: string;
  type: TaskType;
  icon: string;
  primaryCount?: string;
  secondaryCount?: string;
  actionLabel: string;
  actionTone?: "primary" | "secondary" | "ghost";
};

const tasks: TaskItem[] = [
  {
    id: "click",
    title: "Кликни на баннер",
    type: "action",
    icon: tasksClickLogo,
    primaryCount: "3",
    secondaryCount: "5/25",
    actionLabel: "Выполнить",
    actionTone: "primary",
  },
  {
    id: "watch",
    title: "Посмотри видео",
    type: "action",
    icon: tasksWatchLogo,
    primaryCount: "3",
    secondaryCount: "5/25",
    actionLabel: "Выполнить",
    actionTone: "primary",
  },
  {
    id: "dream-1",
    title: "Dreamcoin",
    type: "reward",
    icon: tasksDreamCoinLogo,
    primaryCount: "1",
    actionLabel: "Выполнить",
    actionTone: "secondary",
  },
  {
    id: "dream-2",
    title: "Dreamcoin",
    type: "reward",
    icon: tasksDreamCoinLogo,
    primaryCount: "5",
    actionLabel: "Получить",
    actionTone: "primary",
  },
  {
    id: "dream-3",
    title: "Dreamcoin",
    type: "reward",
    icon: tasksDreamCoinLogo,
    primaryCount: "5",
    actionLabel: "Проверка...",
    actionTone: "ghost",
  },
];

const sponsorTasks: TaskItem[] = [
  {
    id: "s-dream-1",
    title: "Dreamcoin",
    type: "reward",
    icon: tasksDreamCoinLogo,
    primaryCount: "1",
    actionLabel: "Выполнить",
    actionTone: "secondary",
  },
  {
    id: "s-dream-2",
    title: "Dreamcoin",
    type: "reward",
    icon: tasksDreamCoinLogo,
    primaryCount: "5",
    actionLabel: "Получить",
    actionTone: "primary",
  },
  {
    id: "s-dream-3",
    title: "Dreamcoin",
    type: "reward",
    icon: tasksDreamCoinLogo,
    primaryCount: "5",
    actionLabel: "На проверке...",
    actionTone: "ghost",
  },
  {
    id: "s-dream-4",
    title: "Dreamcoin",
    type: "reward",
    icon: tasksDreamCoinLogo,
    primaryCount: "1",
    actionLabel: "Выполнить",
    actionTone: "secondary",
  },
];

const Tasks = () => {
  const [modalTask, setModalTask] = useState<TaskItem | null>(null);

  useEffect(() => {
    if (modalTask) {
      document.body.classList.add("nav-hidden");
    } else {
      document.body.classList.remove("nav-hidden");
    }
    return () => document.body.classList.remove("nav-hidden");
  }, [modalTask]);

  const renderActionCounts = (task: TaskItem) => (
    <div className={`flex items-center gap-3 text-white/80 ${subTextClass}`}>
      {task.primaryCount && (
        <div className="flex items-center gap-1">
          <img src={diamondsIcon} alt="reward" className="w-4 h-4" />
          <span className={subTextClass}>{task.primaryCount}</span>
        </div>
      )}
      {task.secondaryCount && (
        <div className="flex items-center gap-1">
          <img src={starIcon} alt="star" className="w-4 h-4" />
          <span className={subTextClass}>{task.secondaryCount}</span>
        </div>
      )}
    </div>
  );

  const renderRewardCounts = (task: TaskItem) => (
    <div className={`flex items-center gap-1 text-white/80 ${subTextClass}`}>
      {task.primaryCount && (
        <span className={`${subTextClass} font-semibold text-white`}>{task.primaryCount}</span>
      )}
      <img src={diamondsIcon} alt="reward" className="w-4 h-4" />
    </div>
  );

  const buttonConfig = (tone: TaskItem["actionTone"]) => {
    switch (tone) {
      case "secondary":
        return { label: "Выполнить", className: "bg-[#0e0e0e] border border-white/20 flex items-center justify-center text-white", width: "w-[102px]" };
      case "ghost":
        return { label: "На проверке...", className: "bg-[#121212] text-white", width: "w-[122px]" };
      default:
        return { label: "Получить", className: "bg-[#c40000] text-white", width: "w-[102px]" };
    }
  };

  const titleClass = "font-montserrat text-[14px] leading-[1] font-semibold";
  const subTextClass = "font-montserrat text-[12px] leading-[1]";
  const buttonFontClass = "font-montserrat text-[12px] leading-[1] font-semibold";

  return (
    <MobileLayout>
      <Header />

      <div
        className="px-4 pb-6 space-y-2 overflow-y-auto font-montserrat"
        style={{ maxHeight: "calc(100vh - 90px)" }}
      >
        {/* Hero */}
        <div className="relative h-[200px] w-full rounded-3xl overflow-hidden mb-4">
          <img
            src={tasksRobot}
            alt="tasks hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start px-4 pb-4 gap-1">
            <h2 className="text-[30px] leading-[1] font-jura font-bold text-[#ffffff]">Задания</h2>
            <p className={`${subTextClass} text-[#919191]`}>
              Выполняйте миссии, получайте пазлы
              <br />
              и участвуйте в pvp-сражениях.
            </p>
          </div>
        </div>

        {/* List */}
        <div className="text-base pb-1 font-medium font-montserrat">Ежедневные</div>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="h-[60px] rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 flex items-center justify-between"
              onClick={() => setModalTask(task)}
            >
              <div className="flex items-center gap-3  overflow-hidden">
                <img src={task.icon} alt={task.title} className="w-10 h-10 rounded-xl" />
                <div className="flex flex-col leading-tight space-y-1.5 overflow-hidden">
                  <div className={`truncate ${titleClass}`}>{task.title}</div>
                  {task.type === "action" && (
                    <div className={`flex items-center gap-3 text-white/80 ${subTextClass}`}>
                      {task.primaryCount && (
                        <div className="flex items-center gap-1">
                          <img src={diamondsIcon} alt="reward" className="w-4 h-4" />
                          <span className={subTextClass}>{task.primaryCount}</span>
                        </div>
                      )}
                      {task.secondaryCount && (
                        <div className="flex items-center gap-1">
                          <img src={starIcon} alt="star" className="w-4 h-4" />
                          <span className={subTextClass}>{task.secondaryCount}</span>
                        </div>
                      )}
                    </div>
                  )}
                  {task.type === "reward" && (
                    <div className={`flex items-center gap-1 text-white/80 ${subTextClass}`}>
                      {task.primaryCount && (
                        <span className={`${subTextClass} font-semibold text-white`}>
                          {task.primaryCount}
                        </span>
                      )}
                      <img src={diamondsIcon} alt="reward" className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>

              {(() => {
                const { label, className, width } = buttonConfig(task.actionTone);
                return (
                  <button
                    className={`h-[36px] px-5 rounded-2xl whitespace-nowrap text-center ${buttonFontClass} ${className} ${width}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalTask(task);
                    }}
                  >
                    {label}
                  </button>
                );
              })()}
            </div>
          ))}

          <div className="pt-2 pb-1 text-base font-medium">Спонсорские</div>

          {sponsorTasks.map((task) => (
            <div
              key={task.id}
              className="h-[60px] rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 flex items-center justify-between"
              onClick={() => setModalTask(task)}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <img src={task.icon} alt={task.title} className="w-10 h-10 rounded-xl" />
                <div className="flex flex-col leading-tight overflow-hidden">
                  <div className={`truncate ${titleClass}`}>{task.title}</div>
                  {task.type === "reward" && (
                    <div className={`flex items-center gap-1 text-white/80 ${subTextClass}`}>
                      {task.primaryCount && (
                        <span className={`${subTextClass} font-semibold text-white`}>
                          {task.primaryCount}
                        </span>
                      )}
                      <img src={diamondsIcon} alt="reward" className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>

              {(() => {
                const { label, className, width } = buttonConfig(task.actionTone);
                return (
                  <button
                    className={`h-[36px] px-5 rounded-2xl whitespace-nowrap text-center ${buttonFontClass} ${className} ${width}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalTask(task);
                    }}
                  >
                    {label}
                  </button>
                );
              })()}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalTask && (
        <div className="fixed inset-0 z-30 flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalTask(null)}
          />
          <div className="relative w-full max-w-[420px] mx-auto px-2 sm:pb-0">
            <div
              className="relative w-full h-[517px] overflow-hidden flex flex-col items-center"
              style={{
                backgroundImage: `url(${redFrame517})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <button
                className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white"
                onClick={() => setModalTask(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center gap-4 mt-12 px-5 w-full">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)]">
                  <img src={modalTask.icon} alt={modalTask.title} className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-semibold text-white text-center">{modalTask.title}</h2>

                <div className="w-full space-y-2">
                  {[
                    "Нажми «Подписаться» внизу экрана.",
                    "Подпишись на канал",
                    "Вернись сюда, нажми на кнопку “Проверить задание”",
                    "Получи свою награду",
                  ].map((step, idx) => (
                    <div
                      key={step}
                      className="w-full rounded-xl bg-white/10 text-white/90 text-sm px-4 py-3 flex items-start gap-2"
                    >
                      <span className="text-white/60">{idx + 1}</span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="flex w-full gap-3 pt-2">
                  <button className="flex-[1] h-9 rounded-2xl bg-[#b10000] text-white text-xs font-normal shadow-[0_12px_36px_-12px_rgba(177,0,0,0.8)]">
                    Подписаться
                  </button>
                  <button className="flex-[1.5] h-9 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-normal">
                    Проверить задание
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MobileLayout>
  );
};

export default Tasks;