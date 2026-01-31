const valentineWeekDays = [
  {
    name: "Rose Day",
    icon: "🌹",
    dateLabel: "Feb 7",
    description: "A day to let your love bloom with a single rose and a gentle promise.",
    idea: "Leave a fresh rose and a handwritten note by her pillow.",
    copyLine:
      "Sweety, if love had a color, it would be the way you make my world bloom 🌹",
    accent: "#f08aaa",
  },
  {
    name: "Propose Day",
    icon: "💍",
    dateLabel: "Feb 8",
    description: "Celebrate the courage to say ‘us’ out loud, every single day.",
    idea: "Record a short voice note sharing why you choose her.",
    copyLine:
      "Sweety, today I propose something simple—more us, every day 💍",
    accent: "#f15b84",
  },
  {
    name: "Chocolate Day",
    icon: "🍫",
    dateLabel: "Feb 9",
    description: "Sweetness for the sweetest soul, with tiny surprises along the way.",
    idea: "Gift her a curated chocolate box with a love tag.",
    copyLine:
      "Sweety, you’re sweeter than every chocolate I’ve ever tasted 🍫",
    accent: "#d1767c",
  },
  {
    name: "Teddy Day",
    icon: "🧸",
    dateLabel: "Feb 10",
    description: "A warm cuddle in the form of a soft, loyal companion.",
    idea: "Send her a plush with a tiny heart pinned to it.",
    copyLine:
      "Sweety, if I could, I’d hug you into a teddy and keep you close 🧸",
    accent: "#f5a0b7",
  },
  {
    name: "Promise Day",
    icon: "🤞",
    dateLabel: "Feb 11",
    description: "A gentle reminder that you always show up for each other.",
    idea: "Write three promises on a card and seal it with a kiss.",
    copyLine:
      "Sweety, I promise to show up—on easy days and hard days 🤞",
    accent: "#f08aaa",
  },
  {
    name: "Hug Day",
    icon: "🤗",
    dateLabel: "Feb 12",
    description: "Wrap her in comfort, even from miles away.",
    idea: "Send a message saying the hug is waiting with her favorite song.",
    copyLine:
      "Sweety, consider this a long hug that lasts all day 🤗",
    accent: "#ef7ea3",
  },
  {
    name: "Kiss Day",
    icon: "😘",
    dateLabel: "Feb 13",
    description: "Soft kisses, sweeter whispers, and lingering feelings.",
    idea: "Plan a cozy moment with her favorite drink and a kiss emoji trail.",
    copyLine:
      "Sweety, one kiss can say what my words can’t 😘",
    accent: "#f36f8d",
  },
  {
    name: "Valentine’s Day",
    icon: "💖",
    dateLabel: "Feb 14",
    description: "The grand celebration of a love that keeps growing.",
    idea: "Plan a candlelit video call or a surprise date.",
    copyLine:
      "Sweety, you’re my favorite person—today and always 💖",
    accent: "#d13b5e",
    highlight: true,
  },
];

const galleryItems = [
  {
    src: "",
    caption: "Our first coffee together",
  },
  {
    src: "",
    caption: "That sunset walk",
  },
  {
    src: "",
    caption: "Laughing till midnight",
  },
  {
    src: "",
    caption: "A surprise bouquet",
  },
  {
    src: "",
    caption: "Your favorite smile",
  },
  {
    src: "",
    caption: "Forever us",
  },
];

const noteTemplates = [
  "{to}, every time I think of {favorite}, my heart softens. You are my sweetest calm.",
  "Hey {to}, {memory} keeps playing in my mind and I smile every time.",
  "{to}, you make ordinary days feel like poetry. Stay close to me.",
  "Sweet {to}, you are my favorite hello and my safest place.",
  "{to}, I adore {favorite}. Thank you for being the glow in my life.",
  "My love {to}, {memory} reminds me why I choose you, always.",
  "{to}, you are the softest part of my day and the brightest part of my heart.",
  "{to}, your laugh is my favorite song and my forever repeat.",
  "{to}, I love the way you turn moments into memories.",
  "{to}, my heart feels at home with you — today and every day.",
  "{to}, you are the wish my heart keeps making.",
  "{to}, I fell for you once and I keep falling for you every day.",
  "{to}, even when we are apart, I feel your love around me.",
  "{to}, if I could bottle {memory}, I would keep it close forever.",
];

const toneFlavors = {
  Cute: ["sparkle", "giggle", "sweet"],
  Romantic: ["kiss", "forever", "darling"],
  Deep: ["soul", "home", "quiet"],
  Funny: ["goofy", "silly", "oops"],
};

const dayGrid = document.getElementById("days-grid");
const dayModal = document.getElementById("day-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalCopyline = document.getElementById("modal-copyline");
const modalIdea = document.getElementById("modal-idea");
const modalCopy = document.getElementById("modal-copy");
const toast = document.getElementById("toast");

const galleryGrid = document.getElementById("gallery-grid");
const galleryModal = document.getElementById("gallery-modal");
const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");

const noteForm = document.getElementById("note-form");
const noteText = document.getElementById("note-text");
const copyNoteButton = document.getElementById("copy-note");
const downloadNoteButton = document.getElementById("download-note");

const countdownValues = document.getElementById("countdown-values");
const countdownMessage = document.getElementById("countdown-message");

const surpriseButton = document.getElementById("surprise-button");
const surpriseMessage = document.getElementById("surprise-message");
const confetti = document.querySelector(".confetti");

const shareButton = document.getElementById("share-button");

const navMenu = document.querySelector(".navbar nav");
const navToggle = document.querySelector(".menu");

const settings = {
  targetMonth: 2,
  targetDay: 14,
  targetHour: 0,
  targetMinute: 0,
  timezone: "Asia/Kolkata",
};

const buildDayCards = () => {
  dayGrid.innerHTML = "";
  valentineWeekDays.forEach((day) => {
    const card = document.createElement("button");
    card.className = `day-card fade-in${day.highlight ? " highlight" : ""}`;
    card.type = "button";
    card.style.borderTop = `3px solid ${day.accent}`;
    card.innerHTML = `
      <div class="icon">${day.icon}</div>
      <h3>${day.name}</h3>
      <p class="accent">${day.dateLabel}</p>
      <p>${day.description}</p>
    `;
    card.addEventListener("click", () => openDayModal(day));
    dayGrid.appendChild(card);
  });
};

const buildGallery = () => {
  galleryGrid.innerHTML = "";
  galleryItems.forEach((item, index) => {
    const card = document.createElement("button");
    card.className = "gallery-item fade-in";
    card.type = "button";
    const placeholder = item.src
      ? `<img src="${item.src}" alt="${item.caption}" />`
      : `<div class="placeholder">💗</div>`;
    card.innerHTML = `
      ${placeholder}
      <p>${item.caption}</p>
    `;
    card.addEventListener("click", () => openGalleryModal(item, index));
    galleryGrid.appendChild(card);
  });
};

const openDayModal = (day) => {
  modalTitle.textContent = `${day.icon} ${day.name}`;
  modalDescription.textContent = day.description;
  modalCopyline.textContent = day.copyLine;
  modalIdea.textContent = `Sweet idea: ${day.idea}`;
  modalCopy.dataset.copy = day.copyLine;
  openModal(dayModal);
};

const openGalleryModal = (item, index) => {
  if (item.src) {
    galleryImage.src = item.src;
    galleryImage.alt = item.caption;
    galleryImage.style.display = "block";
  } else {
    galleryImage.src =
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='600' height='400' fill='%23ffeaf1'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23d13b5e' font-size='36'>Sweety 💗</text></svg>";
    galleryImage.alt = "Placeholder";
    galleryImage.style.display = "block";
  }
  galleryCaption.textContent = item.caption || `Memory ${index + 1}`;
  openModal(galleryModal);
};

const openModal = (modal) => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  const focusable = modal.querySelector("button, [href], input");
  if (focusable) focusable.focus();
};

const closeModal = (modal) => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
};

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
};

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard 💗");
  } catch (error) {
    showToast("Copy failed — try again");
  }
};

const setupModalEvents = () => {
  [dayModal, galleryModal].forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal(modal);
    });
    modal.querySelector(".close").addEventListener("click", () =>
      closeModal(modal)
    );
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      [dayModal, galleryModal].forEach((modal) => closeModal(modal));
    }
  });
};

const toneChips = document.querySelectorAll(".chip");
let selectedTone = "Cute";

const updateTone = (tone) => {
  selectedTone = tone;
  toneChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.tone === tone);
  });
};

toneChips.forEach((chip) => {
  chip.addEventListener("click", () => updateTone(chip.dataset.tone));
});

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(noteForm);
  const to = formData.get("to") || "Sweety";
  const favorite = formData.get("favorite") || "the way you care";
  const memory = formData.get("memory") || "our quiet moments";
  const template =
    noteTemplates[Math.floor(Math.random() * noteTemplates.length)];
  const flavor =
    toneFlavors[selectedTone][
      Math.floor(Math.random() * toneFlavors[selectedTone].length)
    ];

  const note = template
    .replaceAll("{to}", to)
    .replaceAll("{favorite}", `${favorite} (${flavor})`)
    .replaceAll("{memory}", memory);

  noteText.textContent = note;
});

copyNoteButton.addEventListener("click", () => copyText(noteText.textContent));

const downloadNote = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = 700;
  const height = 480;
  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = "#ffeaf1";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#d13b5e";
  ctx.font = "28px 'Playfair Display', serif";
  ctx.fillText("For Sweety 💗", 40, 60);
  ctx.fillStyle = "#3a2b32";
  ctx.font = "22px 'Inter', sans-serif";

  const words = noteText.textContent.split(" ");
  let line = "";
  let y = 130;
  words.forEach((word) => {
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > 600) {
      ctx.fillText(line, 40, y);
      line = `${word} `;
      y += 34;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, 40, y);

  const link = document.createElement("a");
  link.download = "note-for-sweety.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
};

downloadNoteButton.addEventListener("click", downloadNote);

modalCopy.addEventListener("click", () => {
  copyText(modalCopy.dataset.copy || "");
});

const getTimeZoneOffset = (date, timeZone) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts = formatter.formatToParts(date).reduce((acc, part) => {
    if (part.type !== "literal") acc[part.type] = part.value;
    return acc;
  }, {});
  const asUTC = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );
  return (asUTC - date.getTime()) / 60000;
};

const zonedTimeToUtc = (year, month, day, hour, minute, timeZone) => {
  const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
  const offset = getTimeZoneOffset(utcDate, timeZone);
  return new Date(utcDate.getTime() - offset * 60000);
};

const getZonedYear = (timeZone) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
  });
  return Number(formatter.format(new Date()));
};

const updateCountdown = () => {
  const now = new Date();
  const currentYear = getZonedYear(settings.timezone);
  let target = zonedTimeToUtc(
    currentYear,
    settings.targetMonth,
    settings.targetDay,
    settings.targetHour,
    settings.targetMinute,
    settings.timezone
  );

  if (now > target) {
    target = zonedTimeToUtc(
      currentYear + 1,
      settings.targetMonth,
      settings.targetDay,
      settings.targetHour,
      settings.targetMinute,
      settings.timezone
    );
  }

  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    countdownValues.innerHTML = "";
    countdownMessage.textContent = "It’s Valentine’s Day, Sweety 💖";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  countdownValues.innerHTML = units
    .map(
      (unit) => `
      <div class="unit">
        <div class="value">${String(unit.value).padStart(2, "0")}</div>
        <div class="label">${unit.label}</div>
      </div>
    `
    )
    .join("");

  countdownMessage.textContent = `Counting down to ${settings.timezone} midnight.`;
};

const setupScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".section, .hero-card").forEach((el) => {
    el.classList.add("fade-in");
  });
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
};

const setupHearts = () => {
  const heartLayer = document.createElement("div");
  heartLayer.className = "floating-hearts";
  document.body.appendChild(heartLayer);
  for (let i = 0; i < 12; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 12}s`;
    heart.style.animationDuration = `${10 + Math.random() * 8}s`;
    heartLayer.appendChild(heart);
  }
};

surpriseButton.addEventListener("click", () => {
  surpriseMessage.classList.add("show");
  confetti.classList.add("show");
});

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "For Sweety 💗 | Valentine Week",
    text: "A Valentine Week surprise made with love by Pintu.",
    url: window.location.href,
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      showToast("Shared with love 💗");
      return;
    } catch (error) {
      showToast("Sharing cancelled");
    }
  }
  copyText(window.location.href);
});

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

window.addEventListener("load", () => {
  buildDayCards();
  buildGallery();
  setupModalEvents();
  setupScrollAnimations();
  setupHearts();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
