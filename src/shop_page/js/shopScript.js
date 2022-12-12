import {auth,db} from "../../firebase.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { doc, getDoc,updateDoc,setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
var numOfItems = 0;
const UID = window.sessionStorage.getItem("uid")
let cartPlants = [];

$(document).ready(function(){


	document.body.style.zoom="90%"


	$(".largeGrid").click(function(){											
    $(this).find('a').addClass('active');
    $('.smallGrid a').removeClass('active');
    
    $('.product').addClass('large').each(function(){											
		});						
		setTimeout(function(){
			$('.info-large').show();	
		}, 200);
		setTimeout(function(){

			$('.view_gallery').trigger("click");	
		}, 400);								
		
		return false;				
	});
	
	$(".smallGrid").click(function(){		        
    $(this).find('a').addClass('active');
    $('.largeGrid a').removeClass('active');
    
		$('div.product').removeClass('large');
		$(".make3D").removeClass('animate');	
    $('.info-large').fadeOut("fast");
		setTimeout(function(){								
				$('div.flip-back').trigger("click");
		}, 400);
		return false;
	});		
	
	$(".smallGrid").click(function(){
		$('.product').removeClass('large');			
		return false;
	});
  
  $('.colors-large a').click(function(){return false;});
	
	
	$('.product').each(function(i, el){					

		// Lift card and show stats on Mouseover
		$(el).find('.make3D').hover(function(){
				$(this).parent().css('z-index', "20");
				$(this).addClass('animate');
				$(this).find('div.carouselNext, div.carouselPrev').addClass('visible');			
			 }, function(){
				$(this).removeClass('animate');			
				$(this).parent().css('z-index', "1");
				$(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
		});	
		
		// Flip card to the back side
		$(el).find('.view_gallery').click(function(){	
			
			$(el).find('div.carouselNext, div.carouselPrev').removeClass('visible');
			$(el).find('.make3D').addClass('flip-10');			
			setTimeout(function(){					
			$(el).find('.make3D').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
					$(el).find('.product-front, .product-front div.shadow').hide();															
				});
			}, 50);
			
			setTimeout(function(){
				$(el).find('.make3D').removeClass('flip90').addClass('flip190');
				$(el).find('.product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
				setTimeout(function(){				
					$(el).find('.make3D').removeClass('flip190').addClass('flip180').find('div.shadow').hide();						
					setTimeout(function(){
						$(el).find('.make3D').css('transition', '100ms ease-out');			
						$(el).find('.cx, .cy').addClass('s1');
						setTimeout(function(){$(el).find('.cx, .cy').addClass('s2');}, 100);
						setTimeout(function(){$(el).find('.cx, .cy').addClass('s3');}, 200);				
						$(el).find('div.carouselNext, div.carouselPrev').addClass('visible');				
					}, 100);
				}, 100);			
			}, 150);			
		});			
		
		
	
		makeCarousel(el);
	});
	
	$('.add-cart-large').each(function(i, el){
		$(el).click(function(){
			var carousel = $(this).parent().parent().find(".carousel-container");
			var img = carousel.find('img').eq(carousel.attr("rel"))[0];						
			var position = $(img).offset();	

			var productName = $(this).parent().find('h4').get(0).innerHTML;				
	
			$("body").append('<div class="floating-cart"></div>');		
			var cart = $('div.floating-cart');		
			$("<img src='"+img.src+"' class='floating-image-large' />").appendTo(cart);
			
			$(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
			setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
			
			setTimeout(function(){
			$('div.floating-cart').remove();
			$("body").removeClass("MakeFloatingCart");


			var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+img.src+"' alt='' /></div><span>"+productName+"</span><strong>$500</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

			$("#cart .empty").hide();			
			$("#cart").append(cartItem);
			$("#checkout").fadeIn(500);
			
			$("#cart .cart-item").last()
				.addClass("flash")
				.find(".delete-item").click(function(){
					$(this).parent().fadeOut(300, function(){
						$(this).remove();
						if($("#cart .cart-item").size() == 0){
							$("#cart .empty").fadeIn(500);
							$("#checkout").fadeOut(500);
						}
					})
				});
 		    setTimeout(function(){
				$("#cart .cart-item").last().removeClass("flash");
			}, 10 );
			
		}, 1000);
			
			
		});
	})
	
	// Image Gallery Carousel  
	function makeCarousel(el){
	
		
		var carousel = $(el).find('.carousel ul');
		var carouselSlideWidth = 315;
		var carouselWidth = 0;	
		var isAnimating = false;
		var currSlide = 0;
		$(carousel).attr('rel', currSlide);
		
		// building the width of the casousel
		$(carousel).find('li').each(function(){
			carouselWidth += carouselSlideWidth;
		});
		$(carousel).css('width', carouselWidth);
		
		// Load Next Image
		$(el).find('div.carouselNext').on('click', function(){
			var currentLeft = Math.abs(parseInt($(carousel).css("left")));
			var newLeft = currentLeft + carouselSlideWidth;
			if(newLeft == carouselWidth || isAnimating === true){return;}
			$(carousel).css({'left': "-" + newLeft + "px",
								   "transition": "300ms ease-out"
								 });
			isAnimating = true;
			currSlide++;
			$(carousel).attr('rel', currSlide);
			setTimeout(function(){isAnimating = false;}, 300);			
		});
		
		// Load Previous Image
		$(el).find('div.carouselPrev').on('click', function(){
			var currentLeft = Math.abs(parseInt($(carousel).css("left")));
			var newLeft = currentLeft - carouselSlideWidth;
			if(newLeft < 0  || isAnimating === true){return;}
			$(carousel).css({'left': "-" + newLeft + "px",
								   "transition": "300ms ease-out"
								 });
			isAnimating = true;
			currSlide--;
			$(carousel).attr('rel', currSlide);
			setTimeout(function(){isAnimating = false;}, 300);						
		});
	}
	
	$('.sizes a span, .categories a span').each(function(i, el){
		$(el).append('<span class="x"></span><span class="y"></span>');
		
		$(el).parent().on('click', function(){
			if($(this).hasClass('checked')){				
				$(el).find('.y').removeClass('animate');	
				setTimeout(function(){
					$(el).find('.x').removeClass('animate');							
				}, 50);	
				$(this).removeClass('checked');
				return false;
			}
			
			$(el).find('.x').addClass('animate');		
			setTimeout(function(){
				$(el).find('.y').addClass('animate');
			}, 100);	
			$(this).addClass('checked');
			return false;
		});
	});
	
	$('.add_to_cart').click(function(){
		var productCard = $(this).parent();
		var position = productCard.offset();
		var productImage = $(productCard).find('img').get(0).src;
		var productName = $(productCard).find('.product_name').get(0).innerHTML;				

		$("body").append('<div class="floating-cart"></div>');		
		var cart = $('div.floating-cart');		
		productCard.clone().appendTo(cart);
		$(cart).css({'top' : position.top + 'px', "left" : position.left + 'px'}).fadeIn("slow").addClass('moveToCart');		
		setTimeout(function(){$("body").addClass("MakeFloatingCart");}, 800);
		setTimeout(function(){
			$('div.floating-cart').remove();
			$("body").removeClass("MakeFloatingCart");


			var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>$500</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

			$("#cart .empty").hide();
			//Add item display to cart (delete all cartItem if we want to clear cart)	
			$("#cart").append(cartItem);
			cartPlants.push(productName);
			numOfItems += 1
			console.log(cartPlants);
			$("#checkout").fadeIn(500);
			
			$("#cart .cart-item").last()
				.addClass("flash")
				.find(".delete-item").click(function(){
					$(this).parent().fadeOut(300, function(){
						$(this).remove();//remove an item from cart
						const removeIdx = cartPlants.indexOf(productName);
						// console.log(removeIdx);
						cartPlants = cartPlants.filter((plant,idx) => {
							return idx !== removeIdx
						});
						numOfItems -= 1;
						console.log(cartPlants);
						if($("#cart .cart-item").size() == 0){
							$("#cart .empty").fadeIn(500);
							$("#checkout").fadeOut(500);
						}
					})
				});
 		    setTimeout(function(){
				$("#cart .cart-item").last().removeClass("flash");
			}, 10 );
			
		}, 1000);
	});

//check out function

// $('.check_out').click(function(){
// 	var productCard = $(this).parent();
// 		var position = productCard.offset();
// 		var productImage = $(productCard).find('img').get(0).src;
// 		var productName = $(productCard).find('.product_name').get(0).innerHTML;	
		
// 		$("body").append('<div class="floating-cart"></div>');		
// 		var cart = $('div.floating-cart');		
// 		productCard.clone().appendTo(cart);

// 		var cartItem = "<div class='cart-item'><div class='img-wrap'><img src='"+productImage+"' alt='' /></div><span>"+productName+"</span><strong>$500</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";			

// 			$("#cart .empty").hide();			
// 			$("#cart").append(cartItem);
// 			$("#checkout").fadeIn(500);



// });
});


const userRef = doc(db, "users",UID);
const userSnap = await getDoc(userRef);

let checkout=document.getElementById("checkout");
let curBal = userSnap.data().balance;
console.log(curBal)
document.getElementById("checkout").onclick = function() {checkOut()};
document.getElementById("balance").innerHTML = curBal;

const seedRef = doc(db,"seed",UID);
// Get user's current inventory of seeds
const seedSnap = await getDoc(seedRef);
// Check if the document exists
const plantedExist = seedSnap.exists();

// TODO: Need to clear the cart after checkout
async function checkOut() {
if (curBal<500*numOfItems){
	$("#myText").fadeIn();
	document.getElementById("myText").innerHTML = "Not enough balance";
	$("#myText").fadeOut(1500);
	
}
else{
	console.log(numOfItems);
	curBal -= numOfItems * 500;
 	console.log(curBal);
	updateDoc(userRef, {
		balance:curBal
	});
	// document.getElementById("checkout").innerHTML = "Purchased!";
	document.getElementById("balance").innerHTML = curBal;
	// document.getElementById("balance").innerHTML = balance;
	$("#myText").fadeIn();
	$("#checkout").fadeOut(1000);

	var v = "The following was purchased";
	document.getElementById("myText").innerHTML = v;
	$("#myText").fadeOut(1500);

	// update seed collections
	let freqMap = {};
	if (plantedExist){
		if (seedSnap.data().Inventory){
			const prevFreqMap = seedSnap.data().Inventory;
			freqMap = prevFreqMap
		}
	}

	cartPlants.forEach((plant) => {
		if (freqMap[plant]){
			freqMap[plant]++;
		}
		else{
			freqMap[plant] = 1;
		}
	})

	if (plantedExist){
		await updateDoc(seedRef, {
		  Inventory:freqMap,
		});
	  }
	  else{
		await setDoc(seedRef, {
		  Inventory:freqMap,
		});
	  }

}
	// empty the cart and counter
	numOfItems = 0
	cartPlants = [];

	$('#cart div.cart-item').fadeOut(function(){
		$(this).remove();
		$("#cart .empty").fadeIn(1000);
		
		
	});
}
// document.location.reload(true);

