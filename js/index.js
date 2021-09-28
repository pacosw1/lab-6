$(document).ready(function () {
  const ids = new Set();
  const list = $("#Lista");

  $(document).on("click", ".delete-btn", (e) => {
    const id = `#item-${e.target.id}`;
    $(id).remove();
  });

  $(document).on("click", ".check-btn", (e) => {
    const item = `#item-${e.target.id}`;
    const title = $(item).find("h1");
    if (!title.attr("checked")) {
      title.css("textDecoration", "line-through");
      title.attr("checked", true);
    } else {
      title.attr("checked", false);
      title.css("textDecoration", "none");
    }
  });

  $(".agregar").click((e) => {
    e.preventDefault();
    const itemText = $("#newText").val();

    if (itemText == "") return;
    const id = generateId(ids);
    const newItem = `<div id="item-${id}" class="item">
        <h1 class="title">${itemText}</h1>
        <div class="button-row">
            <button id="${id}" class="check-btn btn">Check</button>
            <button id="${id}" class="delete-btn btn">Delete</button>
        </div>
    </div>`;

    list.append(newItem);
  });
});

const generateId = (ids) => {
  const id = Math.floor(Math.random() * 5000);
  if (ids.has(id)) {
    generateId(ids);
  }

  ids.add(id);
  return id;
};
