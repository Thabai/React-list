import "./App.css";
import React from 'react';
import { List } from "./List";
import { Form } from "./Form";

const App = () => {
    const [items, setItems] = useState ([]);

const handleItem = (newItem) => {
    setItems([...items, newItem]);
    // let newArray = [items]
    // newArray.push(newItem)
    // setItems(newArray)
};

const handleRemove = (itemIndex) => {
    let newArray = [...items];
   newArray.splice(itemIndex, 1);
   setItems(newArray);
};

    return (
        <div className='container'>
            <div className='header'>
            <h1>To do App</h1>
            <p>Add to your to do list below</p>
        </div>

        <div className="wrapper">
           <Form handleItem={handleItem} />

           {items.length > 0 && <List items={items}  handleRemove={handleRemove}/>}
        </div>
        </div>
    );
};

export default App;
