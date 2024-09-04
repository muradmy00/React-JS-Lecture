import propTypes from 'prop-types'

function List(props){


    const category = props.category;
    const itemList = props.items;


    //fruits.sort();

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); //Reverse Alphabetical


    //fruits.sort((a,b)=> a.calories - b.calories); //Numeric
    //fruits.sort((a,b)=> b.calories - a.calories); //Reverse Numeric

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    

    const fruitsItem = itemList.map((item) => <li key={item.id}> <b>{item.name}</b> : {item.calories}</li>)


    //const fruitsItem2 = lowCalFruits.map((lowCalFruit) => <li key={lowCalFruit.id}> <b>{lowCalFruit.name}</b> : {lowCalFruit.calories}</li>)


    //const fruitsItem3 = highCalFruits.map((highCalFruit) => <li key={highCalFruit.id}> <b>{highCalFruit.name}</b> : {highCalFruit.calories}</li>)

    return (<><h3>{category}</h3><ol>{fruitsItem}</ol></>);

}

List.propTypes = {

    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({ id: propTypes.number, name: propTypes.string, calories: propTypes.number})),

}


List.defaultProps = {

    category: "Category",
    items:[],

}

export default List