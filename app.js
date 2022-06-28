// const calculator = require('./calc'); // l'impoeration du module que on a créer avec require(path)
// console.log(calculator.sub(40,5))
// console.log(calculator.add(40,5))
// console.log(calculator.mult(40,5))
// console.log(calculator.div(40,5))


//PATH//
// const path = require('path');
// console.log(__filename) //il donne le path ou chemin du cette module
// console.log(__dirname); //il donne le path ou chemin du cette dossier qui contien le module 
// console.log(path.parse(__filename))  //La méthode path.parse() retourne un objet dont les propriétés représentent des éléments significatifs du chemin. 


//OPERATING SYSTEM//
// const myOs = require('os');
// console.log(myOs.freemem()) //os.freemem(): Renvoie la quantité de mémoire système libre en octets sous forme d'entier.
// console.log(myOs.cpus()) //Renvoie un tableau d'objets contenant des informations sur chaque cœur de processeur logique.
// console.log(myOs.totalmem()) // Renvoie la quantité totale de mémoire système en octets sous forme d'entier.


//FILE SYSTEM//
// const fileSystem = require('fs');
//Callback 
// const files = fileSystem.readdir('', (err,file)=>{
//     if(err){
//         console.err('error', err)
//     }
//     else{
//         console.log(file)
//     }
// })



//EVENTS//
// const EventEmitter = require('events'); 
// const myEvent = new EventEmitter(); // instancer un objet myEvent du class EventEmitter

//Récepteur
//on pour capter 'Allo'
// myEvent.on('Allo', function(args){  //il suffit que on a etendu 'allo' il va déclancher une méthode automatiquement
//     console.log('salam chna7walek lbss ', args) //voicie cette méthode (salam.....)
// })  

//on peut changer le fonction anonyme par rows function
// myEvent.on('Allo',args => console.log('salam chna7walek lbss ', args)) 
// myEvent.on('Allo',args => console.log('salam chna7walek lbss ', args.num, args.msg))  //pour eviter le {} d'un objet

//Emetteur
// //emitter.emit(eventName[, ...args])
// myEvent.emit('Allo', {num: 56351758 ,msg: "je suis sidina"}) //envoi un signal lorsque il y a un 'allo'  
// //.emit(NomDeEvenemenT,[argument,...])                    



//HTTP MODULE //
// const http = require('http') //importation http module
// const server = http.createServer(); //creation un server 
// server.on('connection', () =>{ //pour déclancher un méthode lorsque il fait connection sur port 4000 il affiche "somoene connected"
//      console.log("Somoene connected")
// })
// console.log("New connection on 4000...")
// server.listen(4000) //emetteur 

//Autre méthode pour creation serveur
// const server = http.createServer(function(req, res){ //cette function anonyme  contient 2 param
//     //on fait une condition si l'user est écrit un / on va sorti un msg
//     if(req.url === '/'){
//         res.write("hello Sidina") //res.write pour afficher cette msg
//         res.end() //le msg s'affiche lorsque il ya res.end()
        
//     }
//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify(['Angular', 'React', 'Node'])) //les données par défaut sous forme BSON vont sortie sous forme Json 
//         res.end() //
//     }
// } 
// );
// server.on('connection', () =>{ 
//     console.log("Somoene connected")
// })
// console.log("New connection on 6100...")
// server.listen(6100) 


//LODASH//
var _ = require('lodash');
let result= _.take([12 ,34 , 55, 900], 3)
console.log(result)



