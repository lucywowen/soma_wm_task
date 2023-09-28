// function to save data on JATOS using appendResult while checking connection
function append_data_to_jatos(data) {

jatos.onLoad(function() {
  console.log(jatos.urlQueryParameters.STUDYID);
if (navigator.onLine) {
  jatos.appendResultData(data); //adds data to server as the trial goes!
  } else {
    alert('ERROR: your internet connection has dropped. Please get in touch with us as you may not be able to complete the study.');
  }

})
}
