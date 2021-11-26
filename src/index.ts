import { abcd } from "./abcd";
import "./index.scss";

for (const abc of abcd()) {
  const div = document.createElement("div");
  document.body.append(div);

  div.innerText = `${abc} here`;
}
