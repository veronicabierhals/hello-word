const express = require("express");
const usuarios = require("./controladores/usuarios");
const login = require("./controladores/login");
const verificarlogin = require("./filtros/verificarLogin");
const { novaPostagem } = require("./controladores/postagens");

const rotas = express();

rotas.post("/cadastro", usuarios.cadastrarUsuario);

rotas.post("/login", login);

rotas.use(verificarlogin);

rotas.get("/perfil", usuarios.obterPerfil);
rotas.put("/perfil", usuarios.atualizarPerfil);

rotas.post("/postagens", novaPostagem);

module.exports = rotas;
