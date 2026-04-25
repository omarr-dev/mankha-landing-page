import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "src", "app", "icon.svg");
const APP_DIR = join(ROOT, "src", "app");

const PARCHMENT = { r: 245, g: 244, b: 237, alpha: 1 };

async function makeSquare(size, { background }) {
  const logo = await sharp(SRC)
    .resize({
      width: Math.round(size * 0.78),
      height: Math.round(size * 0.78),
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

const iconPng = await makeSquare(512, { background: PARCHMENT });
await writeFile(join(APP_DIR, "icon.png"), iconPng);
console.log("wrote src/app/icon.png (512x512)");

const applePng = await makeSquare(180, { background: PARCHMENT });
await writeFile(join(APP_DIR, "apple-icon.png"), applePng);
console.log("wrote src/app/apple-icon.png (180x180)");
