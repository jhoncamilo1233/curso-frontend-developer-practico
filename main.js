// aca estamos creado  dos varibales una  una donde le vamos a dar el evento y la otra lo que
//vamos a mostrar
const emailMenu = document.querySelector(".navbar-email"); // aca ponemos la clase a lo que vamos que quiere que haga una funcion o evento
const desktopMenu = document.querySelector(".desktop-menu"); // esto es la que queremos salir y transmitir

const menuHomeIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const menuCarritoIco = document.querySelector(".navbar-shopping-cart");
const productoAsideShopping = document.querySelector("#shoppingCartContainer");

const productDeataiContainer = document.querySelector('#ProductDetail');

const cardsConatiner = document.querySelector('.cards-container')

//aca llamamos nuestro evento click y darle la funcionalidad toggle
emailMenu.addEventListener("click", toggleDesktopMenu);

menuHomeIcon.addEventListener("click", toggleMobileMenu);

menuCarritoIco.addEventListener("click", toggleCarritoIco);

productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

//creamos una funcion para poder que este inactivo o no ejemplo ocultar o abrir
function toggleDesktopMenu() {
  const isAsideClosed = productoAsideShopping.classList.contains("inactive");

  if (!isAsideClosed) {
    productoAsideShopping.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = productoAsideShopping.classList.contains("inactive");
  if (!isAsideClosed) {
    productoAsideShopping.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
closeProductDetailAside();

function toggleCarritoIco() {
  const isMobileClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDeatilClosed = productDeataiContainer.classList.contains("inactive");
  if (!isProductDeatilClosed) {
    productDeataiContainer.classList.add("inactive");
  }

  productoAsideShopping.classList.toggle("inactive");
}
function openProductDeta(){
    productoAsideShopping.classList.add('inactive')
    productDeataiContainer.classList.remove('inactive')
}
function closeProductDetailAside (){
    productDeataiContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    nombre: 'bike',
    precio : 120,
    imagen : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    nombre: 'tabla',
    precio : 150,
    imagen : 'https://www.labskateboarding.com/wp-content/uploads/2021/06/DARK-SKULL-WEB-LQ-SOLO-DECK.jpg'
});
productList.push({
    nombre: 'bike',
    precio : 120,
    imagen : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    nombre: 'bike',
    precio : 120,
    imagen : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    nombre: 'bike',
    precio : 120,
    imagen : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
function productos(arr){
    for( const product of arr){
        //creamos el div de nuestro producto de la cards 
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        //vamos a crear la img 
        const productImg = document.createElement('img');
        // llamamos product = {name .price, imegen} -> product.imagen
        productImg.setAttribute('src',product.imagen);
        productImg.addEventListener('click',openProductDeta);
    
        //creamos la infromacion del producto
        const productInfo = document.createElement ('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        
        const productPrecio = document.createElement('p');
        productPrecio.innerText = '$' + product.precio;
        
        const productName = document.createElement('p');
        productName.innerText = product.nombre;
    
        productInfoDiv.appendChild(productPrecio);
        productInfoDiv.appendChild(productName);
        
        const productFigure = document.createElement('figure');
    
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg')
    
    
        productFigure.appendChild(productFigureImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
        
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsConatiner.appendChild(productCard)
    }
}
productos(productList);
