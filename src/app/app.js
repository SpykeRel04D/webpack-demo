import { parseInputs } from "./utils/parse-inputs.js";
import { inputsAreValid } from "./utils/inputs-are-valid.js";

export const run = (alertService, componentService) => {
    alertService.hideErrors();

    componentService.onClick(() => {
        alertService.hideErrors();
        const inputs = componentService.getInputs();
        const parsedInputs = parseInputs(...inputs);
        if (inputsAreValid(...parsedInputs)) {
            const [numA, numB] = parsedInputs;
            componentService.setResult(numA + numB);
        } else {
            componentService.setResult("");
            alertService.handleAdditionError(inputs, parsedInputs);
        }
    });
};