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
      can.height / 2 - 200,
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
      can_tree.height / 2 - 200,
      400,
      400
    );
  };
  //   ctx.rotate((5 * Math.PI) / 180);
  //   requestAnimationFrame(DrawText);
}
// 画树了
DrawTree();
// function DrawLand() {}
// function DrawStar(rx, ry, x, y) {
//   ctx.beginPath();
//   ctx.strokeStyle = "yellow";
//   ctx.lineWidth = "1";
//   for (var i = 0; i < 5; i++) {
//     ctx.lineTo(
//       Math.cos(((18 + i * 72) / 180) * Math.PI) * rx + x,
//       -Math.sin(((18 + i * 72) / 180) * Math.PI) * rx + x
//     );
//     ctx.lineTo(
//       Math.cos(((54 + i * 72) / 180) * Math.PI) * ry + y,
//       -Math.sin(((54 + i * 72) / 180) * Math.PI) * 100 + y
//     );
//   }
//   ctx.closePath();
//   ctx.stroke();
//   // 放射渐变 https://www.w3school.com.cn/tags/canvas_createradialgradient.asp
//   var fillStar = ctx.createRadialGradient(75, 50, 5, 90, 60, 200);
//   fillStar.addColorStop(0, "yellow");
//   fillStar.addColorStop(1, "white");
//   ctx.fillStyle = fillStar;
//   ctx.fill();
// }
// setInterval(DrawSnow, 50);
// DrawStar(200, 100, 500, 500);
