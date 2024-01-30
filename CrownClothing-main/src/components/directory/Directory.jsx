import DirectoryItem from "../directory-item/DirectoryItem";

import "./directory.css";

function Directory(props) {
  return (
    <div className="directory-container">
      {props.categories.map((value) => {
        const navigationPath = value.title  //Temporary instead of dynamic routing
        const formattedTitle =
        value.title === "t-shirts"
          ? value.title // If the title is "t-shirts", keep it as is
          : value.title.replace("-", " "); // Replace "-" with space for other titles


        return (
          <DirectoryItem
            key={value.id}
            image={value.imageUrl}
            title={formattedTitle.toUpperCase()}
            
            // Temporary
            navigation={props.navigation === "categories" ? `${navigationPath}-categories` : `/shop/${value.title}`}
            class={props.class}
          />
        );
      })}
    </div>
  );
}

export default Directory;
