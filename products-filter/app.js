var products = [
  {
    img: 'images/doughnut-1.jpeg',
    title: 'doughnut 1',
    type: 'doughnut',
    display: 'block',
  },
  {
    img: 'images/doughnut-2.jpeg',
    title: 'doughnut 2',
    type: 'doughnut',
    display: 'block',
  },
  {
    img: 'images/cake-1.jpeg',
    title: 'cake 1',
    type: 'cake',
    display: 'block',
  },
  {
    img: 'images/cake-2.jpeg',
    title: 'cake 2',
    type: 'cake',
    display: 'block',
  },
  {
    img: 'images/cupcake-1.jpeg',
    title: 'cupcake 1',
    type: 'cupcake',
    display: 'block',
  },
  {
    img: 'images/cupcake-2.jpeg',
    title: 'cupcake 2',
    type: 'cupcake',
    display: 'block',
  },
  {
    img: 'images/sweets-1.jpeg',
    title: 'sweets 1',
    type: 'sweets',
    display: 'block',
  },
  {
    img: 'images/sweets-2.jpeg',
    title: 'sweets 2',
    type: 'sweets',
    display: 'block',
  },
];

var productType = null;

function showProduct() {
  var productsMarkup = '';
  products.forEach(el => {
    productsMarkup += '\
      <article style="display: '+el.display+'" data-type="'+el.type+'">\
        <div class="product">\
          <img src="'+el.img+'" alt="">\
          <p>'+el.title+'</p>\
        </div>\
      </article>\
    ';
  });
  document.getElementById('results').innerHTML = productsMarkup;
}

showProduct();

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

      if(productType!==null)
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
      else {
        //product type is not selected
        if(el.title.indexOf(searchKey) > -1){
          el.display = 'block';
        }else {
          el.display = 'none';
        }
      }

      if( productType == el.type ){
        console.log(123)
      }else {

      }

      // if ( el.title.indexOf(searchKey) > -1 ){
        
        // if(productType!==null && el.type == productType){
        //   el.display = 'block';
        // }
        // else {
        //   if(productType!=='all' && productType!==null){
        //     el.display = 'none';
        //   }
        // }
      // }
      // else {
      //   // el.display = 'none';
      // }
    });
  }
  showProduct();
}