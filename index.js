```javascript
/* ---------------------------------------------------------------------- */
/* DATA                                                                   */
/* ---------------------------------------------------------------------- */

const DESTINATIONS = [
  {
    id: "philippines",
    name: "Philippines",
    tagline: "Discover Wonderful",
    location: "Bicol Region",
    blurb:
      "A perfect volcanic cone mirrored in still water, ringed by palms and quiet, unhurried mornings.",
    cardBlurb:
      "A perfect volcanic cone mirrored in still water, ringed by quiet palms.",
    image: "ph1.jpg",
  },

  {
    id: "boracay",
    name: "Boracay",
    tagline: "Explore Beautiful",
    location: "Visayas",
    blurb:
      "White sand beaches, crystal-clear waters, and slow island mornings that ask nothing of you but time.",
    cardBlurb:
      "White sand beaches and clear water, perfect for a relaxing beach getaway.",
    image: "bora.jpg",
    heroImage: "bora1.jpg",
  },

  {
    id: "kashmir",
    name: "Palawan",
    tagline: "Discover Serene",
    location: "Luzon",
    blurb:
      "Limestone cliffs, hidden lagoons, and clear turquoise waters surrounded by tropical islands.",
    cardBlurb:
      "A stunning lagoon surrounded by limestone cliffs and calm turquoise water.",
    image: "puertoprincesa1.jpg",
    heroImage: "puertoprincesa.jpg",
  },

  {
    id: "himachal",
    name: "Siargao",
    tagline: "Wander Through",
    location: "Mindanao",
    blurb:
      "A laid-back island filled with palm trees, surf breaks, lagoons, and peaceful coastal roads.",
    cardBlurb:
      "A laid-back island known for surfing, palm trees, and island hopping.",
    image: "siargao1.jpg",
    heroImage: "siargao.jpg",
  },

  {
    id: "goa",
    name: "Cebu",
    tagline: "Unwind in",
    location: "Visayas",
    blurb:
      "Sunlit coastlines, historic streets, waterfalls, and island escapes surrounded by blue water.",
    cardBlurb:
      "A historic city with old churches, good food, and easy island escapes nearby.",
    image: "cebu1.jpg",
    heroImage: "cebu.jpg",
  },

  {
    id: "ilocos",
    name: "Ilocos",
    tagline: "Journey Through",
    location: "Ilocos Region",
    blurb:
      "Cobblestone streets and centuries-old churches where heritage and local culture meet.",
    cardBlurb:
      "Spanish-era streets, heritage churches, and a slower pace steeped in history.",
    image: "ilocos1.jpg",
    heroImage: "ilocos.jpg",
  },

  {
    id: "zambales",
    name: "Zambales",
    tagline: "Escape to",
    location: "Central Luzon",
    blurb:
      "Sun-bleached coves, rolling hills, and quiet beaches perfect for a weekend escape.",
    cardBlurb:
      "Laid-back coastal coves, rolling hills, and a weekend escape from the city.",
    image: "zambales1.jpg",
    heroImage: "zambales.jpg",
  },

  {
    id: "baguio",
    name: "Baguio",
    tagline: "Breathe In",
    location: "Cordillera Region",
    blurb:
      "Pine-scented mountain air, cool evenings, parks, and peaceful highland views.",
    cardBlurb:
      "A cool mountain city of pine trees, parks, and easy weekend escapes.",
    image: "baguio1.jpg",
    heroImage: "baguio.jpg",
  },

  {
    id: "bohol",
    name: "Bohol",
    tagline: "Roam the Hills of",
    location: "Visayas",
    blurb:
      "Grass-covered hills, tropical islands, quiet beaches, and unforgettable wildlife experiences.",
    cardBlurb:
      "Famous chocolate-hued hills, tarsiers, and postcard island coves.",
    image: "bahol1.jpg",
    heroImage: "bohol.jpg",
  },

  {
    id: "bukidnon",
    name: "Bukidnon",
    tagline: "Rise Above",
    location: "Mindanao",
    blurb:
      "Rolling highland pastures, cool mountain air, and hidden waterfalls surrounded by nature.",
    cardBlurb:
      "Highland pastures, cool air, and hidden waterfalls in the mountains.",
    image: "bukidnon1.jpg",
    heroImage: "bukidnon.jpg",
  },

  {
    id: "intramuros",
    name: "Intramuros",
    tagline: "Step Into",
    location: "Metro Manila",
    blurb:
      "Centuries-old stone walls and cobbled gates that hold hundreds of years of history.",
    cardBlurb:
      "The old walled city — stone forts, cobbled streets, and colonial history.",
    image: "intramuros1.jpg",
    heroImage: "intramuros.jpg",
  },
];


const ACTIVITIES = [
  "Adventure",
  "Nature",
  "Beaches",
  "Culture",
  "Wildlife",
  "Food",
];

const PRICES = [
  "Budget",
  "Moderate",
  "Luxury",
];


/* ---------------------------------------------------------------------- */
/* HERO BACKGROUND                                                        */
/* ---------------------------------------------------------------------- */

const HERO_BG = "ph1.jpg";

const PALAWAN_DESTINATION_ID = "kashmir";


/* ---------------------------------------------------------------------- */
/* PALAWAN DATA                                                           */
/* ---------------------------------------------------------------------- */

const PALAWAN_FEATURED = {
  name: "El Nido",

  location: "Northern Palawan",

  tag: "Most Popular",

  blurb:
    "Towering limestone karsts cradle lagoons of impossibly clear turquoise water, with hidden beaches and secret lagoons reachable only by boat.",

  image: "elnido.jpg",

  spots: [
    {
      name: "Small Lagoon",
      image: "elnido9.jpg",
      blurb:
        "A narrow limestone corridor opening into a bright turquoise pool, reached by kayak through a low entrance cave.",
    },

    {
      name: "Secret Beach",
      image: "elnido7.jpg",
      blurb:
        "Tucked behind sheer cliff walls and reached by swimming through a narrow gap in the rock.",
    },

    {
      name: "Snake Island",
      image: "elnido8.jpg",
      blurb:
        "A slender, curving sandbar that surfaces at low tide, linking the shore to a small forested islet.",
    },
  ],
};


const EL_NIDO_MORE_PHOTOS = [
  "el_nido2.jpg",
  "elnido3.jpg",
  "elnido4.jpg",
  "elnido5.jpg",
  "elnido6.jpg",
  "elnido10.jpg",
];


const CORON_FEATURED = {
  name: "Coron",

  location: "Northern Palawan",

  tag: "Wrecks & Lagoons",

  blurb:
    "Sunken WWII wrecks, mirror-still crater lakes, and jagged limestone islands rising straight out of the sea — reachable only by island-hopping boat.",

  spots: [
    {
      name: "Kayangan Lake",
      image: "coron5.jpg",
      blurb:
        "A beautiful mountain lake reached by a steep stairway with a breathtaking viewpoint.",
    },

    {
      name: "Twin Lagoon",
      image: "coron4.jpg",
      blurb:
        "Two lagoons joined by a narrow passage surrounded by dramatic limestone cliffs.",
    },

    {
      name: "Siete Pecados",
      image: "coron10.jpg",
      blurb:
        "A shallow marine park filled with coral and reef fish, perfect for snorkeling.",
    },
  ],
};


const CORON_MORE_PHOTOS = [
  "coron.jpg",
  "coron2.jpg",
  "coron3.jpg",
  "coron6.jpg",
  "coron7.jpg",
  "coron8.jpg",
  "coron9.jpg",
];


const PUERTO_FEATURED = {
  name: "Puerto Princesa",

  location: "Central Palawan",

  tag: "Underground River",

  blurb:
    "A UNESCO World Heritage cave river winds beneath the jungle, while quiet lagoons and limestone coves ring the coastline just outside the city.",

  spots: [
    {
      name: "Subterranean River",
      image: "puerto9.jpg",
      blurb:
        "A navigable underground river drifting through cathedral-like limestone caverns.",
    },

    {
      name: "Hidden Lagoon",
      image: "puerto8.jpg",
      blurb:
        "A turquoise cove tucked between jungle-topped cliffs and reached by a short paddle.",
    },

    {
      name: "Sheltered Cove",
      image: "puerto6.jpg",
      blurb:
        "A quiet sandbar beach beneath towering limestone where boats anchor just offshore.",
    },
  ],
};


const PUERTO_MORE_PHOTOS = [
  "puerto2.jpg",
  "puerto3.jpg",
  "puerto4.jpg",
  "puerto5.jpg",
  "puerto7.jpg",
  "puerto10.jpg",
];


const PALAWAN_SPOTS = [
  {
    id: "coron",
    name: "Coron",
    location: "Northern Palawan",
    blurb:
      "Sunken WWII wrecks, mirror-still crater lakes, and jagged limestone islands rising straight out of the sea.",
    image: "coron1.jpg",
  },

  {
    id: "ppur",
    name: "Puerto Princesa Underground River",
    location: "Puerto Princesa",
    blurb:
      "A UNESCO World Heritage site where a navigable river winds for kilometers through a limestone cave system.",
    image: "ppur1.jpg",
  },

  {
    id: "portbarton",
    name: "Port Barton",
    location: "Central Palawan",
    blurb:
      "A laid-back fishing village with quiet beaches, easy island-hopping, and far fewer crowds than El Nido.",
    image: "portbarton1.jpg",
  },
];


/* ---------------------------------------------------------------------- */
/* STATE                                                                  */
/* ---------------------------------------------------------------------- */

let activeIndex = 0;

let selDestination = "";

let selActivity = "";

let selPrice = "";

let refreshDestFilter = () => {};


/* ---------------------------------------------------------------------- */
/* DOM REFERENCES                                                         */
/* ---------------------------------------------------------------------- */

const bgLayers =
  document.getElementById("bgLayers");

const ghostWord =
  document.getElementById("ghostWord");

const tagline =
  document.getElementById("tagline");

const destTitle =
  document.getElementById("destTitle");

const destTitleReflection =
  document.getElementById("destTitleReflection");

const prevLabel =
  document.getElementById("prevLabel");

const nextLabel =
  document.getElementById("nextLabel");

const mobilePrevLabel =
  document.getElementById("mobilePrevLabel");

const mobileNextLabel =
  document.getElementById("mobileNextLabel");

const indicatorsEl =
  document.getElementById("indicators");

const cardGrid =
  document.getElementById("cardGrid");

const resultsPanel =
  document.getElementById("resultsPanel");

const resultsThumb =
  document.getElementById("resultsThumb");

const resultsTitle =
  document.getElementById("resultsTitle");

const resultsBlurb =
  document.getElementById("resultsBlurb");

const philippinesView =
  document.getElementById("philippinesView");

const palawanView =
  document.getElementById("palawanView");

const discoverSection =
  document.querySelector(".discover");


/* ---------------------------------------------------------------------- */
/* BUILD HERO BACKGROUND                                                  */
/* ---------------------------------------------------------------------- */

function buildHeroLayers() {

  DESTINATIONS.forEach((destination, index) => {

    const layer =
      document.createElement("div");

    layer.className =
      "hero-bg-layer" +
      (index === 0 ? " active" : "");

    layer.style.backgroundImage =
      `url(${destination.heroImage || HERO_BG})`;

    layer.dataset.index = index;

    bgLayers.appendChild(layer);

  });

}


/* ---------------------------------------------------------------------- */
/* BUILD INDICATORS                                                       */
/* ---------------------------------------------------------------------- */

function buildIndicators() {

  indicatorsEl.innerHTML = "";

  DESTINATIONS.forEach((destination, index) => {

    const button =
      document.createElement("button");

    button.className =
      "indicator" +
      (index === 0 ? " active" : "");

    button.textContent =
      String(index).padStart(2, "0");

    button.setAttribute(
      "aria-label",
      "Go to " + destination.name
    );

    button.addEventListener(
      "click",
      () => goTo(index)
    );

    indicatorsEl.appendChild(button);

  });

}


/* ---------------------------------------------------------------------- */
/* BUILD DESTINATION CARDS                                                */
/* ---------------------------------------------------------------------- */

function buildCards() {

  cardGrid.innerHTML = "";

  DESTINATIONS
    .filter((destination) =>
      destination.id !== "philippines"
    )
    .slice(0, 10)
    .forEach((destination, index) => {

      const card =
        document.createElement("article");

      card.className =
        "card reveal";

      card.style.transitionDelay =
        `${index * 0.12}s`;

      card.dataset.id =
        destination.id;

      card.innerHTML = `
        <div class="card-image-wrap">

          <div
            class="card-image"
            style="background-image:url(${destination.image})"
          ></div>

          <div class="card-gradient"></div>

          <span class="card-tag">
            ${destination.location}
          </span>

          <h3 class="card-name">
            ${destination.name}
          </h3>

        </div>

        <p class="card-blurb">
          ${destination.cardBlurb}
        </p>

        <button
          class="card-explore"
          data-id="${destination.id}"
        >
          Explore
          <i data-lucide="chevron-right"></i>
        </button>
      `;

      cardGrid.appendChild(card);

    });


  cardGrid
    .querySelectorAll(".card")
    .forEach((card) => {

      card.addEventListener("click", () => {

        const index =
          DESTINATIONS.findIndex(
            (destination) =>
              destination.id === card.dataset.id
          );

        goTo(index);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      });

    });


  if (window.lucide) {
    lucide.createIcons();
  }

}


/* ---------------------------------------------------------------------- */
/* FEATURED PALAWAN BLOCK                                                */
/* ---------------------------------------------------------------------- */

function renderFeaturedBlock(
  featured,
  morePhotos,
  modifierClass
) {

  return `
    <div
      class="palawan-hero-card ${modifierClass} reveal"
    >

      <div class="el-nido-gallery">

        ${featured.spots
          .map(
            (spot) => `
              <article class="el-nido-card">

                <div
                  class="el-nido-card-image"
                  style="background-image:url(${spot.image})"
                ></div>

                <h4>
                  ${spot.name}
                </h4>

                <p>
                  ${spot.blurb}
                </p>

              </article>
            `
          )
          .join("")}

      </div>


      <div class="palawan-hero-info">

        <span class="card-tag palawan-tag">
          ${featured.tag} · ${featured.location}
        </span>

        <h3>
          ${featured.name}
        </h3>

        <p>
          ${featured.blurb}
        </p>

        <button class="card-explore palawan-cta">

          Plan your trip

          <i data-lucide="arrow-right"></i>

        </button>

      </div>

    </div>


    <div class="el-nido-marquee reveal">

      <div class="el-nido-marquee-track">

        ${morePhotos
          .concat(morePhotos)
          .map(
            (image) => `
              <div
                class="el-nido-marquee-tile"
                style="background-image:url(${image})"
              ></div>
            `
          )
          .join("")}

      </div>

    </div>
  `;
}


/* ---------------------------------------------------------------------- */
/* RENDER PALAWAN VIEW                                                    */
/* ---------------------------------------------------------------------- */

function renderPalawanView() {

  palawanView.innerHTML = `

    <button
      class="breadcrumb-back"
      id="backToPhilippines"
    >

      <i data-lucide="arrow-left"></i>

      <span>
        Back to Philippines
      </span>

    </button>


    <div class="discover-heading">

      <h2>
        Discover Palawan
      </h2>

      <p>
        Limestone cliffs, hidden lagoons, and some
        of the clearest water in the country —
        Palawan's islands, one quiet cove at a time.
      </p>

    </div>


    ${renderFeaturedBlock(
      PALAWAN_FEATURED,
      EL_NIDO_MORE_PHOTOS,
      "hero-elnido"
    )}


    ${renderFeaturedBlock(
      CORON_FEATURED,
      CORON_MORE_PHOTOS,
      "hero-coron"
    )}


    ${renderFeaturedBlock(
      PUERTO_FEATURED,
      PUERTO_MORE_PHOTOS,
      "hero-puerto"
    )}

  `;


  document
    .getElementById("backToPhilippines")
    .addEventListener("click", () => {

      const index =
        DESTINATIONS.findIndex(
          (destination) =>
            destination.id === "philippines"
        );

      goTo(index);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    });


  if (window.lucide) {
    lucide.createIcons();
  }


  observeReveals(palawanView);

  discoverSection.classList.add("bg-elnido");

  observePalawanBackgrounds();

}


/* ---------------------------------------------------------------------- */
/* PALAWAN BACKGROUND OBSERVER                                            */
/* ---------------------------------------------------------------------- */

const PALAWAN_BG_CLASSES = {

  "hero-elnido":
    "bg-elnido",

  "hero-coron":
    "bg-coron",

  "hero-puerto":
    "bg-puerto",

};


function observePalawanBackgrounds() {

  const sections =
    palawanView.querySelectorAll(
      ".palawan-hero-card"
    );


  const bgObserver =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          const modifier =
            Object.keys(PALAWAN_BG_CLASSES)
              .find((className) =>
                entry.target.classList.contains(
                  className
                )
              );


          if (!modifier) {
            return;
          }


          Object.values(PALAWAN_BG_CLASSES)
            .forEach((bgClass) => {

              discoverSection.classList.remove(
                bgClass
              );

            });


          discoverSection.classList.add(
            PALAWAN_BG_CLASSES[modifier]
          );

        });

      },

      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }

    );


  sections.forEach((section) =>
    bgObserver.observe(section)
  );

}


/* ---------------------------------------------------------------------- */
/* VIEW SWITCHING                                                         */
/* ---------------------------------------------------------------------- */

function showPalawanView() {

  renderPalawanView();

  philippinesView.classList.add(
    "view-hidden"
  );

  palawanView.classList.remove(
    "view-hidden"
  );

}


function showPhilippinesView() {

  palawanView.classList.add(
    "view-hidden"
  );

  philippinesView.classList.remove(
    "view-hidden"
  );

  discoverSection.classList.remove(
    "bg-elnido",
    "bg-coron",
    "bg-puerto"
  );

}


function syncBelowHeroView() {

  const active =
    DESTINATIONS[activeIndex];

  const isPalawan =
    active.id === PALAWAN_DESTINATION_ID;


  if (
    isPalawan &&
    palawanView.classList.contains(
      "view-hidden"
    )
  ) {

    showPalawanView();

  }

  else if (
    !isPalawan &&
    !palawanView.classList.contains(
      "view-hidden"
    )
  ) {

    showPhilippinesView();

  }

}


/* ---------------------------------------------------------------------- */
/* CAROUSEL                                                               */
/* ---------------------------------------------------------------------- */

function render() {

  const active =
    DESTINATIONS[activeIndex];


  const prevIndex =
    (
      activeIndex -
      1 +
      DESTINATIONS.length
    ) %
    DESTINATIONS.length;


  const nextIndex =
    (
      activeIndex +
      1
    ) %
    DESTINATIONS.length;


  /* Background crossfade */

  bgLayers
    .querySelectorAll(
      ".hero-bg-layer"
    )
    .forEach((layer) => {

      layer.classList.toggle(
        "active",
        Number(layer.dataset.index) ===
          activeIndex
      );

    });


  /* Ghost word */

  ghostWord.style.opacity = "0";

  setTimeout(() => {

    ghostWord.textContent =
      active.name.toUpperCase();

    ghostWord.style.opacity = "1";

  }, 200);


  /* Tagline + title */

  tagline.classList.remove("in");

  destTitle.classList.remove("in");

  void tagline.offsetWidth;

  tagline.textContent =
    active.tagline;

  destTitle.childNodes[0].textContent =
    active.name.toUpperCase();

  destTitleReflection.textContent =
    active.name.toUpperCase();


  requestAnimationFrame(() => {

    tagline.classList.add("in");

    destTitle.classList.add("in");

  });


  /* Side labels */

  prevLabel.textContent =
    DESTINATIONS[prevIndex].name;

  nextLabel.textContent =
    DESTINATIONS[nextIndex].name;

  mobilePrevLabel.textContent =
    DESTINATIONS[prevIndex].name;

  mobileNextLabel.textContent =
    DESTINATIONS[nextIndex].name;


  /* Indicators */

  indicatorsEl
    .querySelectorAll(".indicator")
    .forEach((element, index) => {

      element.classList.toggle(
        "active",
        index === activeIndex
      );

    });

}


/* ---------------------------------------------------------------------- */
/* GO TO DESTINATION                                                      */
/* ---------------------------------------------------------------------- */

function goTo(index) {

  activeIndex =
    (
      (index % DESTINATIONS.length) +
      DESTINATIONS.length
    ) %
    DESTINATIONS.length;


  selDestination =
    DESTINATIONS[activeIndex].name;


  refreshDestFilter();

  render();

  hideResults();

  syncBelowHeroView();

}


/* ---------------------------------------------------------------------- */
/* PREVIOUS / NEXT                                                        */
/* ---------------------------------------------------------------------- */

function goPrev() {
  goTo(activeIndex - 1);
}

function goNext() {
  goTo(activeIndex + 1);
}


/* ---------------------------------------------------------------------- */
/* ARROW BUTTONS                                                           */
/* ---------------------------------------------------------------------- */

document
  .querySelector(".side-nav--left")
  .addEventListener(
    "click",
    goPrev
  );


document
  .querySelector(".side-nav--right")
  .addEventListener(
    "click",
    goNext
  );


document
  .getElementById("mobilePrevBtn")
  .addEventListener(
    "click",
    goPrev
  );


document
  .getElementById("mobileNextBtn")
  .addEventListener(
    "click",
    goNext
  );


/* ---------------------------------------------------------------------- */
/* DROPDOWNS                                                              */
/* ---------------------------------------------------------------------- */

function buildDropdown(
  container,
  options,
  getSelected,
  onSelect
) {

  container.innerHTML = "";


  options.forEach((option) => {

    const button =
      document.createElement("button");


    button.className =
      "dropdown-option" +
      (
        getSelected() === option
          ? " selected"
          : ""
      );


    button.innerHTML = `
      <span>${option}</span>
      <i
        data-lucide="check"
        class="check"
      ></i>
    `;


    button.addEventListener(
      "click",
      (event) => {

        event.stopPropagation();

        onSelect(
          getSelected() === option
            ? ""
            : option
        );

      }
    );


    container.appendChild(button);

  });


  if (window.lucide) {
    lucide.createIcons();
  }

}


function closeAllDropdowns() {

  document
    .querySelectorAll(".filter.open")
    .forEach((filter) => {

      filter.classList.remove(
        "open"
      );

    });

}


function setupFilter({
  btnId,
  dropdownId,
  valueId,
  options,
  getSelected,
  setSelected,
}) {

  const button =
    document.getElementById(btnId);

  const dropdown =
    document.getElementById(dropdownId);

  const valueElement =
    document.getElementById(valueId);

  const filterElement =
    button.closest(".filter");


  function refresh() {

    valueElement.textContent =
      getSelected() || "Any";


    buildDropdown(
      dropdown,
      options,
      getSelected,
      (value) => {

        setSelected(value);

        refresh();

        closeAllDropdowns();

      }
    );

  }


  button.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();


      const isOpen =
        filterElement.classList.contains(
          "open"
        );


      closeAllDropdowns();


      if (!isOpen) {

        filterElement.classList.add(
          "open"
        );

      }

    }
  );


  refresh();


  return refresh;

}


/* ---------------------------------------------------------------------- */
/* FILTER SETUP                                                           */
/* ---------------------------------------------------------------------- */

refreshDestFilter =
  setupFilter({

    btnId:
      "destFilterBtn",

    dropdownId:
      "destDropdown",

    valueId:
      "destFilterValue",

    options:
      DESTINATIONS.map(
        (destination) =>
          destination.name
      ),

    getSelected:
      () =>
        selDestination,

    setSelected:
      (value) => {

        selDestination =
          value;


        if (value) {

          const index =
            DESTINATIONS.findIndex(
              (destination) =>
                destination.name ===
                value
            );


          if (index !== -1) {

            goTo(index);

          }

        }

      },

  });


setupFilter({

  btnId:
    "activityFilterBtn",

  dropdownId:
    "activityDropdown",

  valueId:
    "activityFilterValue",

  options:
    ACTIVITIES,

  getSelected:
    () =>
      selActivity,

  setSelected:
    (value) =>
      (selActivity = value),

});


setupFilter({

  btnId:
    "priceFilterBtn",

  dropdownId:
    "priceDropdown",

  valueId:
    "priceFilterValue",

  options:
    PRICES,

  getSelected:
    () =>
      selPrice,

  setSelected:
    (value) =>
      (selPrice = value),

});


document.addEventListener(
  "click",
  () => closeAllDropdowns()
);


/* ---------------------------------------------------------------------- */
/* SEARCH RESULTS                                                         */
/* ---------------------------------------------------------------------- */

function showResults() {

  const active =
    DESTINATIONS[activeIndex];


  resultsThumb.style.backgroundImage =
    `url(${active.image})`;


  let title =
    active.name;


  if (selActivity) {

    title +=
      " · " +
      selActivity;

  }


  if (selPrice) {

    title +=
      " · " +
      selPrice;

  }


  resultsTitle.textContent =
    title;


  resultsBlurb.textContent =
    active.blurb.length > 90
      ? active.blurb.slice(0, 90) + "…"
      : active.blurb;


  resultsPanel.classList.add(
    "show"
  );

}


function hideResults() {

  resultsPanel.classList.remove(
    "show"
  );

}


document
  .getElementById("searchBtn")
  .addEventListener(
    "click",
    () => {

      if (selDestination) {

        const index =
          DESTINATIONS.findIndex(
            (destination) =>
              destination.name ===
              selDestination
          );


        if (index !== -1) {

          activeIndex =
            index;

          render();

          syncBelowHeroView();

        }

      }


      showResults();

    }
  );


document
  .getElementById("resultsCloseBtn")
  .addEventListener(
    "click",
    hideResults
  );


/* ---------------------------------------------------------------------- */
/* MOBILE MENU                                                            */
/* ---------------------------------------------------------------------- */

const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );


document
  .getElementById("menuOpenBtn")
  .addEventListener(
    "click",
    () =>
      mobileMenu.classList.add(
        "show"
      )
  );


document
  .getElementById("menuCloseBtn")
  .addEventListener(
    "click",
    () =>
      mobileMenu.classList.remove(
        "show"
      )
  );


mobileMenu
  .querySelectorAll(
    ".mobile-menu-nav a"
  )
  .forEach((link) => {

    link.addEventListener(
      "click",
      () =>
        mobileMenu.classList.remove(
          "show"
        )
    );

  });


/* ---------------------------------------------------------------------- */
/* NAVBAR HIDE / SHOW                                                     */
/* ---------------------------------------------------------------------- */

const siteHeader =
  document.querySelector(
    ".site-header"
  );


let lastScrollY =
  window.scrollY;


const TOP_REVEAL_ZONE =
  80;


function onScroll() {

  const currentY =
    window.scrollY;


  if (
    currentY <=
    TOP_REVEAL_ZONE
  ) {

    siteHeader.classList.remove(
      "nav-hidden"
    );

  }

  else if (
    currentY >
    lastScrollY
  ) {

    siteHeader.classList.add(
      "nav-hidden"
    );

  }


  lastScrollY =
    currentY;

}


function onMouseMove(event) {

  if (
    event.clientY <
    TOP_REVEAL_ZONE
  ) {

    siteHeader.classList.remove(
      "nav-hidden"
    );

  }

}


document.addEventListener(
  "scroll",
  onScroll
);


document.addEventListener(
  "mousemove",
  onMouseMove
);


/* ---------------------------------------------------------------------- */
/* FOOTER                                                                 */
/* ---------------------------------------------------------------------- */

document
  .getElementById("footerCopy")
  .textContent =
    "© " +
    new Date().getFullYear() +
    " Travalgo Journeys. Crafted for slow, considered travel.";


/* ---------------------------------------------------------------------- */
/* SCROLL REVEAL                                                          */
/* ---------------------------------------------------------------------- */

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (
          entry.isIntersecting
        ) {

          entry.target.classList.add(
            "in-view"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.15,
    }

  );


function observeReveals(
  root = document
) {

  root
    .querySelectorAll(".reveal")
    .forEach((element) =>
      revealObserver.observe(
        element
      )
    );

}


/* ---------------------------------------------------------------------- */
/* INIT                                                                   */
/* ---------------------------------------------------------------------- */

function init() {

  buildHeroLayers();

  buildIndicators();

  buildCards();

  render();

  syncBelowHeroView();


  requestAnimationFrame(() => {

    setTimeout(() => {

      tagline.classList.add(
        "in"
      );

      destTitle.classList.add(
        "in"
      );

    }, 80);

  });


  if (window.lucide) {

    lucide.createIcons();

  }

  else {

    window.addEventListener(
      "load",
      () => {

        if (window.lucide) {

          lucide.createIcons();

        }

      }
    );

  }


  observeReveals();

}


init();
```
