import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ImageModal = ({ isOpen, onClose, imageSource, alt, title, description }) => {
  const { theme } = useContext(ThemeContext);

  if (!isOpen) return null;

  const textColor = theme === 'light' ? 'black' : 'white';

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={imageSource} alt={alt} title={title} style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '30%', // Increase the max width of the modal
    width: '30%', // Increase the width of the modal
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'black',
  },
  image: {
    width: '100%', // Make the image take up the full width of the modal
    height: 'auto', // Maintain aspect ratio
  },
};