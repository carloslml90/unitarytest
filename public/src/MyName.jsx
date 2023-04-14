
const FakeName= '  Diego';

const Multiplier=(a,b) => {return a*b};
const Names= [{name:'Carlos',id:1},{name:'Rodrigo',id:3},{name:'Daniel', id:8}];
const ChoseAnObject=(id)=> Names.filter(element=> element.id===id);

export default function MyName() {

    return (
    <>
    <h1>Bienvenido {Names[0].name}</h1>
    <p>i am a great coder and a person put enthusiasm into all of my activies i do </p>
    </>
    ); 
}

