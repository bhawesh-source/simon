var arr = ["green", "red", "yellow", "blue"];

function click_box(i) {
  var str = $("." + arr[i]);
  str.addClass("shadow");
  setTimeout(function() {
    str.removeClass("shadow");
  }, 200);
  var s = new Audio("sounds/" + arr[i] + ".mp3");
  s.play();
}

function compare(x, y) {
  var l = x.length;
  for (var i = 0; i < l; i++) {
    if (x[i] != y[i]) return false;
  }
  return true;
}
$(".green").on("click", function(event) {
  click_box(0);
});
$(".red").on("click", function(event) {
  click_box(1);
});
$(".yellow").on("click", function(event) {
  click_box(2);
});
$(".blue").on("click", function(event) {
  click_box(3);
});


document.addEventListener('keypress', function() {
  if($("h1").text()=="Press any key to Start")
  main();

});
var list=[],n,l=1,j=0;
function main() {
  $("h1").text("LEVEL 1");
  //console.log("list="+list);
  n = Math.floor(Math.random() * 4);
  setTimeout(function() {
    click_box(n);
  }, 1000);
  list.push(arr[n]);

  $(".box").click(function(event) {
      if (list[j++] != event.target.classList[0]) {
        //console.log(j+","+l+","+list);
        $("h1").text("to restart press any key");
        if(parseInt($(".score").text())<l)$(".score").text(l);
        document.addEventListener('keypress', function() {
          start_over();})
      } else if (j == l) {
        $("h1").text("LEVEL " + (l + 1));
        var n = Math.floor(Math.random() * 4);
        setTimeout(function() {
          click_box(n);
        }, 1000);
        list.push(arr[n]);
        l++;
        j = 0;
      }
    });
    ;


}
function start_over()
{
  list=[];
  l=1;j=0;
  $("h1").text("LEVEL 1");
  //console.log("list="+list);
  n = Math.floor(Math.random() * 4);
  setTimeout(function() {
    click_box(n);
  }, 1000);
  list.push(arr[n]);
  //return;
}
