//
let imgCmd = document.querySelectorAll(".img-cmd");
let prodImg = document.getElementById("prod-img");
let plusBtn = document.querySelector(".fa-plus");
let minusBtn = document.querySelector(".fa-minus");
let productUnit = document.querySelector(".product-unit");
let removeProd = document.querySelectorAll(".fa-trash-can");
let checkoutBtn = document.getElementById("checkout-btn");
let productsInCart = document.querySelector(".products-cont-cart");
let addProdToCartBtn = document.querySelector(".submit-cmd");
let productPrice = document.querySelector(".p-price");
let products = document.querySelector(".products");
let emptyMsg = document.querySelector(".empty-msg");
let commandeNumber = document.querySelector(".nbr");

imgCmd.forEach(ele => {
    ele.addEventListener("click", (eve) => {
        imgCmd.forEach(ele => {
            ele.classList.remove("active");
        });
        eve.target.parentElement.classList.add("active");
        let imgNum = eve.target.getAttribute("src").charAt(21);
        prodImg.setAttribute("src", `images/image-product-${imgNum}.jpg`)
    });
});

plusBtn.addEventListener("click", () => {
    let u = +productUnit.innerHTML;
    u++;
    productUnit.innerHTML = u;
});

minusBtn.addEventListener("click", () => {
    if (+productUnit.innerHTML > 0) {
        productUnit.innerHTML -= 1;
    }
});

document.addEventListener("click", (eve) => {
    let prodNum = document.getElementsByClassName("product-detail");
    if (eve.target.classList.contains("fa-trash-can")) {
        eve.target.parentElement.remove();
        commandeNumber.innerHTML = document.getElementsByClassName("product-detail").length;
        if (prodNum.length === 0) {
            emptyMsg.style.display = "block";
            checkoutBtn.style.display = "none";
        };
    }
});

addProdToCartBtn.addEventListener("click", (eve) => {
    eve.preventDefault();

    if (productUnit.innerHTML != 0) {

        checkoutBtn.style.display = "inline-block";
        emptyMsg.style.display = "none";

        let productDetail = document.createElement("div");
        productDetail.classList.add("product-detail");
        let prodImgCart = document.createElement("img");
        prodImgCart.setAttribute("src", "images/image-product-1-thumbnail.jpg");
        let detailPrice = document.createElement("div");
        detailPrice.classList.add("detailPrice");
        let prodName = document.createElement("p");
        prodName.innerHTML = "Fall Limited Edition Sneakers";

        let prices = document.createElement("div");
        prices.classList.add("prices");

        let unitPrice = document.createElement("span");
        unitPrice.classList.add("unit-price");
        unitPrice.innerHTML = "$125.00";

        let x = document.createElement("span");
        x.classList.add("x");
        x.innerHTML = "x";
        let unit = document.createElement("span");
        unit.classList.add("unit");
        unit.innerHTML = productUnit.innerHTML;
        let totalPrice = document.createElement("span");
        totalPrice.classList.add("total-price");

        totalPrice.innerHTML = `$${(+unitPrice.innerHTML.slice(1)*productUnit.innerHTML).toFixed(2)}`;
        let removeIcone = document.createElement("i");
        removeIcone.classList.add("fa-solid");
        removeIcone.classList.add("fa-trash-can");

        prices.append(unitPrice);
        prices.append(x);
        prices.append(unit);
        prices.append(totalPrice);

        detailPrice.append(prodName);
        detailPrice.append(prices);

        productDetail.append(prodImgCart);
        productDetail.append(detailPrice);
        productDetail.append(removeIcone);

        productsInCart.append(productDetail);
        products.prepend(productsInCart);

        commandeNumber.classList.add("number");
        commandeNumber.innerHTML = document.getElementsByClassName("product-detail").length; 
    }
});