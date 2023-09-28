//Creation de 3 tableaux qui constituera la phrase

let array1 = ['Landry', 'Aubrey', 'Chris', 'Alfred', 'Deo', 'Cyrus', 'Dadou', 'Felly', 'Papy', 'Gaby'];
let array2 = ['est', 'devient', 'reste', 'semble', 'se fait', 's\'avere', 'parrait', 'demeure', 'a l\'air', 's\'affirme'];
let array3 = [ 'proffessionel', 'inteligent', 'atténtif', 'courageux', 'fatigué', 'consideré', 'determiné' ,'admiré', 'incapable', 'capable'];

//creation de la fonction qui affichera la phrase

let a = array1[Math.floor(Math.random()*9)]
let b = array2[Math.floor(Math.random()*9)]
let c = array3[Math.floor(Math.random()*9)]

console.log(a, b, c)