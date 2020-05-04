import React, { Fragment } from "react";
import { useTable } from "react-table";

import TitleSection from "../../components/TitleSection.component";
import Section from "../../components/Section.component";
import { ButtonLink } from "../../components/Button.component";
import { TableImage } from "../../components/Image.component";
import TableContainer from "./style";

import steakrare from "../../media/steak-rare.png";
import steakmediumrare from "../../media/steak-medium-rare.jpg";
import steakmedium from "../../media/steak-medium.jpg";
import steakwelldone from "../../media/steak-well-done.jpg";

import palmrare from "../../media/palm-rare.png";
import palmmediumrare from "../../media/palm-medium-rare.png";
import palmmedium from "../../media/palm-medium.png";
import palmwelldone from "../../media/palm-well-done.png";

import facerare from "../../media/face-rare.jpeg";
import facemediumrare from "../../media/face-medium-rare.jpeg";
import facemedium from "../../media/face-medium.jpeg";
import facewelldone from "../../media/face-well-done.jpeg";

import fistrare from "../../media/fist-rare.jpeg";
import fistmedium from "../../media/fist-medium.jpeg";
import fistwelldone from "../../media/fist-well-done.jpeg";

const CheatSheet = () => {
  const data = React.useMemo(
    () => [
      {
        h: "Cross Section",
        r: <TableImage src={steakrare} alt="steakrare" />,
        mr: <TableImage src={steakmediumrare} alt="steakmediumrare" />,
        m: <TableImage src={steakmedium} alt="steakmedium" />,
        wd: <TableImage src={steakwelldone} alt="steakwelldone" />,
      },
      {
        h: (
          <Fragment>
            Internal
            <br />
            Temperatures (°F)
          </Fragment>
        ),
        r: "125-130",
        mr: "130-140",
        m: "140-155",
        wd: "155+",
      },
      {
        h: "Sear Time (min)",
        r: "1-2.5",
        mr: "3-4",
        m: "4-5",
        wd: "6-8",
      },
      {
        h: "Palm",
        r: <TableImage src={palmrare} alt="palmrare" />,
        mr: <TableImage src={palmmediumrare} alt="palmmediumrare" />,
        m: <TableImage src={palmmedium} alt="palmmedium" />,
        wd: <TableImage src={palmwelldone} alt="palmwelldone" />,
      },
      {
        h: "Face",
        r: <TableImage src={facerare} alt="facerare" />,
        mr: <TableImage src={facemediumrare} alt="facemediumrare" />,
        m: <TableImage src={facemedium} alt="facemedium" />,
        wd: <TableImage src={facewelldone} alt="facewelldone" />,
      },
      {
        h: "Fist",
        r: <TableImage src={fistrare} alt="fistrare" />,
        mr: <TableImage src={fistrare} alt="fistrare" />,
        m: <TableImage src={fistmedium} alt="fistmedium" />,
        wd: <TableImage src={fistwelldone} alt="fistwelldone" />,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "h",
      },
      {
        Header: "Rare",
        accessor: "r",
      },
      {
        Header: "Medium-Rare",
        accessor: "mr",
      },
      {
        Header: "Medium",
        accessor: "m",
      },
      {
        Header: "Well-Done",
        accessor: "wd",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Fragment>
      <TitleSection>
        <h1>Cheat Sheet</h1>
        <p>We get it, it's a lot of information.</p>
      </TitleSection>
      <Section center>
        <h2>
          Perhaps this cheat sheet can help. Print it out and stick it on your
          fridge. Sew it on your apron. Stitch it into your next unity blanket.
        </h2>
      </Section>
      <Section center>
        <TableContainer {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </TableContainer>
      </Section>
      <Section center last>
        <h2>Think you're ready to test your skills?</h2>
        <div className="flex-h">
          <ButtonLink to="/quiz/start">Quiz Yourself</ButtonLink>
        </div>
      </Section>
    </Fragment>
  );
};

export default CheatSheet;
