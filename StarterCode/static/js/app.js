// Pulling data from json file and adding them with filter

d3.json('./data/samples.json', function(data) {
    console.log(data)
});


// function pullMetadata(sample) {
//     d3.json('./data/samples.json').then((response) => {
//         console.log(response);

//     // d3.json('./data/samples.json').then((data) => {
//         var data= response;
//         var PANEL= d3.select('#sample-metadata');
//         // var samplesArray = metadata.filter()
//         PANEL.html("");
//         // ary.filter => return a list (use [0])
//         Object.entries(data).forEach(([key, value]) => {
//             PANEL.append("p").text(`${key}: ${value}`);
//         });
//     });
// }

// function buildCharts(sample) {
//     d3.json('./data/samples.json').then((response => {
//         var xValue= response['otu_ids'];
//         var yValue= response['sample_values'];
//         var sizeValue=response['sample_values'];
//         var label = response['otu_labels'];

//         // var samples= data.samples;
//         // var samplesArray= samples.filter(sampleObject => sampleObject.id == samples);
//         // var result= samplesArray[0];


//     }));


//         // var ids= result.otu_ids;
//         // var labels= result.otu_labels;
//         // var values= result.sample_values;
// //     }))
// //     // var labels= sampleData[0]['otu_ids'].map(function(item){
// //     //     return otuData[item]
// //     };


//         var trace1= {
//             x: xValue,
//             y: yValue,
//             mode:'markers',
//             marker:{
//                 size: sizeValue,
//                 color: xValue,
//                 colorscale: 'Earth',
//                 labels: label,
//                 type: 'scatter',

//             }
//         };

//         var data1= [trace1];

//         var layout= {
//             title:'Marker Size',
//             xaxis: { title: 'OTU ID'},
//             showlegend: true
//         };
//         Plotly.newPlot('bubble', data1, layout);
    // var bubbleLayout= {
    //     margin: {t: 0},
    //     hovermode:'closest',
    //     xaxis: {title:'OTU ID'}
    // };
    // var bubbleData= [{
    //     x: ids,
    //     y: values,
    //     text: labels,
    //     mode: 'markers',
    //     marker: {
    //         size: values,
    //         color: ids, 
    //         colorscale: 'Earth'
    //     }
    // }];

//     Plotly.plot('bubble', bubbleData, bubbleLayout);

//     var barChartData = [{
//         y: sampleData[0]['otu_ids'].slice(0,10).map(otuID => 'OTU ${otuID}').reverse(),
//         x: sampleData[0]['sample_values'].slice(0,10).reverse(),
//         text: labels.slice(0,10).reverse(),
//         type: 'bar',
//         orientation: 'h'

//     }];
//     var barLayout= {
//         title:'Top 10 Bacteria Cultures Found',
//         margin: {t: 30, l: 150}
//     };

//     Plotly.newPlot('bar', barChartData, barLayout);

// function init() {
//     var selector= d3.select('#selDataset');


//     // d3.json('./data/samples.json').then(function(data) 
//     d3.json('data/samples.json').then(function(data) {

//         console.log(data);

//         var sampleNames = data.names;

//         sampleNames.forEach((sample)=> {
//             d3.select(selector)
//             .data(data)
//             .enter()
//             .append('p')
//             .text(sample)
//             .property('value', sample);
//         });

//         const firstSample= sampleNames[0];
//         buildCharts(firstSample);
//         pullMetadata(firstSample);
//     });


//     d3.json('./data/samples.json').then((data) => {
//         var sampleNames = data.names;
//         sampleNames.forEach((sample)=>{
//             selector
//             .append('option')
//             .text(sample)
//             .property('value', sample);
//         });

//         const firstSample= sampleNames[0];
//         buildCharts(firstSample);
//         pullMetadata(firstSample);
//     });
// }

// function dataChange(newSample) {
//     buildCharts(newSample);
//     pullMetadata(newSample);
// }

// init();










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

