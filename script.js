// 模拟购物车数组
let cart = [];
let count = 0;
// 获取产品列表容器和排序按钮
const productList = document.getElementById('product-list');
const sortButton = document.getElementById('sort-button');
// 给每个“加入购物车”按钮添加事件监听器
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', event => {
        const productElement = event.target.parentElement; // 获取产品父元素
        const productId = productElement.getAttribute('data-id'); // 产品 ID
        const productName = productElement.querySelector('h2').textContent; // 产品名称

        // 将产品加入购物车数组
        cart.push({
            id: productId,
            name: productName,
            price: productPrice
        });

        count++;
    counterValue.textContent = count;

        console.log('购物车内容:', cart);
        alert(`${productName} 已加入购物车！`);
    });
});

function addPoints(productType, action) {
    let points = parseInt(document.getElementById('points').innerHTML);
    // 这里简单设定回收加10分，出售加20分，可根据实际业务调整
    if (action === '回收') {
      points += 10;
      alert('您已成功回收电池，可获得10绿色积分以此来换取购买折扣');
    } else {
      points += 20;
      alert('您已成功出售电池，可获得20绿色积分以此来换取购买折扣');
    }
    document.getElementById('points').innerHTML = points;
  }