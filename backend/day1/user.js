const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Learning</title></head>");

    res.write("<body><h1>Enter Your Details: </h1>");

    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="name" name="name" placeholder="Enter Your Name" /> <br />',
    );

    res.write('<label for="male"> Male </label>');

    res.write('<input type="radio" id="male" name="gender" value="male" />');

    res.write('<label for="female"> Female </label>');

    res.write(
      '<input type="radio" id="female" name="gender" value="female" /> <br />',
    );

    res.write('<input type="submit" value="Submit" />');

    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "Tarun Kumar");
    res.StatusCode = 302;
    res.setHeader("Location", "/");
    // return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My App</title></head>");
  res.write("<body><h1>Hello, World!</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
