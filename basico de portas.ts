import * as express from "express";

const app  = express ();
const port1 = 3000;

app.get('/', (request, response) => {
    response.send('Hello World!');
});
app.get('/bsm', (request, response) => {
    response.send('<h1>MENTALIDADES</H1>'+
    '<OL><li>Persistencia</LI><li>Responsabilidade pessoal</li>'+
    '<li>Orientação ao futuro</li><li>Mentalidade de Crescimento</li>'+
    '<h2>HABILIDADES</H2><li>Trabalho em equipe</li><li>atenção aos detalhes</li>'+
    '<li>proatividade</li><li>comunicação</li></ol>');
});    
app.get('/lista', (request, response) => {
    response.send('<h2>Aprendizados da semana<h2>'+
    '<h1>Oque vou adquirir esta semana</h1>'+
    '<li>Esta semana vou esta me dedicando mas em esta aprimorando ainda mas minhas proatividades<li>'+
    '<li>quero esta aprimorando meu pitty deixar eles mas proficional</li>');
});



  
app.listen(port1, () => {
    console.log(`serve is runing at port ${port1} !`);
}); 
