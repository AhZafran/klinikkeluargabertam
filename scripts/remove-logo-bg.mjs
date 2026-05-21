import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const input = "public/logo/logo klinikmedicare.png";
const output = "public/logo/logo.png";

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const px = Buffer.from(data);

// Tunables: anything brighter than `opaqueAt` is fully transparent;
// anything darker than `transparentAt` stays opaque; in between fades.
const opaqueAt = 245;       // r,g,b all >= this -> fully transparent
const transparentAt = 215;  // r,g,b all >= this -> start fading

for (let i = 0; i < px.length; i += channels) {
  const r = px[i];
  const g = px[i + 1];
  const b = px[i + 2];
  const minC = Math.min(r, g, b);

  if (minC >= opaqueAt) {
    px[i + 3] = 0;
  } else if (minC >= transparentAt) {
    const t = (minC - transparentAt) / (opaqueAt - transparentAt);
    px[i + 3] = Math.round(px[i + 3] * (1 - t));
  }
}

const buf = await sharp(px, { raw: { width, height, channels } })
  .trim()
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile(output, buf);
console.log(`Wrote ${output} (${buf.length.toLocaleString()} bytes)`);
