// Author:zgz
// date:2021.3.15
/* checkAll()函数：处理所有复选框的全选，找到所有的复选框按钮，将其全部设置为选中状态。
someAll1()函数、someAll2()函数：处理某个店铺的全选，找到某个店铺的全选按钮、所有商品的按钮和购物车全选的按钮，
先将店铺里的商品设置为选中状态。判断店铺的全选按钮是否全部选中，如果选中则将购物车的全选按钮设置为选中。
checkSel()函数：处理店铺内某个复选框，查找各类复选框是否全部选中，然后决定店铺的全选以及购物车的全选。
calc()函数：实现点击加减号span中的数字随着变化，实现小计的功能。
total1()函数：购物车总计的判断。把总计单独写一个函数，当只有被选中是，总计才显示，所以此方法会被多次调用。
deleteShop()函数：删除某个选中的商品。
deleteDiv()函数：删除某个店铺，当店铺里没有商品时，那么这个店铺也将被删除。
deleteAllShop()函数：删除所有的店铺。 */
//处理全选
function checkAll(chb) {
  //获取tbody中所有tr下的第一个td中的input 保存在chbs中
  //遍历chbs，设置当前input元素中的checked属性等于chb的checked属性值
  //var chbs=document.querySelectorAll("tbody tr td:first-child input");
  //1根据全选的值修改所有复选框

  var chbs1 = document.getElementsByName("shop1_checkbox");//店铺1里所有商品
  var chbs2 = document.getElementsByName("shop2_checkbox");//店铺2里所有商品
  var someAll1 = document.getElementsByName("shop1_checkboxAll");//店铺1部分全选
  var someAll2 = document.getElementsByName("shop2_checkboxAll");//店铺2部分全选
  var selAll = document.getElementsByName("car_checkbox");//店铺全选
  for (var i = 0; i < chbs1.length; i++) {
    chbs1[i].checked = chb.checked;
  }
  for (var i = 0; i < chbs2.length; i++) {
    chbs2[i].checked = chb.checked;
  }
  for (var i = 0; i < someAll1.length; i++) {
    someAll1[i].checked = chb.checked;
  }
  for (var i = 0; i < someAll2.length; i++) {
    someAll2[i].checked = chb.checked;
  }

  for (var i = 0; i < selAll.length; i++) {
    selAll[i].checked = chb.checked;
  }
  total1();
}

//处理部分全选1
function someAll1(chb) {
  var chbs = document.getElementsByName("shop1_checkbox");//店铺1所有商品
  var selAll = document.getElementsByName("car_checkbox");
  // var someAll=document.querySelectorAll("table>thead tr th:first-child>input:not(:checked)");
  var someAll = document.querySelectorAll(".shop_top input:not(:checked)");

  for (var i = 0; i < chbs.length; i++) {
    chbs[i].checked = chb.checked;
  }
  //如果店铺全都选中，则将店铺全选改为选中状态
  if (someAll.length == 0) {
    for (var i = 0; i < selAll.length; i++) {
      selAll[i].checked = true;
    }
  } else {
    for (var i = 0; i < selAll.length; i++) {
      selAll[i].checked = false;
    }
  }
  total1();
}
//处理部分全选2
function someAll2(chb) {
  var chbs = document.getElementsByName("shop2_checkbox");
  var selAll = document.getElementsByName("car_checkbox");
  var someAll = document.querySelectorAll(".shop_top input:not(:checked)");
  for (var i = 0; i < chbs.length; i++) {
    chbs[i].checked = chb.checked;
  }
  if (someAll.length == 0) {
    for (var i = 0; i < selAll.length; i++) {
      selAll[i].checked = true;
    }
  } else {
    for (var i = 0; i < selAll.length; i++) {
      selAll[i].checked = false;
    }
  }
  total1();
}

//处理某一个复选框
function checkSel(chb) {
  //获取thead下tr th的input 存在cnbAll中
  //var chbAll=document.querySelector("thead tr th input");
  var selAll = document.getElementsByName("car_checkbox");
  var someAll1 = document.getElementsByName("shop1_checkboxAll");
  var someAll2 = document.getElementsByName("shop2_checkboxAll");

  //查找没有选中的数量
  var unchb1 = document.querySelectorAll(//店铺1中的所有没有选中的商品
    ".shop1 .shop_checkbox input:not(:checked)"
  );
  var unchb2 = document.querySelectorAll(//店铺1的部分全选
    ".shop1 .shop_top input:not(:checked)"
  );
  var unchb3 = document.querySelectorAll(//店铺2中的所有没有选中的商品
    ".shop2 .shop_checkbox input:not(:checked)"
  );
  var unchb4 = document.querySelectorAll(//店铺2中的所有没有选中的商品
    ".shop2 .shop_top input:not(:checked)"
  );
  // 判断如果店铺1中的商品全选中，则把店铺1的全选设置为选中状态
  if (unchb1.length == 0) {
    for (var i = 0; i < unchb2.length; i++) {
      unchb2[i].checked = true;
    }
  } else {
    for (var i = 0; i < someAll1.length; i++) {
      someAll1[i].checked = false;
    }
  }
  // 判断如果店铺2中的商品全选中，则把店铺2的全选设置为选中状态
  if (unchb3.length == 0) {
    for (var i = 0; i < unchb4.length; i++) {
      unchb4[i].checked = true;
    }
  } else {
    for (var i = 0; i < someAll2.length; i++) {
      someAll2[i].checked = false;
    }
  }
  // 如果店铺1和店铺2里的商品全都选中，则把店铺全选设置为选中状态
  if (unchb1.length == 0 && unchb3.length == 0) {
    for (var i = 0; i < selAll.length; i++) {
      selAll[i].checked = true;
    }
  } else {
    for (var i = 0; i < selAll.length; i++) {
      selAll[i].checked = false;
    }
  }

  total1();
}

function calc(btn) {
  //1、实现点击加减号span中的数字随着变化
  //获取btn的内容
  //获取span的内容
  //如果是加号，就把span中的内容加1
  //否则判断span的值如果>=1,则把span的值减一
  //否则，span=1
  var span = btn.parentElement.children[1];
  console.log(span);
  var n = Number(span.innerHTML);
  n += btn.innerHTML == "+" ? 1 : n >= 1 ? -1 : 0;
  span.innerHTML = n;
  //2、实现小计的功能
  //获取btn的父元素的上一个兄弟元素 ，把人民币符号去掉  并转化为浮点型  存到price中
  //定义变量total计算  n*price   保留两位小数
  //获取btn的父元素的下一个兄弟元素，设置其内容为 人民币符号+total
  var price = parseFloat(
    btn.parentNode.previousElementSibling.children[1].innerHTML.slice(1)
  );
  var total = n * price;
  // btn.parentNode.nextElementSibling.innerHTML="&yen"+total.tofixed(2);
  btn.parentNode.parentNode.children[5].children[0].innerHTML =
    "&yen" + total.toFixed(2);
  total1();
}
//把总计单独写一个函数，当只有被选中是，总计才显示，所以此方法会被多次调用
function total1() {
  //3、实现total 总计
  //获取总计所造标签td的内容 去掉人民币符号  转化为浮点数
  var tfoot_td = document.querySelector(".price");
  //设置td的内容为  人民币符号  +计算total加上price保留两位小数
  //var alltotal=parseFloat(tfoot_td.innerHTML.slice(1))+(btn.innerHTML=="+"?price:(-price));
  var listTotal = document.querySelectorAll("em.shop_total");//获取小计
  var alltotal = 0;
  var checkArry = document.querySelectorAll(".shop_checkbox input");//获取所有单个的复选框，以便判断是否被选中

  var span_small = document.querySelectorAll(".shop_num span");//获取所有的span
  var number = document.querySelector(".number");//获取数量总计
  var sum = 0;

  for (var i = 0; i < listTotal.length; i++) {
    if (checkArry[i].checked == true) {
      alltotal += parseFloat(listTotal[i].innerHTML.slice(1));//总金额
      sum += Number(span_small[i].innerHTML);//总数量
    }
  }
  number.innerHTML = sum;
  tfoot_td.innerHTML = "&yen" + alltotal.toFixed(2);
}
//删除某个选中的商品
function deleteShop(a){
  var shop_body = a.parentNode.parentNode;
  //移除当前选中的商品
  shop_body.parentNode.removeChild(shop_body);
}
//删除某个选中的店铺
//判断店铺是否还有商品，如果没有就店铺删了
function deleteDiv(a){
  /* 找到shop1、shop2下面的所有商品 */
  var shop1_div = document.querySelectorAll(".shop1 .shop_body");
  var shop2_div = document.querySelectorAll(".shop2 .shop_body");
  /* 找到所有的店铺 */
  var shop1 = document.querySelector(".shop1");
  var shop2 = document.querySelector(".shop2");
  var shop = a.parentNode.parentNode.parentNode;
  if(shop1){
    if(shop1_div.length==0){
      shop1.parentNode.removeChild(shop1);//移出店铺shop1
    }
  }
  if(shop2){
    if(shop2_div.length==0){
      shop2.parentNode.removeChild(shop2);//移出店铺shop2
    }
  }
  console.log(shop1_div.length);
  console.log(shop2_div.length);
  
}
//删除所有的店铺
function deleteAllShop(){
  var shop1 = document.querySelector(".shop1");
  var shop2 = document.querySelector(".shop2");
  shop1.parentNode.removeChild(shop1);
  shop2.parentNode.removeChild(shop2);
  }
