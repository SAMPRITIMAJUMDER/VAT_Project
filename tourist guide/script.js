//const apiKey = " https://opentripmap.io";

function apiGet(method, query) {
  return new Promise(function(resolve, reject) {
    var otmAPI =
      "https://api.opentripmap.com/0.1/en/places/" +
      method +
      "?apikey=" +
      apiKey;
    if (query !== undefined) {
      otmAPI += "&" + query;
    }
    fetch(otmAPI)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  });
}


const pageLength = 5; // number of objects per page

    let lon; // place longitude
    let lat; // place latitude

    let offset = 0; // offset from first object in the list
    let count; // total objects count
    
   
    document.getElementById("place-name")
    document.addEventListener("submit", function(event) {
      let name = document.getElementById("textbox").value;
      apiGet("geoname", "name=" + name).then(function(data) {
        let message = "Name not found";
        if (data.status == "OK") {
          message = data.name + ", " + getCountryName(data.country);
          lon = data.lon;
          lat = data.lat;
          firstLoad();
        }
        document.getElementById("info").innerHTML = `${message}`;
      });
      event.preventDefault();
    });

    function firstLoad() {
        apiGet(
          "radius",
          `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=count`
        ).then(function(data) {
          count = data.count;
          offset = 0;
          document.getElementById(
            "info"
          ).innerHTML += `<p>${count} objects with description in a 1km radius</p>`;
          loadList();
        });
      }

      function loadList() {
        apiGet(
          "radius",
          `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json`
        ).then(function(data) {
          let list = document.getElementById("list");
          list.innerHTML = "";
          data.forEach(item => list.appendChild(createListItem(item)));
          let nextBtn = document.getElementById("next_button");
          if (count < offset + pageLength) {
            nextBtn.style.visibility = "hidden";
          } else {
            nextBtn.style.visibility = "visible";
            nextBtn.innerText = `Next (${offset + pageLength} of ${count})`;
          }
        });
      }
      