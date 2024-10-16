import './index.css'

const Message = props => {
  const {status} = props
  const text = status ? 'Please Login' : 'Welcome User'
  return <h1>{text}</h1>
}

export default Message
