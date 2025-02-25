import success from '/icon-success-check.svg';

interface ModalProps {
  message: string,
}

const Modal: React.FC<ModalProps> = ({ message }) => {
  return (
    <div className="modal" id='success' role='status' aria-live='polite'>
      <div style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        gap: '5px',
      }}>
        <img src={success} />
        <p style={{
          fontWeight: 'bold',
        }}>Message Sent!</p>
      </div>
      <p style={{
        fontSize: 'small',
      }}>{message}</p>
    </div>
  )
}

export default Modal