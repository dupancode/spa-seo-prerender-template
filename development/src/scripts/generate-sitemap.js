import fs from "fs";
import { resolve } from "path";
import { router } from "../configuration/router.js";
const routes = router;
const baseUrl = "https://dupancode.com";

const urls = routes.map(
  (route) => `  <url><loc>${baseUrl}${route}</loc></url>`
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

fs.writeFileSync(resolve("dist/sitemap.xml"), sitemap);
console.log("✅ sitemap.xml created!");
