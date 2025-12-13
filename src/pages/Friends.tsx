import MobileLayout from "@/components/layout/MobileLayout";
import friendsRobot from "@/assets/friends/friendsRobot.png";
import friendsWhiteGold from "@/assets/friends/friendsWhiteGold.svg";
import goldsIcon from "@/assets/golds.svg";
import mainUserLogo from "@/assets/mainUserLogo.svg";
import friendsCopyLogo from "@/assets/friends/friendsCopyLogo.svg";
import whiteGold from "@/assets/friends/friendsWhiteGold.svg"

const receivedAmount = 0.78;
const availableAmount = 0.0009;

const friendsList = [
  { id: 1, name: "Name Surname", amount: 0.23 },
  { id: 2, name: "Name Surname", amount: 0.0013 },
  { id: 3, name: "Name Surname", amount: 0.00072 },
  { id: 4, name: "Name Surname", amount: 0.14 },
  { id: 5, name: "Name Surname", amount: 0.0031 },
  { id: 6, name: "Name Surname", amount: 0.00052 },
  { id: 7, name: "Name Surname", amount: 0.29 },
  { id: 8, name: "Name Surname", amount: 0.071 },
  { id: 9, name: "Name Surname", amount: 0.0022 },
  { id: 10, name: "Name Surname", amount: 0.00081 },
  { id: 11, name: "Name Surname", amount: 0.44 },
  { id: 12, name: "Name Surname", amount: 0.00012 },
];

const friendsBackground = "/friends/friendsBackground.svg";

const Friends = () => {
  return (
    <MobileLayout>
      <div
        className="pb-40 overflow-y-auto"
        style={{
          maxHeight: "100vh",
          backgroundImage: `url(${friendsBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        {/* Hero */}
        <div className="relative h-[320px] w-full overflow-hidden">
          <img
            src={friendsRobot}
            alt="friends"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
          <div className="absolute flex items-center flex-col inset-x-0 bottom-1 text-center">
            <h1 className="text-3xl font-bold leading-tight font-jura">Мои друзья</h1>
            <p className="text-xs font-montserrat text-white/50 leading-snug max-w-xl">
              Приглашай друзей и получай 10% <br/> от их доходов в валюте TON
            </p>
          </div>
        </div>

        <div className="px-4 space-y-4 mt-2">
          {/* Wallet */}
          <div className="flex gap-3">
            <div className="h-12 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 text-sm">
                <img src={goldsIcon} alt="gold" className="w-3 h-3" />
                <span className="text-[12px] font-semibold">{receivedAmount}</span>
              </div>
              <span className="text-[12px] font-montserrat text-white/90">Получено</span>
            </div>
            <div className="h-12 flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 text-sm">
                <img src={goldsIcon} alt="gold" className="w-3 h-3" />
                <span className="text-[12px] font-semibold">
                  {availableAmount > 0 ? availableAmount : 0}
                </span>
              </div>
              <span className="text-[12px] font-montserrat text-white/90">Доступно</span>
            </div>
          </div>

          {/* Collect */}
          {availableAmount > 0 && (
            <button className="w-full h-14 rounded-2xl bg-[#AF0000] text-white text-lg font-semibold flex items-center justify-center gap-3">
              <img src={goldsIcon} alt="gold" className="w-5 h-5" />
              <span className="flex gap-2 items-center">
                <p className="text-base font-montserrat">Собрать</p>
                <img src={whiteGold} alt="white gold" className=""/>
                <span className="text-base">
                {availableAmount}
                </span>
                </span>
            </button>
          )}

          {/* Friends list header */}
          <div className="flex items-center gap-2">
            <div className="text-base font-semibold font-montserrat">Список друзей</div>
            <div className="text-sm font-montserrat text-white/80">{friendsList.length}</div>
          </div>

          {/* Friends list */}
          <div className="space-y-2">
            {friendsList.map((friend) => (
              <div
                key={friend.id}
                className="h-[55px] rounded-2xl border border-white/10 bg-[#121212] px-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <img
                    src={mainUserLogo}
                    alt={friend.name}
                    className="w-11 h-11 rounded-xl"
                  />
                  <div className="text-base font-montserrat truncate">{friend.name}</div>
                </div>
                <div className="flex items-center gap-1 text-sm font-light">
                  <img src={goldsIcon} alt="gold" className="w-4 h-4" />
                  <span>{friend.amount}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom action bar above navigation */}
      <div className="fixed bottom-[104px] left-0 right-0 z-20">
        <div className="h-[58px] bg-[#0A0A0A] flex items-center gap-3 px-3 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.7)]">
          <button className="flex-1 h-12 rounded-2xl bg-[#AF0000] text-white text-lg font-semibold flex items-center justify-center">
            Пригласить друга
          </button>
          <button className="w-14 h-14 rounded-2xl flex items-center justify-center">
            <img src={friendsCopyLogo} alt="copy" className="w-14 h-14" />
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Friends;