/**
 * Extract the dominant color from an image using Canvas API.
 * This runs in the browser and is useful for real-time preview.
 *
 * @param imageSrc - The image URL to analyze
 * @returns RGB color string (e.g. "rgb(255, 87, 51)") if extraction succeeds, undefined otherwise
 */
export function extractDominantColorFromImage(
  imageSrc: string
): Promise<string | undefined> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(undefined);
          return;
        }
        const size = 10;
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);
        const imageData = ctx.getImageData(0, 0, size, size).data;

        let r = 0,
          g = 0,
          b = 0,
          count = 0;
        for (let i = 0; i < imageData.length; i += 4) {
          r += imageData[i];
          g += imageData[i + 1];
          b += imageData[i + 2];
          count++;
        }
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);
        resolve(`rgb(${r}, ${g}, ${b})`);
      } catch {
        resolve(undefined);
      }
    };
    img.onerror = () => resolve(undefined);
    img.src = imageSrc;
  });
}
