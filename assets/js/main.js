/* Clear Way Sewer & Drain — interactions */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  var backdrop = document.querySelector(".nav-backdrop");

  /* Sticky header solid-on-scroll */
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  function closeNav() {
    if (!links) return;
    links.classList.remove("open");
    if (backdrop) backdrop.classList.remove("show");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  function openNav() {
    links.classList.add("open");
    if (backdrop) backdrop.classList.add("show");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      if (open) closeNav(); else openNav();
    });
  }
  if (backdrop) backdrop.addEventListener("click", closeNav);
  if (links) {
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* FAQ accordion */
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq-item");
      var ans = item.querySelector(".faq-a");
      var isOpen = item.classList.contains("open");
      // close siblings
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          var oa = other.querySelector(".faq-a");
          oa.style.maxHeight = null;
          oa.setAttribute("aria-hidden", "true");
          other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        }
      });
      if (isOpen) {
        item.classList.remove("open");
        ans.style.maxHeight = null;
        ans.setAttribute("aria-hidden", "true");
        q.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
        ans.setAttribute("aria-hidden", "false");
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* Scroll reveal */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Reset menu state when crossing to desktop; keep open FAQ answers sized on resize */
  var desktopMQ = window.matchMedia("(min-width: 941px)");
  function handleMQ(e) { if (e.matches) closeNav(); }
  if (desktopMQ.addEventListener) desktopMQ.addEventListener("change", handleMQ);
  else if (desktopMQ.addListener) desktopMQ.addListener(handleMQ);

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      document.querySelectorAll(".faq-item.open .faq-a").forEach(function (a) {
        a.style.maxHeight = a.scrollHeight + "px";
      });
    }, 150);
  }, { passive: true });

  /* Footer year */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
