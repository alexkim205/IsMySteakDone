import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styled from "styled-components";

const ImgContainer = styled(LazyLoadImage)`
  object-fit: cover;
  width: 100%;
  height: 250px;
`;
const TableImgContainer = styled(ImgContainer)`
  object-fit: contain;
  width: 100%;
  min-width: 50px;
  height: auto;
  border: 2px solid #4a4e69;
`;

const Image = React.forwardRef((props) => (
  <ImgContainer {...props} effect="blur" />
));

export const TableImage = React.forwardRef((props) => (
  <TableImgContainer {...props} effect="blur" />
));

export default Image;
