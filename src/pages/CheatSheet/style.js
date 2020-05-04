import styled from "styled-components";
import { breakpoint } from "../../helper";

const TableContainer = styled.table`
  width: 100%;

  tr {
  }

  th {
    font-size: 1.2em;
    ${breakpoint.down("m")`
      font-size: 1em;
    `}
  }

  td {
    padding: 1em;
    text-align: center;

    ${breakpoint.down("m")`
      font-size: 0.9em;
    `}

    &:first-child {
      font-size: 1em;
      font-weight: bold;
      padding-left: 0;
      text-align: left;

      ${breakpoint.down("m")`
        font-size: 1em;
      `}
    }
  }
`;

export default TableContainer;
