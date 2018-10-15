console.log("NODE_ENV", process.env.NODE_ENV);
module.exports = {
  outputDir: "./docs",
  baseUrl: process.env.NODE_ENV === "production" ? "vampidice" : "/"
};
