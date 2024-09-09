const fs = require("fs/promises");

(async () => {
  const file = await fs.readFile("README.md", "utf8");
  console.log(file);
})();
