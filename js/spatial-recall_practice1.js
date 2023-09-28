/////////////////// Practice trials //////////////////

var practice_trial1 = {
  timeline: [
    {
      type: jsPsychScreenCheck,
      min_width: 258,
      min_height: 364
    },
    {
      type: jsPsychHtmlKeyboardResponse, // this is a fixation cross
      stimulus: '<p style="font-size: 48px;">+</p>',
      choices: 'NO_KEYS',
      trial_duration: 1200,
    },
    {
      type: jsPsychSpatialRecall,
      grid_size: 4,
      sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 2),
      backwards: false
    },
    {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        if (jsPsych.data.get().last(1).values()[0].score_an == 1) {
            // console.log(jsPsych.data.get());
            return '<p>Correct!</p>'
        } 
        else {
            return '<p>Your response was not quite right.</p><p>Press "Continue" below to try again.</p>'
        }
    
    },
    choices: ['Continue']
    }
  ]
}


var practice_trial2 = {
    timeline: [
      {
        type: jsPsychScreenCheck,
        min_width: 258,
        min_height: 364
      },
      {
        type: jsPsychHtmlKeyboardResponse, // this is a fixation cross
        stimulus: '<p style="font-size: 48px;">+</p>',
        choices: 'NO_KEYS',
        trial_duration: 1200,
      },
      {
        type: jsPsychSpatialRecall,
        grid_size: 4,
        sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 2),
        backwards: false
      },
      {
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
          if (jsPsych.data.get().last(1).values()[0].score_an == 1) {
            //   console.log(jsPsych.data.get());
              return "<p>Correct!</p><p>Now we'll make it a bit more difficult by increasing the number of tiles you need to remember."
          } 
          else {
              return '<p>Your response was not quite right.</p><p>Press "Continue" below to try again.</p>'
          }
      
      },
      choices: ['Continue']
      }
    ]
  }


  var practice_trial3 = {
    timeline: [
      {
        type: jsPsychScreenCheck,
        min_width: 258,
        min_height: 364
      },
      {
        type: jsPsychHtmlKeyboardResponse, // this is a fixation cross
        stimulus: '<p style="font-size: 48px;">+</p>',
        choices: 'NO_KEYS',
        trial_duration: 1200,
      },
      {
        type: jsPsychSpatialRecall,
        grid_size: 4,
        sequence: this.jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 3),
        backwards: false
      },
      {
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
          if (jsPsych.data.get().last(1).values()[0].score_an == 1) {
            //   console.log(jsPsych.data.get());
              return "<p>Correct!</p>"
          } 
          else {
              return '<p>Your response was not quite right.</p><p>Press "Continue" below to try again.</p>'
          }
      
      },
      choices: ['Continue']
      }
    ]
  }

  var practice_trial4 = {
    timeline: [
      {
        type: jsPsychScreenCheck,
        min_width: 258,
        min_height: 364
      },
      {
        type: jsPsychHtmlKeyboardResponse, // this is a fixation cross
        stimulus: '<p style="font-size: 48px;">+</p>',
        choices: 'NO_KEYS',
        trial_duration: 1200,
      },
      {
        type: jsPsychSpatialRecall,
        grid_size: 4,
        sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 3),
        backwards: false
      },
      {
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
          if (jsPsych.data.get().last(1).values()[0].score_an == 1) {
            //   console.log(jsPsych.data.get());
              return "<p>Correct!</p>"
          } 
          else {
              return '<p>Your response was not quite right.</p><p>Press "Continue" below to try again.</p>'
          }
      
      },
      choices: ['Continue']
      }
    ]
  }

var practice_end_feedback = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p>Well done!<br>You've now completed the practice trials!<br>In the full game, we will gradually increase the difficulty by increasing the number of tiles.<br>Click 'Continue' when you're ready to start the full game.</p>",
    choices: ['Continue']
    }


function generate_loop(trial_timeline) {
    const looped_timeline = {
        timeline: [trial_timeline],
        
        loop_function: function() {
    
            // get response data from last practice trial
            var data = jsPsych.data.get().filter({trial_type: 'spatial-recall'}).last(1).values()[0]; 
            
             // check if response was correct. if correct, don't repeat trial.
             if (data.score_an == 1){ 
                return false; 
            } else { 
                return true; 
            } 
        }
        
    }
    return looped_timeline

}




const practice_timeline = {
    timeline: [generate_loop(practice_trial1), generate_loop(practice_trial2), 
        generate_loop(practice_trial3), generate_loop(practice_trial4), practice_end_feedback],
    // sample: {
        // type: 'fixed-repetitions',
        // size: 1
    // },
    loop_function: function() {

        // get response data from last practice trial
        var data = jsPsych.data.get().filter({trial_type: 'spatial-recall'}).last(1).values()[0]; 
        
         // check if response was correct. if correct, don't repeat trial.
         if (data.score_an == 1){ 
            return false; 
        } else { 
            return true; 
        } 
    }
}