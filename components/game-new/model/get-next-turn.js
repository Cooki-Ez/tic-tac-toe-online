import {TURN_ORDER} from "../constants";

export function getNextTurn({currentTurn, playersCount, timers}) {
  const slicedTurnOrder =
    TURN_ORDER.slice(0, playersCount)
      .filter((symbol) => timers[symbol] > 0);
  const nextTurnIndex = slicedTurnOrder.indexOf(currentTurn) + 1;
  return slicedTurnOrder[nextTurnIndex] ?? slicedTurnOrder[0];
}
