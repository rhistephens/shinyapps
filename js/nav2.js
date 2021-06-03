$(document).ready(function() {
  $(".navbar .container-fluid .navbar-nav .dropdown .dropdown-menu").each(function(index) {
    const num = index + 1;
    $( this ).addClass("dropdown-menu-" + num);
  });
  
  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceCounts" target="_blank">New Cancer Diagnoses</a></li>');
  /*$(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceCrudeRates" target="_blank">Crude Rates</a></li>');*/
  $(".dropdown-menu-2").append('<li><a href="https://bccandataanalytics.shinyapps.io/MortalityCounts" target="_blank">Cancer Deaths</a></li>');
  /*$(".dropdown-menu-2").append('<li><a href="https://bccandataanalytics.shinyapps.io/MortalityCrudeRates" target="_blank">Crude Rates</a></li>');*/
  $(".dropdown-menu-3").append('<li><a href="https://bccandataanalytics.shinyapps.io/PrevalenceCounts" target="_blank">Number of Prevalent Cases</a></li>');
  /*$(".dropdown-menu-4").append('<li><a href="https://bccandataanalytics.shinyapps.io/CreateTableIncidenceCounts" target="_blank">New Cancer Diagnoses</a></li>');*/
  /*$(".dropdown-menu-4").append('<li><a href="https://bccandataanalytics.shinyapps.io/CreateTableMortalityCounts" target="_blank">Cancer Deaths</a></li>');*/
});
