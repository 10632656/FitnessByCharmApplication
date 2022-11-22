  $(document).ready(()=>{
    var type;
    var pathname = window.location.search;
    type = pathname.split('=')[1];              
    var search = document.location.search;
      $.getJSON('./products.json', (data)=>{
        let counter=0;
          data.forEach((Prod)=>{            
           
              if(search.indexOf(Prod.id) != -1 && Prod.id == type){
                $('#productsDes').append('<h2>'+Prod.title+'</h2>'+
                '<h1> </h1>'+
                '<hr>'+
                '<h3>Price : € '+Prod.price+'</h3>'+
                '<ul>    '+
                '<li class="prod-spec">'+Prod.description+'</li> '+
                '</ul>'+
                '<div>'+
                '<button class="btn btn-gym" type="submit" onclick="openReserve()"  > Reserve Product </button>'+
                '</div>')
                $('#mainImg').attr("src",Prod.img1)
                $('.img-container').append('<img class="product-img" src='+Prod.img1+' id="mainImg" alt="product"> '+
                '<br>'+
                '<div style="height: 1rem;" ></div>'+
                '<img class="product-icon" src='+Prod.img1+' alt="icon" onclick="changeMainImg('+"'"+Prod.img1+"'"+')">'+
                '<img class="product-icon" src='+Prod.img2+' alt="icon" onclick="changeMainImg('+"'"+Prod.img2+"'"+')">'+
                '<img class="product-icon" src='+Prod.img3+' alt="icon" onclick="changeMainImg('+"'"+Prod.img3+"'"+')">'+
                '<img class="product-icon" src='+Prod.img4+' alt="icon" onclick="changeMainImg('+"'"+Prod.img4+"'"+')">')
              }
              else if(counter<5){
                  $(".ProdLine").append(
                    '<div class="col-sm-12 col-lg-3 col-md-3">'+
'<div class="card">'+
'<img class="more-products card-img-top" src="'+Prod.img1+'" alt="'+Prod.title+'">'+
'<div class="card-body">'+
'<h5 class="card-title">'+Prod.title+'</h5>'+
'<a href="./products.html?id='+Prod.id+'" class="btn btn-primary">More</a>'+
'</div>'+
'</div>'+
'</div>')         
              }
              counter++;
          });
      });
  });    