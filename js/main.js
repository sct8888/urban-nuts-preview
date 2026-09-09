/* Shared UI helpers — Urban Nuts preview */
(function () {
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function categoryName(id) {
    const c = window.URBAN_NUTS.categories.find(function (x) { return x.id === id; });
    return c ? c.name : id;
  }

  function productCardHTML(p) {
    const badge = p.badge ? `<span class="product-badge">${p.badge}</span>` : "";
    const weight = p.variants[0] ? p.variants[0].label : "";
    const defaultVid = p.variants[0] ? p.variants[0].id : "";
    return `
      <article class="product-card">
        <a href="product.html?id=${encodeURIComponent(p.id)}" class="product-media tone-${p.category}" aria-label="${p.name}">
          ${badge}
          <span class="weight-badge">${weight}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy" width="600" height="600">
        </a>
        <div class="product-body">
          <div class="product-cat">${categoryName(p.category)}</div>
          <h3><a href="product.html?id=${encodeURIComponent(p.id)}">${p.name}</a></h3>
          <div class="product-price">
            <span><span class="from">from</span><span class="amount">${window.URBAN_NUTS.formatZAR(p.variants[0].price)}</span></span>
            <button type="button" class="btn-add" data-quick-add="${p.id}" data-vid="${defaultVid}" aria-label="Add ${p.name} to cart">Add</button>
          </div>
        </div>
      </article>`;
  }

  function bindQuickAdd(root) {
    (root || document).addEventListener("click", function (e) {
      const btn = e.target.closest("[data-quick-add]");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-quick-add");
      const vid = btn.getAttribute("data-vid");
      window.URBAN_NUTS.Cart.add(id, vid, 1);
      bounceCartIcons();
    });
  }

  function bounceCartIcons() {
    qsa(".icon-btn[data-open-cart], .mobile-bottom-bar [data-open-cart]").forEach(function (el) {
      el.classList.remove("bounce");
      void el.offsetWidth;
      el.classList.add("bounce");
      setTimeout(function () { el.classList.remove("bounce"); }, 500);
    });
  }

  function renderFeatured(targetSel, limit) {
    const el = qs(targetSel);
    if (!el) return;
    const featured = window.URBAN_NUTS.products.slice(0, limit || 8);
    el.innerHTML = featured.map(productCardHTML).join("");
  }

  function renderCategories(targetSel) {
    const el = qs(targetSel);
    if (!el) return;
    el.innerHTML = window.URBAN_NUTS.categories.map(function (c) {
      return `
        <a class="cat-card" href="shop.html?cat=${encodeURIComponent(c.id)}">
          <div class="cat-media"><img src="${c.image}" alt="${c.name}" loading="lazy" width="400" height="400"></div>
          <h3>${c.name}</h3>
          <span>${c.blurb}</span>
        </a>`;
    }).join("");
  }

  function renderShop() {
    const grid = qs("#shop-grid");
    if (!grid) return;

    const params = new URLSearchParams(location.search);
    let active = params.get("cat") || "all";

    const chips = qs("#filter-chips");
    if (chips) {
      const all = [{ id: "all", name: "All" }].concat(window.URBAN_NUTS.categories);
      chips.innerHTML = all.map(function (c) {
        return `<button type="button" class="chip${c.id === active ? " active" : ""}" data-cat="${c.id}">${c.name}</button>`;
      }).join("");
      chips.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-cat]");
        if (!btn) return;
        active = btn.getAttribute("data-cat");
        qsa(".chip", chips).forEach(function (b) {
          b.classList.toggle("active", b.getAttribute("data-cat") === active);
        });
        const url = new URL(location.href);
        if (active === "all") url.searchParams.delete("cat");
        else url.searchParams.set("cat", active);
        history.replaceState(null, "", url);
        paint();
      });
    }

    function paint() {
      const list = window.URBAN_NUTS.products.filter(function (p) {
        return active === "all" || p.category === active;
      });
      grid.innerHTML = list.map(productCardHTML).join("");
      const count = qs("#results-count");
      if (count) count.textContent = list.length + " product" + (list.length === 1 ? "" : "s");
    }
    paint();
  }

  function renderProductPage() {
    const root = qs("#product-root");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id") || "mixed-nuts";
    const p = window.URBAN_NUTS.getProduct(id) || window.URBAN_NUTS.products[0];
    let variantId = p.variants[0].id;
    let qty = 1;

    function currentVariant() {
      return p.variants.find(function (v) { return v.id === variantId; }) || p.variants[0];
    }

    function paint() {
      const v = currentVariant();
      root.innerHTML = `
        <div class="pd-media tone-${p.category}"><img src="${p.image}" alt="${p.name}" loading="lazy" width="600" height="600"></div>
        <div class="pd-info">
          <div class="pd-cat">${categoryName(p.category)}</div>
          <h1>${p.name}</h1>
          <div class="pd-price" id="pd-price">${window.URBAN_NUTS.formatZAR(v.price)}</div>
          <p class="pd-desc">${p.description}</p>
          <label class="variant-label">Size</label>
          <div class="variant-options" id="variants">
            ${p.variants.map(function (vr) {
              return `<button type="button" class="variant-btn${vr.id === variantId ? " active" : ""}" data-vid="${vr.id}">${vr.label}</button>`;
            }).join("")}
          </div>
          <div class="qty-row">
            <div class="qty-control">
              <button type="button" id="qty-dec" aria-label="Decrease">−</button>
              <span id="qty-val">${qty}</span>
              <button type="button" id="qty-inc" aria-label="Increase">+</button>
            </div>
          </div>
          <button type="button" class="btn btn-primary btn-block" id="add-to-cart">Add to cart</button>
          <ul class="pd-meta">
            <li>Free delivery on orders over R1 000</li>
            <li>Freshness guaranteed · packed in Cape Town</li>
            <li>Collect in-store or nationwide delivery</li>
          </ul>
        </div>`;

      qsa("[data-vid]", root).forEach(function (btn) {
        btn.addEventListener("click", function () {
          variantId = btn.getAttribute("data-vid");
          paint();
        });
      });
      qs("#qty-inc", root).addEventListener("click", function () { qty += 1; qs("#qty-val", root).textContent = qty; });
      qs("#qty-dec", root).addEventListener("click", function () {
        qty = Math.max(1, qty - 1);
        qs("#qty-val", root).textContent = qty;
      });
      qs("#add-to-cart", root).addEventListener("click", function () {
        window.URBAN_NUTS.Cart.add(p.id, variantId, qty);
        bounceCartIcons();
      });
    }
    paint();
    document.title = p.name + " · Urban Nuts Preview";
  }

  function renderStores(targetSel) {
    const el = qs(targetSel);
    if (!el) return;
    el.innerHTML = window.URBAN_NUTS.stores.map(function (s) {
      return `
        <div class="store-card">
          <h3>${s.name}</h3>
          <p>${s.address}</p>
          <p><a href="tel:${s.phone.replace(/\s/g, "")}">${s.phone}</a></p>
        </div>`;
    }).join("");
  }

  function initMobileNav() {
    const toggle = qs("#menu-toggle");
    const nav = qs("#mobile-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      const open = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    qsa("a", nav).forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  function initContactForm() {
    const form = qs("#contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.URBAN_NUTS.showToast("Message noted (demo — not sent)");
      form.reset();
    });
  }

  function setActiveNav() {
    const page = (location.pathname.split("/").pop() || "index.html").replace(/^\//, "");
    qsa(".nav a, .mobile-nav a").forEach(function (a) {
      const href = a.getAttribute("href");
      if (href === page || (page === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    setActiveNav();
    bindQuickAdd(document);
    renderCategories("#cat-grid");
    renderFeatured("#featured-grid", 8);
    renderShop();
    renderProductPage();
    renderStores("#store-list");
    initContactForm();
  });

  window.URBAN_NUTS.ui = {
    productCardHTML: productCardHTML,
    categoryName: categoryName,
    bounceCartIcons: bounceCartIcons
  };
})();
