import clsx from "clsx";
import {Profile} from "../profile";
import {GameSymbol} from "./game-symbol";
import {GAME_SYMBOLS} from "./constants";
import {useState, useEffect} from "react";

import avatarSrc1 from "./images/avatar-1.jpg";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";

const players = [
  {
    id: 1,
    name: "RUINER333",
    rating: "1337",
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "AleshaEnchantress",
    rating: "228",
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "VanyaPubertat",
    rating: "322",
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "VOVAN",
    rating: "1230",
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
]

export function GameInfo({className, playersCount, currentTurn}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3"
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentTurn === player.symbol}
        />
      ))}

    </div>
  );
}


function PlayerInfo({playerInfo, isRight, isTimerRunning}) {
  const [seconds, setSeconds] = useState(60);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  const isEdge = seconds < 10;

  useEffect(() => {
    if(isTimerRunning){
      const interval = setInterval(() => {
        setSeconds(s => Math.max(s - 1, 0));
      }, 1000);
      return () =>{
        clearInterval(interval);
        setSeconds(60);
      }
    }
  }, [isTimerRunning]);

  const getTimerColor = () => {
    if(isTimerRunning)
      return isEdge ? 'text-orange-600' : 'text-slate-900';
    return "text-slate-300"
  }

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div
          className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol}/>
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}/>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
