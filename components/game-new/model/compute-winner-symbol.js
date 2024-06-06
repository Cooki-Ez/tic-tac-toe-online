export function ComputeWinnerSymbol(gameState, {winnerSequence, nextTurn}) {
  return nextTurn === gameState.currentTurn
    ? gameState.currentTurn
    : gameState.cells[winnerSequence?.[0]];
}
