import { JSDOM } from "jsdom";

test("finds all image elements in the HTML", () => {
  const html = `
    <html>
      <body>
        <img src="one.jpg" alt="First image">
        <img src="two.jpg">
      </body>
    </html>
  `;

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const images = document.querySelectorAll("img");

  expect(images.length).toBe(2);
  expect(images[0].getAttribute("alt")).toBe("First image");
  expect(images[1].hasAttribute("alt")).toBe(false);
});
