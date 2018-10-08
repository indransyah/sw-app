import React from 'react';
import { CardLink } from 'reactstrap';

const style = {
  color: '#111111',
  cursor: 'pointer',
};

export default function CardPagination(props) {
  return (
    <div className="text-right">
      <CardLink
        onClick={e => {
          e.preventDefault();
          props.handleIndexChange(props.type, +props.selectedIndex - 1);
        }}
        style={Object.assign({}, style, {
          visibility: !!props.selectedIndex ? 'visible' : 'hidden',
        })}>{`<<`}</CardLink>
      <span style={{ margin: '0 1.25rem' }}>
        {+props.selectedIndex + 1} of {props.length}
      </span>
      <CardLink
        onClick={e => {
          e.preventDefault();
          props.handleIndexChange(props.type, +props.selectedIndex + 1);
        }}
        style={Object.assign({}, style, {
          visibility:
            +props.selectedIndex + 1 === props.length ? 'hidden' : 'visible',
        })}>{`>>`}</CardLink>
    </div>
  );
}
