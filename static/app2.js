// function for dropdown menu change
function optionChanged(selectedID){
    console.log(selectedID);
// read json file for data
    d3.json("/data").then((data) => {
   //  console.log(data);
// clears dropdown
    d3.select("#selDataset").html("");   
// for loop for metadata array and appends the itemID to dropdown menu
    data.metadata.forEach(item => {
          // console.log(item.id);
         d3.select ("#selDataset").append('option').attr('value', item.id).text(item.id);
         });
// selected value equals selectedID function
    d3.select("#selDataset").node().value = selectedID;
// filter metadata for selectedID from dropdown
    const metadataID = data.metadata.filter(item=> (item.id == selectedID));
    console.log(metadataID);
    
    const PANEL = d3.select("#sample-metadata");
    PANEL.html("");
    Object.entries(metadataID[0]).forEach(item=> 
       {
          // console.log(item);
          PANEL.append("p").text(`${item[0]}: ${item[1]}`)
       });
 
// BAR CHART
    // filter samples data for otu_ids
    const sampleID = data.samples.filter(item => parseInt(item.id) == selectedID);
    // console.log(sampleID[0].sample_values);  
    // console.log(sampleID[0].otu_ids);  
    // console.log(sampleID[0].otu_labels);  

    // slice top 10 values
    var sample_value = sampleID[0].sample_values.slice(0,10);
    sample_value= sample_value.reverse();
    
    var otu_id = sampleID[0].otu_ids.slice(0,10);
    otu_id = otu_id.reverse();
    
    var otu_labels = sampleID[0].otu_labels
    otu_labels = otu_labels.reverse();

    //  console.log(sample_values);
    //  console.log(otu_id);
    //  console.log(otu_labels);
 
    // y-axis of bar chart
    const y_axis = otu_id.map(item => 'OTU' + " " + item);
       // console.log(y-xis);
    
    const bar_trace = {
       y: y_axis,
       x: sample_value,
       type: 'bar',
       orientation: "h",
       text:  otu_labels,
        marker: {
            color: 'peru',
            line: {width: 3}
        }
    },
       bar_layout = {
       title: 'Top 10 Operational Taxonomic Units/Individuals',
       xaxis: {title: 'Number of Samples Collected'},
       yaxis: {title: 'OTU ID'}
       };
 
    // bar plot
       Plotly.newPlot('bar', [bar_trace], bar_layout,  {responsive: true});    
       
 // BUBBLE CHART
 
    // use only sample_value and otu_id for bubble chart
    var only_sample_values =sampleID[0].sample_values;
    var only_otu_ids= sampleID[0].otu_ids;

    // Define the layout and trace object, edit color and orientation
    const bubble_trace = {
        x: only_otu_ids,
        y: only_sample_values,
        mode: 'markers',
        marker: {
            color: only_otu_ids,
            size: only_sample_values
        }
    },
    bubble_layout = {
        title: '<b>Number of Samples vs. Operational Taxonomic Unit</b>',
        xaxis: {title: 'OTU ID'},
        yaxis: {title: 'Number of Samples Collected'},
        showlegend: false,
        height: 800,
        width: 1500
        };

        // plot bubble chart
    Plotly.newPlot('bubble', [bubble_trace], bubble_layout);
    


    // BONUS: GAUGE CHART
        // gauge chart for weekly washing frequency 
    const gauge_display = d3.select("#gauge");
    gauge_display.html(""); 
    const wash_freq = metadataID[0].wfreq;
    
    const gauge_data = [{
        domain: {x:[0, 1], y:[0, 1]},
        value: wash_freq,
        title: {text: "<b>Belly Button Washing Frequency </b><br> (Scrubs Per Week)"},
        type: "indicator",
        mode: "gauge+number",     
        gauge: {
            axis: {range:[0,10]},
                //scrub indicator on gauge chart
                bar: {color: "#556B2F"},
                // 0 to 10
                steps: [
                    {range: [0, 1], color: "white"},
                    {range: [1, 2], color: "whitesmoke"},
                    {range: [2, 3], color: "#d2b9b4"},
                    {range: [3, 4], color: "#c9ada7"},
                    {range: [4, 5], color: "#ac9899"},
                    {range: [5, 6], color: "#8a7e88"},
                    {range: [6, 7], color: "#7d7482"},
                    {range: [7, 8], color: "#706a7b"},
                    {range: [8, 9], color: "#4a4e69"},
                    {range: [9, 10], color: "black"}    
                ],
                threshold: {
                    value: wash_freq
                }
            }
        }]; 

    const gauge_layout = {  
        width: 600, 
        height: 400, 
        margin: { t: 0, b: 0 }, 
        };

        // plot gauge chart
    Plotly.newPlot('gauge', gauge_data, gauge_layout); 
    });
}
     // data starts at ID 940
optionChanged(940);
// event on change takes value and calls the function during dropdown selection
d3.select("#selDataset").on('change',() => {
    optionChanged(d3.event.target.value);
});



