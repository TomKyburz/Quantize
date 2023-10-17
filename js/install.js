window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Prevent the browser's default install prompt
  const installButton = document.getElementById('install-button'); // Replace with your install button element

  installButton.style.display = 'block'; // Show the custom install button

  installButton.addEventListener('click', () => {
    event.prompt(); // Show the browser's install prompt
    event.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      installButton.style.display = 'none'; // Hide the custom install button
    });
  });
});
