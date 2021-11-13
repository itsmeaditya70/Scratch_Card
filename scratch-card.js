var num=Math.floor(Math.random()*4)+1;

$('#card').wScratchPad({
    size        : 60,          // The size of the brush/scratch.
    bg          : `Gpay_Card ${num}.jpg`,  // Background (image path or hex color).
    fg          : `front.jpg`,  // Foreground (image path or hex color).
    cursor      : 'pointer' // Set cursor.
  });