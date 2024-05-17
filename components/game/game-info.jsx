import { GameSymbol } from "./game-symbol";

export function GameInfo({isTie, winnerSymbol, currentStep}) {
  if (isTie) {
    return (
      <div className="mt-2.5">
        Tie
      </div>
    )
  }

  if (winnerSymbol) {
    return (
      <div className="mt-2.5">
        Winner: <GameSymbol symbol={winnerSymbol}/>
      </div>
    );
  }

  return (
    <div className="mt-2.5">
      Turn: <GameSymbol symbol={currentStep}/>
    </div>
  );
}
