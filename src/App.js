import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { data , createMap, groupDataByStatus, groupDataByPriority, groupDataByUser} from './api/fetchData';
import Status from './pages/Status';
import Priority from './pages/Priority';
import User from './pages/User';
import Navbar from './components/Navbar';

function App() {
  let [groupByUser, setUser]=useState(undefined);
  let [groupByPriority, setPriority]=useState(undefined);
  let [groupByStatus, setStatus]=useState(undefined);
  useEffect(()=>{
    data().then(
      (result)=>{
        const mp = createMap(result)
        setUser(groupDataByUser(result.tickets, mp));
        setPriority(groupDataByPriority(result.tickets, mp));
        setStatus(groupDataByStatus(result.tickets, mp));
        setLoading(false)
      })
  },[])
  const sortByTitle = (mp, setMp)=>{
    let temp = new Map()
    for(let [key, value] of mp.entries()){
      let sorted_val = [...value].sort((a, b)=>(a.title).localeCompare((b.title)))
      temp.set(key, sorted_val)
    }
    setMp(temp)
  }
  const sortByPriority = (mp, setMp)=>{
    let temp = new Map()
    for(let [key, value] of mp.entries()){
      let sorted_val = [...value].sort((a, b)=>(b.priority)-((a.priority)))
      console.log(sorted_val)
      temp.set(key, sorted_val)
    }
    setMp(temp)
  }

  const sort = (i)=>{
    if(i==0){
      if(display==0) sortByTitle(groupByStatus, setStatus)
      else if(display==1) sortByTitle(groupByPriority, setPriority)
      else sortByTitle(groupByUser, setUser)
    }
    else{
      if(display==0) sortByPriority(groupByStatus, setStatus)
      else if(display==2) sortByPriority(groupByUser, setUser)
    }
  }
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(0);
  const [toggle, setToggle] = useState(true)
  const site_states = ["Status", "Priority", "User"]
  const sortedStates = ["Title", "Priority"]
  if(loading) 
    return (<></>)
  return (
    <div className="App">
      <Navbar sstates={site_states} current_display={display} changeDisplay={setDisplay} sortedStates={sortedStates} sort={sort}/>
      {display==0 && <Status data = {groupByStatus}/>}
      {display==1 && <Priority data = {groupByPriority}/>}
      {display==2 && <User data = {groupByUser}/>}
    </div>
  );
}

export default App;
