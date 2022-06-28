// function addition (a,b){
//     console.log('a + b=' + (a+b));
// }
// function soustraction (a,b){
//     console.log('a - b=' + (a-b));
// }
// function multplication (a,b){
//     console.log('a * b=' + (a*b));
// }
// function division (a,b){
//     console.log('a / b=' + (a/b));
// }

// module.exports.sub = soustraction //module: c'est le fichier & exports: on va retourner en public & sub: (Alias) nom qui on choisie on peut choisi n'importe quel nom  & soustraction: le nom du méthode 
// //Quand on va l'appeler le méthode on l'appel par le nom de (Alias)

// //1 ér méthode de exportation d'une function pour étre public
// module.exports.add = addition
// module.exports.mult = multplication
// module.exports.div = division

//2 éme méthode de exportation d'une function pour étre public
// exports.add = function addition (a,b){
//     console.log('a + b=' + (a+b)); 
// }
// exports.sub = function soustraction (a,b){
//     console.log('a + b=' + (a-b));
// }
// exports.mult = function multplication (a,b){
//     console.log('a + b=' + (a*b));
// }
// exports.div = function division (a,b){
//     console.log('a + b=' + (a/b));
// }

//3 éme méthode de exportation d'une function pour étre public on utilise le rows function
exports.add = (a,b) => {
    console.log('a + b=' + (a+b)); 
//quand on une seul instruction on peut supprimer {} & ou on a une seul param on peut suprimer ()
}
exports.sub = (a,b) => 
    console.log('a + b=' + (a-b));

exports.mult =  (a,b) => 
    console.log('a + b=' + (a*b));

exports.div =  (a,b) => 
    console.log('a + b=' + (a/b));


