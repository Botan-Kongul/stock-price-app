import axios from "axios";
const tableb = document.getElementById("table_body");

const apiUrl = "https://api.collectapi.com/economy/hisseSenedi";
const apiKey = "Api Key";
const apiSecret = "Api Secret";

axios
  .get(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `apikey ${apiKey}:${apiSecret}`,
    },
  })
  .then((response) => {
    for (var i = 0; i < 10; i++) {
      var data = response.data.result;
      var rowData = data[i];
      var row = document.createElement("tr");
      row.classList.add(...["border-b"]);

      var cell1 = document.createElement("td");
      cell1.classList.add(...["py-2", "px-4"]);
      cell1.textContent = rowData.text;

      var cell2 = document.createElement("td");
      cell2.classList.add(...["py-2", "px-4"]);
      cell2.textContent = `${rowData.lastprice} TL`;

      row.appendChild(cell1);
      row.appendChild(cell2);
      tableb.appendChild(row);
    }
  })
  .catch((error) => {
    console.error("İstek hatası:", error);
  });
