import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import dot from '../components/images/3 dot menu.svg';
import add from '../components/images/add.svg';
import done from '../components/images/Done.svg';
import Backlog from '../components/images/Backlog.svg';
import progress from '../components/images/in-progress.svg';
import todo from '../components/images/To-do.svg';
import cancel from '../components/images/Cancelled.svg';
// import dot from '../components/images/3 dot menu.svg'
export default function Status(props) {
    let imgmp = {
        "Todo" : todo,
        "In progress" : progress,
        "Backlog" : Backlog,
        "Done" : done,
        "Cancelled":cancel, 
    }
  function makeComponent(mp) {
    let component = [];

    for (let [key, value] of mp.entries()) {
      let p = [];

      p.push(
        <div className='statusTitle' key={key}>
          <span><img src={imgmp[key]} alt="" srcset="" /> {key} {value.length}</span>
          <span className='imges'>
            <img src={add} alt="" srcset="" />
            <img src={dot} alt="" srcset="" />
          </span>
        </div>
      );

      for (let obj of value) {
        p.push(<Card data={obj} key={obj.id} page="status"/>); 
      }
      component.push(<div className='statusBlock' key={key}>{p}</div>);
    }
    return component;
  }
//   function sortPriority(mp){
//     for(let [key, value] of mp.entries()){
//         let sort1;
//         sort1 = [...value].sort((a, b)=>{
//             if(a.priority>b.priority) return -1;
//             else if(a.priority<b.priority) return 1;
//             else return 0;
//         })
//         console.log(sort1)
//     }
    
//   }
  const mp = props.data;

  return (
    <>
    <div className='cardContainer'>
      {makeComponent(mp)}
    </div>
    </>
  );
}
