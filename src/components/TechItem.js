import React from 'react';
import PropTypes from 'prop-types';

function TechItem(props){
  return (
    <li>
      {props.tech}
      <button type="button" onClick={props.onDelete}>Remover</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto'
}

TechItem.prototypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TechItem;