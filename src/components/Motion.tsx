"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = [
  ".section-head",
  ".service-card",
  ".process-bento-card",
  ".product-card-v2",
  ".project-card-v2",
  ".why-card",
  ".insight-card",
  ".founder-card",
  ".industry-item",
  ".principle-card",
  ".home-support-card",
  ".learning-path",
  ".statement-layout > *",
  ".vision-layout > *",
  ".training-layout > *",
  ".contact-form-v2",
  ".contact-info-card",
  ".contact-prepare-item",
  ".contact-step",
  ".support-included-card",
  ".support-gets-card",
  ".support-faq-item",
  ".pd-cap-card",
  ".pd-phase",
  ".pd-module-card",
  ".eco-layer-item",
  ".build-step-item",
  ".tech-chip",
  ".flow-step",
].join(",");

const HERO = ".hero, .page-hero, .products-hero, .contact-page-hero, .support-hero, .pd-hero, .project-detail-hero";

function bind(io: IntersectionObserver) {
  const nodes = Array.from(document.querySelectorAll(SELECTOR)).filter(
    (el) => !el.closest(HERO),
  );

  const groups = new Map<Element, HTMLElement[]>();
  nodes.forEach((node) => {
    const el = node as HTMLElement;
    const parent = el.parentElement;
    if (!parent) return;
    const list = groups.get(parent) ?? [];
    list.push(el);
    groups.set(parent, list);
  });

  groups.forEach((els) => {
    els.forEach((el, index) => {
      if (!el.classList.contains("motion-item")) {
        el.classList.add("motion-item");
        el.style.setProperty("--d", `${Math.min(index, 8) * 70}ms`);
      }
      if (!el.classList.contains("is-in")) io.observe(el);
    });
  });
}

export default function Motion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.toggle("motion-on", !reduce);
    if (reduce) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    bind(io);

    const root = document.querySelector("main");
    const mo = new MutationObserver(() => bind(io));
    if (root) mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
