import {Header} from "../components/header";
import {GameField, GameInfo, GameTitle, useGameState} from "../components/game";
import {useState} from "react";
import {GameSymbol} from "../components/game/game-symbol";
import {UiModel} from "../components/game/uikit/ui-model";
import {UiButton} from "../components/game/uikit/ui-button";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentTurn,
    nextTurn,
    handleCellClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header/>
      <main className="pt-6 mx-auto max-w-max">
        <GameTitle playersCount={playersCount}/>
        <GameInfo playersCount={playersCount}
                  currentTurn={currentTurn}
                  isWinner={!!winnerSymbol}
                  onPlayerTimeOver={handlePlayerTimeOver}
                  className="mt-4"
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol}/>
          </div>
        )}
        <UiModel isOpen={!!winnerSymbol} onClose={() => console.log("Closed")}>
          <UiModel.Header>Game over!</UiModel.Header>

          <UiModel.Body>
            <div className="text-sm">
              Winner: <span className="text-teal-600">RUINER1337</span>
            </div>
          </UiModel.Body>

          <UiModel.Footer>
            <UiButton size="md" variant="outline">
              Go back
            </UiButton>

            <UiButton size="md" variant="primary">
              Play again
            </UiButton>
          </UiModel.Footer>
        </UiModel>

        <GameField playersCount={playersCount}
                   cells={cells}
                   currentTurn={currentTurn}
                   nextTurn={nextTurn}
                   handleCellClick={handleCellClick}
                   winnerSequence={winnerSequence}
                   winnerSymbol={winnerSymbol}
                   className="mt-6"
        />
      </main>
    </div>
  );
}
