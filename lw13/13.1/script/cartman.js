function drawLegsCartman(ctx) {
  ctx.beginPath();
  ctx.moveTo(480, 350)
  ctx.lineTo(490, 400);
  ctx.lineTo(715, 400);
  ctx.lineTo(730, 350);
  ctx.lineWidth = 0.9;
  ctx.strokeStyle = '#784833';
  ctx.fillStyle = '#784833';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //ботинки
  ctx.beginPath();
  ctx.moveTo(720, 400);
  ctx.quadraticCurveTo(650,385,605, 400);
  ctx.quadraticCurveTo(590,387,485, 394);
  ctx.quadraticCurveTo(480,399,490, 400);
  ctx.strokeStyle = '#383138';
  ctx.fillStyle = '#383138';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawBodyCartman(ctx) {
  //Куртка
  ctx.beginPath();
  ctx.moveTo(500, 255);
  ctx.quadraticCurveTo(470,250,450, 300);
  ctx.quadraticCurveTo(470,340,470, 350);
  ctx.quadraticCurveTo(475,355,475, 355);
  ctx.quadraticCurveTo(500,380,560, 385);
  ctx.lineTo(600, 385);
  ctx.quadraticCurveTo(625,380,650, 372);
  ctx.quadraticCurveTo(700,370,700, 368);
  ctx.quadraticCurveTo(700,370,730, 362);
  ctx.quadraticCurveTo(750,350,745, 300);
  ctx.quadraticCurveTo(735,300,745, 291);
  ctx.quadraticCurveTo(737,291,735, 284);
  ctx.quadraticCurveTo(720,255,700, 260);
  ctx.strokeStyle = '#DA2344';
  ctx.fillStyle = '#DA2344';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(608, 300);
  ctx.lineTo(606, 386);
  ctx.moveTo(599, 326);
  ctx.ellipse(599, 326, 3, 1.5, Math.PI / 2, 0, 2 * Math.PI);
  ctx.moveTo(602, 350);
  ctx.ellipse(602, 350, 3, 1.5, Math.PI / 2, 0, 2 * Math.PI);
  ctx.moveTo(599, 375);
  ctx.ellipse(599, 375, 3, 1.5, Math.PI / 2, 0, 2 * Math.PI);
  ctx.strokeStyle = '#231E21';
  ctx.fillStyle = '#231E21';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //Левая рука
  ctx.beginPath();
  ctx.moveTo(450, 290)
  ctx.quadraticCurveTo(440,315,465, 326);
  ctx.quadraticCurveTo(490,327,500, 325);
  ctx.quadraticCurveTo(505,320,500, 315);
  ctx.quadraticCurveTo(497,310,495, 305);
  ctx.quadraticCurveTo(470, 280, 450, 290);
  ctx.lineWidth = 0.9;
  ctx.strokeStyle = '#F9DC02';
  ctx.fillStyle = '#F9DC02';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //Правая рука
  ctx.beginPath();
  ctx.moveTo(750, 290);
  ctx.lineTo(720, 295);
  ctx.quadraticCurveTo(715,310,705, 320);
  ctx.quadraticCurveTo(697,330,719, 329);
  ctx.quadraticCurveTo(740,345,760, 333);
  ctx.quadraticCurveTo(760,300,750, 290);
  ctx.lineWidth = 0.9;
  ctx.strokeStyle = '#f9DC02';
  ctx.fillStyle = '#f9DC02';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawHeadCartman(ctx) { 
  ctx.beginPath();
  ctx.ellipse(600, 220, 120, 100, Math.PI, 0, 2 * Math.PI);
  ctx.lineWidth = 0.9;
  ctx.strokeStyle = '#FFEDBF';
  ctx.fillStyle = '#FFEDBF';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawFaceCartman(ctx) {
  ctx.beginPath();
  ctx.ellipse(570, 208, 22, 27, Math.PI / 4, 0, 2 * Math.PI);
  ctx.moveTo(620, 208);
  ctx.ellipse(620, 209, 22, 28, Math.PI / -5, 0, 2 * Math.PI);
  ctx.strokeStyle = '#B6917D';
  ctx.fillStyle = '#B6917D';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.ellipse(570, 210, 23, 28, Math.PI / 4, 0, 2 * Math.PI);
  ctx.moveTo(620, 208);
  ctx.ellipse(620, 210, 23, 28, Math.PI / -5, 0, 2 * Math.PI);
  ctx.strokeStyle = '#FFF';
  ctx.fillStyle = '#FFF';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(580, 208, 2.3, 0, 2 * Math.PI);
  ctx.moveTo(610, 208);
  ctx.arc(610, 208, 2.3, 0, 2 * Math.PI);
  ctx.strokeStyle = '#211A21';
  ctx.fillStyle = '#211A21';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.ellipse(600, 220, 115, 89, 0, Math.PI / 6,   0.79 * Math.PI);
  ctx.lineWidth = 0.6;
  ctx.strokeStyle = '#282035';
  ctx.fillStyle = '#282035';
  ctx.stroke();
  ctx.closePath();


  ctx.beginPath();
  ctx.moveTo(617, 275);
  ctx.quadraticCurveTo(585, 270, 573, 279);
  ctx.lineTo(589, 293);
  ctx.quadraticCurveTo(597, 294, 603, 296);
  ctx.quadraticCurveTo(611, 296.5, 617, 293);
  ctx.quadraticCurveTo(623, 285, 625, 278);
  ctx.quadraticCurveTo(623, 275, 617, 275);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#282035';
  ctx.fillStyle = '#282035';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(620, 277);
  ctx.quadraticCurveTo(615, 278, 607, 277);
  ctx.lineTo(607, 282);
  ctx.lineTo(618, 282);
  ctx.quadraticCurveTo(622, 282, 620, 277);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#FFF';
  ctx.fillStyle = '#FFF';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(604, 278);
  ctx.lineTo(604, 282);
  ctx.quadraticCurveTo(590, 282, 593, 280);
  ctx.quadraticCurveTo(593, 275, 604, 278);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(590, 277);
  ctx.quadraticCurveTo(585, 278, 583, 281);
  ctx.quadraticCurveTo(591, 284, 590, 277);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(630, 299);
  ctx.quadraticCurveTo(610, 305, 580, 299);
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = '#282035';
  ctx.stroke();
  ctx.closePath();
}

function drawCapCartman(ctx) {
  ctx.beginPath();
  ctx.ellipse(600, 220, 120, 100, Math.PI,  2.05 * Math.PI, 0.9 * Math.PI);
  ctx.quadraticCurveTo(600,150,483, 202);
  ctx.strokeStyle = '#45AEB6';
  ctx.fillStyle = '#45AEB6';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(480, 204);
  ctx.lineTo(478, 210);
  ctx.quadraticCurveTo(600, 150, 718, 197);
  ctx.lineTo(715, 190);
  ctx.quadraticCurveTo(600, 145, 480, 202);
  ctx.strokeStyle = '#FDDE00';
  ctx.fillStyle = '#FDDE00';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(600, 110);
  ctx.quadraticCurveTo(587, 111, 585, 117);
  ctx.quadraticCurveTo(580, 116, 570, 124);
  ctx.quadraticCurveTo(567, 127, 570, 130);
  ctx.quadraticCurveTo(579, 130, 587, 125);
  ctx.lineTo(587, 132);
  ctx.quadraticCurveTo(595, 129, 597, 127);
  ctx.quadraticCurveTo(603, 133, 613, 127);
  ctx.lineTo(622, 127);
  ctx.lineTo(626, 122);
  ctx.quadraticCurveTo(617, 115, 613, 117);
  ctx.quadraticCurveTo(615, 112, 600, 108);
  ctx.lineTo(600, 110);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawCartman(ctx) {
  drawLegsCartman(ctx)
  drawBodyCartman(ctx);
  drawHeadCartman(ctx);
  drawCapCartman(ctx);
  drawFaceCartman(ctx);
}

window.onload = function() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  drawCartman(ctx);
}
