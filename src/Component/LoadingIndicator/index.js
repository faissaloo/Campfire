import React from 'react';
import loading from './loading.gif';
import "./style.css";

export default class LoadingIndicator extends React.Component {
  render = () =>
    <div><img src={loading}></img><br/>Loading...</div>
};
