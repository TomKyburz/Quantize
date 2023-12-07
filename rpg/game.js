const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');

    // Set the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate the center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Calculate the quarter size
    const quarterWidth = canvas.width / 2;
    const quarterHeight = canvas.height / 2;

    canvas.addEventListener('click', handleCanvasClick);

    function handleCanvasClick(event) {
      const x = event.clientX;
      const y = event.clientY;

      // Determine the clicked region
      if (x < centerX && y < centerY) {
        // Top left region
        context.fillStyle = '#e74c3c'; // Red background color
      } else if (x >= centerX && y < centerY) {
        // Top right region
        context.fillStyle = '#3498db'; // Blue background color
      } else if (x < centerX && y >= centerY) {
        // Bottom left region
        context.fillStyle = '#2ecc71'; // Green background color
      } else {
        // Bottom right region
        context.fillStyle = '#9b59b6'; // Purple background color
      }

      // Fill the selected region with the chosen color
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
