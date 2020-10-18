import { createPlan } from "./plan.js";
import { doFancyBackgroundCode, doFancyBackgroundSetup } from "./background.js";

const sampleArray = createPlan(3, 6);

doFancyBackgroundSetup(sampleArray);

let i = 0;
let j = 0;

debugger
for(const row of sampleArray) {
    for(const column of row) {
        if(doFancyBackgroundCode(i, j, row, sampleArray)) {
            j = 0;
            break;
        }
    j++;
    }
i++;
}
