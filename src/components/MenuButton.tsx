import { Link } from 'react-router-dom'

function MenuButton({ text, path }: any) {
  return (
    <Link className="waves-effect waves-light btn-large deep-purple darken-1" to={path}>{text}</Link>
  );
}

export default MenuButton;