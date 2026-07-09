// ==========================================================
// Scrawldraw Libraries — script.js
// Isme sample library data hai. Isko apne real data se
// replace kar sakte ho (JSON file fetch karke ya API se).
// ==========================================================

// --- Sample data (isko apne actual libraries se replace karo) ---
const libraries = [
    {
        libraryId: "flowchart-basics",
        name: "Flowchart Basics",
        preview: "https://scrawldraw.vercel.app/og-image.png",
        categories: ["diagram", "flowchart"],
        authors: "by Ravi Sharma",
        total: "1,204",
        week: "38",
        created: "12 Jan 2025",
        updated: "02 Jul 2026",
        description: "A simple set of shapes and connectors to quickly build flowcharts and process diagrams.",
        addToLib: "https://scrawldraw.vercel.app/",
        source: "https://github.com/scrawldraw/scrawldraw-libraries",
        target: "_blank",
        appName: "Scrawldraw"
    },
    {
        libraryId: "ui-wireframe-kit",
        name: "UI Wireframe Kit",
        preview: "https://scrawldraw.vercel.app/og-image.png",
        categories: ["ui", "wireframe"],
        authors: "by Priya Verma",
        total: "986",
        week: "21",
        created: "05 Mar 2025",
        updated: "28 Jun 2026",
        description: "Buttons, inputs, cards, and navigation elements for quick hand-drawn UI mockups.",
        addToLib: "https://scrawldraw.vercel.app/",
        source: "https://github.com/scrawldraw/scrawldraw-libraries",
        target: "_blank",
        appName: "Scrawldraw"
    },
    {
        libraryId: "fantasy-map-icons",
        name: "Fantasy Map Icons",
        preview: "https://scrawldraw.vercel.app/og-image.png",
        categories: ["icons", "map"],
        authors: "by Aman Gupta",
        total: "540",
        week: "9",
        created: "20 Aug 2025",
        updated: "15 Jun 2026",
        description: "Mountains, forests, castles, and rivers to draw fantasy-style maps for stories and games.",
        addToLib: "https://scrawldraw.vercel.app/",
        source: "https://github.com/scrawldraw/scrawldraw-libraries",
        target: "_blank",
        appName: "Scrawldraw"
    }
];

// --- Render all library cards ---
function renderLibraries(data) {
    const template = document.getElementById("template");
    const main = document.querySelector("main");

    // Purane render kiye hue cards hata do (template ke alawa)
    document.querySelectorAll(".library:not(#template)").forEach((el) => el.remove());

    data.forEach((lib) => {
        // Template ko clone karo (long-info-text paragraph bhi saath aayega)
        const card = template.cloneNode(true);
        card.removeAttribute("id");
        card.style.display = "";
        card.dataset.categories = (lib.categories || []).join(",");
        card.id = lib.libraryId;

        // --- Image ---
        const img = card.querySelector("img");
        img.dataset.src = lib.preview;
        img.src = lib.preview; // fallback (lazy loading niche setup hai)
        img.alt = lib.name;

        // --- Title + anchor ---
        const h2 = card.querySelector("h2");
        h2.childNodes[0].nodeValue = lib.name + " ";
        const anchor = card.querySelector("h2 a");
        anchor.href = "#" + lib.libraryId;

        // --- Tags ---
        const tagsContainer = card.querySelector(".tags");
        tagsContainer.innerHTML = "";
        (lib.categories || []).forEach((cat) => {
            const span = document.createElement("span");
            span.className = "tag";
            span.textContent = cat;
            tagsContainer.appendChild(span);
        });

        // --- Authors ---
        card.querySelector(".authors").textContent = lib.authors;

        // --- Downloads ---
        const downloadSpan = card.querySelector(".downloads span");
        downloadSpan.title = `Downloads (${lib.week} this week)`;
        downloadSpan.textContent = `⬇️ ${lib.total}`;

        // --- Dates ---
        card.querySelector(".created").textContent = `Created: ${lib.created}`;
        card.querySelector(".updated").textContent = `Updated: ${lib.updated}`;

        // --- Description ---
        // Pehla <p> jo {description} tha
        const descP = card.querySelector("p:not(.authors):not(.long-info-text)");
        if (descP) descP.textContent = lib.description;

        // --- Actions ---
        const installBtn = card.querySelector(".install-library");
        installBtn.href = lib.addToLib;
        installBtn.target = lib.target;
        installBtn.setAttribute(
            "onclick",
            `trackEvent('library', 'import', '${lib.libraryId}')`
        );
        installBtn.textContent = `➡️ Add to ${lib.appName}`;

        const downloadBtn = card.querySelector('.btn[href]:not(.install-library)');
        downloadBtn.href = lib.source;
        downloadBtn.setAttribute(
            "onclick",
            `trackEvent('library', 'download', '${lib.libraryId}')`
        );

        const copyBtn = card.querySelector(".copy-link-btn");
        copyBtn.dataset.libraryId = lib.libraryId;
        copyBtn.setAttribute(
            "onclick",
            `copyLibraryLink('${lib.libraryId}', this)`
        );

        main.appendChild(card);
    });

    initLazyLoad();
    initCategoryFilters(data);
}

// --- Lazy load images ---
function initLazyLoad() {
    const lazyImgs = document.querySelectorAll("img.lazy");
    if (!("IntersectionObserver" in window)) {
        lazyImgs.forEach((img) => {
            img.src = img.dataset.src;
        });
        return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                obs.unobserve(img);
            }
        });
    });
    lazyImgs.forEach((img) => observer.observe(img));
}

// --- Search ---
function initSearch() {
    const input = document.getElementById("search-input");
    if (!input) return;

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        document.querySelectorAll(".library:not(#template)").forEach((card) => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? "" : "none";
        });
    });

    // Type anywhere on page -> auto focus search
    document.addEventListener("keydown", (e) => {
        if (
            document.activeElement === input ||
            e.ctrlKey || e.metaKey || e.altKey
        ) {
            return;
        }
        if (e.key.length === 1) {
            input.focus();
        }
    });
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
    renderLibraries(libraries);
    initSearch();
});