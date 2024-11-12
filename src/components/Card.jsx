import React from 'react'
import Done from './images/Done.svg'
import HP from './images/Img - High Priority.svg'
import LP from './images/Img - Low Priority.svg'
import MP from './images/Img - Medium Priority.svg'
import UP from './images/SVG - Urgent Priority grey.svg'
import NP from './images/No-priority.svg'
import circle from './images/circle.svg'
import add from '../components/images/add.svg';
import done from '../components/images/Done.svg';
import Backlog from '../components/images/Backlog.svg';
import progress from '../components/images/in-progress.svg';
import todo from '../components/images/To-do.svg';
import cancel from '../components/images/Cancelled.svg';

export default function Card(props) {
    let p = {
        4 : UP,
        3 : HP,
        2 : MP, 
        1 : LP,
        0 : NP
    }
    let imgmp = {
        "Todo" : todo,
        "In progress" : progress,
        "Backlog" : Backlog,
        "Done" : done,
        "Cancelled":cancel, 
    }
    let data = props.data
  return (
    <div className='card'>
        <div className='title row'>
            <p>{data.id}</p>
        </div>
        <div className='task row'>
            {props.page=="status"?<></>:<div className='icon'>
                <img src={imgmp[data.status]} alt="" srcset="" />
            </div>}
            <div className='taskName'>
                <p>{data.title}</p>
            </div>
        </div>
        {data.tag?
            <div className='tag row'>
                {props.page=="priority"?<></>:<div className='priority'>
                    <img src={p[data.priority]} alt="" srcset="" />
                </div>}
                <div className='FeedBack'>
                    <ul>
                        <li><img src={circle} alt="" srcset="" /></li>
                        <li>Feedback</li>
                    </ul>
                </div>
        </div>:<></>}
    </div>
  )
}
