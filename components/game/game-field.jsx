import clsx from "clsx";
import {UiButton} from "../uikit/ui-button";
import {GameSymbol} from "./game-symbol";


export function GameField({
                            className,
                            cells,
                            currentTurn,
                            nextTurn,
                            handleCellClick,
                            winnerSequence,
                            winnerSymbol,
                          }) {

  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Tie
      </UiButton>
      <UiButton size="md" variant="outline">
        Forfeit
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo actions={actions} currentTurn={currentTurn} nextTurn={nextTurn}/>
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell key={index}
                    disabled={!!winnerSymbol}
                    isWinner={winnerSequence?.includes(index)}
                    onClick={() => {
                      handleCellClick(index);
                    }}>
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5"/>}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({children, onClick, isWinner, disabled}) {
  return (
    <button disabled={disabled}
            onClick={onClick}
            className={clsx(
              "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
              isWinner && "bg-orange-600/10"
            )}
    >
      {children}
    </button>
  );
}


function GameFieldLayout({children, className}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >{children}</div>
  );
}

function GameMoveInfo({actions, currentTurn, nextTurn}) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
          Turn: <GameSymbol symbol={currentTurn} className="w-5 h-5"/>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          Next: <GameSymbol symbol={nextTurn} className="w-3 h-3"/>
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({children}) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
}
