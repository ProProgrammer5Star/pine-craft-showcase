import fs from "fs";
import path from "path";

const distClient = path.resolve("dist/client");
const assetsDir = path.join(distClient, "assets");

function findAsset(pattern) {
  const files = fs.readdirSync(assetsDir);
  const match = files.find((f) => pattern.test(f));
  return match ? `assets/${match}` : null;
}

const indexJs = findAsset(/^index-[A-Za-z0-9]+\.js$/);
const routesJs = findAsset(/^routes-[A-Za-z0-9]+\.js$/);
const stylesCss = findAsset(/^styles-[A-Za-z0-9]+\.css$/);

if (!indexJs || !stylesCss) {
  console.error("Could not find required build assets");
  console.error("indexJs:", indexJs);
  console.error("stylesCss:", stylesCss);
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>EPS Flooring and Carpentry | Port Charlotte, FL</title>
  <meta name="description" content="Licensed flooring & custom carpentry contractor serving Port Charlotte, Sarasota, North Port, Englewood, Venice, Fort Myers." />
  <meta name="author" content="EPS Flooring and Carpentry" />
  <meta property="og:title" content="EPS Flooring and Carpentry | Port Charlotte, FL" />
  <meta property="og:description" content="Licensed flooring & custom carpentry contractor serving Port Charlotte, Sarasota, North Port, Englewood, Venice, Fort Myers." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@Lovable" />
  <meta name="twitter:title" content="EPS Flooring and Carpentry | Port Charlotte, FL" />
  <meta name="twitter:description" content="Licensed flooring & custom carpentry contractor serving Port Charlotte, Sarasota, North Port, Englewood, Venice, Fort Myers." />
  <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/36d996e6-296b-4a5c-8d30-a18b4737423b" />
  <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/36d996e6-296b-4a5c-8d30-a18b4737423b" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/${stylesCss}" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/${indexJs}"></script>
  ${routesJs ? `<script type="module" src="/${routesJs}"></script>` : ""}
</body>
</html>
`;

fs.writeFileSync(path.join(distClient, "index.html"), html);
console.log("Generated dist/client/index.html");
