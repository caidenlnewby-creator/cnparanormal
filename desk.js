(function () {
  "use strict";
  const films = [
    ["CN-101", "paranormal", "The night that still will not leave", 47486, "Idaho City hotel and Silver City. A booked town, an empty room, a picture they still talk about.", "-rEnrQKMnF4"],
    ["CN-102", "paranormal", "Something reached", 599, "A leak from a longer night. A hand, or the shape of one, comes into frame.", "GFaF5XmAZuo"],
    ["CN-103", "paranormal", "The jogger at Canyon Hill", 306, "A cemetery, two trees, and a local story about a knock at midnight. The film is the walk.", "KzR84FXKuo8"],
    ["CN-104", "abandoned", "Rain on an empty house", 394, "A roadside house believed empty. Rain. No break-in. The worst part is the approach.", "BTyCFv3_qaY"],
    ["CN-105", "abandoned", "The farm the woods kept", 225, "A farm building hidden in the trees. Found by hand. Filmed alone.", "13HVi0Y95Sg"],
    ["CN-106", "abandoned", "A farmhouse with no one home", 138, "Rooms left as they were. No address posted.", "pWEvXLvHJJA"],
    ["CN-107", "abandoned", "Farm houses, the first walk", 137, "The longer farm-house night. Part one.", "ds5USKy9wbM"]
  ];
  document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("grid");
    function paint(shelf) {
      grid.replaceChildren();
      films.filter((f) => shelf === "all" || f[1] === shelf).forEach((f) => {
        const a = document.createElement("a");
        a.className = "card";
        a.href = "https://www.youtube.com/watch?v=" + f[5];
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        const img = document.createElement("img");
        img.src = "https://i.ytimg.com/vi/" + f[5] + "/hqdefault.jpg";
        img.alt = f[2];
        const body = document.createElement("div");
        const meta = document.createElement("span");
        meta.className = "meta";
        meta.textContent = f[0] + " \u00b7 " + f[3].toLocaleString("en-US") + " views";
        const strong = document.createElement("strong");
        strong.textContent = f[2];
        const p = document.createElement("p");
        p.textContent = f[4];
        body.append(meta, strong, p);
        a.append(img, body);
        grid.append(a);
      });
    }
    paint("all");
    document.getElementById("chips").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      document.querySelectorAll(".chip").forEach((c) => c.classList.remove("on"));
      b.classList.add("on");
      paint(b.dataset.shelf || "all");
    });
  });
})();
