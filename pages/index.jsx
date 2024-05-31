import {Header} from "../components/header";
import {GameInfo, GameTitle, GameField, useGameState} from "../components/game";
import {useState} from "react";

export default function HomePage() {
  const [playersCount] = useState(2);
  const {cells, currentTurn, nextTurn, handleCellClick, winnerSequence} = useGameState(playersCount);


  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} currentTurn={currentTurn} className="mt-4" />
        <GameField playersCount={playersCount}
                   cells={cells}
                   currentTurn={currentTurn}
                   nextTurn={nextTurn}
                   handleCellClick={handleCellClick}
                   winnerSequence={winnerSequence}
                   className="mt-6"/>
      </main>
    </div>
  );
}
