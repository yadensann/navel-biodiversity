// Pulling data from json file and adding them with filter
function pullMetadata(sample) {
    d3.json('/metadata/${sample}').then((data) => {
        // var metadata= data.metadata[0];
        var PANEL= d3.select('#sample-metadata');
        // var samplesArray = metadata.filter()
        PANEL.html("");
        // ary.filter => return a list (use [0])
        Object.entries(data).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key}: ${value}`);
        })
        //Gauge Chart
        buildGauge(data.wFREQ);
    })
}

function buildCharts(sampleData, otuData) {
    var labels= sampleData[0]['otu_ids'].map(function(item){
        return otuData[item]
    });
    var bubbleLayout= {
        margin: {t: 0},
        hovermode:'closest',
        xaxis: {title:'OTU ID'}
    };
    var bubbleData= [{
        x: sampleData[0]['otu_ids'],
        y: sampleData[0]['sample_values'],
        text: labels,
        mode: 'markers',
        marker: {
            size: sampleData[0]['sample_values'],
            color: sampleData[0]['otu_ids'], 
            colorscale: 'Earth'
        }
    }
    ];

    Plotly.plot('bubble', bubbleData, bubbleLayout);

    var barChartData = [{
        y: sampleData[0]['otu_ids'].slice(0,10).map(otuID => 'OTU ${otuID}').reverse(),
        x: sampleData[0]['sample_values'].slice(0,10).reverse(),
        text: labels.slice(0,10).reverse(),
        type: 'bar',
        orientation: 'h'

    }];
    var barLayout= {
        title:'Top 10 Bacteria Cultures Found',
        margin: {t: 30, l: 150}
    };
    Plotly.newPlot('bar', barChartData, barLayout);
    
function init() {
    var selector= d3.select('#selDataset');

    d3.json('samples.json').then((data) => {
        var sampleNames = data.names;
        sampleNames.forEach((sample)=>{
            selector
            .append('option')
            .text(sample)
            .property('value', sample);
        });

        const firstSample= sampleNames[0];
        buildCharts(firstSample);
        pullMetadata(firstSample);
    });
}

function dataChange(newSample) {
    buildCharts(newSample);
    pullMetadata(newSample);
}
init();
}







// function dataCharts(sample) {
//     d3.json('/samples/${sample}').then((data) => {

//         const otu_ids= data.otu_ids;
//         const otu_labels= data.otu_labels;
//         const sample_values= data.sample_values;

//         //Pie Chart
//         let bubbleLayout= {
//             margin: {t: 0},
//             hovermode:'closests',
//             xaxis: {title:'OTU ID'}
//         }
//         let bubbleData = [{
//             x: otu_ids,
//             y: sample_values,
//             text: otu_labels,
//             mode: 'markers',
//             marker: {
//                 size: sample_values,
//                 color: otu_ids, 
//                 colorscale: 'Earth'
//             }
//         }
//     ]
// });
//     Plotly.plot('bubble', bubbleData, bubbleLayout);
// }

// function init() {
//     var selector= d3.select('#selDataset');

//     d3.json('/names').then*((sampleNames) => {
//         sampleNames.forEach((sample) => {
//             selector
//             .append("option")
//             .text(sample)
//             .property('value', sample);
//         });
//         const firstSample= sampleNames[0];
//         dataCharts(firstSample);
//         pullMetadata(firstSample);
//     });


// }

// init();
        


        // var samples= data.samples;
        // var samplesArray= samples.filter(sampleObject => sampleObject.id == sample);
        // var result= samplesArray[0]

        // var ids= result.otu_ids;
        // var labels= result.otu_labels;
        // var values= result.sample_values;

    
//     });
// };

// var metadata = d3.select('#sample-metadata');
// metadata.html("");

// dataInput.forEach(([key, value]) => {
//     columns.forEach(column => HTMLTableRowElement.append('p').text([key, value](column));
// });


// var metadata_panel = d3.select("#sample-metadata");
// metadata_panel.html("");

//     console.log(metadata_panel);
// });

