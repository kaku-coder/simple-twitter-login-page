import './Button.css'

const Button = ({ givetext, variant }) => {
  return (
    <div className="button">
      <button className={variant}>
        {givetext}
      </button>
    </div>
  )
}

export default Button
