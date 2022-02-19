import MenuButton from './MenuButton'
import './Menu.css'

function Menu() {
  return (
    <div className="flex flex-col h-screen justify-center" id="main-menu">
      <img className="h-auto mx-auto w-1/2" src="../logo512.png" />
      <MenuButton path="/daily" text="Daily Word"/>
      <MenuButton path="/free" text="Free Play"/>
      <MenuButton path="/challenge" text="Challenge"/>
    </div>
  );
}

export default Menu;