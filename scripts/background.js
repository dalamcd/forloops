export const doFancyBackgroundCode = (i, j, row, sampleArray) => {

    const contentElement = document.getElementById("curElem");

    if(contentElement) { // TODO: checking if the element exists is probably unnecessary if this code is any good
        // First we remove the id from the current element
        contentElement.id = "";
        let nextElement;
        // If we're not at the end of the row, the next element is the next column; otherwise the next element is
        // the next row, so we style that new row as the current row.
        if( j !== row.length - 1) {
            nextElement = contentElement.nextElementSibling;
        } else {
            contentElement.parentElement.id = ""
            nextElement = contentElement.parentElement.nextElementSibling;
            nextElement.id = "curRow";
        }
        // If the next element is a column we change the id of the column, if it's a new row we change the id 
        // of the first element in that row.
        // TODO: I think I can combine this if with the previous if.
        if(nextElement && j !== row.length - 1) {
            nextElement.id = "curElem";
        // We also make sure that we're not at the last row of sampleArray
        } else if(i !== sampleArray.length - 1) {
            nextElement = nextElement.firstElementChild;
            nextElement.id="curElem";
            // Return true so that we can reset j to 0 in the parent function
            return true;
        }
    }
    // Still in the current row
    return false;
}

export const doFancyBackgroundSetup = sampleArray => {
    // This is just to display the sampleArray in a similar way to the Chrome developer console.
    // TODO: There is probably a much simpler way.
    let htmlRepresentation = `<div class="array">[</div>`;

    for(let i = 0; i < sampleArray.length; i++){
        htmlRepresentation += (i === 0 ? `<div class="row" id="curRow">[` : `<div class="row">[`) + ` 
            ${sampleArray[i].map((elem, index) => {
                if(i === 0 && index === 0) return `<span class="col" id="curElem"> ${elem},</span>`
                else {
                   return index === sampleArray[i].length - 1 ? 
                   `<span class="col"> ${elem}</span>` : `<span class="col"> ${elem},</span>`
                }
            }).join("")
            } ]${i === sampleArray.length - 1 ? `` : `,`}</div>`
    }
    htmlRepresentation += `<div>]</div>`
    const contentElement = document.querySelector("#container")
    contentElement.innerHTML = htmlRepresentation;
}