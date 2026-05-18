let itemsContainerElement = document.querySelector(".items-container");

let item = {
  item_image: `/images/1.jpg`,
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name: `Calton London`,
  item_name: `item-name">Rhodium-Plated CZ Floral Studs`,
  current_price: 606,
  original_price: 1045,
  discount_persentage: 45,
};
itemsContainerElement.innerHTML = `<div class="item-container">
          <img class="item-image" src="${item.item_image}" alt="item image" />
          <div class="rating">${item.rating.stars} ⭐ | ${item.rating.noOfReviews}</div>
        </div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_persentage}% OFF)</span>
        </div>
        <button class="btn-add-bag">Add to Bag</button>
      </div>`;
