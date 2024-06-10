import {UiModel} from "../../uikit/ui-model";
import {UiButton} from "../../uikit/ui-button";

export function GameOverModel({winnerName, players}) {
  return (
    <UiModel
      width="md"
      isOpen={winnerName}
      onClose={() => console.log("Closed")}
    >
      <UiModel.Header>Game over!</UiModel.Header>

      <UiModel.Body>
        <div className="text-sm">
          Winner: <span className="text-teal-600">{winnerName}</span>
        </div>
      </UiModel.Body>

      <div className="justify-between grid grid-cols-2 gap-3 mt-2">
        {players}
      </div>

      <UiModel.Footer>
        <UiButton size="md" variant="outline">
          Go back
        </UiButton>

        <UiButton size="md" variant="primary">
          Play again
        </UiButton>
      </UiModel.Footer>
    </UiModel>
  );
}


