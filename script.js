// Products Data
const products = [
    { 
        id: 1, 
        name: "Fresh Apples", 
        price: 180, 
        category: "fruits", 
        image: "https://www.thefruitcompany.com/cdn/shop/products/pink-lady-apples_4_1.jpg?v=1664807434" 
    },
    { 
        id: 2, 
        name: "Bananas (per dozen)", 
        price: 80, 
        category: "fruits", 
        image: "https://assets.farmjournal.com/dims4/default/0145a86/2147483647/strip/true/crop/4494x3000+253+0/resize/800x534!/quality/90/?url=https%3A%2F%2Fk1-prod-farm-journal.s3.us-east-2.amazonaws.com%2Fbrightspot%2Fe6%2Fe9%2F56d82f404027abdfd50e6feaed3d%2Fadobestock-markobe-195684886.jpg" 
    },
    { 
        id: 3, 
        name: "Oranges (1kg)", 
        price: 120, 
        category: "fruits", 
        image: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg" 
    },
    { 
        id: 4, 
        name: "Tomatoes (1kg)", 
        price: 60, 
        category: "vegetables", 
        image: "https://www.allianceofnativeseedkeepers.com/cdn/shop/products/tomato-seeds-indeterminate-large-red-cherry-vegetable-seeds-alliance-of-native-seedkeepers-tm19-33088558-9992799.jpg?v=1761330033&width=1214" 
    },
    { 
        id: 5, 
        name: "Potatoes (1kg)", 
        price: 40, 
        category: "vegetables", 
        image: "https://growhoss.com/cdn/shop/articles/potato_ecdbb7b2-3914-4edb-818d-eb6abfc66627_460x@2x.jpg?v=1691785124" 
    },
    { 
        id: 6, 
        name: "Fresh Milk (1L)", 
        price: 100, 
        category: "dairy", 
        image: "https://i.chaldn.com/_mpimage/farm-fresh-uht-milk-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160156&q=best&v=1" 
    },
    { 
        id: 7, 
        name: "Eggs (per dozen)", 
        price: 120, 
        category: "dairy", 
        image: "https://res.cloudinary.com/studentsamskipnaden-i-s-r-st-norge/image/upload/c_lfill,g_auto,h_880,f_auto/f_auto/q_auto/v1698313498/Mat%20og%20drikke/Oppskrifter/egg-71577018_syu3z8.jpg" 
    },
    { 
        id: 8, 
        name: "Butter (200g)", 
        price: 150, 
        category: "dairy", 
        image: "https://www.realsimple.com/thmb/VvdPHiBwtcQgPl8MiRbOjSjNo4g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freeze-butter-GettyImages-466938239-b386cf1b961642089337ab851e40a87e.jpg" 
    },
    { 
        id: 9, 
        name: "Basmati Rice (1kg)", 
        price: 180, 
        category: "grains", 
        image: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/Daawat.jpg" 
    },
    { 
        id: 10, 
        name: "Nutella (500gm)", 
        price: 600, 
        category: "grains", 
        image: "https://images-cdn.ubuy.com.sa/633ae6cda8b47e379f489825-nutella-chocolate-hazelnut-spread.jpg" 
    },
    { 
        id: 11, 
        name: "Sugar (1kg)", 
        price: 90, 
        category: "groceries", 
        image: "https://m.media-amazon.com/images/I/81XLIbrS6pL._SL1500_.jpg" 
    },
    { 
        id: 12, 
        name: "Salt (1kg)", 
        price: 30, 
        category: "groceries", 
        image: "https://cdn.dribbble.com/userupload/32818209/file/original-898e22c97ddb13cd47f1da2246093f95.jpg?resize=752x&vertical=center" 
    },
    { 
        id: 13, 
        name: "Olive Oil (500ml)", 
        price: 350, 
        category: "groceries", 
        image: "https://cdn.othoba.com/images/thumbs/0647867_lucy-oliva-olive-oil-100ml-spain.webp" 
    },
    { 
        id: 14, 
        name: "Chicken (1kg)", 
        price: 320, 
        category: "meat", 
        image: "https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-caring-for-hens-essential-tips-healthy-and-happy-chickens-png-image_13402671.png" 
    },
    { 
        id: 15, 
        name: "Beef (1kg)", 
        price: 850, 
        category: "meat", 
        image: "https://www.shutterstock.com/image-photo/three-raw-beef-steaks-levitate-600nw-2625170627.jpg" 
    },
    { 
        id: 16, 
        name: "Fish (1kg)", 
        price: 280, 
        category: "seafood", 
        image: "https://5.imimg.com/data5/SELLER/Default/2021/3/HJ/NY/BL/108859622/freshwater-fish.PNG" 
    },
    { 
        id: 17, 
        name: "Bread (400g)", 
        price: 50, 
        category: "bakery", 
        image: "https://www.thespruceeats.com/thmb/vbc6MqkqHlkSOx_X5Clyo5qv0kk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/loaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg" 
    },
    { 
        id: 18, 
        name: "Bottle Water (1L)", 
        price: 30, 
        category: "beverages", 
        image: "https://www.buxtonwater.co.uk/sites/g/files/xknfdk681/files/styles/ipp_bg_image_desktop/public/2022-01/Lead%20Still%20shot%20-%20Top%20of%20page.jpg.webp?itok=W1JORLMT" 
    },
    { 
        id: 19, 
        name: "Tea Leaves (250g)", 
        price: 200, 
        category: "beverages", 
        image: "https://www.octavius.in/cdn/shop/articles/The_journey_of_a_tea_leaf_From_farm_to_cup.jpg?v=1693027986" 
    }
];

// Cart Data
let cart = JSON.parse(localStorage.getItem('freshHarvestCart')) || [];
let currentUser = JSON.parse(localStorage.getItem('freshHarvestUser')) || null;

// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const cartCountElement = document.getElementById('cart-count');
const allProductsContainer = document.getElementById('all-products');
const featuredProductsContainer = document.getElementById('featured-products');
const cartItemsContainer = document.getElementById('cart-items-container');
const emptyCartMessage = document.getElementById('empty-cart-message');
const cartSummary = document.getElementById('cart-summary');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const loginLink2 = document.getElementById('login-link-2');
const startShoppingBtn = document.getElementById('start-shopping-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const logoutBtn = document.getElementById('logout-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderProducts();
    renderCart();
    setupEventListeners();
    
    // Show home page by default
    showPage('home');
    
    // Update login link and logout button based on current user
    updateUserUI();
});

// Setup event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            
            // Update active nav link
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Footer links
    document.querySelectorAll('.footer-links a').forEach(link => {
        if (link.hasAttribute('data-page')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                showPage(pageId);
                
                // Update active nav link
                navLinks.forEach(nav => {
                    nav.classList.remove('active');
                    if (nav.getAttribute('data-page') === pageId) {
                        nav.classList.add('active');
                    }
                });
            });
        }
    });
    
    // Login and register links
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('login');
        updateNavActive('login');
    });
    
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('register');
        updateNavActive('login'); 
    });
    
    loginLink2.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('login');
        updateNavActive('login');
    });
    
    // Start shopping button
    startShoppingBtn.addEventListener('click', function() {
        showPage('products');
        updateNavActive('products');
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        if (!currentUser) {
            alert('Please login to proceed with checkout.');
            showPage('login');
            updateNavActive('login');
            return;
        }
        
        alert(`Thank you for your order, ${currentUser.name}! Your total is BDT ${calculateTotal()}. Your order will be delivered soon.`);
        // Clear cart after checkout
        cart = [];
        localStorage.setItem('freshHarvestCart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    });
    
    // Login form submission
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });
    
    // Register form submission
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleRegister();
    });
    
    // Logout button
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        handleLogout();
    });
    
    // Form validation
    setupFormValidation();
}

// Show the selected page
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
        }
    });
}

// Update active nav link
function updateNavActive(pageId) {
    navLinks.forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('data-page') === pageId) {
            nav.classList.add('active');
        }
    });
}

// Update user UI based on login state
function updateUserUI() {
    if (currentUser) {
        // User is logged in
        loginLink.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name.split(' ')[0]}`;
        loginLink.setAttribute('data-page', 'home');
        logoutBtn.style.display = 'block';
    } else {
        // User is not logged in
        loginLink.innerHTML = 'Login';
        loginLink.setAttribute('data-page', 'login');
        logoutBtn.style.display = 'none';
    }
}

// Render products on products page
function renderProducts() {
    // Clear containers
    allProductsContainer.innerHTML = '';
    featuredProductsContainer.innerHTML = '';
    
    // Add all products to products page
    products.forEach(product => {
        const productElement = createProductElement(product);
        allProductsContainer.appendChild(productElement);
    });
    
    // Add featured products (first 6) to home page
    products.slice(0, 6).forEach(product => {
        const productElement = createProductElement(product);
        featuredProductsContainer.appendChild(productElement);
    });
}

// Create product element
function createProductElement(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">BDT ${product.price} <span>per item</span></div>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    // Add event listener to add to cart button
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        addToCart(product.id);
    });
    
    return productCard;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('freshHarvestCart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    renderCart();
    
    // Show confirmation message
    alert(`${product.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Render cart items
function renderCart() {
    // Clear container
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartSummary.style.display = 'none';
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    cartSummary.style.display = 'block';
    
    // Add each cart item
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">BDT ${item.price} each</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    // Add event listeners for quantity changes and removal
    document.querySelectorAll('.decrease-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.increase-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const newQuantity = parseInt(this.value);
            
            if (newQuantity < 1) {
                removeFromCart(productId);
            } else {
                updateCartItemQuantityDirect(productId, newQuantity);
            }
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
    
    // Update cart summary
    updateCartSummary();
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity < 1) {
        removeFromCart(productId);
    } else {
        localStorage.setItem('freshHarvestCart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

// Update cart item quantity directly
function updateCartItemQuantityDirect(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity = newQuantity;
    localStorage.setItem('freshHarvestCart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('freshHarvestCart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    
    // Show confirmation message
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`${product.name} removed from cart.`);
    }
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const delivery = 60;
    const total = subtotal + delivery;
    
    document.getElementById('subtotal').textContent = `BDT ${subtotal}`;
    document.getElementById('total').textContent = `BDT ${total}`;
}

// Calculate cart total
function calculateTotal() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const delivery = 60;
    return subtotal + delivery;
}

// Handle login
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('freshHarvestUsers')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('freshHarvestUser', JSON.stringify(currentUser));
        updateUserUI();
        alert(`Welcome back, ${user.name}!`);
        showPage('home');
        updateNavActive('home');
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Handle registration
function handleRegister() {
    const name = document.getElementById('register-name').value;
    const lastname = document.getElementById('register-lastname').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // Basic validation
    if (!name || !lastname || !email || !phone || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('freshHarvestUsers')) || [];
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        alert('User with this email already exists. Please login.');
        showPage('login');
        updateNavActive('login');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name: name + " " + lastname,
        email,
        phone,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('freshHarvestUsers', JSON.stringify(users));
    
    // Auto login
    currentUser = newUser;
    localStorage.setItem('freshHarvestUser', JSON.stringify(currentUser));
    updateUserUI();
    
    alert(`Registration successful! Welcome to Fresh Harvest, ${newUser.name}!`);
    showPage('home');
    updateNavActive('home');
}

// Handle logout
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('freshHarvestUser');
    updateUserUI();
    alert('You have been logged out successfully.');
    showPage('home');
    updateNavActive('home');
}

// Setup form validation
function setupFormValidation() {
    // Login form validation
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const loginEmailError = document.getElementById('login-email-error');
    const loginPasswordError = document.getElementById('login-password-error');
    
    loginEmail.addEventListener('input', function() {
        if (this.validity.valid) {
            loginEmailError.style.display = 'none';
        } else {
            loginEmailError.style.display = 'block';
        }
    });
    
    loginPassword.addEventListener('input', function() {
        if (this.value.length >= 6) {
            loginPasswordError.style.display = 'none';
        } else {
            loginPasswordError.style.display = 'block';
        }
    });
    
    // Registration form validation
    const registerName = document.getElementById('register-name');
    const registerEmail = document.getElementById('register-email');
    const registerPhone = document.getElementById('register-phone');
    const registerPassword = document.getElementById('register-password');
    const registerConfirmPassword = document.getElementById('register-confirm-password');
    
    const registerNameError = document.getElementById('register-name-error');
    const registerEmailError = document.getElementById('register-email-error');
    const registerPhoneError = document.getElementById('register-phone-error');
    const registerPasswordError = document.getElementById('register-password-error');
    const registerConfirmPasswordError = document.getElementById('register-confirm-password-error');
    
    registerName.addEventListener('input', function() {
        if (this.value.length >= 3) {
            registerNameError.style.display = 'none';
        } else {
            registerNameError.style.display = 'block';
        }
    });
    
    registerEmail.addEventListener('input', function() {
        if (this.validity.valid) {
            registerEmailError.style.display = 'none';
        } else {
            registerEmailError.style.display = 'block';
        }
    });
    
    registerPhone.addEventListener('input', function() {
        // Bangladeshi phone number validation
        const phoneRegex = /^\+?880\d{10}$|^01\d{9}$/;
        if (phoneRegex.test(this.value)) {
            registerPhoneError.style.display = 'none';
        } else {
            registerPhoneError.style.display = 'block';
        }
    });
    
    registerPassword.addEventListener('input', function() {
        if (this.value.length >= 6) {
            registerPasswordError.style.display = 'none';
        } else {
            registerPasswordError.style.display = 'block';
        }
    });
    
    registerConfirmPassword.addEventListener('input', function() {
        if (this.value === registerPassword.value) {
            registerConfirmPasswordError.style.display = 'none';
        } else {
            registerConfirmPasswordError.style.display = 'block';
        }
    });
}
