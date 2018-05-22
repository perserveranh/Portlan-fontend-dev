
$(document).ready(function() {
    // header
    var bar='<svg class="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg><!-- <i class="fas fa-bars"></i> -->';
    var cancel='<i class="fas fa-ban"></i>';
    $(".titleM__bar1").hide();

    $(document).on('click','.header__leftM__bar',function(){
        if ($('.header__leftM__bar').html()==bar) {
            $('.header__leftM__bar').html(cancel);
            $('.titleM__bar1').fadeIn(200);
        }else{
             $('.header__leftM__bar').html(bar);
            $('.titleM__bar1').fadeOut(200);
        }
    })

    // an hien menu__open
    $(window).scroll(function(){
        if ($(document).scrollTop()<200) {
            $('.click-show').html('');
        }else{
             $('.click-show').html('&#9776;');
        }
    });

    // login
    $(document).on('click','.modal__login',function(){
        if($('.login__name').val()!=="" && $('.login__pass').val()!==""){
            var name=$('.login__name').val();
            $('.btn-sign').html(name);
            // alert('aaa');
        }
    })

    // slider
    var a= $('.header__cart').html();
    $(document).on('click','.modal-save',function(){
        $('.header__cart').html(++a);
    })

    // fliter
    $(document).on('click','.click-show',function(event){
         $("#mySidenav").fadeIn(300);
        $("#mySidenav").css('width','300px');
    })

    $(document).on('click','.closebtn',function(event){
        $("#mySidenav").fadeOut(300);
        $("#mySidenav").css('width','0px');
    })

    $(window).bind('resize', function(){
         if($(window).width() < 992)
            $("#mySidenav").hide();
    });

    $(window).bind('resize', function(){
         if($(window).width() > 991)
            $("#mySidenav").show();
    });

});

    // $(document).on('click','.modal-save',function(){

    // })

  // Định nghĩa một mảng các phần tử sẽ bỏ vào giỏ hàng
    var shoppingCartItems = [];

    $(document).ready(function () {
        // Kiểm tra nếu đã có sessionStorage["shopping-cart-items"] hay chưa?
        if (sessionStorage["shopping-cart-items"] != null) {
            shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
        }

        // Hiển thị thông tin từ giỏ hàng
        displayShoppingCartItems();
    });


    // Sự kiện click các button có class=".add-to-cart"
    $(".add-to-cart").click(function () {
        var button = $(this); // Lấy đối tượng button mà người dùng click
        var id = button.attr("id"); // id của sản phẩm là id của button
        var name = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
        var price = button.attr("data-price"); // price của sản phẩm là thuộc tính data-price của button
        var quantity = 1; // Số lượng


        var item = {
            id: id,
            name: name,
            price: price,
            quantity: quantity
        };

        var exists = false;
        if (shoppingCartItems.length > 0) {
            $.each(shoppingCartItems, function (index, value) {
                // Nếu mặt hàng đã tồn tại trong giỏ hàng thì chỉ cần tăng số lượng mặt hàng đó trong giỏ hàng.
                if (value.id == item.id) {
                    value.quantity++;
                    exists = true;
                    return false;
                }
            });
        }

        // Nếu mặt hàng chưa tồn tại trong giỏ hàng thì bổ sung vào mảng
        if (!exists) {
            shoppingCartItems.push(item);
        }

        // Lưu thông tin vào sessionStorage
        sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems); // Chuyển thông tin mảng shoppingCartItems sang JSON trước khi lưu vào sessionStorage
        // Gọi hàm hiển thị giỏ hàng
        displayShoppingCartItems();
    });

    // Xóa hết giỏ hàng shoppingCartItems
    $("#button-clear").click(function () {
        shoppingCartItems = [];
        sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
        $("#table-products > tbody").html("");
    });


    // Hiển thị giỏ hàng ra table
    function displayShoppingCartItems() {
        if (sessionStorage["shopping-cart-items"] != null) {
            shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString()); // Chuyển thông tin từ JSON trong sessionStorage sang mảng shoppingCartItems.

            $("#table-products > tbody").html("");
            // Duyệt qua mảng shoppingCartItems để append từng item dòng vào table
            $.each(shoppingCartItems, function (index, item) {
                var htmlString = "";
                htmlString += "<tr>";
                htmlString += "<td>" + item.id + "</td>";
                htmlString += "<td>" + item.name + "</td>";
                htmlString += "<td style='text-align: right'>" + item.price + "</td>";
                htmlString += "<td style='text-align: right'>" + item.quantity + "</td>";
                htmlString += "<td style='text-align: right'>" + item.price * item.quantity + "</td>";
                htmlString += "</tr>";

                $("#table-products > tbody:last").append(htmlString);

            });
        }
    }