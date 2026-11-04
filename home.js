const isPWAWindow = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

function checkPWA() {
  if (isPWAWindow) {
    window.location.href = "/home/index3.html";
  } else {
    console.log("nothing")
  }
}
checkPWA()

window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed successfully!')
  checkPWA()
});

// 3. Optional Extra Safety: Listen for real-time display-mode switching
window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
  if (evt.matches) {
    window.location.href = "/home/index3.html"
  }
});
