import Directory from "../../components/directory/Directory";

function WomenCategories() {
  const categories = [
    {
      id: 1,
      title: "women-hats",
      imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
    },
    {
      id: 2,
      title: "blouses",
      imageUrl:
        "https://i.pinimg.com/originals/5a/80/89/5a80895a873bef74c05e5d36e2862cac.png",
    },
    {
      id: 3,
      title: "skirts",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHq7Mi-bIN8rmhivo97z682u7MZIqvANuSg&usqp=CAU",
    },
    {
      id: 4,
      title: "women-jackets",
      imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
    },
    {
      id: 5,
      title: "women-sneakers",
      imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
    },
    {
      id: 6,
      title: "women-trousers",
      imageUrl:
        "https://w7.pngwing.com/pngs/811/529/png-transparent-cargo-pants-el-fuego-shorts-khaki-beige-cargo-ankle-danish-krone.png",
    },
  ];

  // Temporary
  const navigation = "products";

  return (
    <>
      <h1>Women Categories</h1>
      <Directory
        categories={categories}
        navigation={navigation}
        class="directory-item-container edit"
      />
      ;
    </>
  );
}

export default WomenCategories;
