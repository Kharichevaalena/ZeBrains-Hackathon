window.onload = () => {
  const uploadFile = document.getElementById("upload-file");
  const uploadBtn = document.getElementById("upload-btn");
  const uploadText = document.getElementById("upload-text");
  const element = document.getElementById("container");
  const submitFile = document.getElementById("submit-file");

  uploadBtn.addEventListener("click", function(){
    uploadFile.click();
  });

  uploadFile.addEventListener("change", function() {
    if(uploadFile.value){
      uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
      element.scrollIntoView({behavior: 'smooth'});
    }else {
      uploadText.innerText = "Файл не выбран";
    }
  });

  anychart.onDocumentReady(function() {
  var chart = anychart.column();

  var dataSet = anychart.data.set([
    ["Метал", "700"],
    ["Дерево", "550"],
    ["Пластик", "1000"],
    ["Стекло", "225"]
  ]);

  var data = dataSet.mapAs({x: 0, value: 1});

  var series;

  var setupSeries = function (series, color) {
    series.stroke("2 #fff 1").fill(color);
  };

  series = chart.column(data);
  setupSeries(series, "black");

  chart.xAxis().labels().fontFamily("Montserrat").fontWeight(700).fontSize(20).fontColor("#000").padding([5, 0, 0, 0]);

  chart.container("container");

  chart.draw();
  });
}
