import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import useAuth from '../hooks/useAuth';
import { increase, decrease } from '../redux/action';
import Footer from './footer'

let count = 0;
let countDel = 0;
let newDiv;
let my_div = newDiv = null;

function addElement() {
    count++;
    newDiv = document.createElement(createElementF());
    newDiv.id = count;
    newDiv.innerHTML = "Music";
    my_div = document.getElementById("inner");
    my_div.parentNode.insertBefore(newDiv, my_div);
    console.log("add", newDiv);
    save_element();
}

function save_element() {
    const parsed = newDiv.innerHTML;
    localStorage.setItem(count, parsed);
    localStorage.setItem("count", count);
}
function getElement() {
    const reb = localStorage.getItem('count');
    return reb;
}
function createElementF() {
    
    return "p";
}

function deleteElement() {
    my_div = document.getElementById(count--);
    console.log("delete", my_div);
    my_div.parentNode.removeChild(my_div, newDiv);
    //save_element();
}

export default function TemplateForGenre() {
    const auth = useAuth();
    const dispatch = useDispatch();
    const OnAddHandler = () => {
        dispatch(increase());
        addElement();
    }
    const onSubHAndler = () => {
        dispatch(decrease());
        deleteElement();
    }
    const count = useSelector(state => state.CountReducer).count;
    return (<>
        <div className='wrapper'>
            <button onClick={OnAddHandler}> add </button>
            {auth.isLoaded && (auth.isAdmin ? (
                <button onClick={onSubHAndler}> delete </button>
            ):( <p>ds</p>
            ))}
            <div className='item' style={{ display: 'grid', gridAutoRows: 'repeat(12,1fr)' }}>
                <p id="inner" style={{ color: 'black', width: '100px' }}>{count}</p>
            </div>
        </div>
        <Footer></Footer>
    </>);
}

//localStorage.clear();