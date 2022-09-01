// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples;
    // Create a variable that filters the samples for the object with the desired sample number.
    var resultSample = samples.filter(sampleObj => sampleObj.id == sample);
    console.log(resultSample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = data.metadata;

    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    console.log(resultArray);
    // Create a variable that holds the first sample in the array.
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    console.log(resultArray);

    // 2. Create a variable that holds the first sample in the metadata array.
    var firstSample = numberSample[0];
    console.log(firstSample);


    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = firstSample.otu_ids
    var otuIdsSliced = otu_ids.slice(0,10).map(otu_ids => `OTU ${otu_ids}`).reverse();
    console.log(otuIdsSliced)

    var otu_lables = resultForSample.otu_labels;
    var otuLablesSliced = otu_lables.slice(0,10).reverse();
    console.log(otuLablesSliced);

    var sample_values = resultForSample.sample_values;
    var sampleValuesSliced = sample_values.slice(0,10).reverse();
    console.log(sampleValuesSliced);


    // 3. Create a variable that holds the washing frequency.
   
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", barData, barLayout);

    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      title: {text: "Scrubs per Week", font: {size: 18}},
      type: "indicator",
      mode: "gauge+number",
      value: wFreq,
      tickmode: 'linear',
      gauge: {
        axis: { range: [null, 10], dtick: 2, tick0: 0 },
        bar: { color: "DeepSkyBlue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 2], color: "MediumSlateBlue"},
          { range: [2, 4], color: "RoyalBlue"},
          { range: [4, 6], color: "Blue"},
          { range: [6, 8], color: "MediumBlue" },
          { range: [8, 10], color: "DarkBlue" },
        ]},
        
    }];
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      title: "Belly Button Washing Frequency",
      titlefont: {"size": 25}
    };
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout)
  });
}
