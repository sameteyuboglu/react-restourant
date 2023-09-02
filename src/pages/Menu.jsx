/* eslint-disable react/jsx-key */
import { MenuList } from "../helpers/MenuList";
function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem,index) => {
          return (
            <div className="menuItem" key={index}>
              <div>
                <img src={menuItem.image} />
              </div>
              <h3>{menuItem.name}</h3>
              <p>{menuItem.price} $</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
