head = document.getElementsByTagName("head")[0];
head.innerHTML += "<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/marked/marked.min.js'></script>

var all = document.getElementsByTagName("div");

for(var i=0, max=all.length; i<max; i++) {
  if(all[i].getAttribute("markdown") == "1") {
    marked(all[i].innerHTML);
  }
}
