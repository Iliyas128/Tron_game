import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/layout/Header";
import tasksRobot from "@/assets/tasks/tasksRobot.svg";
import tasksClickLogo from "@/assets/tasks/tasksClickLogo.svg";
import tasksWatchLogo from "@/assets/tasks/tasksWatchLogo.svg";
import tasksDreamCoinLogo from "@/assets/tasks/tasksDreamCoinLogo.svg";
import diamondsIcon from "@/assets/diamonds.svg";
import starIcon from "@/assets/star.svg";

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
  const renderActionCounts = (task: TaskItem) => (
    <div className="flex items-center gap-3 text-sm text-white/80">
      {task.primaryCount && (
        <div className="flex items-center gap-1">
          <img src={diamondsIcon} alt="reward" className="w-4 h-4" />
          <span>{task.primaryCount}</span>
        </div>
      )}
      {task.secondaryCount && (
        <div className="flex items-center gap-1">
          <img src={starIcon} alt="star" className="w-4 h-4" />
          <span>{task.secondaryCount}</span>
        </div>
      )}
    </div>
  );

  const renderRewardCounts = (task: TaskItem) => (
    <div className="flex items-center gap-1 text-sm text-white/80">
      {task.primaryCount && <span className="text-base font-semibold">{task.primaryCount}</span>}
      <img src={diamondsIcon} alt="reward" className="w-4 h-4" />
    </div>
  );

  const buttonTone = (tone: TaskItem["actionTone"]) => {
    switch (tone) {
      case "secondary":
        return "bg-transparent border border-white/20 text-white";
      case "ghost":
        return "bg-[#2a2a2a] text-white/70";
      default:
        return "bg-[#c40000] text-white shadow-[0_10px_30px_-10px_rgba(196,0,0,0.8)]";
    }
  };

  return (
    <MobileLayout>
      <Header />

      <div
        className="px-4 pb-6 space-y-2 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 90px)" }}
      >
        {/* Hero */}
        <div className="relative h-[210px] w-full rounded-3xl overflow-hidden mb-6">
          <img
            src={tasksRobot}
            alt="tasks hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div/>
        </div>

        {/* List */}
        <div className="text-base font-medium">Ежедневные</div>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="h-[60px] rounded-2xl border border-white/10 bg-[#121212] px-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <img src={task.icon} alt={task.title} className="w-10 h-10 rounded-xl" />
                <div className="flex flex-col leading-tight overflow-hidden">
                  <div className="text-sm font-semibold truncate">{task.title}</div>
                  {task.type === "action" && renderActionCounts(task)}
                  {task.type === "reward" && renderRewardCounts(task)}
                </div>
              </div>

              <button
                className={`min-w-[110px] h-10 px-4 rounded-2xl text-sm font-semibold ${buttonTone(
                  task.actionTone
                )}`}
              >
                {task.actionLabel}
              </button>
            </div>
          ))}

          <div className="pt-2 pb-1 text-base font-medium">Спонсорские</div>

          {sponsorTasks.map((task) => (
            <div
              key={task.id}
              className="h-[60px] rounded-2xl border border-white/10 bg-[#121212] px-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <img src={task.icon} alt={task.title} className="w-10 h-10 rounded-xl" />
                <div className="flex flex-col leading-tight overflow-hidden">
                  <div className="text-sm font-semibold truncate">{task.title}</div>
                  {task.type === "reward" && renderRewardCounts(task)}
                </div>
              </div>

              <button
                className={`min-w-[110px] h-10 px-4 rounded-2xl text-sm font-semibold ${buttonTone(
                  task.actionTone
                )}`}
              >
                {task.actionLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Tasks;