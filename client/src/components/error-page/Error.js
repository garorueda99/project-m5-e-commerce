// Libraries
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// Actions
import { triggerModal } from '../../actions';

export default function Error() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Error</div>
      <button onClick={() => dispatch(triggerModal('title', 'hello'))}>
        Modal Test
      </button>
    </div>
  );
}
