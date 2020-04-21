import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { Sticky } from "react-sticky";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

import { scrollToTop } from "../helper";
import ReadingProgress from "./ReadingProgress.component";
import {
  StyledStickyContainer,
  ScrollNavLink,
  ScrollToTopButton,
} from "./ScrollStyled.component";

const Scrollbar = ({ sections }) => {
  const location = useLocation();
  const history = useHistory();
  scrollToTop()

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      // console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <StyledStickyContainer>
      <Sticky topOffset={-50}>
        {({ style }) => (
          <div className="vertical-container" style={style}>
            <div className="info">
              <div className="scroll">
                <ReadingProgress />
              </div>
              <div className="headers">
                {sections.map(({ id, name }, i) => (
                  <ScrollNavLink
                    key={i}
                    to={id}
                    className="item"
                    activeClass="active"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    {name}
                  </ScrollNavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </Sticky>
      <ScrollToTopButton
        onClick={() => {
          scroll.scrollToTop();
          history.push({ pathname: location.pathname });
        }}
      >
        <IoIosArrowUp size="3em" />
      </ScrollToTopButton>
    </StyledStickyContainer>
  );
};

export default Scrollbar;
