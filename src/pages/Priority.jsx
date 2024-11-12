import React from 'react';
import Card from '../components/Card';
import dot from '../components/images/3 dot menu.svg';
import add from '../components/images/add.svg';
import done from '../components/images/Done.svg';
import Backlog from '../components/images/Backlog.svg';
import progress from '../components/images/in-progress.svg';
import todo from '../components/images/To-do.svg';
import cancel from '../components/images/Cancelled.svg';
import HP from '../components/images/Img - High Priority.svg'
import LP from '../components/images/Img - Low Priority.svg'
import MP from '../components/images/Img - Medium Priority.svg'
import UP from '../components/images/SVG - Urgent Priority colour.svg'
import NP from '../components/images/No-priority.svg'
// import dot from '../components/images/3 dot menu.svg'
export default function Priority(props) {
    let imgmp = {
        "Todo" : todo,
        "In progress" : progress,
        "Backlog" : Backlog,
        "Done" : done,
        "Cancelled":cancel, 
    }
    let p2 = {
        4 : UP,
        3 : HP,
        2 : MP, 
        1 : LP,
        0 : NP
    }
    let p1 = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No-Priority"
    }
  function makeComponent(mp) {
    let component = [];

    for (let [key, value] of mp.entries()) {
      let p = [];

      p.push(
        <div className='statusTitle' key={key}>
          <span><img src={p2[key]} alt="" srcset="" /> {p1[key]} {value.length}</span>
          <span className='imges'>
            <img src={add} alt="" srcset="" />
            <img src={dot} alt="" srcset="" />
          </span>
        </div>
      );

      for (let obj of value) {
        p.push(<Card data={obj} key={obj.id} page="priority"/>); 
      }
      component.push(<div className='statusBlock' key={key}>{p}</div>);
    }
    return component;
  }
  const mp = props.data;

  return (
    <>
        <div className='cardContainer'>
        {makeComponent(mp)}
        </div>
    </>
  );
}
