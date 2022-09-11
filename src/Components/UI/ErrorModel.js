import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css";
import ReactDOM from 'react-dom';

const ErrorModel = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.resetPage} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.resetPage}>OK</Button>
        </footer>
      </Card>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(<Backdrop  resetPage={props.resetPage}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message = {props.message}  resetPage={props.resetPage}/>,
       document.getElementById('modal-root'))}
    </>
  );
};
export default ErrorModel;
