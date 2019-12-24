//获取mycanvas画布
var can = document.getElementById("canvas");
var ctx = can.getContext("2d");
//画布宽度
var wid = window.innerWidth;
//画布高度
var hei = window.innerHeight;
can.width = wid;
can.height = hei;
//雪花数目
var snow = 80;
//雪花坐标、半径
var arr = []; //保存各圆坐标及半径
for (var i = 0; i < snow; i++) {
  arr.push({
    x: Math.random() * wid,
    y: Math.random() * hei,
    r: Math.random() * 10 + 1
  });
}
//画雪花
function DrawSnow() {
  ctx.clearRect(0, 0, wid, hei);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (var i = 0; i < snow; i++) {
    var p = arr[i];
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
  }
  ctx.fill();
  SnowFall();
  ctx.closePath();
  // 防止动画丢帧 https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
  requestAnimationFrame(DrawSnow);
}
//雪花飘落
function SnowFall() {
  for (var i = 0; i < snow; i++) {
    var p = arr[i];
    // p.y += Math.random() * 2 + 1;
    p.y += 2;
    if (p.y > hei) {
      p.y = 0;
    }
    // p.x += Math.random() * 2 + 1;
    if (p.x > wid) {
      p.x = 0;
    }
  }
}
// 下雪了
DrawSnow();

var can_tree = document.getElementById("canvas_tree");
var ctx_tree = can_tree.getContext("2d");
can_tree.width = wid;
can_tree.height = hei;
// 画树
function DrawTree() {
  var img = new Image();
  img.src = "./imgs/tree.png";
  img.onload = function() {
    ctx_tree.drawImage(
      img,
      can.width / 2 - 200,
      can.height / 2 - 150,
      400,
      400
    );
    // 叠放顺序随机 https://blog.csdn.net/weixin_34221775/article/details/90562558
    DrawText();
  };
}
// 画文本
function DrawText() {
  var img = new Image();
  img.src = "./imgs/text.png";
  img.onload = function() {
    ctx_tree.drawImage(
      img,
      can_tree.width / 2 - 200,
      can_tree.height / 2 - 150,
      400,
      400
    );
  };
}
function DrawLand() {
  //   ctx_tree.fillStyle = "#fff";
  var my_gradient = ctx_tree.createLinearGradient(
    can_tree.width,
    can_tree.height - 140,
    can_tree.width,
    can_tree.height
  );
  my_gradient.addColorStop(0, "#ffffff");
  //   my_gradient.addColorStop(0.5, "red");
  my_gradient.addColorStop(1, "#FFFAF0");
  ctx_tree.fillStyle = my_gradient;
  ctx_tree.fillRect(0, can_tree.height - 140, can_tree.width, 140);
}
// 画树了
DrawTree();
DrawLand();

// 画老头
var can_man = document.getElementById("canvas_man");
var ctx_man = can_man.getContext("2d");

can_man.width = wid;
can_man.height = hei;
// 水平“翻转”画布
ctx_man.translate(can_man.width, 0);
ctx_man.scale(-1, 1);
var x = 0;
var y = 0;
function DrawOldman() {
  var img = new Image();
  img.src = "./imgs/oldman.png";
  draw();
  function draw() {
    ctx_man.clearRect(0, 0, can_man.width, can_man.height);
    x += 5;
    y += 0;
    ctx_man.drawImage(img, x, y, 200, 200);
    console.log(y);
    if (x > can_man.width) {
      y = 0;
      x = 0;
    }
  }
  requestAnimationFrame(DrawOldman);
}
DrawOldman();
