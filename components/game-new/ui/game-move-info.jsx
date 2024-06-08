import {GameSymbol} from "./game-symbol";

export function GameMoveInfo({actions, currentTurn, nextTurn}) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
        Turn: <GameSymbol symbol={currentTurn} className="w-5 h-5"/>
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-400">
        Next: <GameSymbol symbol={nextTurn} className="w-3 h-3"/>
      </div>
    </>
  );
}
