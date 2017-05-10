// TODO: Faire qqhcose
// TODO: Le TODO Item aura
// {
// status: default : TODO {
//   isDone }
// }
// content: markupd text
// tags: [string list]

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './TODOItem.css';


class TODOItem extends Component {
  props: {
    create: () => void,
    remove: () => void,
    check: () => void,
    status: {
      keyword: string,
      isDone: boolean
    },
    content: string
  };

  render() {
    const { create, remove, check, status.keyword, status.isDone, content } = this.props;
    return (
      <div className="todoList">

      </div>
      <div className="todoHub">
        <button onClick={create}>Ajouter un TODO</button>
        <button onClick={remove}>Supprimer un TODO</button>
      </div>
    );
  }
}

export default Counter;
