import Screen from "../Screen";
import Input from "../Input";
import "./style.css";

export default class SearchScreen {
  constructor() {}
  render() {
    const content = document.createElement("div");

    const input = new Input({
      title: "search",
      onChange: (value) => this.fetchOmdb(value),
    });

    content.appendChild(input.render());

    const screen = new Screen({ title: "Search", children: content });
    return screen.render();
  }

  fetchOmdb(value) {
    var apiKey = "b63da2a6";

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${value}`);
  }
}
