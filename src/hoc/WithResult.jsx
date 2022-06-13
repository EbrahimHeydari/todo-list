import React, { useContext } from 'react';
import ImageButton from '../components/ImageButton';
import ToDo from '../components/ToDo';
import { ToDoContext } from '../contexts/ToDoProvider';
import pin from '../assets/icon/pin.png';
import remove from '../assets/icon/remove.png';
import checked from '../assets/icon/checked.png';
import unchecked from '../assets/icon/unchecked.png';
import Tooltip from '../components/ToolTip';

const WithResult = props => {
  const { dispatch, farsi } = useContext(ToDoContext)

  const priority = {
    low : 'card-panel result__item green',
    medium: 'card-panel result__item orange',
    high: 'card-panel result__item red'
  }

  return (
    <div className={priority[props.priority]}>
      <ToDo todo={props.todo} />
      <Tooltip content={farsi ? 'حذف' : 'delete'}>
        <ImageButton
          clicked={() => dispatch({ type: 'REMOVE_TODO', id: props.todo.id })}
          url={remove}
          alt='delete' />
      </Tooltip>
      <Tooltip content={farsi ? 'انجام شد' : 'done'}>
        <ImageButton
          clicked={() => dispatch({ type: 'DONE_TODO', id: props.todo.id })}
          url={props.todo.done ? checked : unchecked}
          alt='done' />
      </Tooltip>
      <Tooltip content={farsi ? 'چسباندن' : 'pin'}>
        <ImageButton
          clicked={() => dispatch({ type: 'PIN_TODO', id: props.todo.id })}
          url={pin}
          alt='pin' />
      </Tooltip>
    </div>
  )
}

export default WithResult;