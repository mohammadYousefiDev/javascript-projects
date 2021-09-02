var products = [
  {
    img: 'images/doughnut-1.jpeg',
    title: 'doughnut 1',
    type: 'doughnut',
    display: 'block',
    id: 1,
    price: '25.25'
  },
  {
    img: 'images/doughnut-2.jpeg',
    title: 'doughnut 2',
    type: 'doughnut',
    display: 'block',
    id: 2,
    price: '17.58'
  },
  {
    img: 'images/cake-1.jpeg',
    title: 'cake 1',
    type: 'cake',
    display: 'block',
    id: 3,
    price: '12.01'
  },
  {
    img: 'images/cake-2.jpeg',
    title: 'cake 2',
    type: 'cake',
    display: 'block',
    id: 4,
    price: '35.17'
  },
  {
    img: 'images/cupcake-1.jpeg',
    title: 'cupcake 1',
    type: 'cupcake',
    display: 'block',
    id: 5,
    price: '52.47'
  },
  {
    img: 'images/cupcake-2.jpeg',
    title: 'cupcake 2',
    type: 'cupcake',
    display: 'block',
    id: 6,
    price: '8.25'
  },
  {
    img: 'images/sweets-1.jpeg',
    title: 'sweets 1',
    type: 'sweets',
    display: 'block',
    id: 7,
    price: '17.96'
  },
  {
    img: 'images/sweets-2.jpeg',
    title: 'sweets 2',
    type: 'sweets',
    display: 'block',
    id: 8,
    price: '38.7'
  },
];

var cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

create_mini_cart(cart);

var productType = null;

function showProduct() {
  var productsMarkup = '';
  products.forEach((el,i) => {
    productsMarkup += '\
      <article style="display: '+el.display+'" data-type="'+el.type+'">\
        <div class="product">\
          <img src="'+el.img+'" alt="">\
          <p class="pro_title">'+el.title+' <span onclick="add_to_cart('+el.id+')" class="add_to_cart">add to cart</span>  </p>\
        </div>\
      </article>\
    ';
  });
  document.getElementById('results').innerHTML = productsMarkup;
}

showProduct();

function add_to_cart(id){
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  create_mini_cart(cart);
}

function mini_times(){
  var cart2 = cart.reduce( (a,b) => {
      var i = a.findIndex( x => x.id === b);
      return i === -1 ? a.push({ id : b, times : 1 }) : a[i].times++, a;
  }, []);

  cart2.forEach((el,i) => {
    products.forEach(element => {
      if(element.id == el.id) {
        cart2[i].img = element.img;
        cart2[i].title = element.title;
        cart2[i].price = element.price;
      }
    });
  });

  return cart2;
}

function create_mini_cart(cart) {

  var cart_list = '';
  
  var cart = mini_times();

  cart.forEach((el,i) => {
    cart_list += '<article class="mini-cart-option">\
    <img width="50" src="'+el.img+'" />\
    <span><strong>'+el.title+'</strong><span class="delete_mini_cart" onclick="delete_mini_cart('+el.id+')">&#10006;</span>\<br>$'+el.price+' * '+el.times+'</span>\
    </article>';
  });
  
  var total = total_mini_cart_count();

  if(total !== 0){
    cart_list += '<div>total: '+total_mini_cart()+'</div>';
    cart_list += '<button id="checkoutBtn">Checkout</button>';
  }else {
    cart_list += '<div>Cart is empty</div>';
  }

  document.getElementById('mini-cart-wrapper').innerHTML = cart_list;

  if(total == 0){
    document.getElementById('basketBtn').innerText = 'No Items'
  }else{
    document.getElementById('basketBtn').innerText = total+' items - '+total_mini_cart()
  }
}

function total_mini_cart()
{
  var cart = mini_times();
  var total = 0;
  cart.forEach(el => {
    total += el.times * el.price;
  });
  return '$'+Math.floor(total);
}

function total_mini_cart_count(){
  var cart = mini_times();
  var total = 0;
  cart.forEach(el => {
    total += el.times;
  });
  return total;
}

function delete_mini_cart(id){

  cart = cart.filter(function(el){
    return el !== id;
  });

  localStorage.setItem('cart', JSON.stringify(cart));
  create_mini_cart(cart)
}

function filterIt(event, type)
{
  productType = type;

  var buttons = document.querySelectorAll('button');
  buttons.forEach(el => {
    el.style.backgroundColor = '#f3f3f3';
    el.style.color = '#000';
    el.style.color = '1px solid #ddd';
  });
  event.target.style.backgroundColor = '#000';
  event.target.style.color = '#fff';

  var searchKey = document.getElementById('searchKey').value;

  // console.log(type)

  products.forEach(el => {
    if( type == el.type )
    {
      if(searchKey!== '')
      {
        if(el.title.indexOf(searchKey) > -1){
          el.display = 'block';
        }
      }
      else{
        el.display = 'block';
      }
    }
    else {
      if(type == 'all'){
        if(searchKey!== '')
        {
          if(el.title.indexOf(searchKey) > -1){
            el.display = 'block';
          }
        }
        else{
          el.display = 'block';
        }
      }else {
        el.display = 'none';
      }
      
    }
    
  });

  showProduct();
}

function searchIt()
{
  var searchKey = document.getElementById('searchKey').value;

  if(searchKey == ''){
    products.forEach(el => {
      el.display = 'block';
    });
  }
  else {
    products.forEach(el => {
      
      //product type is selected
      if(productType!==null && productType!=='all')
      {
        if(productType == el.type){
          if(el.title.indexOf(searchKey) > -1){
            el.display = 'block';
          }else {
            el.display = 'none';
          }
        }else {
          el.display = 'none';
        }
      }
      else 
      {
        //product type is not selected
        if(el.title.indexOf(searchKey) > -1){
          el.display = 'block';
        }else {
          el.display = 'none';
        }
      }
    });
  }
  showProduct();
}

function miniCartToogle()
{
  var main = document.getElementById("mini-cart-wrapper");
  if(!main.style.display || main.style.display == 'none'){
    main.style.display = 'block'
  }else {
    main.style.display = 'none'
  }
}