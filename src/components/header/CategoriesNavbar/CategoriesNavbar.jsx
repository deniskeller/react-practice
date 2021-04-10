import React from "react";

const CategoriesNavbar = React.memo(({ selectItem, items, onClickItem }) => {
  const onSelectItem = (index) => {
    onClickItem(index);
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
});

export default CategoriesNavbar;
