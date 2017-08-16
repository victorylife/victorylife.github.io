//The default page (on load)
var activeLineNUM = 1;
var pageWidthNUM;

$(document).ready(function(){
	//Get the width of the page
	pageWidthNUM	= $('.GalleryMain18').outerWidth(true);
	//How many image to show in every page
	imagePageNUM	= Math.floor(pageWidthNUM/imageWidthNUM);
	//Set what images to see and what images need to be hidden
	showHideImagesByPage(activeLineNUM,imagePageNUM);


	//Display the first image on the album
	$('#Album_Pic_'+activeLineNUM+'').click();

	//We need to deside if we need to show again the "next page" option (maybe it's the end)
	showHideNavButtons(1,1,imagePageNUM,1)
	//We need to deside if we need to show again the "prev page" option (maybe it's the end)
	showHideNavButtons(0,1,imagePageNUM,1)

	//We like all the pages will be in the same height when we move to the next or prev image
	setImagesHeight();
	//Fit the iframe after all the changes
	autofitIframePlugin();
	//Active the resize window event
	$(window).resize(function() {
		//We like all the pages will be in the same height when we move to the next or prev image
		setImagesHeight();
		//Fit the iframe after all the changes
		autofitIframePlugin();
	});

});

//Set what images to see and what images need to be hidden
function showHideImagesByPage(activeLineNUM,imagePageNUM) {
	//Save the width of all the images
	var imagesWidthNUM	 = 0 ;
	//Hide all images
	$("[id^=Album_Pic_]").hide();
	//Show only the ones that exist in the current page
	for (var i=1;i<=imagePageNUM;i++) {
		//We like the images will be side by side
		if ($('#Album_Pic_'+((activeLineNUM*imagePageNUM)-imagePageNUM+i)+'')) {
			$('#Album_Pic_'+((activeLineNUM*imagePageNUM)-imagePageNUM+i)+'').css('display','inline-block');
			if (activeLineNUM==1) {
				imagesWidthNUM = imagesWidthNUM + $('#Album_Pic_'+((activeLineNUM*imagePageNUM)-imagePageNUM+i)+'').outerWidth(true);
			}
		}
	}
	//Set the width of the tumb (only for the first page)
	if (activeLineNUM==1) {
		$('#GallerySop18_tumb').width(imagesWidthNUM);
		//Set the height and width of the website again
		setImagesHeight();
	}
}

//To show or not to show the navigation button
function showHideNavButtons(nextBOO,activeLineNUM,imageNUM,onloadBOO) {
	if (nextBOO==1) {
		//We need to deside if we need to show again the "next page" option (maybe it's the end)
		if ($('#Album_Pic_'+(activeLineNUM*imageNUM+1)+'').length == 0) {
			//Hide the button
			$('#NextButtonGallery').css('visibility', 'hidden');
		} else {
			//Show the button
			$('#NextButtonGallery').css('visibility', 'visible');
		}
		//Show the prev button
		if (onloadBOO==0)
			$('#PrevButtonGallery').css('visibility', 'visible');
	} else {
		//We need to deside if we need to show again the "prev page" option (maybe it's the end)
		if ($('#Album_Pic_'+(activeLineNUM-1)+'').length == 0) {
			//Hide the button
			$('#PrevButtonGallery').css('visibility', 'hidden');
		} else {
			//Show the button
			$('#PrevButtonGallery').css('visibility', 'visible');
		}
		//Show the next button
		if (onloadBOO==0)
			$('#NextButtonGallery').css('visibility', 'visible');
	}
}

//We like all the pages will be in the same height when we move to the next or prev image
function setImagesHeight() {
	$('.GalleryMain18').height($('#GallerySop18_'+activeLineNUM+'').height());
	$('#GallerySop18').height($('#GallerySop18_'+activeLineNUM+'').height());
	$('#GallerySop18_Toolbar').height($('#GallerySop18_'+activeLineNUM+'').height());
	//Set the width of the tumb
	$('#GallerySop18_Toolbar').width($('#GallerySop18_tumb').outerWidth(true)+$('#PrevButtonGallery').outerWidth(true)+$('#NextButtonGallery').outerWidth(true)+10);

	//Set the width of the big image
	$('.GallerySop18classBigImage').width($('#GallerySop18_Toolbar').width());
	$('.GallerySop18classBigImage').width($('.GallerySop16classBigImage').width()-($('.GallerySop18classBigImage').outerWidth(true)-$('.GallerySop18classBigImage').width()));
	//Set the height of the big image
	$('.GallerySop18classBigImage').height($('.GallerySop18classBigImage').width()*0.5);
}

function NextAlbumLine(imageNUM) {
	//Save the active page for the next move the user will do
	activeLineNUM = activeLineNUM+1;

	showHideImagesByPage(activeLineNUM,imagePageNUM);

	//We need to deside if we need to show again the "next page" option (maybe it's the end)
	showHideNavButtons(1,activeLineNUM,imagePageNUM,0)
}

function PrevAlbumLine(imageNUM) {
	//Save the active page for the next move the user will do
	activeLineNUM = activeLineNUM-1;

	showHideImagesByPage(activeLineNUM,imagePageNUM);

	//We need to deside if we need to show again the "prev page" option (maybe it's the end)
	showHideNavButtons(0,activeLineNUM,imagePageNUM,0)
}

function showImage(el) {
	//Get the title on the image
	var imageTitleTXT = $(el).attr('title');

	//Get the free width we have for the main image
	$("#GallerySop18_ShowImage").hide();
	if ($("#bigImage18").length == 0) {
		$("#GallerySop18_ShowImage").html('<div id="bigImage18" class="GallerySop18classBigImage" style="background-image:url('+$(el).attr('href')+');"><div class="GallerySop18classBigImageText" style="display:none;">'+imageTitleTXT+'</div></div>');
	} else {
		$(".GallerySop18classBigImage").css('background-image','url('+$(el).attr('href')+')');
		$(".GallerySop18classBigImageText").html(imageTitleTXT);
		$(".GallerySop18classBigImageText").css('display','none');
	}
	$("#GallerySop18_ShowImage").fadeIn('slow');

	//If there is title to the image we show the text
	if (imageTitleTXT!='') {
		$(".GallerySop18classBigImageText").show();
	}

	//Set the top position of the text on the image
	$('.GallerySop18classBigImageText').css('top',$('.GallerySop18classBigImage').height()-$('.GallerySop18classBigImageText').height());
}