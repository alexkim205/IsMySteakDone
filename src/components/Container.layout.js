import styled from "styled-components"

export default styled.div`

  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : "start")};

  margin: 0 auto;
  max-width: 800px;
`