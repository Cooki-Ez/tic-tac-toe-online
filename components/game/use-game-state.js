import {GAME_SYMBOLS, TURN_ORDER} from "./constants";
import {useState} from "react";

function getNextTurn(currentTurn, playersCount) {

  const slicedTurnOrder = TURN_ORDER.slice(0, playersCount);

  const nextTurnIndex = slicedTurnOrder.indexOf(currentTurn) + 1;
  return slicedTurnOrder[nextTurnIndex] ?? slicedTurnOrder[0];
}

export function useGameState(playersCount) {
  const [{cells, currentTurn}, setGameState] = useState(() => (
    {
      cells: new Array(19 * 19).fill(null),
      currentTurn: GAME_SYMBOLS.CROSS
    }
  ));
  const nextTurn = getNextTurn(currentTurn, playersCount);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index])
        return lastGameState;

      return {
        ...lastGameState,
        currentTurn: getNextTurn(lastGameState.currentTurn, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentTurn : cell
        ),
      }
    })
  }

  return {
    cells,
    currentTurn,
    nextTurn,
    handleCellClick
  };
}
