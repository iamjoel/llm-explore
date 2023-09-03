const canvasCtx = document.getElementById('canvas').getContext('2d');
drawArrow(canvasCtx, { x: 10, y: 10 }, { x: 100, y: 100 });
/*
* use canvas to draw a arrow from point a to point b
*/
function drawArrow(ctx, a, b) {
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
  ctx.closePath();
  // draw arrow
  const angle = Math.atan2(b.y - a.y, b.x - a.x);
  ctx.beginPath();
  ctx.moveTo(b.x, b.y);
  ctx.lineTo(b.x - 10 * Math.cos(angle - Math.PI / 6), b.y - 10 * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(b.x - 10 * Math.cos(angle + Math.PI / 6), b.y - 10 * Math.sin(angle + Math.PI / 6));
  ctx.lineTo(b.x, b.y);
  ctx.fill();
  ctx.closePath();
}
