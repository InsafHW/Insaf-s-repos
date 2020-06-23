function drawLegsKyle(ctx) {
  //Штаны
  ctx.beginPath();
  ctx.rect(230, 310, 150, 90);
  ctx.strokeStyle = '#0C6863';
  ctx.fillStyle = '#0C6863';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //Ноги
  ctx.beginPath();
  ctx.moveTo(320, 400);
  ctx.quadraticCurveTo(280,387,220, 400);
  ctx.strokeStyle = '#312C33';
  ctx.fillStyle = '#312C33';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(270, 400);
  ctx.quadraticCurveTo(350,390,390, 400);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawBodyKyle(ctx) {
  //Курта
  ctx.beginPath();
  ctx.moveTo(230, 300);
  ctx.quadraticCurveTo(205,335,205, 360);
  ctx.lineTo(230, 360);
  ctx.lineTo(220, 375);
  ctx.quadraticCurveTo(320,390,390, 370);
  ctx.lineTo(397, 360);
  ctx.quadraticCurveTo(403,332,370, 290);
  ctx.strokeStyle = '#EF570E';
  ctx.fillStyle = '#EF570E';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(301, 320);
  ctx.lineTo(301, 385);
  ctx.strokeStyle = '#130F0E';
  ctx.fillStyle = '#130F0E';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //Подмышка левая
  ctx.beginPath();
  ctx.moveTo(232, 333);
  ctx.quadraticCurveTo(225,347,226, 360);
  ctx.lineWidth = 0.2;
  ctx.strokeStyle = '#3C383C';
  ctx.fillStyle = '#3C383C';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //Левая рука
  ctx.beginPath();
  ctx.arc(215, 360, 14, 0, 2 * Math.PI);
  ctx.lineWidth = 0.2;
  ctx.strokeStyle = '#000';
  ctx.fillStyle = '#40AE35';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(225, 357, 6, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //Подмышка правая
  ctx.beginPath();
  ctx.moveTo(370, 333);
  ctx.quadraticCurveTo(376,349,377, 360);
  ctx.lineWidth = 0.2;
  ctx.strokeStyle = '#3C383C';
  ctx.fillStyle = '#3C383C';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  
  //Правая рука
  ctx.beginPath();
  ctx.arc(387, 363, 14, 0, 2 * Math.PI);
  ctx.lineWidth = 0.2;
  ctx.strokeStyle = '#000';
  ctx.fillStyle = '#40AE35';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(376, 360, 6, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //Воротник
  ctx.beginPath();
  ctx.moveTo(228, 300);
  ctx.quadraticCurveTo(250,330,290, 337);
  ctx.quadraticCurveTo(299,337,300, 333);
  ctx.quadraticCurveTo(310,342,350, 325);
  ctx.quadraticCurveTo(374,312,378, 300);
  ctx.quadraticCurveTo(381,285,370, 290);
  ctx.strokeStyle = '#000';
  ctx.fillStyle = '#00A53F';
  ctx.fill()
  ctx.stroke();
  ctx.closePath();

  //Карман левый
  ctx.beginPath();
  ctx.moveTo(252, 342);
  ctx.lineTo(279, 342);
  ctx.lineTo(279, 370);
  ctx.lineTo(252, 370);
  ctx.lineTo(252, 342);
  ctx.lineTo(265, 355);
  ctx.lineTo(279, 342);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000';
  ctx.stroke();
  ctx.closePath();

  //Карман правый
  ctx.beginPath();
  ctx.moveTo(321, 342);
  ctx.lineTo(344, 342);
  ctx.lineTo(344, 370);
  ctx.lineTo(320, 370);
  ctx.lineTo(321, 342);
  ctx.lineTo(333, 355);
  ctx.lineTo(344, 342);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000';
  ctx.stroke();
  ctx.closePath();
}

function drawHeadKyle(ctx) {
  //Голова
  ctx.beginPath();
  ctx.arc(300, 230, 100, 0, 2 * Math.PI);
  ctx.strokeStyle = '#FFEDBF';
  ctx.fillStyle = '#FFEDBF';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawFaceKyle(ctx) {
  //Лицо
  ctx.beginPath();
  ctx.ellipse(280, 233, 23, 28, Math.PI / 4, 0, 2 * Math.PI);
  ctx.moveTo(331, 233);
  ctx.ellipse(331, 233, 23, 28, Math.PI / -5, 0, 2 * Math.PI);
  ctx.strokeStyle = '#FFF';
  ctx.fillStyle = '#FFF';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(290, 233, 2.3, 0, 2 * Math.PI);
  ctx.moveTo(320, 233);
  ctx.arc(320, 233, 2.3, 0, 2 * Math.PI);
  ctx.strokeStyle = '#211A21';
  ctx.fillStyle = '#211A21';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(250, 210);
  ctx.lineTo(270, 200);
  ctx.moveTo(350, 210);
  ctx.lineTo(330, 200);
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#282035';
  ctx.fillStyle = '#282035';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(280, 290);
  ctx.quadraticCurveTo(285,300,300, 310);
  ctx.quadraticCurveTo(319,305,330, 290);
  ctx.quadraticCurveTo(310,288,280, 290);  
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = '#282035';
  ctx.fillStyle = '#282035';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(287, 291);
  ctx.quadraticCurveTo(285,300,294, 298);
  ctx.lineTo(295, 291);
  ctx.lineWidth = 0.9;
  ctx.strokeStyle = '#FFF';
  ctx.fillStyle = '#FFF';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(297, 291);
  ctx.quadraticCurveTo(293,302,306, 298);
  ctx.quadraticCurveTo(312,290,299, 291);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(310, 291);
  ctx.lineTo(310, 298);
  ctx.lineTo(318, 297);
  ctx.lineTo(320, 291);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(321, 291);
  ctx.lineTo(328, 291);
  ctx.quadraticCurveTo(328,295,319.5, 297);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawCapKyle(ctx) {
  //Шапка
  ctx.beginPath();
  ctx.moveTo(210, 201);
  ctx.lineTo(210, 140);
  ctx.arc(230, 140, 20, 0, 1.5 * Math.PI);
  ctx.lineTo(370, 120);
  ctx.moveTo(370, 120);
  ctx.arc(370, 140, 20, 0, 2 * Math.PI);
  ctx.lineTo(390, 200);
  ctx.lineTo(210, 200);
  ctx.strokeStyle = '#43B136';
  ctx.fillStyle = '#43B136';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.ellipse(208, 220, 15, 45, Math.PI / 8, 0, 2 * Math.PI);
  ctx.moveTo(405, 215);
  ctx.ellipse(390, 220, 15, 45, Math.PI / -8, 0, 2 * Math.PI);
  ctx.lineWidth = 0.2;
  ctx.strokeStyle = '#000';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(223, 210);
  ctx.lineTo(223, 150);
  ctx.lineTo(377, 150);
  ctx.lineTo(377, 210);
  ctx.quadraticCurveTo(300,195,223, 210);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#01A640';
  ctx.fillStyle = '#01A640';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawKyle(ctx) {
  drawLegsKyle(ctx);
  drawBodyKyle(ctx);
  drawHeadKyle(ctx);
  drawCapKyle(ctx);
  drawFaceKyle(ctx);
}

window.onload = function() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  drawKyle(ctx);
}