let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#5CADAD');
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide();

  // 建立與視訊畫面相同大小的 Graphics
  overlayGraphics = createGraphics(capture.width, capture.height);
  overlayGraphics.fill(255, 0, 0, 150); // 半透明紅色
  overlayGraphics.noStroke();
  overlayGraphics.ellipse(overlayGraphics.width / 2, overlayGraphics.height / 2, 100, 100); // 畫一個圓
}

function draw() {
  background('#5CADAD');

  // 顯示攝影機畫面
  translate(width, 0); // 移動畫布的原點到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);

  // 顯示 overlayGraphics 在視訊畫面上方
  image(
    overlayGraphics,
    (width - capture.width) / 2,
    (height - capture.height) / 2
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);

  // 更新 overlayGraphics 的大小
  overlayGraphics = createGraphics(capture.width, capture.height);
  overlayGraphics.fill(255, 0, 0, 150); // 半透明紅色
  overlayGraphics.noStroke();
  overlayGraphics.ellipse(overlayGraphics.width / 2, overlayGraphics.height / 2, 100, 100); // 畫一個圓
}
