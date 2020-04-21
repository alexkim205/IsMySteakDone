/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";
import styledBreakpoint from "@humblebee/styled-components-breakpoint";

// Creates an object with breakpoint utility methods.
export const breakpoint = styledBreakpoint({
  xxs: 0,
  xs: 320,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
});

export const calculateAdditionalHeight = (ref) => {
  if (!ref || !ref.current) return 0;

  const topOfLastSection =
    ref.current.getBoundingClientRect().top + window.scrollY;
  const pageScrollNeeded = document.body.scrollHeight - topOfLastSection;
  const offsetNeeded = window.innerHeight - 150 - pageScrollNeeded;
  if (offsetNeeded > 0) {
    return offsetNeeded;
  }
  return 0;
};

export const lorem = new LoremIpsum();

export const scrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
