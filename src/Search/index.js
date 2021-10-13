import Screen from "../Screen";
import "./style.css";

export default class SearchScreen extends Screen {
  constructor() {
    const content = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("search");

    content.appendChild(input);

    return super({ title: "Search", children: content });
  }
}
