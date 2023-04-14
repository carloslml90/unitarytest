
import PropTypes from 'prop-types';
export const Names= [{name:'Carlos',id:1},{name:'Rodrigo',id:3},{name:'Daniel', id:8}];
const ChoseAnObject=(id)=> Names.filter(element=> element.id===id);


export default function App({title, subtitle}) {


    
    return (
        <>
<h1>{title}</h1>
<h2>{subtitle}</h2>
</>
);
}

App.propTypes={

    title: PropTypes.string.isRequired,
}

App.defaultProps = {

    title: 'No hay titulo',
}


