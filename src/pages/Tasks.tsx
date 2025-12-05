import { useState } from "react";
import MobileLayout from "@/components/layout/MobileLayout";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { Check, Clock, Gift, ChevronRight, Star, Zap, Target, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Ежедневные", "Еженедельные", "Разовые", "Партнерские"];

const tasksData = [
  { 
    id: 1, 
    title: "Ежедневный бонус", 
    description: "Забрать ежедневный бонус", 
    reward: 100, 
    progress: 1, 
    total: 1, 
    completed: false,
    icon: Gift,
    category: 0
  },
  { 
    id: 2, 
    title: "Пополнить баланс", 
    description: "Пополнить баланс на любую сумму", 
    reward: 500, 
    progress: 0, 
    total: 1, 
    completed: false,
    icon: Zap,
    category: 0
  },
  { 
    id: 3, 
    title: "Сыграть 10 игр", 
    description: "Сыграйте 10 игр в любом режиме", 
    reward: 250, 
    progress: 7, 
    total: 10, 
    completed: false,
    icon: Target,
    category: 0
  },
  { 
    id: 4, 
    title: "Выигрыш подряд", 
    description: "Выиграйте 5 игр подряд", 
    reward: 1000, 
    progress: 3, 
    total: 5, 
    completed: false,
    icon: Trophy,
    category: 0
  },
  { 
    id: 5, 
    title: "Подписаться на канал", 
    description: "Подписаться на наш Telegram канал", 
    reward: 200, 
    progress: 1, 
    total: 1, 
    completed: true,
    icon: Star,
    category: 3
  },
];

const Tasks = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const filteredTasks = tasksData.filter(task => task.category === activeCategory);

  return (
    <MobileLayout>
      <Header />
      
      <div className="px-4 py-4">
        <h2 className="text-2xl font-bold mb-4">Задания</h2>
        
        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Progress Overview */}
        <div className="bg-card rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Прогресс заданий</span>
            <span className="text-sm font-medium">3/5</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: '60%' }} />
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "p-4 rounded-xl transition-all",
                task.completed ? "bg-card/50 opacity-60" : "bg-card"
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  task.completed ? "bg-primary/20" : "bg-secondary"
                )}>
                  <task.icon className={cn(
                    "w-5 h-5",
                    task.completed ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium truncate">{task.title}</h3>
                    <div className="flex items-center gap-1 text-primary">
                      <span className="text-sm font-bold">+{task.reward}</span>
                      <span className="text-xs">₽</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all" 
                        style={{ width: `${(task.progress / task.total) * 100}%` }} 
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {task.progress}/{task.total}
                    </span>
                  </div>
                </div>
                
                {task.completed ? (
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground mt-2" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Tasks;