import React from "react";

function CategoriesNavbar({ items }) {
  const [selectItem, setSelectItem] = React.useState(null);

  const onSelectItem = (index) => {
    setSelectItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={selectItem === null ? "active" : ""}
        >
          Все
        </li>
        {[] &&
          items.map((name, index) => (
            <li
              onClick={() => onSelectItem(index)}
              key={index + name}
              className={selectItem === index ? "active" : ""}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CategoriesNavbar;
