const express = require("express");
const app = express();
const port = 3000;

app.use("/MFHost", express.static("host-app/out"));
app.use("/MFRemote", express.static("remote-app/dist"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
