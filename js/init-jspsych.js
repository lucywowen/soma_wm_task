// Initialize jsPsych.
var jsPsych = initJsPsych({
  on_finish: function() {
    
    // Add interactions to the data variable
    // var interaction_data = jsPsych.data.getInteractionData();
    // jsPsych.data.get().addToLast({interactions: interaction_data.json()}); // changed on 19/7/2023 by NW
    // data already saved in plugin-spatial-recall line ~490

    
    // Display jsPsych data in viewport.
    // jsPsych.data.displayData(); // changed on 19/7/2023 by NW
    jatos.endStudy();

  }
});
