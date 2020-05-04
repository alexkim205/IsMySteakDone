import React, { Fragment, useRef, useState, useEffect } from "react";
import { BsChevronCompactRight } from "react-icons/bs";

import { calculateAdditionalHeight } from "../helper";

import TwoCol from "../components/TwoColumn.layout";
import TitleSection from "../components/TitleSection.component";
import Section from "../components/Section.component";
import Image from "../components/Image.component";
import Scrollbar from "../components/Scrollbar.component";

const ScrollingPageTemplate = ({
  title,
  subtitle,
  sections,
  bottomButtons,
}) => {
  const lastAnchorRef = useRef(null);
  const [additionalHeight, setAdditionalHeight] = useState(0); // so that last anchor can get scrolled to

  useEffect(() => {
    setAdditionalHeight(calculateAdditionalHeight(lastAnchorRef));
  }, [lastAnchorRef]);

  return (
    <Fragment>
      <TitleSection>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </TitleSection>
      <TwoCol>
        <TwoCol.Left width={80}>
          <Fragment>
            {sections &&
              sections.map(({ id, name, img, img2, text }, i) => (
                <div
                  key={i}
                  id={id}
                  ref={i === sections.length - 1 ? lastAnchorRef : null}
                >
                  <Section>
                    <h2>{name}</h2>
                    <div className="flex-h">
                      {img && img2 && !text && (
                        <Fragment>
                          <div className="image left">
                            <Image src={img} alt={id}/>
                          </div>
                          <BsChevronCompactRight size="3em" color="#4a4e69" />
                          <div className="image right">
                            <Image src={img2}  alt={id}/>
                          </div>
                        </Fragment>
                      )}
                      {img && !img2 && text && (
                        <Fragment>
                          <div
                            className="image"
                            style={{ margin: "0 1em 1em 0", width: "65%" }}
                          >
                            <Image src={img} alt={id} />
                          </div>
                          <div className="text" style={{ width: "35%" }}>
                            {text}
                          </div>
                        </Fragment>
                      )}
                      {!img && !img2 && text && (
                        <div className="text">{text}</div>
                      )}
                    </div>
                  </Section>
                </div>
              ))}
          </Fragment>
        </TwoCol.Left>
        <TwoCol.Right minWidth={100} width={20}>
          {sections && <Scrollbar sections={sections} />}
        </TwoCol.Right>
      </TwoCol>
      <div className="spacer" style={{ height: additionalHeight }}></div>
      {bottomButtons}
    </Fragment>
  );
};

export default ScrollingPageTemplate;
