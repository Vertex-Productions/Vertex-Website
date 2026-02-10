const data = [
  {
    id: 1,
    title: "Test Announcement",
    date: "February 9, 2026",
    content: "This is a test announcement.",
    category: "News",
  }
];

function displayAnnouncements(data) {
  const listContainer = document.getElementById("announcement-list");
  listContainer.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <span class="tag">${item.category}</span>
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>${item.content}</p>
    `;

    listContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => displayAnnouncements(data));