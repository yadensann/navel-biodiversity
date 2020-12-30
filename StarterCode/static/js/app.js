// Pulling data from json file and adding them with filter
function pullMetadata(sample) {
    d3.json('samples.json').then((data) => {
        var metadata= data.metadata;
        var PANEL= d3.select('#sample-metadata');
        PANEL.html("");
        Object.entries(metadata).forEach(([key, value]) => {
            PANEL.append("p").text(`${key}: ${value}`);
        });
    });
}



// var metadata = d3.select('#sample-metadata');
// metadata.html("");

// dataInput.forEach(([key, value]) => {
//     columns.forEach(column => HTMLTableRowElement.append('p').text([key, value](column));
// });


// var metadata_panel = d3.select("#sample-metadata");
// metadata_panel.html("");

//     console.log(metadata_panel);
// });

