var scr = document.createElement("SCRIPT")
scr.setAttribute('src', 'https://cdn.jsdelivr.net/npm/marked/marked.min.js');
document.getElementsByTagName('head')[0].appendChild(scr);

var all = document.getElementsByTagName("div");

for(var i=0, max=all.length; i<max; i++) {
  if(all[i].getAttribute("markdown") == "1") {
    marked(all[i].innerHTML);
  }
}
