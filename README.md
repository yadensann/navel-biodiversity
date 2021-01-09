# navel-biodiversity

## Step 1: Plotly
- Used Flask and created a data url to pull samples.json from @app.route

- Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    - sample_values as the values for the bar chart
    - otu_ids as the labels for the bar chart
    - otu_labels as the hovertext for the chart


- Created a bubble chart that displays each sample.
    - otu_ids for the x values
    - sample_values for the y values
    - sample_values for the marker size
    - otu_ids for the marker colors
    - otu_labels for the text values

- Sample metadata displayed in panel.

- Update all of the plots any time that a new sample is selected.


## Bonus
- Created a gauge chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.

