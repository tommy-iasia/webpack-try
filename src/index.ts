import { abcd } from "./abcd";
import "./index.scss";

const box = document.querySelector(".abcd");
if (box) {
  for (const abc of abcd()) {
    const div = document.createElement("div");
    div.innerText = `${abc} here`;

    box.append(div);
  }
}
