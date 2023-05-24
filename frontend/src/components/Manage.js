import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

import { getMagazines, deleteMagazine } from "../services//MagazinesService";
import AddMagazineModal from "./AddMagazineModal";
import UpdateMagazineModal from "./UpdateMagazineModal";

const Manage = () => {
  const [magazines, setMagazines] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editMagazine, setEditMagazine] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (magazines.length && !isUpdated) {
      return;
    }
    getMagazines().then((data) => {
      if (mounted) {
        setMagazines(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, magazines]);

  const handleUpdate = (e, mag) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditMagazine(mag);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, Id) => {
    if (window.confirm("Are you sure ?")) {
      e.preventDefault();
      deleteMagazine(Id).then(
        (result) => {
          alert(result);
          setIsUpdated(true);
        },
        (error) => {
          alert("Failed to Delete Magazine");
        }
      );
    }
  };

  let AddModelClose = () => setAddModalShow(false);
  let EditModelClose = () => setEditModalShow(false);
  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="manage"></p>
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
                <td>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={(event) => handleDelete(event, mag.Id)}
                  >
                    <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button
                    className="mr-2"
                    onClick={(event) => handleUpdate(event, mag)}
                  >
                    <FaEdit />
                  </Button>
                  <UpdateMagazineModal
                    show={editModalShow}
                    magazine={editMagazine}
                    setUpdated={setIsUpdated}
                    onHide={EditModelClose}
                  ></UpdateMagazineModal>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd}>
            Add Magazine
          </Button>
          <AddMagazineModal
            show={addModalShow}
            setUpdated={setIsUpdated}
            onHide={AddModelClose}
          ></AddMagazineModal>
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default Manage;
