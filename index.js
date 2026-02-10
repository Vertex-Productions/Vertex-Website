const data = [
  {
    id: 1,
    title: "Website Launch",
    date: "February 9, 2026",
    content: "We are excited to announce the launch of our new website!\nWe will be sharing our announcements here. Our updates and member count goals will still occur on our Discord server. (https://discord.gg/c5rHxJ3sr8)",
    category: "News",
  }
]

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