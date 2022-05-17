import React from 'react'
// on importe la libreraie react
import { createRoot } from 'react-dom/client'
const name: string = 'Amel'
const age: number = 18
const notes: Array<number> = [12, 15, 18, 20]
//on importe la libreraie react-dom elle permet d afficher react sur la page
//on cree un element react jsx
// const element = (
//   <div>
//     <h1>Bonjour tout le monde</h1>
//     <p>Coucou les amis</p>
//   </div>
// )
// deuxieme structure
const element: JSX.Element = (
  <div>
    <h1>Bonjour tout le monde</h1>
    <p>Coucou les amis</p>
    <h2>{name}</h2>
    <h2>Mes notes</h2>
    {age >= 18 ? (
      <div>
        <p>vous etes majeur</p>
      </div>
    ) : (
      <div>
        <p>vous etes mineur</p>
      </div>
    )}
    <ul>
      {notes.map(note => (
        <li>{note}/20</li>
      ))}
    </ul>
    <h2>Mes notes 2 avec les performence de la clé</h2>
    <ul>
      {notes.map((note, index) => (
        <li key={`note-${index}`}>{note}/20</li>
      ))}
    </ul>
  </div>
)
//affichage des variabke

//on recupere la balise div root de notre page html
const root = document.querySelector('#root')
if (!root) {
  throw new Error('oups il manque une balise')
}

createRoot(root).render(element)
//j affiche l element à l ecran dans la balise div#root
