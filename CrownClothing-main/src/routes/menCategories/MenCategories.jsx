import Directory from "../../components/directory/Directory";

function MenCategories() {
  const categories = [
    {
      id: 1,
      title: "men-hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "men-jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "men-sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "men-trousers",
      imageUrl:
        "https://w7.pngwing.com/pngs/621/646/png-transparent-khaki-pants-pocket-m-men-s-trousers.png",
    },
    {
      id: 5,
      title: "shirts",
      imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
    },
    {
      id: 6,
      title: "t-shirts",
      imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
    },
  ];

  // Temporary
  const navigation = "products";

  return (
    <>
      <h1>Men Categories</h1>
      <Directory
        categories={categories}
        navigation={navigation}
        class="directory-item-container edit"
      />
      ;
    </>
  );
}

export default MenCategories;
