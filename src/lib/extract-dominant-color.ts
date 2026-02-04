import { Vibrant } from "node-vibrant/node";
import { NodeImage } from "@vibrant/image-node";

/**
 * Extract the dominant color from an image URL.
 *
 * Uses node-vibrant to compute a palette and returns the most suitable
 * color for use as a background.
 *
 * @param imageUrl - The image URL to analyze
 * @returns Hex color string (e.g. "#ff5733") if extraction succeeds, undefined otherwise
 */
export async function extractDominantColor(
  imageUrl: string
): Promise<string | undefined> {
  try {
    const vibrant = new Vibrant(imageUrl, {
      ImageClass: NodeImage,
      colorCount: 128,
    });
    const palette = await vibrant.getPalette();

    // Priority order for background colors
    const color =
      palette.LightVibrant ||
      palette.Vibrant ||
      palette.DarkVibrant ||
      palette.Muted ||
      palette.LightMuted ||
      palette.DarkMuted;

    return color?.hex;
  } catch (error) {
    console.warn("Failed to extract dominant color", { imageUrl, error });
    return undefined;
  }
}
