let progressBar = document.getElementById('progress-bar');
let progressText = document.querySelector('.progress-text');
let button33 = document.getElementById('button-33');
let button66 = document.getElementById('button-66');
let button100 = document.getElementById('button-100');

function setProgress(percentage) {
  progressBar.style.width = percentage + '%';
  progressText.textContent = percentage + '%';
}
setProgress(0);

button33.addEventListener('click', function() {
  setProgress(33);
});

button66.addEventListener('click', function() {
  setProgress(66);
});

button100.addEventListener('click', function() {
  setProgress(100);
});
