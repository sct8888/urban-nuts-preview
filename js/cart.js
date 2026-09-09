/* Cart + checkout (localStorage demo) */
(function () {
  const STORAGE_KEY = "urbanNutsCart_v1";
  const FREE_DELIVERY = 1000;

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    renderAll();
  }

  function cartKey(productId, variantId) {
    return productId + "::" + variantId;
  }

  const Cart = {
    getItems: function () { return load(); },

    count: function () {
      return load().reduce(function (n, i) { return n + i.qty; }, 0);
    },

    subtotal: function () {
      return load().reduce(function (n, i) { return n + i.price * i.qty; }, 0);
    },

    add: function (productId, variantId, qty) {
      qty = qty || 1;
      const product = window.URBAN_NUTS.getProduct(productId);
      if (!product) return;
      const variant = product.variants.find(function (v) { return v.id === variantId; })
        || product.variants[0];
      const items = load();
      const key = cartKey(productId, variant.id);
      const existing = items.find(function (i) { return i.key === key; });
      if (existing) {
        existing.qty += qty;
      } else {
        items.push({
          key: key,
          productId: productId,
          variantId: variant.id,
          name: product.name,
          variantLabel: variant.label,
          price: variant.price,
          emoji: product.emoji,
          qty: qty
        });
      }
      save(items);
      showToast("Added to cart");
      openCart();
    },

    setQty: function (key, qty) {
      let items = load();
      if (qty <= 0) {
        items = items.filter(function (i) { return i.key !== key; });
      } else {
        items.forEach(function (i) {
          if (i.key === key) i.qty = qty;
        });
      }
      save(items);
    },

    remove: function (key) {
      save(load().filter(function (i) { return i.key !== key; }));
    },

    clear: function () {
      save([]);
    }
  };

  window.URBAN_NUTS.Cart = Cart;
  window.URBAN_NUTS.FREE_DELIVERY = FREE_DELIVERY;

  function showToast(msg) {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  function openCart() {
    document.getElementById("cart-overlay")?.classList.add("open");
    document.getElementById("cart-drawer")?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    document.getElementById("cart-overlay")?.classList.remove("open");
    document.getElementById("cart-drawer")?.classList.remove("open");
    if (!document.getElementById("checkout-modal")?.classList.contains("open")) {
      document.body.style.overflow = "";
    }
  }

  function openCheckout() {
    closeCart();
    const modal = document.getElementById("checkout-modal");
    if (!modal) return;
    const body = document.getElementById("checkout-body");
    const sub = Cart.subtotal();
    const delivery = sub >= FREE_DELIVERY ? 0 : (sub > 0 ? 75 : 0);
    body.innerHTML = `
      <div class="mock-notice">
        This is a <strong>demo checkout</strong> for stakeholder preview. No payment is processed.
      </div>
      <div class="form-group">
        <label for="co-name">Full name</label>
        <input id="co-name" type="text" placeholder="Jane Doe" autocomplete="name">
      </div>
      <div class="form-group">
        <label for="co-email">Email</label>
        <input id="co-email" type="email" placeholder="you@example.com" autocomplete="email">
      </div>
      <div class="form-group">
        <label for="co-phone">Phone</label>
        <input id="co-phone" type="tel" placeholder="083 627 7992" autocomplete="tel">
      </div>
      <div class="form-group">
        <label for="co-address">Delivery address</label>
        <textarea id="co-address" placeholder="Street, suburb, city"></textarea>
      </div>
      <p class="variant-label" style="margin-top:0.5rem">Payment method</p>
      <div class="payment-options" id="payment-options">
        <label class="payment-option selected">
          <input type="radio" name="pay" value="payfast" checked>
          <div><div class="pay-name">PayFast</div><div class="pay-desc">Cards, EFT &amp; instant payments</div></div>
        </label>
        <label class="payment-option">
          <input type="radio" name="pay" value="ozow">
          <div><div class="pay-name">Ozow</div><div class="pay-desc">Instant EFT</div></div>
        </label>
        <label class="payment-option">
          <input type="radio" name="pay" value="card">
          <div><div class="pay-name">Card</div><div class="pay-desc">Visa / Mastercard (placeholder)</div></div>
        </label>
      </div>
      <div class="order-summary-line"><span>Subtotal</span><span>${window.URBAN_NUTS.formatZAR(sub)}</span></div>
      <div class="order-summary-line"><span>Delivery</span><span>${delivery === 0 ? "FREE" : window.URBAN_NUTS.formatZAR(delivery)}</span></div>
      <div class="order-summary-line total"><span>Total</span><span>${window.URBAN_NUTS.formatZAR(sub + delivery)}</span></div>
      <button type="button" class="btn btn-primary btn-block" id="place-order-btn" style="margin-top:1.25rem">
        Place order (demo)
      </button>
    `;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";

    body.querySelectorAll(".payment-option").forEach(function (opt) {
      opt.addEventListener("click", function () {
        body.querySelectorAll(".payment-option").forEach(function (o) { o.classList.remove("selected"); });
        opt.classList.add("selected");
        opt.querySelector("input").checked = true;
      });
    });

    document.getElementById("place-order-btn").addEventListener("click", function () {
      Cart.clear();
      body.innerHTML = `
        <div class="success-state">
          <div class="check">✓</div>
          <h3>Order received</h3>
          <p style="color:var(--text-muted);margin-bottom:1.5rem">
            Demo only — nothing was charged. In production this would redirect to PayFast / Ozow.
          </p>
          <button type="button" class="btn btn-primary" id="close-success">Continue shopping</button>
        </div>
      `;
      document.getElementById("close-success").addEventListener("click", closeCheckout);
    });
  }

  function closeCheckout() {
    document.getElementById("checkout-modal")?.classList.remove("open");
    document.body.style.overflow = "";
  }

  function renderCartDrawer() {
    const body = document.getElementById("cart-body");
    const footer = document.getElementById("cart-footer");
    if (!body) return;
    const items = Cart.getItems();
    const sub = Cart.subtotal();

    if (!items.length) {
      body.innerHTML = `
        <div class="cart-empty">
          <p>Your cart is empty</p>
          <a href="shop.html" class="btn btn-secondary btn-sm" data-close-cart>Browse products</a>
        </div>`;
      if (footer) footer.hidden = true;
      return;
    }

    if (footer) footer.hidden = false;
    body.innerHTML = items.map(function (i) {
      return `
        <div class="cart-item" data-key="${i.key}">
          <div class="cart-item-img">${i.emoji || "🥜"}</div>
          <div>
            <h4>${i.name}</h4>
            <div class="meta">${i.variantLabel} · ${window.URBAN_NUTS.formatZAR(i.price)}</div>
            <div class="cart-item-actions">
              <button type="button" data-dec aria-label="Decrease">−</button>
              <span>${i.qty}</span>
              <button type="button" data-inc aria-label="Increase">+</button>
            </div>
            <button type="button" class="remove" data-remove>Remove</button>
          </div>
          <div class="cart-item-price">${window.URBAN_NUTS.formatZAR(i.price * i.qty)}</div>
        </div>`;
    }).join("");

    body.querySelectorAll(".cart-item").forEach(function (row) {
      const key = row.getAttribute("data-key");
      const item = items.find(function (i) { return i.key === key; });
      row.querySelector("[data-inc]")?.addEventListener("click", function () {
        Cart.setQty(key, item.qty + 1);
      });
      row.querySelector("[data-dec]")?.addEventListener("click", function () {
        Cart.setQty(key, item.qty - 1);
      });
      row.querySelector("[data-remove]")?.addEventListener("click", function () {
        Cart.remove(key);
      });
    });

    const subEl = document.getElementById("cart-subtotal-value");
    if (subEl) subEl.textContent = window.URBAN_NUTS.formatZAR(sub);

    const progress = document.getElementById("delivery-progress");
    if (progress) {
      const remaining = Math.max(0, FREE_DELIVERY - sub);
      const pct = Math.min(100, (sub / FREE_DELIVERY) * 100);
      if (remaining === 0 && sub > 0) {
        progress.className = "delivery-progress met";
        progress.innerHTML = `Free delivery unlocked · orders over R1 000<div class="bar"><div class="bar-fill" style="width:100%"></div></div>`;
      } else {
        progress.className = "delivery-progress";
        progress.innerHTML = `Add ${window.URBAN_NUTS.formatZAR(remaining)} more for <strong>free delivery</strong><div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>`;
      }
    }
  }

  function renderCount() {
    const n = Cart.count();
    document.querySelectorAll(".cart-count").forEach(function (el) {
      el.textContent = n > 0 ? String(n) : "";
      el.setAttribute("data-count", String(n));
    });
  }

  function renderAll() {
    renderCount();
    renderCartDrawer();
  }

  function ensureChrome() {
    if (document.getElementById("cart-drawer")) return;

    const overlay = document.createElement("div");
    overlay.id = "cart-overlay";
    overlay.className = "overlay";
    overlay.addEventListener("click", closeCart);

    const drawer = document.createElement("aside");
    drawer.id = "cart-drawer";
    drawer.className = "cart-drawer";
    drawer.setAttribute("aria-label", "Shopping cart");
    drawer.innerHTML = `
      <div class="cart-header">
        <h2>Your cart</h2>
        <button type="button" class="close-btn" id="close-cart" aria-label="Close cart">×</button>
      </div>
      <div class="cart-body" id="cart-body"></div>
      <div class="cart-footer" id="cart-footer" hidden>
        <div class="cart-subtotal"><span>Subtotal</span><span id="cart-subtotal-value">R0,00</span></div>
        <div id="delivery-progress" class="delivery-progress"></div>
        <button type="button" class="btn btn-primary btn-block" id="checkout-btn">Checkout</button>
      </div>`;

    const modal = document.createElement("div");
    modal.id = "checkout-modal";
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-backdrop" id="checkout-backdrop"></div>
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
        <div class="modal-header">
          <h2 id="checkout-title">Checkout</h2>
          <button type="button" class="close-btn" id="close-checkout" aria-label="Close">×</button>
        </div>
        <div class="modal-body" id="checkout-body"></div>
      </div>`;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    document.body.appendChild(modal);

    document.getElementById("close-cart").addEventListener("click", closeCart);
    document.getElementById("checkout-btn").addEventListener("click", openCheckout);
    document.getElementById("close-checkout").addEventListener("click", closeCheckout);
    document.getElementById("checkout-backdrop").addEventListener("click", closeCheckout);
  }

  document.addEventListener("DOMContentLoaded", function () {
    ensureChrome();
    renderAll();

    document.querySelectorAll("[data-open-cart]").forEach(function (btn) {
      btn.addEventListener("click", openCart);
    });

    document.body.addEventListener("click", function (e) {
      if (e.target.closest("[data-close-cart]")) closeCart();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeCart();
        closeCheckout();
      }
    });
  });

  window.URBAN_NUTS.openCart = openCart;
  window.URBAN_NUTS.showToast = showToast;
})();
