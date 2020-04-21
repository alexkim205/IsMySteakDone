import React, { useState, useEffect } from "react";
import styled from "styled-components";

// https://nehalist.io/creating-a-reading-progress-bar-in-react/

const Bar = styled.div.attrs(({ height }) => ({
  style: { height: `${height}%` },
}))`
  transition: 0.1s height;
  background-color: red;
`;

const ReadingProgress = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!document.body) {
      return;
    }

    const element = document.body;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return <Bar height={readingProgress} />;
};

export default ReadingProgress;
