function bouncingBall(h, bounce, window) {
  if (h < 0) return -1;
  if (bounce >= 1 || bounce <= 0) return -1;
  if (window >= h) return -1;

  let viewCount = 1;
  let ballHeight = h;

  while (true) {
    ballHeight = ballHeight * bounce;
    if (ballHeight > window) {
      viewCount += 2;
    } else {
      break;
    }
  };

  return viewCount;
}

module.exports = bouncingBall;

// Best Clever
/*
function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}
*/
