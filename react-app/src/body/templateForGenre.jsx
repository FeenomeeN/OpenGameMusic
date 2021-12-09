import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { increase, decrease } from '../redux/action';
let count = 0;
let countDel = 0;
let newDiv;
let my_div = newDiv = null;

function addElement() {
        count++;
      newDiv = document.createElement("p");
      newDiv.id = count;
      newDiv.innerHTML = "template";
    my_div = document.getElementById("inner");
    my_div.parentNode.insertBefore(newDiv, my_div);
}

function deleteElement() {
    if(count === countDel){
        my_div = document.getElementById(count);
    }else{
        count--;
        my_div = document.getElementById(count); 
    }
    my_div.parentNode.removeChild(newDiv, my_div);
  
}
export default function TemplateForGenre() {
    const dispatch = useDispatch();
    const OnAddHandler = () =>{
        dispatch(increase());
        addElement();
    }
    const onSubHAndler = () =>{
        dispatch(decrease());
        deleteElement();
    }
    const count = useSelector(state=>state.CountReducer).count;
    return(<>
        <div className = 'wrapper'>
            <button onClick={OnAddHandler}> add </button>
            <button onClick={onSubHAndler}> delete </button>
            <div className = 'item' style = {{ display: 'grid' , gridAutoRows:'repeat(12,1fr)' }}>
                <p id="inner" style={{color:'black', width:'100px'}}>{count}</p>
            </div>
        </div>
    </>);
}