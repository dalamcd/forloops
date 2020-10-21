import { createPlan } from "./plan.js";
import { doFancyBackgroundCode, doFancyBackgroundSetup } from "./background.js";

const sampleArray = createPlan(3, 6);

doFancyBackgroundSetup(sampleArray);

let currentRow = 0;
let currentColumn = 0;

debugger
for(const row of sampleArray) {
    for(const column of row) {
        if(doFancyBackgroundCode(currentRow, currentColumn, row, sampleArray)) {
            currentColumn = 0;
            break;
        }
    currentColumn++;
    }
currentRow++;
}
