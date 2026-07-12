/* ==========================================================================
   CONTENT DATA — sourced only from Shivani Sivakumar's resume document.
   Each entry becomes one "specimen slide" card, and one nav tab.
   ========================================================================== */
const CARDS = [
  {
    id: "objective",
    tag: "SPECIMEN 01",
    tab: "Objective",
    title: "Objective",
    sub: "Research focus & guiding principle",
    preview: "Honors Biomedical Sciences undergraduate seeking research or internship opportunities in molecular biology, oncology, microbiome science, and population health.",
    bodyHTML: `
      <div class="block">
        <p>Honors Biomedical Sciences undergraduate with extensive laboratory and community-based research experience, seeking research or internship opportunities in molecular biology, oncology, microbiome science, and population health.</p>
        <p>Guided by the principle <em>"Service to Society is best for Humanity"</em>, I aim to contribute to data-driven biomedical research and translational health initiatives while advancing scientific rigor, ethical research practice, and community impact.</p>
      </div>`
  },
  {
    id: "education",
    tag: "SPECIMEN 02",
    tab: "Education",
    title: "Education",
    sub: "Purdue University — Fall 2024 to May 2028",
    preview: "Bachelor of Science in Biomedical Sciences (Honors, Pre-Medicine), Minor in Psychology. CGPA: 3.83 / 4.0.",
    bodyHTML: `
      <div class="block">
        <p class="block-role">Purdue University — West Lafayette, USA</p>
        <p class="block-meta">Fall 2024 — May 2028</p>
        <ul class="bullets">
          <li>Bachelor of Science in Biomedical Sciences (Honors, Pre-Medicine), Minor in Psychology</li>
          <li>CGPA: 3.83 / 4.0</li>
          <li>Dean's List and Semester Honors for Fall '24 – Spring '26 semesters</li>
        </ul>
      </div>`
  },
  {
    id: "research-jaiswal",
    tag: "SPECIMEN 03",
    tab: "Jaiswal Lab",
    title: "Undergraduate Researcher — Jaiswal Lab",
    sub: "Dr. Natasha Jaiswal's Laboratory, Purdue University · Mar 2025 – Present",
    preview: "DNA isolation, PCR, immunostaining, confocal imaging, and transcriptomic analysis across three projects: NMJ, Microbiome, and Collaborative Imaging.",
    bodyHTML: `
      <div class="block">
        <p class="block-role">Undergraduate Researcher</p>
        <p class="block-meta">Dr. Natasha Jaiswal's Laboratory — Purdue University, School of Health Sciences · Mar 2025 — Present</p>
        <ul class="bullets">
          <li>Perform DNA isolation, Nanodrop quantification, PCR, immunostaining, and NMJ analysis</li>
          <li>Conduct image analysis (ImageJ) and observe confocal microscopy</li>
          <li>Analyze transcriptomic datasets using RStudio, generating volcano graphs plotting gene expression</li>
          <li>Contribute to protocol development, manuscript drafting, and laboratory website creation</li>
        </ul>
      </div>
      <div class="block">
        <p class="block-role">Projects</p>
        <div class="subproject">
          <p class="subproject-title">Neuromuscular Junction (NMJ) Project</p>
          <ul class="bullets"><li>Genotyping, PCR, immunostaining, NMJ quantification</li></ul>
        </div>
        <div class="subproject">
          <p class="subproject-title">Microbiome Project</p>
          <ul class="bullets"><li>RNA-sequencing analysis using the Illumina program</li></ul>
          <span class="badge">Co-author, Purdue Undergraduate Research Conference (Spring '26)</span>
        </div>
        <div class="subproject">
          <p class="subproject-title">Collaborative Imaging Project</p>
          <ul class="bullets"><li>NMJ innervation and fragmentation analysis</li></ul>
          <span class="badge">Co-author — "Dietary omega-6 arachidonic acid and omega-3 docosahexaenoic acid supplementation differentially impact skeletal muscle inflammaging in mice" (Preprint)</span>
        </div>
      </div>`
  },
  {
    id: "research-core",
    tag: "SPECIMEN 04",
    tab: "CORE Lab",
    title: "Undergraduate Researcher — Community-Based Research",
    sub: "CORE Lab, John Martinson Honors College, Purdue University · Jan 2025 – Present",
    preview: "Three projects spanning youth-centric qualitative research, program co-design & evaluation, and summer qualitative coding — with conference co-authorships and awards.",
    bodyHTML: `
      <div class="block">
        <p class="block-role">Undergraduate Researcher — Community-Based Research</p>
        <p class="block-meta">CORE Lab, John Martinson Honors College, Purdue University · Jan 2025 — Present</p>
      </div>
      <div class="block">
        <div class="subproject">
          <p class="subproject-title">Project 1 — Voices to Action: After-School Youth Programs (HONR 299)</p>
          <ul class="bullets">
            <li>Conduct youth-centric qualitative research using Community-Based Research (CBR) principles</li>
            <li>Review sensitive focus-group transcripts, ensuring ethical integrity and confidentiality</li>
            <li>Refine surveys, engage youth participants and families, and present findings to academic and community audiences</li>
          </ul>
          <span class="badge">Co-author, SCIPIE 2025 — University of Oklahoma (Oct 2025): "Supporting Youth Needs, Communal Learning, and Development with Afterschool Programming"</span>
        </div>
        <div class="subproject">
          <p class="subproject-title">Project 2 — Afterschool Program Co-Design &amp; Evaluation</p>
          <ul class="bullets">
            <li>Faculty-funded project (JMHC Research Breakthrough Seed Award)</li>
            <li>Collaborate with multidisciplinary teams and community partners</li>
            <li>Support program design, evaluation, documentation, and applied research reporting</li>
          </ul>
          <span class="badge">Co-presenting author, Purdue Undergraduate Research Conference (Spring '26) — High Distinction Award &amp; INSIGHT Award for High-Impact Humanistic Inquiry</span>
        </div>
        <div class="subproject">
          <p class="subproject-title">Project 3 — Summer Researcher, Qualitative Team</p>
          <p class="block-meta">May 2026 — August 2026</p>
          <ul class="bullets">
            <li>Applied complex qualitative codebooks to youth interview transcript data to analyze specific research questions regarding afterschool programs, ensuring high data accuracy and alignment with project goals</li>
            <li>Formatted and finalized detailed research reports and transcript data using cloud-collaboration platforms like Box and Microsoft 365 for review by senior investigators and lab leadership</li>
            <li>Collaborated closely with cross-functional research teams during data coding phases to establish strong inter-rater reliability and maintain rigorous qualitative standards</li>
          </ul>
        </div>
      </div>`
  },
  {
    id: "research-pang",
    tag: "SPECIMEN 05",
    tab: "Pang Lab",
    title: "Summer Undergraduate Internship — Pang Lab",
    sub: "Rutgers Robert Wood Johnson Medical School · June 2026 – August 2026",
    preview: "Bioinformatics research integrating RStudio and dknet.AI to analyze neurometabolism data pipelines, leveraging the Allen Brain Atlas.",
    bodyHTML: `
      <div class="block">
        <p class="block-role">Summer Undergraduate Internship</p>
        <p class="block-meta">Pang Lab, Rutgers Robert Wood Johnson Medical School, Rutgers University · June 2026 — August 2026</p>
        <ul class="bullets">
          <li>Focus on the bioinformatic aspect of research, integrating RStudio and dknet.AI to analyze complex data pipelines, with a particular focus on neurometabolism</li>
          <li>This project integrates computational tools with biological insights, leveraging the ABC Allen Atlas to contextualize protein structures and metabolic networks in the brain</li>
        </ul>
      </div>`
  },
  {
    id: "research-soil",
    tag: "SPECIMEN 06",
    tab: "Soil Chemistry",
    title: "Research Collaborator — Soil Chemistry",
    sub: "HONR 199 Research Initiative, Purdue University · Aug 2024 – Dec 2024",
    preview: "Analyzed soil pH and NPK nutrient levels across campus sites, investigating traffic impact on soil quality.",
    bodyHTML: `
      <div class="block">
        <p class="block-role">Research Collaborator — Soil Chemistry</p>
        <p class="block-meta">HONR 199 Research Initiative, Purdue University · Aug 2024 — Dec 2024</p>
        <ul class="bullets">
          <li>Analyzed soil pH and NPK nutrient levels across disturbed and undisturbed campus sites</li>
          <li>Investigated impacts of human and vehicular traffic on soil quality</li>
          <li>Evaluated sampling limitations related to moisture, runoff, and semi-urban soil dynamics</li>
        </ul>
      </div>`
  },
  {
    id: "independent-research",
    tag: "SPECIMEN 07",
    tab: "Independent Research",
    title: "Independent &amp; Pre-University Research",
    sub: "IB Extended Essay and additional independent studies",
    preview: "Biochemical investigation of mango ripening (IB Extended Essay), plus independent studies in pharmacology, phytochemistry, and ethnobotany.",
    bodyHTML: `
      <div class="block">
        <p class="block-role">IB Extended Essay (Biology)</p>
        <p class="block-meta">Effects of Artificial vs. Natural Ripening of Mangifera indica</p>
        <ul class="bullets">
          <li>Designed and conducted biochemical experiments independently</li>
          <li>Assessed vitamin C, titratable acidity, starch, reducing sugars, and moisture content</li>
          <li>Evaluated nutritional and health implications of chemical ripening agents</li>
        </ul>
      </div>
      <div class="block">
        <p class="block-role">Additional Studies</p>
        <ul class="bullets">
          <li>NSAIDs vs. herbal remedies for dysmenorrhea (IB Internal Assessment)</li>
          <li>Phenolic compound extraction from fenugreek leaves (Chemistry IA)</li>
          <li>Field research on medicinal plants and traditional remedies</li>
        </ul>
      </div>`
  },
  {
    id: "certifications",
    tag: "SPECIMEN 08",
    tab: "Certifications",
    title: "Certifications &amp; Training",
    sub: "Coursework and professional training",
    preview: "Biostatistics in Public Health, Science of Stem Cells, Introduction to Digital Oncology, CPR/BLS, and more.",
    isChipCard: true,
    chipKey: "certifications",
    chips: [
      "Biostatistics in Public Health — Johns Hopkins University (2025)",
      "Science of Stem Cells — American Museum of Natural History (Score: 96%)",
      "Introduction to Digital Oncology — Singapore General Hospital",
      "CPR & Basic Life Support (Adult & Pediatrics)",
      "Herbalism and Women's Health — Mama Earth"
    ]
  },
  {
    id: "skills",
    tag: "SPECIMEN 09",
    tab: "Skills",
    title: "Technical Skills",
    sub: "Laboratory, computational, and clinical techniques",
    preview: "PCR, immunostaining, confocal-linked NMJ analysis, RNA-seq, RStudio, dknet.AI, spectrophotometry, and first-aid techniques.",
    isChipCard: true,
    chipKey: "skills",
    chips: [
      "DNA isolation & quantification (Nanodrop)",
      "PCR",
      "Immunostaining",
      "NMJ analysis (ImageJ)",
      "RNA-seq & transcriptomic analysis (Illumina)",
      "RStudio (statistical analysis & visualization)",
      "Dknet.AI (AI data pipeline visualization)",
      "Qualitative and Quantitative assessment",
      "Titration",
      "Spectrophotometry",
      "Soil sampling (NPK analysis)",
      "First-aid Techniques — CPR, Pediatric CPR, First Aid, Heimlich Maneuver"
    ]
  },
  {
    id: "leadership",
    tag: "SPECIMEN 10",
    tab: "Leadership",
    title: "Leadership &amp; Service",
    sub: "Community initiatives and peer support",
    preview: "Co-Founder of the Crimson Wave Project, blood donation organizing, academic scribing, and mental health advocacy through the arts.",
    bodyHTML: `
      <div class="block">
        <ul class="bullets">
          <li>Co-Founder, Crimson Wave Project — menstrual hygiene advocacy initiative</li>
          <li>Student Organizer, Blood Donation Camps</li>
          <li>Academic Scribe, supporting students with disabilities</li>
          <li>Mental health advocacy through music and arts</li>
          <li>Academic and peer mentorship (Biology, languages, student support)</li>
          <li>Clinical shadowing in dentistry</li>
        </ul>
      </div>`
  },
  {
    id: "extracurricular",
    tag: "SPECIMEN 11",
    tab: "Extracurricular",
    title: "Extracurricular &amp; Cultural Leadership",
    sub: "Music, performance, and cultural organizing",
    preview: "Board Member of Tamil Sangam and a professional Carnatic music vocalist with 8+ years of performance experience.",
    bodyHTML: `
      <div class="block">
        <ul class="bullets">
          <li>Board Member, External Events Team — Tamil Sangam, Purdue University</li>
          <li>Professional Carnatic Music Vocalist (8+ years)</li>
          <li>Award-winning orator and performer</li>
        </ul>
      </div>`
  },
  {
    id: "languages",
    tag: "SPECIMEN 12",
    tab: "Languages",
    title: "Languages",
    sub: "Spoken and studied languages",
    preview: "Tamil, English, French, German, and Hindi.",
    isChipCard: true,
    chipKey: "languages",
    chips: ["Tamil", "English", "French", "German", "Hindi"]
  }
];

/* ==========================================================================
   RENDER CARDS + NAV TABS
   ========================================================================== */
const deckEl = document.getElementById("deck");
const tabsEl = document.getElementById("tabs");

function chipRowHTML(card){
  const items = card.chips.map(c =>
    `<button type="button" class="chip" data-chipkey="${card.chipKey}">${c}</button>`
  ).join("");
  return `
    <div class="hscroll-wrap" data-hscroll-wrap="${card.id}">
      <div class="hscroll" id="hscroll-${card.id}">${items}</div>
      <button class="hscroll-arrow left" data-hscroll-btn="${card.id}" data-dir="-1" aria-label="Scroll left">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="hscroll-arrow right" data-hscroll-btn="${card.id}" data-dir="1" aria-label="Scroll right">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>`;
}

CARDS.forEach(card => {
  const bodyHTML = card.isChipCard
    ? `<div class="block"><p class="block-role">${card.title}</p>${chipRowHTML(card)}</div>`
    : card.bodyHTML;

  const cardEl = document.createElement("article");
  cardEl.className = "card";
  cardEl.id = card.id;
  cardEl.innerHTML = `
    <button class="card-head" data-toggle="${card.id}" aria-expanded="false">
      <span class="slide-tag">${card.tag}</span>
      <span class="card-head-text">
        <p class="card-title">${card.title}</p>
        <p class="card-sub">${card.sub}</p>
        <p class="card-preview">${card.preview}</p>
      </span>
      <span class="chevron">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </span>
    </button>
    <div class="card-body-outer">
      <div class="card-body-inner">
        <div class="card-body">${bodyHTML}</div>
      </div>
    </div>`;
  deckEl.appendChild(cardEl);

  const tabEl = document.createElement("button");
  tabEl.type = "button";
  tabEl.className = "tab";
  tabEl.dataset.target = card.id;
  tabEl.textContent = card.tab;
  tabsEl.appendChild(tabEl);
});

/* ==========================================================================
   ACCORDION — one card open at a time, spring/morph via CSS grid-rows
   ========================================================================== */
let currentOpenId = null;

function applyOpenState(){
  document.querySelectorAll(".card").forEach(c => {
    const isOpen = c.id === currentOpenId;
    c.classList.toggle("open", isOpen);
    const head = c.querySelector(".card-head");
    if (head) head.setAttribute("aria-expanded", String(isOpen));
  });
}

// Card header click: toggle open/closed
function toggleCard(id){
  currentOpenId = (currentOpenId === id) ? null : id;
  applyOpenState();
  setActiveTab(currentOpenId);
}

// Nav tab click: always ensure target is open, then scroll to it
function openCard(id, { scroll = true } = {}){
  currentOpenId = id;
  applyOpenState();
  if (scroll) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setActiveTab(id);
}

deckEl.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-toggle]");
  if (!btn) return;
  toggleCard(btn.dataset.toggle);
});

/* ==========================================================================
   CHIP SELECT (skills / certifications / languages) — independent toggle
   ========================================================================== */
deckEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  chip.classList.toggle("selected");
});

/* ==========================================================================
   NAV TABS — click maps to card, header strip pans left/right to follow
   ========================================================================== */
function setActiveTab(id){
  const tabs = tabsEl.querySelectorAll(".tab");
  tabs.forEach(t => t.classList.toggle("active", t.dataset.target === id));
  const activeTab = tabsEl.querySelector(`.tab[data-target="${id}"]`);
  if (activeTab) {
    activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
  updateBreadcrumb(id);
}

tabsEl.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  openCard(tab.dataset.target);
});

document.getElementById("brandHome").addEventListener("click", () => {
  document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  currentOpenId = null;
  applyOpenState();
  setActiveTab(null);
});

/* ==========================================================================
   BREADCRUMB (lightweight footer trail)
   ========================================================================== */
const breadcrumbEl = document.getElementById("breadcrumb");
function updateBreadcrumb(id){
  const card = CARDS.find(c => c.id === id);
  if (!card) {
    breadcrumbEl.innerHTML = `<span class="crumb current">Home</span>`;
    return;
  }
  breadcrumbEl.innerHTML =
    `<span class="crumb">Home</span><span class="sep">/</span><span class="crumb current">${card.tab}</span>`;
}

/* ==========================================================================
   SCROLL-SPY — keep nav + breadcrumb synced while the visitor scrolls
   ========================================================================== */
const sections = [document.getElementById("hero"), ...document.querySelectorAll(".card")];
const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id === "hero" ? null : entry.target.id;
      setActiveTab(id);
    }
  });
}, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
sections.forEach(s => spy.observe(s));

/* ==========================================================================
   GENERIC HORIZONTAL-SCROLL ARROW CONTROLLER
   Used for: nav tabs strip + each chip row. Hides arrows when there is
   nothing to scroll, and disables them at the natural start/end.
   ========================================================================== */
function wireHScroll(container, leftBtn, rightBtn, step = 220){
  if (!container) return;

  function refresh(){
    const canScroll = container.scrollWidth > container.clientWidth + 2;
    if (!canScroll) {
      if (leftBtn) leftBtn.dataset.hidden = "true";
      if (rightBtn) rightBtn.dataset.hidden = "true";
      return;
    }
    const atStart = container.scrollLeft <= 2;
    const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 2;
    if (leftBtn) leftBtn.dataset.hidden = atStart ? "true" : "false";
    if (rightBtn) rightBtn.dataset.hidden = atEnd ? "true" : "false";
  }

  if (leftBtn) leftBtn.addEventListener("click", () => container.scrollBy({ left: -step, behavior: "smooth" }));
  if (rightBtn) rightBtn.addEventListener("click", () => container.scrollBy({ left: step, behavior: "smooth" }));
  container.addEventListener("scroll", refresh, { passive: true });
  window.addEventListener("resize", refresh);
  refresh();
  // Re-check shortly after load in case fonts shift layout width
  setTimeout(refresh, 300);
  setTimeout(refresh, 900);
}

wireHScroll(tabsEl, document.getElementById("tabsLeft"), document.getElementById("tabsRight"), 160);

CARDS.filter(c => c.isChipCard).forEach(card => {
  const wrap = document.querySelector(`[data-hscroll-wrap="${card.id}"]`);
  if (!wrap) return;
  const row = wrap.querySelector(".hscroll");
  const left = wrap.querySelector('[data-hscroll-btn][data-dir="-1"]');
  const right = wrap.querySelector('[data-hscroll-btn][data-dir="1"]');
  wireHScroll(row, left, right, 200);
});

/* ==========================================================================
   BACK TO TOP
   ========================================================================== */
const toTopBtn = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTopBtn.classList.toggle("show", window.scrollY > 560);
}, { passive: true });

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Initialize breadcrumb + tabs on load */
updateBreadcrumb(null);
