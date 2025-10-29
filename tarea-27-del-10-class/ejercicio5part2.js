import { superheroe, usuario } from "./ejercicio5.js";

// console.log(`Mi nombre es ${superheroe.nombre} y soy ${superheroe.alias}`);

// console.log(`Usuario: ${usuario.username}`);
// console.log(`Email: ${usuario.email}`);
// console.log(`Compañia: ${usuario.company.name}`);

const {nombre} = superheroe
const {alias} = superheroe

const {username} = usuario
const {email} = usuario
const {company} = usuario




console.log(`Mi nombre es ${nombre} y soy ${alias}`)

console.log(`Usuario: ${username}`);
console.log(`Email: ${email}`);
console.log(`Compañia: ${company.name}`);