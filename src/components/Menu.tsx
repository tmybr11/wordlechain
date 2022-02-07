import MenuButton from './MenuButton'

function Menu(props: any) {
  return (
    <div className="flex flex-col">
      <MenuButton text="Daily word"/>
      <MenuButton text="Challenge"/>
    </div>
  );
}

export default Menu;