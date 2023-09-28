//Creation de 3 tableaux qui constituera la phrase

let array1 = ['Landry', 'Aubrey', 'Chris', 'Alfred', 'Deo', 'Cyrus', 'Dadou', 'Felly', 'Papy', 'Gaby'];
let array2 = ['code','est', 'mange', 'va', 'connait', 'danse', 'est', 'coupe', 'gaspille', 'veut'];
let array3 = [ 'surement', 'inteligent', 'trop vite', 'courageux', 'baiser', 'souvent', 'en reunion' ,'doué', 'incapable', 'capable']

//creation de la fonction qui affichera la phrase

let a = array1[Math.floor(Math.random()*9)]
let b = array2[Math.floor(Math.random()*9)]
let c = array3[Math.floor(Math.random()*9)]

console.log(a, b, c)