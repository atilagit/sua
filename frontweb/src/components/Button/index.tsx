import './styles.css';

type Props = {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="button-container">
      <p>{text}</p>
    </button>
  );
};

export default Button;
