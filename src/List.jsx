
function List(){


    const fruits = [{id:1,name:"apple" , calories:95},
                    {id:2,name:"orange" , calories:120},
                    {id:3,name: "banana", calories: 150},
                    {id:4,name: "coconut", calories: 300 },
                    { id:5,name: "pineapple", calories: 5 }];

    //fruits.sort();

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); //Reverse Alphabetical


    fruits.sort((a,b)=> a.calories - b.calories); //Numeric
    //fruits.sort((a,b)=> b.calories - a.calories); //Reverse Numeric

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    

    const fruitsItem = fruits.map((fruit) => <li key={fruit.id}> <b>{fruit.name}</b> : {fruit.calories}</li>)


    const fruitsItem2 = lowCalFruits.map((lowCalFruit) => <li key={lowCalFruit.id}> <b>{lowCalFruit.name}</b> : {lowCalFruit.calories}</li>)


    const fruitsItem3 = highCalFruits.map((highCalFruit) => <li key={highCalFruit.id}> <b>{highCalFruit.name}</b> : {highCalFruit.calories}</li>)

    return(<ol>{fruitsItem} <br/> {"Low Calories"}<br/> <br/>{fruitsItem2} <br /> {fruitsItem3}</ol>);

}

export default List