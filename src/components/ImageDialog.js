import React from 'react';
import styles from './ImageDialog.module.css';

function ImageDialog({ img }) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div>
      <img
        className={styles.small}
        alt="close"
        src={img}
        onClick={() => setOpen(!isOpen)}
      />
      {isOpen && (
        <dialog className="dialog" open onClick={() => setOpen(!isOpen)}>
          <img
            className={styles.image}
            alt="close"
            src={img}
            onClick={() => setOpen(!isOpen)}
          />
        </dialog>
      )}
    </div>
  );
}

export default ImageDialog;
