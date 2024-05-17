import { useGameState } from './use-game-state';
import { GameInfo } from './game-info';
import { GameCell } from './game-cell';
import { ResetButton } from "./reset-button";

export function Game() {
  const {cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
    isTie} = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 border-black border p-2">
      <GameInfo
        isTie={isTie}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {
          cells.map((symbol, index) =>
            <GameCell
              isWinner={winnerSequence?.includes(index)}
              onClick={() => handleCellClick(index)}
              symbol={symbol}
            />
          )
        }
      </div>
      <ResetButton onClick={handleResetClick}/>
    </div>
  );
}
