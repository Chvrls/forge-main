import { allProducts } from "../../temp-data-for-products/allProducts.js";
import { pcCase } from "../../temp-data-for-products/pcCase.js";
import { monitors } from "../../temp-data-for-products/monitors.js";
import { cpu } from "../../temp-data-for-products/cpu.js";
import { gpu } from "../../temp-data-for-products/gpu.js";
import { motherboard } from "../../temp-data-for-products/motherboard.js";
import { ram } from "../../temp-data-for-products/ram.js";
import { storage } from "../../temp-data-for-products/storage.js";
import { powerSupply } from "../../temp-data-for-products/powerSupply.js";

const categoryh1 = document.querySelector('#category-h1');
const productsGrid = document.querySelector('#grid');

const buttonAllProducts = document.querySelector('#btn-all-products');
const buttonMonitor = document.querySelector('#btn-monitor');
const buttonPcCase = document.querySelector('#btn-pc-case');
const buttonCPU = document.querySelector('#btn-cpu');
const buttonGPU = document.querySelector('#btn-gpu');
const buttonMotherboard = document.querySelector('#btn-motherboard');
const buttonRAM = document.querySelector('#btn-ram');
const buttonStorage = document.querySelector('#btn-storage');
const buttonPowerSupply = document.querySelector('#btn-power-supply');

const productsGrid2 = document.querySelector('#grid-2');

let productsHTML = '';

// function renderProductsHTML(category) {
//   category.forEach((product) => {
//         productsHTML += `<div class="product-card">
//         <div class="product-img-container">
//           <img class="product-image img-fluid" src="${product.image}" alt="">
//         </div>
//           <p class="mt-3 mx-3 fw-bold">${product.name}</p>
//           <p class="mb-4 mx-3 fw-bold">₱${product.price}</p>
//           <div>
//             <button type="button" class="border btn-light border-dark rounded-sm mx-3 mb-4 p-2">
//               Add to Cart
//             </button>
//           </div>
//         </div>`
//     productsGrid.innerHTML = productsHTML;
//     console.log(product.image)
//     })
// }

function renderProductsHTML(category) { 
  category.forEach((product) => {
        productsHTML += `<div onclick="window.location.href='product-description.html'" class="product text-center col-lg-3 col-md-4 col-sm-12">
        <img src="${product.image}" alt="" class="img-fluid mb-3">
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h5 class="p-name">${product.name}</h5>
        <h4 class="p-price">₱${product.price}</h4>
        <button class="buy-btn">Buy Now</button>
      </div>`
    productsGrid2.innerHTML = productsHTML;
    console.log(product.image)
    })
}

function changeCategoryText(category) { 
  categoryh1.textContent = `Shop ${category}`
}


buttonAllProducts.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(allProducts); changeCategoryText('All Products') });
buttonCPU.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(cpu); changeCategoryText('CPU') });
buttonGPU.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(gpu); changeCategoryText('GPU') });
buttonMonitor.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(monitors); changeCategoryText('Monitor') });
buttonMotherboard.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(motherboard); changeCategoryText('Motherboard') });
buttonPcCase.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(pcCase); changeCategoryText('PC Case') });
buttonPowerSupply.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(powerSupply); changeCategoryText('Power Supply') });
buttonRAM.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(ram); changeCategoryText('RAM') });
buttonStorage.addEventListener('click', () => { productsHTML = ''; renderProductsHTML(storage); changeCategoryText('Storage') });


