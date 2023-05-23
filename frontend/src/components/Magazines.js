import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getMagazines } from "../services/MagazinesService";
import "../App.css";

const Magazines = () => {
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    let mounted = true;
    getMagazines().then((data) => {
      if (mounted) {
        setMagazines(data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="before-table"></p>
        <Table
          striped
          bordered
          hover
          className="react-bootstrap-table"
          id="dataTable"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Czasopismo</th>
              <th>Nr</th>
              <th>Data</th>
              <th>Dział</th>
              <th>Artykół</th>
              <th>Autor</th>
              <th>Uwagi</th>
            </tr>
          </thead>
          <tbody>
            {magazines.map((mag) => (
              <tr key={mag.id}>
                <td>{mag.Id}</td>
                <td>{mag.Czasopismo}</td>
                <td>{mag.Nr}</td>
                <td>{mag.Data}</td>
                <td>{mag.Dzial}</td>
                <td>{mag.Artykol}</td>
                <td>{mag.Autor}</td>
                <td>{mag.Uwagi}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Magazines;
