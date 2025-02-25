interface ErrorProps {
  errorMessage: string;
  role?: any;
  ariaLive?: any;
  id?: string;
}

const Error: React.FC<ErrorProps> = ({ errorMessage, role, ariaLive, id }) => {
  return (
    <div role={role} aria-live={ariaLive} id={id}>
      <p style={{
        color: 'red',
        fontSize: '8px',
      }}>{errorMessage}</p>
    </div>
  )
}

export default Error;