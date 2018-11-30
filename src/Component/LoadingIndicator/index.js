import React from 'react';
import loading from './loading.gif';
import "./style.css";

export default class LoadingIndicator extends React.Component {
  render = () => (
    <div className="LoadingIndicator">
      <img src={loading}/><br/>
      Loading...
    </div>
  )
};
