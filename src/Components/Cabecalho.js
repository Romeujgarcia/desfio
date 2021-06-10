import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import axios from "axios";
import Pagination from "./Pagination";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../images/avatar.jpg";
import "../App.css";
import "./Cabecalho.css";

function Cabecalho() {
  const [data, setData] = useState([]);
  const [loading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://desafio.eadplataforma.com/api/1/users?token=123456789"
      );
      setData(res.data.users);
    }
    getData();
  }, []);

  const filteredCountries = data.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredCountries.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="cabecalho">
      <div className="name">
        <TextField
          className="input"
          id="outlined-basic"
          label="Busque por cliente"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="visao">
          <div className="geral">
            <Box height="50px" >
              <Container
                maxWidth="xm"
                style={{ backgroundColor: "#1bbc9b", height: 50}}
              >
                <h1>Visão geral</h1>
              </Container>
            </Box>
          </div>

          <div className="conteiner">
            <Hidden>
              <Paper className="componente"> Total de cliente</Paper>
            </Hidden>
            <Hidden>
              <Paper className="componente"> Cliente inadimpletes</Paper>
            </Hidden>
            <Hidden>
              <Paper className="componente"> Cliente adimplentes</Paper>
            </Hidden>
            <Hidden>
              <Paper className="componente"> Total arrecadado</Paper>
            </Hidden>
          </div>
          <Container
            maxWidth="xm"
            style={{ backgroundColor: "#1bbc9b", height: 50 }}
          >
            <h2>Cliente cadastrado</h2>
          </Container>
        </div>
        <div className="icons">
          <SearchIcon />
        </div>

        <Posts itens={currentPosts} loading={loading} />
      </div>

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Próximo
        </Button>
      </div>
      <div className="volta">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Anterior
        </Button>
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredCountries.length}
        paginate={paginate}
      />
      <div className="noteficacao">
        <NotificationsNoneIcon />
      </div>
      <Avatar alt="Remy Sharp" className=" avatar" src={avatar} />
    </div>
  );
}

export default Cabecalho;
