const fetchProductInfo = fetch(`https://isko88.github.io/apipizza.json`);

fetchProductInfo
  .then((resp) => {
    return resp.json();
  })
  .then((product) => {
    for (prod of product) {
      createProductList(prod);
      addToBasket(product);
    }
    productDetail();
    return product;
  })
  .catch(err => {
    return err;
  })

function createProductList(prod) {
  const productList = document.querySelector("#product-list .list-wrapper");

  const data = `
  <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="product-card">
              <span class="d-none">${prod.id}</span>
                <div class="photo">
                  <img src="${prod.image}" alt="" />
                </div>
                <h5 class="card-title">${prod.name} <span>32cm</span></h5>
                <p class="description">
                  ${prod.topping}
                </p>
                <p class="price">${prod.price} UAH</p>
                <button class="btn-detail">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2653 3.81981C11.261 3.76283 11.2133 3.71875 11.1562 3.71875H9.73436C9.43232 3.71875 9.18748 3.47391 9.18748 3.17188C9.18748 1.42286 7.76451 0 6.01561 0C4.2667 0 2.84373 1.42286 2.84373 3.17188C2.84373 3.47391 2.59889 3.71875 2.29686 3.71875H0.874985C0.817891 3.71875 0.770204 3.76283 0.765938 3.81981L0.000313585 13.8823C-0.00198329 13.9126 0.00840733 13.9426 0.0291886 13.9649C0.0498604 13.9873 0.0789541 14 0.10936 14H11.9219C11.9523 14 11.9814 13.9873 12.002 13.965C12.0227 13.9427 12.0332 13.9127 12.0309 13.8824L11.2653 3.81981ZM3.71873 3.17188C3.71873 1.90542 4.74905 0.875 6.01561 0.875C7.28217 0.875 8.31248 1.90542 8.31248 3.17188C8.31248 3.47391 8.06764 3.71875 7.76561 3.71875H4.26561C3.96358 3.71875 3.71873 3.47391 3.71873 3.17188ZM3.28123 6.78125C2.67803 6.78125 2.18748 6.29059 2.18748 5.6875C2.18748 5.59414 2.19749 5.50275 2.2175 5.41508C2.3246 4.94593 2.84373 5.20629 2.84373 5.6875C2.84373 5.92878 3.04006 6.125 3.28123 6.125C3.52241 6.125 3.71873 5.92878 3.71873 5.6875C3.71873 5.2066 4.2369 4.9468 4.3447 5.41546C4.36489 5.50321 4.37498 5.59451 4.37498 5.6875C4.37498 6.29059 3.88444 6.78125 3.28123 6.78125ZM8.74998 6.78125C8.14678 6.78125 7.65623 6.29059 7.65623 5.6875C7.65623 5.59414 7.66624 5.50275 7.68625 5.41508C7.79334 4.94593 8.31248 5.20629 8.31248 5.6875C8.31248 5.92878 8.50881 6.125 8.74998 6.125C8.99115 6.125 9.18748 5.92878 9.18748 5.6875C9.18748 5.2066 9.70565 4.9468 9.81345 5.41546C9.83364 5.50321 9.84373 5.59451 9.84373 5.6875C9.84373 6.29059 9.35318 6.78125 8.74998 6.78125Z"
                      fill="#59AAF1"
                    />
                    <path
                      d="M11.2653 3.81981C11.261 3.76283 11.2133 3.71875 11.1562 3.71875H9.73436C9.43232 3.71875 9.18748 3.47391 9.18748 3.17188C9.18748 1.42286 7.76451 0 6.01561 0C4.2667 0 2.84373 1.42286 2.84373 3.17188C2.84373 3.47391 2.59889 3.71875 2.29686 3.71875H0.874985C0.817891 3.71875 0.770204 3.76283 0.765938 3.81981L0.000313585 13.8823C-0.00198329 13.9126 0.00840733 13.9426 0.0291886 13.9649C0.0498604 13.9873 0.0789541 14 0.10936 14H11.9219C11.9523 14 11.9814 13.9873 12.002 13.965C12.0227 13.9427 12.0332 13.9127 12.0309 13.8824L11.2653 3.81981ZM3.71873 3.17188C3.71873 1.90542 4.74905 0.875 6.01561 0.875C7.28217 0.875 8.31248 1.90542 8.31248 3.17188C8.31248 3.47391 8.06764 3.71875 7.76561 3.71875H4.26561C3.96358 3.71875 3.71873 3.47391 3.71873 3.17188ZM3.28123 6.78125C2.67803 6.78125 2.18748 6.29059 2.18748 5.6875C2.18748 5.59414 2.19749 5.50275 2.2175 5.41508C2.3246 4.94593 2.84373 5.20629 2.84373 5.6875C2.84373 5.92878 3.04006 6.125 3.28123 6.125C3.52241 6.125 3.71873 5.92878 3.71873 5.6875C3.71873 5.2066 4.2369 4.9468 4.3447 5.41546C4.36489 5.50321 4.37498 5.59451 4.37498 5.6875C4.37498 6.29059 3.88444 6.78125 3.28123 6.78125ZM8.74998 6.78125C8.14678 6.78125 7.65623 6.29059 7.65623 5.6875C7.65623 5.59414 7.66624 5.50275 7.68625 5.41508C7.79334 4.94593 8.31248 5.20629 8.31248 5.6875C8.31248 5.92878 8.50881 6.125 8.74998 6.125C8.99115 6.125 9.18748 5.92878 9.18748 5.6875C9.18748 5.2066 9.70565 4.9468 9.81345 5.41546C9.83364 5.50321 9.84373 5.59451 9.84373 5.6875C9.84373 6.29059 9.35318 6.78125 8.74998 6.78125Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M11.2653 3.81981C11.261 3.76283 11.2133 3.71875 11.1562 3.71875H9.73436C9.43232 3.71875 9.18748 3.47391 9.18748 3.17188C9.18748 1.42286 7.76451 0 6.01561 0C4.2667 0 2.84373 1.42286 2.84373 3.17188C2.84373 3.47391 2.59889 3.71875 2.29686 3.71875H0.874985C0.817891 3.71875 0.770204 3.76283 0.765938 3.81981L0.000313585 13.8823C-0.00198329 13.9126 0.00840733 13.9426 0.0291886 13.9649C0.0498604 13.9873 0.0789541 14 0.10936 14H11.9219C11.9523 14 11.9814 13.9873 12.002 13.965C12.0227 13.9427 12.0332 13.9127 12.0309 13.8824L11.2653 3.81981ZM3.71873 3.17188C3.71873 1.90542 4.74905 0.875 6.01561 0.875C7.28217 0.875 8.31248 1.90542 8.31248 3.17188C8.31248 3.47391 8.06764 3.71875 7.76561 3.71875H4.26561C3.96358 3.71875 3.71873 3.47391 3.71873 3.17188ZM3.28123 6.78125C2.67803 6.78125 2.18748 6.29059 2.18748 5.6875C2.18748 5.59414 2.19749 5.50275 2.2175 5.41508C2.3246 4.94593 2.84373 5.20629 2.84373 5.6875C2.84373 5.92878 3.04006 6.125 3.28123 6.125C3.52241 6.125 3.71873 5.92878 3.71873 5.6875C3.71873 5.2066 4.2369 4.9468 4.3447 5.41546C4.36489 5.50321 4.37498 5.59451 4.37498 5.6875C4.37498 6.29059 3.88444 6.78125 3.28123 6.78125ZM8.74998 6.78125C8.14678 6.78125 7.65623 6.29059 7.65623 5.6875C7.65623 5.59414 7.66624 5.50275 7.68625 5.41508C7.79334 4.94593 8.31248 5.20629 8.31248 5.6875C8.31248 5.92878 8.50881 6.125 8.74998 6.125C8.99115 6.125 9.18748 5.92878 9.18748 5.6875C9.18748 5.2066 9.70565 4.9468 9.81345 5.41546C9.83364 5.50321 9.84373 5.59451 9.84373 5.6875C9.84373 6.29059 9.35318 6.78125 8.74998 6.78125Z"
                      fill="url(#paint1_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="6.01561"
                        y1="0"
                        x2="6.01561"
                        y2="14"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FE5626" />
                        <stop offset="1" stop-color="#F23F0E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="6.22278"
                        y1="30.2055"
                        x2="-6.20938"
                        y2="26.7869"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F58656" />
                        <stop offset="1" stop-color="#FE5626" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
                <div class="overlay">
                  <ul>
                    <h5>Sizes</h5>
                    <li>
                      <input type="radio" id="small-${prod.id}" name="size-${prod.id}" value="small" checked/>
                      <label for="small-${prod.id}">small - 20cm</label>
                    </li>
                    <li>
                      <input type="radio" id="medium-${prod.id}" name="size-${prod.id}" value="medium" />
                      <label for="medium-${prod.id}">medium - 25cm</label>
                    </li>
                    <li>
                      <input type="radio" id="large-${prod.id}" name="size-${prod.id}" value="large" />
                      <label for="large-${prod.id}">big - 32cm</label>
                    </li>
                  </ul>
                  <button class="btn-orange btn-add-to-cart">Add to basket</button>
                </div>
              </div>
            </div>
  `;
  productList.innerHTML += data;
}

function createBasketList(prod) {
  const basketList = document.querySelector(".basket-dropdown ul");

  const data = `
 <li>
    <a href="">
      <div class="icon">
        <img src="${prod[0].image}" alt="" />
      </div>
      <p class="prod-count mt-3">x1</p>
      <div class="content">
        <div class="description">
          <p>${prod[0].name}</p>
          <p>Size: small</p>
        </div>
        <p class="price">${prod[0].price}<sup>$</sup></p>
      </div>
    </a>
  </li>
    `;

  basketList.innerHTML += data;
}

function productDetail() {
  const cardDetailBtn = document.querySelectorAll(".product-card .btn-detail");

  for (i = 0; i < cardDetailBtn.length; i++) {
    cardDetailBtn[i].addEventListener("click", function () {
      const parent = this.parentElement;
      const overlay = parent.querySelector(".overlay");

      overlay.classList.add("active");
      this.classList.add("hide");
    });
  }
}

function addToBasket(product) {
  const addToCartButton = document.querySelectorAll(
    ".product-card .btn-add-to-cart"
  );

  let number = 0;

  for (i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener("click", function () {
      const parent = this.parentElement;
      const prodCard = parent.parentElement;
      const btnDetail = prodCard.querySelector(".btn-detail");
      const count = document.querySelector(".basket .count");

      count.style.display = "block";
      count.innerHTML = "";


      id = prodCard.querySelector(".d-none").innerHTML;
      prodId = id;
      parent.classList.remove("active");
      btnDetail.classList.remove("hide");

      let selectedProduct = [];
      for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
          selectedProduct.push(product[i]);
        }
      }
      createBasketList(selectedProduct);
      number += 1;
      count.innerHTML += number;
    });
  }
}


