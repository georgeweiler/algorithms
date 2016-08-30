function bouncingBall(h,  bounce,  window) {
  windowPass = 0;
  if(bounce === 1){ return -1}
  (function simulateBounce(newHeight, bounce){
    newHeight *= bounce;
    if(newHeight > window){
      windowPass+=2;
      simulateBounce(newHeight, bounce);
    } else {
      windowPass++;
      return
    }
  })(h, bounce)
  return windowPass
}
