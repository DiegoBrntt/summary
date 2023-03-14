fetch("https://diegobrntt.github.io/summary/data.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("circ").innerHTML = Math.round(
      data.map((data) => data.score).reduce((data1, data2) => data1 + data2) /
        data.length
    );

    document.getElementById("reactionName").innerHTML = data[0].category;
    document.getElementById("reactionScore").innerHTML = data[0].score;
    document.getElementById("reaction100").innerHTML = "/ 100";

    document.getElementById("memoryName").innerHTML = data[1].category;
    document.getElementById("memoryScore").innerHTML = data[1].score;
    document.getElementById("memory100").innerHTML = "/ 100";

    document.getElementById("verbalName").innerHTML = data[2].category;
    document.getElementById("verbalScore").innerHTML = data[2].score;
    document.getElementById("verbal100").innerHTML = "/ 100";

    document.getElementById("visualName").innerHTML = data[3].category;
    document.getElementById("visualScore").innerHTML = data[3].score;
    document.getElementById("visual100").innerHTML = "/ 100";
  });
