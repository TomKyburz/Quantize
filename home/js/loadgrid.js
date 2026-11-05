const grid = document.getElementById("testgrid");

function loadGrid() {
  fetch(`json/apps.json`)
    .then(res => res.json())
    .then(data => {
      grid.innerHTML = "";

      data.apps
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(item => {
          const a = document.createElement("a");
          a.id = "itemlinkwrapper";
          a.href = `/quantize/${item.name}/index.html`;

          const divitem = document.createElement("div");
          divitem.id = "item";

          const img = document.createElement("img");
          img.id = "gameicon";
          img.src = item.logo;

          divitem.appendChild(img);
          a.appendChild(divitem);
          grid.appendChild(a);
        });
    })
    .catch(console.error);
}

// checkbox.addEventListener("change", e => {
//   loadGrid(e.target.checked ? "games" : "apps");
// });

loadGrid();
