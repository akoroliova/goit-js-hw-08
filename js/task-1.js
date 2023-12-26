const list = document.querySelector("#categories");
const listItems = list.children;
console.log(`Number of categories: ${listItems.length}`);

const listItemsStats = list.querySelectorAll(".item");
listItemsStats.forEach((item) => {
  console.log(`Category: ${item.querySelector(".item h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll(".item li").length}`);
});
