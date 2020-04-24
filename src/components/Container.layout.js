import styled from "styled-components"
// import { breakpoint } from "../helper";

export default styled.div`

  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : "start")};

  /* margin: 0 auto; */
  width: 800px;
`