import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const SITE_URL = "https://shreepati-educational-services-a35b.vercel.app/"; // 🔴 CHANGE THIS

// ✅ ONLY REAL ROUTES (URLs), not components
const routes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact"
];

const sitemap = new SitemapStream({ hostname: SITE_URL });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

routes.forEach(route => {
  sitemap.write({
    url: route,
    changefreq: "weekly",
    priority: route === "/" ? 1.0 : 0.8
  });
});

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log("✅ sitemap.xml generated successfully");
});
