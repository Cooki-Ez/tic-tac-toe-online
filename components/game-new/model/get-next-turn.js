import {TURN_ORDER} from "../constants";

export function getNextTurn({currentTurn, playersCount}) {
  const slicedTurnOrder =
    TURN_ORDER.slice(0, playersCount);
  const nextTurnIndex = slicedTurnOrder.indexOf(currentTurn) + 1;
  return slicedTurnOrder[nextTurnIndex] ?? slicedTurnOrder[0];
}
