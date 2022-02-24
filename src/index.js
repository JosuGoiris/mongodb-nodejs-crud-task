import app from "./app";
import "./database";
import { PORT } from "./config";

const server = app.listen(PORT, () => {
  console.log("server started");
});
process.on("SIGTERM", () => {
  server.close(() => {
    setTimeout(() => {
      process.exit(0);
    }, 3000);
  });
});

console.log("Server on port", PORT);
