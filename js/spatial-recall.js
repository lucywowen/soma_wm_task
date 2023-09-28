
// jatos.onLoad(() => {
// Define instructions
var instructions_01 = {
  type: jsPsychInstructions,
  pages: [
    "<p>In this game you will see a grid of squares or 'tiles' that will flash blue one at a time.</p><p>Your goal is to remember the order in which the squares flashed blue.</p><p>At the end of each trial, click on the tiles that flashed in the <b>same order</b> as they were presented to you.</p>",
    `<p>Do your best to memorize the order, but do not write them down<br>or use any other external tool to help you remember.</p><p>If you make a mistake, click the "Clear" button to erase your entries.</p><p>When you're ready, click "Next" to start a few practice trials.</p>`
  ],
  key_forward: 'ArrowRight',
  key_backward: 'ArrowLeft',
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: 'Prev',
  button_label_next: 'Next'
}

// This will store all of the sequences
let sequences_forward = [];

// This will store the sequence lengths
let sequenceLengths = [];
for(let i = 2; i <= 3; i++) {
  sequenceLengths.push(i);
}

// Loop over the sequence lengths
for (let i = 0; i < sequenceLengths.length; i++) {
    let length = sequenceLengths[i];

    // For each sequence length, generate four sequences
    for (let j = 0; j < 2; j++) {
      sequences_forward.push({
            sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], length)
        });
    }
}


///////////// for debug //////////
// This will store the sequence lengths
// let sequenceLengths = [];
// for(let i = 2; i <= 8; i++) {
//   sequenceLengths.push(i);
// }

// // Loop over the sequence lengths
// for (let i = 0; i < sequenceLengths.length; i++) {
//     let length = sequenceLengths[i];

//     // For each sequence length, generate four sequences
//     for (let j = 0; j < 4; j++) {
//       sequences_forward.push({
//             sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], length)
//         });
//     }
// }




/////////////////// Test trials ////////////////////

// Define forwards recall
var recall_forwards = {
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
      sequence: jsPsych.timelineVariable('sequence'),
      backwards: false
    }
  ],
  timeline_variables: sequences_forward //[ //seting up the trials 
    // {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 2)}, // one sequence with 2 stim
    // {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 3)}, // one sequence with 3 stim
    // {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 4)}, // one sequence with 4 stim
  //]
}

// Define instructions
var instructions_02 = {
  type: jsPsychInstructions,
  pages: [
    "Great job! please take a moment to rest. <br><br>When ready, for the following trials, please recall the order of squares in the <b>reverse order</b>."
  ],
  key_forward: 'ArrowRight',
  key_backward: 'ArrowLeft',
  allow_keys: true,
  show_clickable_nav: true,
  button_label_previous: 'Prev',
  button_label_next: 'Next'
}

// This will store all of the sequences
let sequences_backward = [];

// This will store the sequence lengths
// let sequenceLengths = [];
// for(let i = 2; i <= 8; i++) {
  // sequenceLengths.push(i);
// }

// Loop over the sequence lengths
for (let i = 0; i < sequenceLengths.length; i++) {
    let length = sequenceLengths[i];

    // For each sequence length, generate four sequences
    for (let j = 0; j < 2; j++) {
      sequences_backward.push({
            sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], length)
        });
    }
}
//////// for debug/////////

// // Loop over the sequence lengths
// for (let i = 0; i < sequenceLengths.length; i++) {
//   let length = sequenceLengths[i];

//   // For each sequence length, generate four sequences
//   for (let j = 0; j < 4; j++) {
//     sequences_backward.push({
//           sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], length)
//       });
//   }
// }


// Define backwards recall
var recall_backwards = {
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
      sequence: jsPsych.timelineVariable('sequence'),
      backwards: true
    }
  ],
  timeline_variables: sequences_backward
  // [
    // {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 2)},
    // {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 3)},
    // {sequence: jsPsych.randomization.sampleWithoutReplacement([...Array(16).keys()], 4)},
  // ]
}

// });