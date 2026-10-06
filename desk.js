(function () {
  "use strict";
  const films = [
    ["paranormal", "The night that still will not leave", "47,486 views", "Idaho City and Silver City. A booked town, a room that did not feel unused.", "-rEnrQKMnF4"],
    ["paranormal", "A hand reaches out from air to grab a fellow investigator", "599 views", "A shape like a hand enters the frame, close, as if it meant to take hold.", "GFaF5XmAZuo"],
    ["paranormal", "The ghostly jogger at Canyon Cemetery", "306 views", "Two trees, a midnight story, and the walk itself.", "KzR84FXKuo8"],
    ["abandoned", "Overnight alone in the cold fog", "394 views", "An empty house, filmed alone, on a cold foggy night. The hard part is staying after the rain starts.", "BTyCFv3_qaY"],
    ["abandoned", "The farm the woods kept", "225 views", "A farm building hidden in the trees.", "13HVi0Y95Sg"],
    ["abandoned", "A farmhouse with no one home", "138 views", "Rooms left as they were.", "pWEvXLvHJJA"],
    ["abandoned", "Farm houses, the first walk", "137 views", "The longer farm-house night.", "ds5USKy9wbM"]
  ];
  const soon = [
    ["A shadow at Shenandoah Ranch", "Oct 5, 2026"],
    ["Ouija in an abandoned home, and the cops", "Oct 5, 2026"],
    ["An untouched Florida prison", "Oct 5, 2026"],
    ["A Texas house stuck in time", "Oct 5, 2026"],
    ["The tuberculosis hospital, part one", "Dec 27, 2026"],
    ["K9 in a cemetery", "Dec 13, 2026"],
    ["Canyon Hill, a conversation", "Mar 11, 2027"],
    ["Wabash Oak, face to face", "Nov 6, 2027"],
    ["A slaughterhouse with people still inside", "Jul 29, 2027"],
    ["Body bags in an abandoned neighborhood", "Jun 17, 2027"],
    ["Ted Bundy, the real locations", "Jun 13, 2027"],
    ["A ghost town they never came back to", "Jun 20, 2027"]
  ];
  const places = [
    ["Idaho City Hotel", "An early hotel night in the basin. The town had people in it. The room on the tape did not feel unused.", "https://www.youtube.com/watch?v=-rEnrQKMnF4"],
    ["Silver City", "A mining town on that same night. The walk is the record.", "https://www.youtube.com/watch?v=-rEnrQKMnF4"],
    ["Canyon Hill Cemetery", "Two trees and a local story about a midnight jogger who knocks.", "https://www.youtube.com/watch?v=KzR84FXKuo8"],
    ["Central Unit", "The white prison block in the field. The night at this site is still being cut.", ""],
    ["Shenandoah Ranch", "A figure on the ranch tape. Scheduled to open Oct 5, 2026.", ""],
    ["Florida prison", "Cells left as they were. Scheduled to open Oct 5, 2026.", ""]
  ];
  function el(tag, cls, text) { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function card(f) {
    const a = el("a", "card");
    a.href = "https://www.youtube.com/watch?v=" + f[4];
    a.target = "_blank"; a.rel = "noopener noreferrer";
    const img = document.createElement("img");
    img.src = "https://i.ytimg.com/vi/" + f[4] + "/hqdefault.jpg";
    img.alt = f[1];
    const body = el("div");
    body.append(el("span", "meta", f[2]), el("strong", null, f[1]), el("p", null, f[3]));
    a.append(img, body);
    return a;
  }
  function paint(shelf) {
    const grid = document.getElementById("grid");
    grid.replaceChildren();
    films.filter((f) => shelf === "all" || f[0] === shelf).forEach((f) => grid.append(card(f)));
  }
  paint("all");
  document.getElementById("chips").onclick = (e) => {
    const b = e.target.closest("button"); if (!b) return;
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("on"));
    b.classList.add("on"); paint(b.dataset.shelf);
  };
  const soonList = document.getElementById("soonList");
  soon.forEach((s) => { const row = el("div", "soon"); row.append(el("b", null, s[0]), el("span", "meta", s[1])); soonList.append(row); });
  const track = document.getElementById("track");
  const shots = films.map((f) => "https://i.ytimg.com/vi/" + f[4] + "/hqdefault.jpg");
  shots.concat(shots).forEach((src) => { const img = document.createElement("img"); img.src = src; img.alt = ""; track.append(img); });
  const rail = document.getElementById("rail");
  places.forEach((p) => {
    const a = el("a", null, p[0]);
    a.href = p[2] || "#soon";
    if (p[2]) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    rail.append(a);
  });
  const locs = document.getElementById("locs");
  places.forEach((p) => {
    const b = el("button", "loc", p[0]); b.type = "button";
    const pop = el("div", "pop"); pop.append(el("p", null, p[1]));
    if (p[2]) { const a = el("a", null, "Open the film"); a.href = p[2]; a.target = "_blank"; pop.append(a); }
    locs.append(b, pop);
  });
  const drawer = document.getElementById("drawer");
  const shade = document.getElementById("shade");
  const open = () => { drawer.classList.add("open"); shade.classList.add("show"); };
  const shut = () => { drawer.classList.remove("open"); shade.classList.remove("show"); };
  document.getElementById("open").addEventListener("mouseenter", open);
  document.getElementById("open").addEventListener("click", open);
  document.getElementById("close").onclick = shut;
  shade.onclick = shut;
  locs.onclick = (e) => { const b = e.target.closest("button"); if (b && b.nextElementSibling) b.nextElementSibling.classList.toggle("show"); };
  document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    const mail = document.getElementById("mail").value.trim();
    const ok = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(mail);
    const err = document.getElementById("err");
    if (!ok) { err.textContent = "That email does not look real."; return; }
    err.textContent = "";
    const body = ["Name: " + document.getElementById("name").value, "Email: " + mail, "Type: " + document.getElementById("kind").value, "", document.getElementById("note").value].join("\n");
    location.href = "mailto:caidenlnewby@gmail.com?subject=" + encodeURIComponent("CN Paranormal") + "&body=" + encodeURIComponent(body);
  };
})();
