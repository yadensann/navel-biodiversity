// Pulling data from json file and adding them with filter

// d3.json('/data', function(data) {
//     console.log(data)
// });
var default_id='940';
var sampleData;
// function pullMetadata(sample){
    d3.json('/data').then((response) => {
        sampleData= response;
        var metadata=response['metadata'];
        console.log(metadata)
        var just_one=metadata.filter(one=>one['id']==parseInt(default_id))[0]
        console.log(just_one);
        // var samplesArray= sampleData.filter(sampleobject => sampleobject.id == sample);
        // var result= samplesArray[0];
        // console.log(result);

        var PANEL= d3.select('#sample-metadata');
            console.log(PANEL);
            PANEL.html("");
            Object.entries(just_one).forEach(([key, value]) => {
                PANEL.append("p").text(`${key}: ${value}`);
                console.log([key, value]);
            });
    });  
      
    // function buildCharts(sample) {
        var url= `/data`;
        d3.json(url).then(response => {
            //console.log(response);
            var just_samples=response['samples'];
            var xval= just_samples[];
            var yval= just_samples.sample_values;

            // var just_otu_ids=just_samples.filter(only=>only['otu_ids']);
            console.log(just_samples);
            // console.log(just_otu_ids);
            console.log(xval);

            // var trace={}
            });
            // console.log(Object.keys(otu_ids));


        
            // var otu_ids= ids[
            // console.log(otu_ids);

    
        // var labels= result.otu_labels;
        // var values= result.sample_values;

    //     var bubbleLayout= {
    //         margin: {t: 0},
    //         hovermode:'closest',
    //         xaxis: {title:'OTU IDs'}
    //         };
    //     var bubbleData= [{
    //         x: ids,
    //         y: values,
    //         text: labels,
    //         mode: 'markers',
    //         marker: {
    //             size: values,
    //             color: ids, 
    //             colorscale: 'Earth'
    //         }
    //     }];
    
    //     Plotly.plot('bubble', bubbleData, bubbleLayout);




        // var trace1= {
        //     x: x_value,
        //     y: y_value,
        //     mode:'markers',
        //     marker:{
        //         size: sizeValue,
        //         color: xValue,
        //         colorscale: 'Earth',
        //         labels: label,
        //         type: 'scatter',

        //     }
        // };



