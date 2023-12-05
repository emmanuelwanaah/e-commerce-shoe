// let itemCount = 0;
// let cartItemCount = 0;
// let cartTotalPrice = 0.00;
// const productPrice = 125.00; // Replace with the actual price per item

// function updateItemCount() {
//   document.getElementById('itemCount').textContent = itemCount;
// }



// function incrementItem() {
//   itemCount++;
//   updateItemCount();
// }

// function decrementItem() {
//   if (itemCount > 0) {
//     itemCount--;
//     updateItemCount();
//   }
// }

// function updateCartItemCount() {
//   document.getElementById('cartItemCount').textContent = cartItemCount;
// }

// function toggleCartDropdown() {
//   const cartDropdown = document.getElementById('cartDropdown');
//   cartDropdown.classList.toggle('show');

//   // If the dropdown is opened, update the cart items
//   if (cartDropdown.classList.contains('show')) {
//     updateCartItems();
//   }
// }

// function addToCart() {
//   cartItemCount += itemCount;
//   updateCartItemCount();
//   toggleCartDropdown();
//   updateCartItems(); // Add this line to recalculate the cart items
//   itemCount = 0; // Reset itemCount to 0
// }

  












// function updateCartItems() {
//   const cartDropdown = document.getElementById('cartDropdown');
//   const cartItemsContainer = cartDropdown.querySelector('.cart-items');

//   // Clear existing items
//   cartItemsContainer.innerHTML = '';

//   if (cartItemCount > 0) {
//     // Example cart item
//     const cartItem = document.createElement('div');
//     cartItem.classList.add('cart-item');

//     const cartItemImage = document.createElement('img');
//     cartItemImage.src = 'images/image-product-1-thumbnail.jpg';
//     cartItemImage.alt = '';

//     const cartItemName = document.createElement('p');
//     cartItemName.textContent = 'Fall Limited Edition Sneakers';

//     const cartItemQuantity = document.createElement('span');
//     cartItemQuantity.id = `cartItemCount-${cartItemCount}`;
//     cartItemQuantity.textContent = cartItemCount;

//     const cartItemPrice = document.createElement('p');
//     cartItemPrice.classList.add('.item-price');
//     cartItemPrice.textContent = `$${(cartItemCount * productPrice).toFixed(2)}`;

//     cartItem.appendChild(cartItemImage);
//     cartItem.appendChild(cartItemName);
//     cartItem.appendChild(cartItemQuantity);
//     cartItem.appendChild(cartItemPrice);

//     cartItemsContainer.appendChild(cartItem);

//     // Update the total price
//     const totalPriceElement = cartDropdown.querySelector('.total-price');
//     totalPriceElement.textContent = `Total: $${(cartItemCount * productPrice).toFixed(2)}`;
//   }
// }
// Variables
let itemCount = 0;
let cartItemCount = 0;
let cartTotalPrice = 0.00;
const productPrice = 125.00;

// Functions for updating counts
function updateItemCount() {
  document.getElementById('itemCount').textContent = itemCount;
}

function incrementItem() {
  itemCount++;
  updateItemCount();
}

function decrementItem() {
  if (itemCount > 0) {
    itemCount--;
    updateItemCount();
  }
}

function updateCartItemCount() {
  document.getElementById('cartItemCount').textContent = cartItemCount;
}

// Function for toggling the cart dropdown
function toggleCartDropdown() {
  const cartDropdown = document.getElementById('cartDropdown');
  cartDropdown.classList.toggle('show');

  // If the dropdown is opened, update the cart items
  if (cartDropdown.classList.contains('show')) {
    updateCartItems();
  }
  
    var cartItemCount = document.getElementById('cartItemCount');
    var checkoutButton = document.getElementById('checkoutButton');
    var deletebtn = document.getElementById('delete-icon');
    var total = document.querySelector('.total-price');
    var item = document.querySelector('.item-price');
    var cartimg = document.querySelector('.cartimg');
    var itemprice = document.querySelector('.falllimited');
  
    if (cartItemCount.innerText.trim() === '0' || cartItemCount.innerText.trim() === 'Your cart is empty') {
      // Your cart is empty logic
      cartItemCount.innerText = 'Your cart is empty';
      checkoutButton.style.display = 'none';
      deletebtn.style.display = 'none';
      item.style.display = 'none';
      total.style.display = 'none';
      cartimg.style.display = 'none';
      itemprice.style.display = 'none';
    } else if (cartItemCount.innerText.trim() >= '1'){
      // Show item prices, total price, and delete icon
      checkoutButton.style.display = 'block';
      deletebtn.style.display = 'block';
      itemprice.style.display = 'block';
      total.style.display = 'block';
      cartimg.style.display = 'block';
      itemprice.style.display = 'block';
    }
  
  
  var mybutton = document.querySelector('.cart');
  mybutton.addEventListener("click", toggleCartDropdown);
  
}

// Function for adding to cart
function addToCart() {
  if (itemCount > 0) {
    cartItemCount += itemCount;
    cartTotalPrice += itemCount * productPrice;
    updateCartItemCount();
    updateCartItems();
    itemCount = 0;

    // Toggle the cart dropdown after updating the cart items
    toggleCartDropdown();
  }
}

// Function for updating cart items
function updateCartItems() {
  const cartDropdown = document.getElementById('cartDropdown');
  const cartItemCountElement = document.getElementById('cartItemCount');
  const totalPriceElement = cartDropdown.querySelector('.total-price');

  if (!cartItemCountElement || !totalPriceElement) {
    console.error("Elements not found!");
    return;
  }

  // Example product price (replace with the actual price per item)
  const productPrice = 125.00;

  // Parse the cart item count from the element's text content
  const cartItemCount = parseInt(cartItemCountElement.textContent);

  // Calculate the total price
  const totalPrice = productPrice * cartItemCount;

  // Update the total price in the HTML
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function for handling checkout
function checkout() {
  // Add any logic for the checkout process here

  // Clear the item counts
  cartItemCount = 0;
  itemCount = 0;

  // Reset the cart total price
  cartTotalPrice = 0.00;

  document.getElementById('itemCount').textContent = 0;
  document.getElementById('cartItemCount').textContent = 0;

  // Close the dropdown
  updateCartItems();
  closeCartDropdown();
}

// Function for closing the cart dropdown
function closeCartDropdown() {
  const cartDropdown = document.getElementById('cartDropdown');
  cartDropdown.classList.remove('show');
}

// Event listeners

// Cart button click event
var mybutton = document.querySelector('.cart');
mybutton.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  toggleCartDropdown();
});

// Document body mousedown event for closing the cart dropdown
document.body.addEventListener('mousedown', function (event) {
  var isCartClicked = event.target.closest('.cart');
  var isInsideCart = event.target.closest('#cartDropdown');

  // Check if the clicked element is outside the cart dropdown and not the cart button
  if (!isInsideCart && !isCartClicked) {
    // If outside, close the cart dropdown
    closeCartDropdown();
  }
});

// Other code...

// Lightbox and menu-related code...
document.addEventListener('DOMContentLoaded', function () {
  // Attach click event to the main image
  document.querySelector('.img').addEventListener('click', function () {
    openLightbox(document.querySelector('.img').src);
  });

  // Attach click events to each thumbnail
  document.querySelectorAll('.thumb').forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
      // Uncomment the line below if you want to open the lightbox when clicking on thumbnails
      // openLightbox(thumbnail.dataset.fullsize);
      changeImage(thumbnail.dataset.fullsize);
    });
  });

  // Attach click event to the close button
  document.querySelector('.close-btn').addEventListener('click', closeLightbox);
});

function openLightbox(imageSrc) {
  // Display the lightbox
  document.getElementById('lightbox').style.display = 'flex';

  // Set the image source in the lightbox
  document.getElementById('lightbox-img').src = imageSrc;
}

function closeLightbox() {
  // Close the lightbox
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(newSrc) {
  // Change the image in the lightbox
  var imgElement = document.querySelector('.img');
  if (imgElement) {
    imgElement.src = newSrc;
  }

  // Change the lightbox image
  var lightboxImgElement = document.getElementById('lightbox-img');
  if (lightboxImgElement) {
    lightboxImgElement.src = newSrc;
  }
}
document.addEventListener('DOMContentLoaded', function () {
  // Get the menu icon and the navigation ul
  var menuIcon = document.querySelector('.menu');
  var navList = document.querySelector('.menu-list');

  // Add click event listener to the menu icon
  menuIcon.addEventListener('click', function () {
    // Toggle the visibility of the navigation ul
    navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'block' : 'none';
  });
});

// -------------------closemenu-----------------------
document.addEventListener('DOMContentLoaded', function () {
  var menuList = document.querySelector('ul');
  var closeMenuButton = document.querySelector('.closemenu');

  // Add click event listener to closemenu button
  closeMenuButton.addEventListener('click', function () {
    // Toggle the "hidden" class on the menu-list element
    menuList.style.display = (menuList.style.display === 'none') ? '' : 'none';
  });
});
