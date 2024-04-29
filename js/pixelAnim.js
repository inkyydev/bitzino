let width, height;
      let pixels = [];
      let coloredPixels = [];
      let colors = ["#F24E1E", "#0A84FF", "#17CF8D"];
      let currentPixel = 0;
      const mousePosition = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      const pixelWidth = 35;
      const pixelHeight = 35;
      const pixelMargin = 3;

      const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        pixels = [];
        for (var y = 0; y < height / (pixelHeight + pixelMargin); y++) {
          for (var x = 0; x < width / (pixelWidth + pixelMargin); x++) {
            pixels.push([
              x * (pixelWidth + pixelMargin),
              y * (pixelHeight + pixelMargin),
              pixelWidth,
              pixelHeight,
              "#222",
              1,
            ]);
          }
        }
      };

      const drawGrid = () => {
        ctx.clearRect(0, 0, width, height);

        for (var i = 0, l = pixels.length; i < l; i++) {
          pixels[i][4] = 0;
        }

        for (var i = 0, l = coloredPixels.length; i < l; i++) {
          var pix =
            Math.floor(coloredPixels[i].y / (pixelHeight + pixelMargin)) *
              (Math.floor(width / (pixelWidth + pixelMargin)) + 1) +
            Math.floor(coloredPixels[i].x / (pixelWidth + pixelMargin));
          if (pixels[pix]) {
            pixels[pix][4] = coloredPixels[i].color;
            pixels[pix][5] = coloredPixels[i].alpha;
          }

          if (coloredPixels[i].alpha > 0) coloredPixels[i].alpha -= 0.008;
          if (coloredPixels[i].alpha < 0) coloredPixels[i].alpha = 0;
          coloredPixels[i].x += coloredPixels[i].vx;
          coloredPixels[i].y += coloredPixels[i].vy;
        }

        for (var i = 0, l = pixels.length; i < l; i++) {
          ctx.globalAlpha = 1;
          ctx.fillStyle = "#222";
          ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
          ctx.globalAlpha = pixels[i][5];
          ctx.fillStyle = pixels[i][4];
          ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
        }
      };

      const draw = () => {
        launchPixel();
        launchPixel();
        drawGrid();
        requestAnimationFrame(draw);
      };

      const initColoredPixels = () => {
        for (var i = 0; i < 300; i++) {
          coloredPixels.push({
            x: width / 2,
            y: height / 2,
            alpha: 0,
            color: colors[i % 5],
            vx: -1 + Math.random() * 2,
            vy: -1 + Math.random() * 2,
          });
        }
      };

      const launchPixel = () => {
        const rect = canvas.getBoundingClientRect();
        coloredPixels[currentPixel].x = mousePosition.x - rect.left;
        coloredPixels[currentPixel].y = mousePosition.y - rect.top + 400;
        coloredPixels[currentPixel].alpha = 1;

        currentPixel++;
        if (currentPixel > 299) currentPixel = 0;
      };

      resize();
      initColoredPixels();
      draw();

      document
        .getElementById("canvas-wrapper")
        .addEventListener("mousemove", function (e) {
          const rect = canvas.getBoundingClientRect();
          mousePosition.x = e.clientX - rect.left;
          mousePosition.y = e.clientY - rect.top;
        });

      const touchMove = (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        mousePosition.x = e.touches[0].clientX - rect.left;
        mousePosition.y = e.touches[0].clientY - rect.top;
      };

      canvas.addEventListener("touchstart", touchMove);
      canvas.addEventListener("touchmove", touchMove);