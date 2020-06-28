function init(){
    var drop_menu = d3.select("#selDataset");

    //putting names in the drop down menu
    d3.json("samples.json").then(
        (data)=>{
            var sample_name = data.names;
            sample_name.forEach((sample)=>{
                    drop_menu.append("option").text(sample).property("value", sample);
                }
            );
        }
    );
    
    var option_selected = sample_name[0];

    buildPieChart(option_selected);
    buildTable(option_selected);

}

function buildPieChart(option_selected){
    d3.json("samples.json").then(
        (data)=>{
            var samples = data.samples;
            var samples_array = samples.filter(sampleObject => sampleObject.id == option_selected);
            var sample_result = samples_array[0];
            var id = sample_result.id;
            var labels = sample_result.otu_labels;
            var sample_values = sample_result.sample_values;


            samples.forEach((sample)=>{
                    drop_menu.append("option").text(sample).property("value", sample);
                }
            );
        }
    );
plotly.newPlot
}

function buildTable(option_selected){
//code goes here


metadata section
//panel.html
}


//Initialize dashboard
init();
