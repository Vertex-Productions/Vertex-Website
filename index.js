const data = [
  {
    id: 1,
    title: "Server Tag & Bot Update",
    date: "February 17, 2026",
    content: "We now have our own server tag in our Discord Server.\n\nWe have also pushed out some changes that improve /do-all & /chat use.\n\nThanks for reading and keep using our bot.",
    category: "Discord"
  },
  {
    id: 1,
    title: "Website Launch",
    date: "February 9, 2026",
    content: "We are excited to announce the launch of our new website!\n\nWe will be sharing our announcements here. Our updates and member count goals will still occur on our Discord server. (https://discord.gg/c5rHxJ3sr8)",
    category: "News"
  },
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
      <p>${item.content.replace(/\n/g, '<br>')}</p>
    `;

    listContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => displayAnnouncements(data));
