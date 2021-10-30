/*{"country":"India",
"cases":11514331,
"todayCases":386,
"deaths":159405,
"todayDeaths":0,
"recovered":11083679,
"active":271247,
"critical":8944,
"casesPerOneMillion"8286,
"deathsPerOneMillion":115,
"totalTests":231370546,
"testsPerOneMillion":166497}*/
window.onload
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       var data=JSON.parse(xhttp.responseText);
 document.getElementById("demo1").innerHTML ="country :"+data["country"];
 document.getElementById("demo2").innerHTML ="cases :"+data["cases"];
 document.getElementById("demo3").innerHTML ="Today Cases :"+data["todayCases"];
document.getElementById("demo4").innerHTML ="Deaths :"+data["deaths"];
document.getElementById("demo5").innerHTML =" Today Deaths:"+data["todayDeaths"];
document.getElementById("demo6").innerHTML ="Recovered :"+data["recovered"];
document.getElementById("demo7").innerHTML ="Active :"+data["active"];
document.getElementById("demo8").innerHTML ="Critical :"+data["critical"];
document.getElementById("demo9").innerHTML ="Cases Per One Million:"+data["casesPerOneMillion"];
document.getElementById("demo10").innerHTML ="Deaths Per One Million :"+data["deathsPerOneMillion"];
document.getElementById("demo11").innerHTML ="Total Tests :"+data["totalTests"];
document.getElementById("demo12").innerHTML ="Tests Per One Million :"+data["testsPerOneMillion"];
    }
    else
{
document.getElementById("demo1").innerTEXT="something went wrong";
    }
  };
  var country=document.getElementById("list").value
  xhttp.open("GET", "https://coronavirus-19-api.herokuapp.com/countries/"+country, true);
  xhttp.send();
} 
