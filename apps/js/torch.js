function torch() {
    // Check if the browser supports the torch API
if ('torch' in navigator) {
    const button = document.getElementById("torch")
  
    button.addEventListener('click', async () => {
      try {
        // Request permission to use the torch
        await navigator.permissions.request({ name: 'torch' });
  
        // Turn on the flashlight
        await navigator.torch.turnOn();
        console.log("on")
  
        console.log('Flashlight turned on!');
      } catch (error) {
        console.log('Error:', error);
      }
    });
  } else {
    console.log('Flashlight access is not supported by this device/browser.');
  }
  
}