import fs from "fs";

const vercelConfig = {
  rewrites: [
    {
      source: "/(.*)",
      destination: "/index.html"
    }
  ]
};

fs.writeFileSync(
  "vercel.json",
  JSON.stringify(vercelConfig, null, 2)
);

console.log("✅ vercel.json created automatically");
