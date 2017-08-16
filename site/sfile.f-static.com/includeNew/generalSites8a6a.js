/*-------------------- Start MenusMouseOver --------------------*/
var lastMenuID, lastTopItem;     // for the top menus
var lastSubMenuID, lastSubTopItem;     // for the sub menu

function showMenu(menuID){
	if (menuID) document.getElementById(menuID).style.display='block';
}

function hideMenu(menuID) {
	if (menuID) document.getElementById(menuID).style.display='none';
}

function subMenu(menuID,topItem)	{
	if (document.getElementById(menuID).style.display=='none')	{
		if (lastSubMenuID) document.getElementById(lastSubMenuID).style.display='none';
		document.getElementById(menuID).style.display='block';

		lastSubMenuID=menuID;
		lastSubTopItem=topItem;
	}
	else{
		document.getElementById(menuID).style.display='none';
	}
}

function subOver(fieldTXT,menuID,boxNUM)
{
		document.getElementById(fieldTXT+menuID).style.display='block';
		showMenu(fieldTXT,boxNUM);
}

function subOut(fieldTXT,menuID,boxNUM)
{
		document.getElementById(fieldTXT+menuID).style.display='none';
		hideMenu(fieldTXT,boxNUM);
}


function subsubOver(menuID,type)
{
		document.getElementById(type+"Menu"+menuID).style.display='block';
		subOver(menuID);

}

function subsubOut(menuID,type)	{
		document.getElementById(type+"Menu"+menuID).style.display='none';
		subOut(menuID);

}
/*-------------------- End SubMenus --------------------*/


function autofitIframeNew(id)
//copyright 2004 Eddie Traversa http://www.dhtmlnirvana.com/
{
	if (parent.document.getElementById(id))
	{
		try
		{
			if (!window.opera && !document.mimeType && document.all && document.getElementById)
			{
				if (this.document.body.offsetHeight>0)
					parent.document.getElementById(id).style.height			= this.document.body.offsetHeight+"px";
			}
			else
			{
				if (document.getElementById)
				{
					if (this.document.body.scrollHeight>0)
						parent.document.getElementById(id).style.height		= this.document.body.scrollHeight+"px";
				}
			}
			//Set the size of the width
			if (this.document.body.scrollWidth>0)
				parent.document.getElementById(id).style.width				= this.document.body.scrollWidth+"px";
		}
		catch(err)
		{
			if (this.document.body.scrollHeight>0)
				parent.document.getElementById(id).style.height				= this.document.body.scrollHeight+"px";
			//Set the size of the width
			if (this.document.body.scrollWidth>0)
				parent.document.getElementById(id).style.width				= this.document.body.scrollWidth+"px";
		}
	}
}

function setPageToTopNew()
{
	//after the page upload we jemp to the header
	parent.self.scrollTo(0,0);
}

function showDivNew(d_id)
{
	//Display and dont Display a block
	var d_obj = document.getElementById(d_id);
	d_obj.style.display = d_obj.style.display=="none"?"":"none";
}

function showDivNewParent(d_id)
{
	//Display and dont Display a block
	var d_obj = parent.document.getElementById(d_id);
	d_obj.style.display = d_obj.style.display=="none"?"":"none";
}


//Delete in the feture
function checkIfBigest(newVal,SmallVal)
{
	if (newVal>SmallVal)
		return newVal;
	else
		return SmallVal;
}

function MSIE_VER()
{
//Open new window (connect to the function 'openWin')
	agt = navigator.userAgent.toLowerCase();
	pos = agt.indexOf('msie')+1;
	if(pos)
		return agt.charAt(pos+4);
	return 0
}

function openWin(url,title,attrib)
{
//Open new window (connect to the function 'MSIE_VER')
	wref = window.open(url,title,attrib);
	if(MSIE_VER()>=5)
		wref.focus();
}

function openWin_new(url,title,fullBOO)
{
	try
	{
		var wref ;
		if (fullBOO=="0")
			wref = window.open(url,title,'width='+Number(getClientWidth_new()-100)+',height='+Number(getClientHeight_new()-200)+',left=50,top=100,toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,movable=1,resizable=1');
		else
			wref = window.open(url,title,'width='+Number(getClientWidth_new())+',height='+Number(getClientHeight_new())+',left=0,top=0,toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,movable=1,resizable=1');
		if(MSIE_VER()>=5)
			wref.focus();
	}
	catch (e)
	{
		top.location.href	= url ;
	}
}

function getClientWidth_new() {
	return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientWidth:document.body.clientWidth;
}

function getClientHeight_new() {
	return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight;
}


function toTop()
{
//Jamp the user to the top of the page
	self.scrollTo(0,0);
}

function getNameMonth(x)
{
	var monthNameTXT

	switch (x)
	{
		case 0:
			monthNameTXT	= "January";
			break;
		case 1:
			monthNameTXT	= "February";
			break;
		case 2:
			monthNameTXT	= "March";
			break;
		case 3:
			monthNameTXT	= "April";
			break;
		case 4:
			monthNameTXT	= "May";
			break;
		case 5:
			monthNameTXT	= "June";
			break;
		case 6:
			monthNameTXT	= "July";
			break;
		case 7:
			monthNameTXT	= "August";
			break;
		case 8:
			monthNameTXT	= "September";
			break;
		case 9:
			monthNameTXT	= "October";
			break;
		case 10:
			monthNameTXT	= "November";
			break;
		case 11:
			monthNameTXT	= "December";
			break;
		default:
			monthNameTXT	= "";
	}

	return monthNameTXT
}

//v1.0
//Copyright 2006 Adobe Systems, Inc. All rights reserved.
//******************************************************************************************************
//******************************************************************************************************
function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '<object ';
  for (var i in objAttrs)
    str += i + '="' + objAttrs[i] + '" ';
  str += '>';
  for (var i in params)
    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  str += '<embed ';
  for (var i in embedAttrs)
    str += i + '="' + embedAttrs[i] + '" ';
  str += ' ></embed></object>';

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "id":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}

//Save the bookmark after user click
function addBookmark(title,url)
{
	if (window.sidebar)
	{ 
		window.sidebar.addPanel(title, url,""); 
	}
	else
		if( document.all )
		{
			window.external.AddFavorite( url, title);
		}
		else
			if( window.opera && window.print )
			{
				return true;
			}
}


//sound stop & play
//-------------------
ver=parseInt(navigator.appVersion)
ie4=(ver>3  && navigator.appName!="Netscape")?1:0
ns4=(ver>3  && navigator.appName=="Netscape")?1:0
ns3=(ver==3 && navigator.appName=="Netscape")?1:0

function playSound(url) {
 if (ie4) document.all['BGSOUND_ID'].src=url;
 if ((ns4||ns3)
  && navigator.javaEnabled()
  && navigator.mimeTypes['audio/x-midi']
  && self.document.Bach.IsReady()
 )
 {
  self.document.Bach.play()
 }
}

function stopSound() {
 if (ie4) document.all['BGSOUND_ID'].src='jsilence.html';
 if ((ns4||ns3)
  && navigator.javaEnabled()
  && navigator.mimeTypes['audio/x-midi']
 )
 {
  self.document.Bach.stop()
 }
}
//-------------------
//sound stop & play


// http://www.webreference.com/js/column8/functions.html
// name - name of the cookie
// value - value of the cookie
// [expires] - expiration date of the cookie (defaults to end of current session)
// [path] - path for which the cookie is valid (defaults to path of calling document)
// [domain] - domain for which the cookie is valid (defaults to domain of calling document)
// [secure] - Boolean value indicating if the cookie transmission requires a secure transmission
// * an argument defaults when it is assigned null as a placeholder
// * a null placeholder is not required for trailing omitted arguments
function setCookie(name, value, expires) {
  var curCookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires.toGMTString() : ";path=/");
  document.cookie = curCookie;
}

// name - name of the desired cookie
// * return string containing value of specified cookie or null if cookie does not exist
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

function checkSideMenuSubmit(QuestionID,copyVoteBOO,formObj)
{
	var answerID;
	if (copyVoteBOO && copyVoteBOO == 'True')
	{
		var votePoll;
		votePoll = getCookieInPage("votePoll"+QuestionID);
		if (votePoll==QuestionID)
		{
			alert(votePoolTwice);
			return false;
		}
	}
	//check that At least one answer is choosen
	var oneIsChoosenBOO = false;
	var radioArr = document.getElementsByTagName("input");
	for (var i = 0; i < radioArr.length; i++) {
		if (radioArr[i].checked && radioArr[i].checked == true && radioArr[i].name=="answer"){
			oneIsChoosenBOO = true;
			answerID		= radioArr[i].value;
		}
	}
	if (!oneIsChoosenBOO){
		try{
			alert(tran280409a1);
		}catch(err){
			alert(err);
		}
		return false;
	}
	else{
		return true;
	}
}

function checkSideMenuSubmit1(terms_id)
{
	var userTXT		=	document.form3.userTXT.value;
	var passTXT		=	document.form3.passTXT.value;
							  	  
	if (userTXT == "")
	{
		alert(EnterUserName);
		document.form3.userTXT.focus();
		return false;
	}
							   
	if (passTXT == "")
	{
		alert(EnterPassword);
		document.form3.passTXT.focus();
		return false;
	}


	if (terms_id != "")
	{
		var tremsFUN	=	document.form3.tremsFUN.checked;
		if (!tremsFUN)
		{
			alert(AgreeTerms);
			document.form3.tremsFUN.focus();
			return false;
		}
	}

	document.getElementById("sendID1").style.display = document.getElementById("sendID1").style.display == "none" ? "" : "none";

}

function checkSearchFormSideMenu(lanTXT)
{
	var seaWord = document.formSearchSideMenu.seaWord.value;

	if (seaWord == "")
	{
		alert(PleaseFillSeatchField);
		document.formSearchSideMenu.seaWord.focus();
		return false;
	}

	if (seaWord.length < 2)
	{
		alert(SearchWordShort);
		document.formSearchSideMenu.seaWord.focus();
		return false;
	}
}

function checkMaillingFormSideMenu(lanTXT)
{
	var emailTXT			= document.formMaillingSideMenu.emailTXT.value;

    if (emailTXT == "")
	{
		alert(EnterEmail);
		document.formMaillingSideMenu.emailTXT.focus();
		return false;
	}

	if (emailTXT!="")
	{
		if (emailTXT.indexOf('@', 0) == -1 || emailTXT.indexOf('.', 0) == -1)
		{
			alert(EnterRightEmail);
			document.formMaillingSideMenu.emailTXT.focus();
			return false;
		}
	}
}

function checkSideMenuManagerLoginWin(lanTXT)
{
	var userTXT		= document.formSiteManagerLogin.userTXT.value;
	var passTXT		= document.formSiteManagerLogin.passTXT.value;

	if (userTXT == "")
	{
		alert(EnterUserName);
		document.formSiteManagerLogin.userTXT.focus();
		return false;
	}
							   
	if (passTXT == "")
	{
		alert(EnterPassword);
		document.formSiteManagerLogin.passTXT.focus();
		return false;
	}

	document.getElementById("sendIDmanagerLogin").style.display = document.getElementById("sendIDmanagerLogin").style.display == "none" ? "" : "none";
							   
}

/*--------------- Spry Menu Bar ---------------*/

// SpryMenuBar.js - version 0.12 - Spry Pre-Release 1.6.1
//
// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/*******************************************************************************

 SpryMenuBar.js
 This file handles the JavaScript for Spry Menu Bar.  You should have no need
 to edit this file.  Some highlights of the MenuBar object is that timers are
 used to keep submenus from showing up until the user has hovered over the parent
 menu item for some time, as well as a timer for when they leave a submenu to keep
 showing that submenu until the timer fires.

 *******************************************************************************/

var Spry; if (!Spry) Spry = {}; if (!Spry.Widget) Spry.Widget = {};

Spry.BrowserSniff = function()
{
	var b = navigator.appName.toString();
	var up = navigator.platform.toString();
	var ua = navigator.userAgent.toString();

	this.mozilla = this.ie = this.opera = this.safari = false;
	var re_opera = /Opera.([0-9\.]*)/i;
	var re_msie = /MSIE.([0-9\.]*)/i;
	var re_gecko = /gecko/i;
	var re_safari = /(applewebkit|safari)\/([\d\.]*)/i;
	var r = false;

	if ( (r = ua.match(re_opera))) {
		this.opera = true;
		this.version = parseFloat(r[1]);
	} else if ( (r = ua.match(re_msie))) {
		this.ie = true;
		this.version = parseFloat(r[1]);
	} else if ( (r = ua.match(re_safari))) {
		this.safari = true;
		this.version = parseFloat(r[2]);
	} else if (ua.match(re_gecko)) {
		var re_gecko_version = /rv:\s*([0-9\.]+)/i;
		r = ua.match(re_gecko_version);
		this.mozilla = true;
		this.version = parseFloat(r[1]);
	}
	this.windows = this.mac = this.linux = false;

	this.Platform = ua.match(/windows/i) ? "windows" :
					(ua.match(/linux/i) ? "linux" :
					(ua.match(/mac/i) ? "mac" :
					ua.match(/unix/i)? "unix" : "unknown"));
	this[this.Platform] = true;
	this.v = this.version;

	if (this.safari && this.mac && this.mozilla) {
		this.mozilla = false;
	}
};

Spry.is = new Spry.BrowserSniff();

// Constructor for Menu Bar
// element should be an ID of an unordered list (<ul> tag)
// preloadImage1 and preloadImage2 are images for the rollover state of a menu
Spry.Widget.MenuBar = function(element, opts)
{
	this.init(element, opts);
};

Spry.Widget.MenuBar.prototype.init = function(element, opts)
{
	this.element = this.getElement(element);

	// represents the current (sub)menu we are operating on
	this.currMenu = null;
	this.showDelay = 250;
	this.hideDelay = 600;
	if(typeof document.getElementById == 'undefined' || (navigator.vendor == 'Apple Computer, Inc.' && typeof window.XMLHttpRequest == 'undefined') || (Spry.is.ie && Spry.is.version < 10 && typeof document.uniqueID == 'undefined'))
	{
		// bail on older unsupported browsers
		return;
	}

	// Fix IE6 CSS images flicker
	if (Spry.is.ie && Spry.is.version < 7){
		try {
			document.execCommand("BackgroundImageCache", false, true);
		} catch(err) {}
	}

	this.upKeyCode = Spry.Widget.MenuBar.KEY_UP;
	this.downKeyCode = Spry.Widget.MenuBar.KEY_DOWN;
	this.leftKeyCode = Spry.Widget.MenuBar.KEY_LEFT;
	this.rightKeyCode = Spry.Widget.MenuBar.KEY_RIGHT;
	this.escKeyCode = Spry.Widget.MenuBar.KEY_ESC;

	this.hoverClass = 'MenuBarItemHover';
	this.subHoverClass = 'MenuBarItemSubmenuHover';
	this.subVisibleClass ='MenuBarSubmenuVisible';
	this.hasSubClass = 'MenuBarItemSubmenu';
	this.activeClass = 'MenuBarActive';
	this.isieClass = 'MenuBarItemIE';
	this.verticalClass = 'MenuBarVertical';
	this.horizontalClass = 'MenuBarHorizontal';
	this.enableKeyboardNavigation = true;

	this.hasFocus = false;
	// load hover images now
	if(opts)
	{
		for(var k in opts)
		{
			if (typeof this[k] == 'undefined')
			{
				var rollover = new Image;
				rollover.src = opts[k];
			}
		}
		Spry.Widget.MenuBar.setOptions(this, opts);
	}

	// safari doesn't support tabindex
	if (Spry.is.safari)
		this.enableKeyboardNavigation = false;

	if(this.element)
	{
		this.currMenu = this.element;
		var items = this.element.getElementsByTagName('li');
		for(var i=0; i<items.length; i++)
		{
			if (i > 0 && this.enableKeyboardNavigation)
				items[i].getElementsByTagName('a')[0].tabIndex='-1';

			this.initialize(items[i], element);
			if(Spry.is.ie && Spry.is.version < 10)
			{
				if(Spry.is.version < 8) {
					this.addClassName(items[i], this.isieClass);
				}
				items[i].style.position = "static";
			}
		}
		if (this.enableKeyboardNavigation)
		{
			var self = this;
			this.addEventListener(document, 'keydown', function(e){self.keyDown(e); }, false);
		}

		if(Spry.is.ie && Spry.is.version < 10)
		{
			if(this.hasClassName(this.element, this.verticalClass))
			{
				this.element.style.position = "relative";
			}
			var linkitems = this.element.getElementsByTagName('a');
			for(var i=0; i<linkitems.length; i++)
			{
				linkitems[i].style.position = "relative";
			}
		}
	}
};
Spry.Widget.MenuBar.KEY_ESC = 27;
Spry.Widget.MenuBar.KEY_UP = 38;
Spry.Widget.MenuBar.KEY_DOWN = 40;
Spry.Widget.MenuBar.KEY_LEFT = 37;
Spry.Widget.MenuBar.KEY_RIGHT = 39;

Spry.Widget.MenuBar.prototype.getElement = function(ele)
{
	if (ele && typeof ele == "string")
		return document.getElementById(ele);
	return ele;
};

Spry.Widget.MenuBar.prototype.hasClassName = function(ele, className)
{
	if (!ele || !className || !ele.className || ele.className.search(new RegExp("\\b" + className + "\\b")) == -1)
	{
		return false;
	}
	return true;
};

Spry.Widget.MenuBar.prototype.addClassName = function(ele, className)
{
	if (!ele || !className || this.hasClassName(ele, className))
		return;
	ele.className += (ele.className ? " " : "") + className;
};

Spry.Widget.MenuBar.prototype.removeClassName = function(ele, className)
{
	if (!ele || !className || !this.hasClassName(ele, className))
		return;
	ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

// addEventListener for Menu Bar
// attach an event to a tag without creating obtrusive HTML code
Spry.Widget.MenuBar.prototype.addEventListener = function(element, eventType, handler, capture)
{
	try
	{
		if (element.addEventListener)
		{
			element.addEventListener(eventType, handler, capture);
		}
		else if (element.attachEvent)
		{
			element.attachEvent('on' + eventType, handler);
		}
	}
	catch (e) {}
};

// createIframeLayer for Menu Bar
// creates an IFRAME underneath a menu so that it will show above form controls and ActiveX
Spry.Widget.MenuBar.prototype.createIframeLayer = function(menu)
{
	var layer = document.createElement('iframe');
	layer.tabIndex = '-1';
	layer.src = 'javascript:""';
	layer.frameBorder = '0';
	layer.scrolling = 'no';
	menu.parentNode.appendChild(layer);
	
	layer.style.left = menu.offsetLeft + 'px';
	layer.style.top = menu.offsetTop + 'px';
	layer.style.width = menu.offsetWidth + 'px';
	layer.style.height = menu.offsetHeight + 'px';
};

// removeIframeLayer for Menu Bar
// removes an IFRAME underneath a menu to reveal any form controls and ActiveX
Spry.Widget.MenuBar.prototype.removeIframeLayer =  function(menu)
{
	var layers = ((menu == this.element) ? menu : menu.parentNode).getElementsByTagName('iframe');
	while(layers.length > 0)
	{
		layers[0].parentNode.removeChild(layers[0]);
	}
};

// clearMenus for Menu Bar
// root is the top level unordered list (<ul> tag)
Spry.Widget.MenuBar.prototype.clearMenus = function(root)
{
	var menus = root.getElementsByTagName('ul');
	for(var i=0; i<menus.length; i++)
		this.hideSubmenu(menus[i]);

	this.removeClassName(this.element, this.activeClass);
};

// bubbledTextEvent for Menu Bar
// identify bubbled up text events in Safari so we can ignore them
Spry.Widget.MenuBar.prototype.bubbledTextEvent = function()
{
	return Spry.is.safari  && event.relatedTarget && (event.target == event.relatedTarget.parentNode || (event.eventPhase == 3 && event.target.parentNode == event.relatedTarget));
};

// showSubmenu for Menu Bar
// set the proper CSS class on this menu to show it
Spry.Widget.MenuBar.prototype.showSubmenu = function(menu)
{
	if(this.currMenu)
	{
		this.clearMenus(this.currMenu);
		this.currMenu = null;
	}
	
	if(menu)
	{
		this.addClassName(menu, this.subVisibleClass);
		if(typeof document.all != 'undefined' && !(Spry.is.ie && Spry.is.version >= 10) && !Spry.is.opera && navigator.vendor != 'KDE')
		{
			if(!this.hasClassName(this.element, this.horizontalClass) || menu.parentNode.parentNode != this.element)
			{
				menu.style.top = menu.parentNode.offsetTop + 'px';
			}
		}
		if(Spry.is.ie && Spry.is.version < 7)
		{
			this.createIframeLayer(menu);
		}
	}
	this.addClassName(this.element, this.activeClass);
};

// hideSubmenu for Menu Bar
// remove the proper CSS class on this menu to hide it
Spry.Widget.MenuBar.prototype.hideSubmenu = function(menu)
{
	if(menu)
	{
		this.removeClassName(menu, this.subVisibleClass);
		if(typeof document.all != 'undefined' && !(Spry.is.ie && Spry.is.version >= 10) && !Spry.is.opera && navigator.vendor != 'KDE')
		{
			menu.style.top = '';
			menu.style.left = '';
		}
		if(Spry.is.ie && Spry.is.version < 7)
			this.removeIframeLayer(menu);
	}
};

// initialize for Menu Bar
// create event listeners for the Menu Bar widget so we can properly
// show and hide submenus
Spry.Widget.MenuBar.prototype.initialize = function(listitem, element)
{
	var opentime, closetime;
	var link = listitem.getElementsByTagName('a')[0];
	var submenus = listitem.getElementsByTagName('ul');
	var menu = (submenus.length > 0 ? submenus[0] : null);

	if(menu)
		this.addClassName(link, this.hasSubClass);

	if(!(Spry.is.ie && Spry.is.version < 10))
	{
		// define a simple function that comes standard in IE to determine
		// if a node is within another node
		listitem.contains = function(testNode)
		{
			// this refers to the list item
			if(testNode == null)
				return false;

			if(testNode == this)
				return true;
			else
				return this.contains(testNode.parentNode);
		};
	}

	// need to save this for scope further down
	var self = this;
	this.addEventListener(listitem, 'mouseover', function(e){self.mouseOver(listitem, e);}, false);
	this.addEventListener(listitem, 'mouseout', function(e){if (self.enableKeyboardNavigation) self.clearSelection(); self.mouseOut(listitem, e);}, false);

	if (this.enableKeyboardNavigation)
	{
		this.addEventListener(link, 'blur', function(e){self.onBlur(listitem);}, false);
		this.addEventListener(link, 'focus', function(e){self.keyFocus(listitem, e);}, false);
	}
};
Spry.Widget.MenuBar.prototype.keyFocus = function (listitem, e)
{
	this.lastOpen = listitem.getElementsByTagName('a')[0];
	this.addClassName(this.lastOpen, listitem.getElementsByTagName('ul').length > 0 ? this.subHoverClass : this.hoverClass);
	this.hasFocus = true;
};
Spry.Widget.MenuBar.prototype.onBlur = function (listitem)
{
	this.clearSelection(listitem);
};
Spry.Widget.MenuBar.prototype.clearSelection = function(el){
	//search any intersection with the current open element
	if (!this.lastOpen)
		return;

	if (el)
	{
		el = el.getElementsByTagName('a')[0];
		
		// check children
		var item = this.lastOpen;
		while (item != this.element)
		{
			var tmp = el;
			while (tmp != this.element)
			{
				if (tmp == item)
					return;
				try{
					tmp = tmp.parentNode;
				}catch(err){break;}
			}
			item = item.parentNode;
		}
	}
	var item = this.lastOpen;
	while (item != this.element)
	{
		this.hideSubmenu(item.parentNode);
		var link = item.getElementsByTagName('a')[0];
		this.removeClassName(link, this.hoverClass);
		this.removeClassName(link, this.subHoverClass);
		item = item.parentNode;
	}
	this.lastOpen = false;
};
Spry.Widget.MenuBar.prototype.keyDown = function (e)
{
	if (!this.hasFocus)
		return;

	if (!this.lastOpen)
	{
		this.hasFocus = false;
		return;
	}

	var e = e|| event;
	var listitem = this.lastOpen.parentNode;
	var link = this.lastOpen;
	var submenus = listitem.getElementsByTagName('ul');
	var menu = (submenus.length > 0 ? submenus[0] : null);
	var hasSubMenu = (menu) ? true : false;

	var opts = [listitem, menu, null, this.getSibling(listitem, 'previousSibling'), this.getSibling(listitem, 'nextSibling')];
	
	if (!opts[3])
		opts[2] = (listitem.parentNode.parentNode.nodeName.toLowerCase() == 'li')?listitem.parentNode.parentNode:null;

	var found = 0;
	switch (e.keyCode){
		case this.upKeyCode:
			found = this.getElementForKey(opts, 'y', 1);
			break;
		case this.downKeyCode:
			found = this.getElementForKey(opts, 'y', -1);
			break;
		case this.leftKeyCode:
			found = this.getElementForKey(opts, 'x', 1);
			break;
		case this.rightKeyCode:
			found = this.getElementForKey(opts, 'x', -1);
			break;
		case this.escKeyCode:
		case 9:
			this.clearSelection();
			this.hasFocus = false;
		default: return;
	}
	switch (found)
	{
		case 0: return;
		case 1:
			//subopts
			this.mouseOver(listitem, e);
			break;
		case 2:
			//parent
			this.mouseOut(opts[2], e);
			break;
		case 3:
		case 4:
			// left - right
			this.removeClassName(link, hasSubMenu ? this.subHoverClass : this.hoverClass);
			break;
	}
	var link = opts[found].getElementsByTagName('a')[0];
	if (opts[found].nodeName.toLowerCase() == 'ul')
		opts[found] = opts[found].getElementsByTagName('li')[0];

	this.addClassName(link, opts[found].getElementsByTagName('ul').length > 0 ? this.subHoverClass : this.hoverClass);
	this.lastOpen = link;
	opts[found].getElementsByTagName('a')[0].focus();
  
        //stop further event handling by the browser
	return Spry.Widget.MenuBar.stopPropagation(e);
};
Spry.Widget.MenuBar.prototype.mouseOver = function (listitem, e)
{
	var link = listitem.getElementsByTagName('a')[0];
	var submenus = listitem.getElementsByTagName('ul');
	var menu = (submenus.length > 0 ? submenus[0] : null);
	var hasSubMenu = (menu) ? true : false;
	if (this.enableKeyboardNavigation)
		this.clearSelection(listitem);

	if(this.bubbledTextEvent())
	{
		// ignore bubbled text events
		return;
	}

	if (listitem.closetime)
		clearTimeout(listitem.closetime);

	if(this.currMenu == listitem)
	{
		this.currMenu = null;
	}

	// move the focus too
	if (this.hasFocus)
		link.focus();

	// show menu highlighting
	this.addClassName(link, hasSubMenu ? this.subHoverClass : this.hoverClass);
	this.lastOpen = link;
	if(menu && !this.hasClassName(menu, this.subHoverClass))
	{
		var self = this;
		listitem.opentime = window.setTimeout(function(){self.showSubmenu(menu);}, this.showDelay);
	}
};
Spry.Widget.MenuBar.prototype.mouseOut = function (listitem, e)
{
	var link = listitem.getElementsByTagName('a')[0];
	var submenus = listitem.getElementsByTagName('ul');
	var menu = (submenus.length > 0 ? submenus[0] : null);
	var hasSubMenu = (menu) ? true : false;
	if(this.bubbledTextEvent())
	{
		// ignore bubbled text events
		return;
	}

	var related = (typeof e.relatedTarget != 'undefined' ? e.relatedTarget : e.toElement);
	if(!listitem.contains(related))
	{
		if (listitem.opentime) 
			clearTimeout(listitem.opentime);
		this.currMenu = listitem;

		// remove menu highlighting
		this.removeClassName(link, hasSubMenu ? this.subHoverClass : this.hoverClass);
		if(menu)
		{
			var self = this;
			listitem.closetime = window.setTimeout(function(){self.hideSubmenu(menu);}, this.hideDelay);
		}
		if (this.hasFocus)
			link.blur();
	}
};
Spry.Widget.MenuBar.prototype.getSibling = function(element, sibling)
{
	var child = element[sibling];
	while (child && child.nodeName.toLowerCase() !='li')
		child = child[sibling];

	return child;
};
Spry.Widget.MenuBar.prototype.getElementForKey = function(els, prop, dir)
{
	var found = 0;
	var rect = Spry.Widget.MenuBar.getPosition;
	var ref = rect(els[found]);

	var hideSubmenu = false;
	//make the subelement visible to compute the position
	if (els[1] && !this.hasClassName(els[1], this.MenuBarSubmenuVisible))
	{
		els[1].style.visibility = 'hidden';
		this.showSubmenu(els[1]);
		hideSubmenu = true;
	}

	var isVert = this.hasClassName(this.element, this.verticalClass);
	var hasParent = els[0].parentNode.parentNode.nodeName.toLowerCase() == 'li' ? true : false;
	
	for (var i = 1; i < els.length; i++){
		//when navigating on the y axis in vertical menus, ignore children and parents
		if(prop=='y' && isVert && (i==1 || i==2))
		{
			continue;
		}
		//when navigationg on the x axis in the FIRST LEVEL of horizontal menus, ignore children and parents
		if(prop=='x' && !isVert && !hasParent && (i==1 || i==2))
		{
			continue;
		}
			
		if (els[i])
		{
			var tmp = rect(els[i]); 
			if ( (dir * tmp[prop]) < (dir * ref[prop]))
			{
				ref = tmp;
				found = i;
			}
		}
	}
	
	// hide back the submenu
	if (els[1] && hideSubmenu){
		this.hideSubmenu(els[1]);
		els[1].style.visibility =  '';
	}

	return found;
};
Spry.Widget.MenuBar.camelize = function(str)
{
	if (str.indexOf('-') == -1){
		return str;	
	}
	var oStringList = str.split('-');
	var isFirstEntry = true;
	var camelizedString = '';

	for(var i=0; i < oStringList.length; i++)
	{
		if(oStringList[i].length>0)
		{
			if(isFirstEntry)
			{
				camelizedString = oStringList[i];
				isFirstEntry = false;
			}
			else
			{
				var s = oStringList[i];
				camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
			}
		}
	}

	return camelizedString;
};

Spry.Widget.MenuBar.getStyleProp = function(element, prop)
{
	var value;
	try
	{
		if (element.style)
			value = element.style[Spry.Widget.MenuBar.camelize(prop)];

		if (!value)
			if (document.defaultView && document.defaultView.getComputedStyle)
			{
				var css = document.defaultView.getComputedStyle(element, null);
				value = css ? css.getPropertyValue(prop) : null;
			}
			else if (element.currentStyle) 
			{
					value = element.currentStyle[Spry.Widget.MenuBar.camelize(prop)];
			}
	}
	catch (e) {}

	return value == 'auto' ? null : value;
};
Spry.Widget.MenuBar.getIntProp = function(element, prop)
{
	var a = parseInt(Spry.Widget.MenuBar.getStyleProp(element, prop),10);
	if (isNaN(a))
		return 0;
	return a;
};

Spry.Widget.MenuBar.getPosition = function(el, doc)
{
	doc = doc || document;
	if (typeof(el) == 'string') {
		el = doc.getElementById(el);
	}

	if (!el) {
		return false;
	}

	if (el.parentNode === null || Spry.Widget.MenuBar.getStyleProp(el, 'display') == 'none') {
		//element must be visible to have a box
		return false;
	}

	var ret = {x:0, y:0};
	var parent = null;
	var box;

	if (el.getBoundingClientRect) { // IE
		box = el.getBoundingClientRect();
		var scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
		var scrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft;
		ret.x = box.left + scrollLeft;
		ret.y = box.top + scrollTop;
	} else if (doc.getBoxObjectFor) { // gecko
		box = doc.getBoxObjectFor(el);
		ret.x = box.x;
		ret.y = box.y;
	} else { // safari/opera
		ret.x = el.offsetLeft;
		ret.y = el.offsetTop;
		parent = el.offsetParent;
		if (parent != el) {
			while (parent) {
				ret.x += parent.offsetLeft;
				ret.y += parent.offsetTop;
				parent = parent.offsetParent;
			}
		}
		// opera & (safari absolute) incorrectly account for body offsetTop
		if (Spry.is.opera || Spry.is.safari && Spry.Widget.MenuBar.getStyleProp(el, 'position') == 'absolute')
			ret.y -= doc.body.offsetTop;
	}
	if (el.parentNode)
			parent = el.parentNode;
	else
		parent = null;
	if (parent.nodeName){
		var cas = parent.nodeName.toUpperCase();
		while (parent && cas != 'BODY' && cas != 'HTML') {
			cas = parent.nodeName.toUpperCase();
			ret.x -= parent.scrollLeft;
			ret.y -= parent.scrollTop;
			if (parent.parentNode)
				parent = parent.parentNode;
			else
				parent = null;
		}
	}
	return ret;
};

Spry.Widget.MenuBar.stopPropagation = function(ev)
{
	if (ev.stopPropagation)
		ev.stopPropagation();
	else
		ev.cancelBubble = true;
	if (ev.preventDefault) 
		ev.preventDefault();
	else 
		ev.returnValue = false;
};

Spry.Widget.MenuBar.setOptions = function(obj, optionsObj, ignoreUndefinedProps)
{
	if (!optionsObj)
		return;
	for (var optionName in optionsObj)
	{
		if (ignoreUndefinedProps && optionsObj[optionName] == undefined)
			continue;
		obj[optionName] = optionsObj[optionName];
	}
};

/*--------------- Spry Menu Bar ---------------*/


/*------------------ Yahoo Connections ------------------*/

/*
Copyright (c) 2008, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 2.6.0
*/
if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={};}YAHOO.namespace=function(){var A=arguments,E=null,C,B,D;for(C=0;C<A.length;C=C+1){D=A[C].split(".");E=YAHOO;for(B=(D[0]=="YAHOO")?1:0;B<D.length;B=B+1){E[D[B]]=E[D[B]]||{};E=E[D[B]];}}return E;};YAHOO.log=function(D,A,C){var B=YAHOO.widget.Logger;if(B&&B.log){return B.log(D,A,C);}else{return false;}};YAHOO.register=function(A,E,D){var I=YAHOO.env.modules;if(!I[A]){I[A]={versions:[],builds:[]};}var B=I[A],H=D.version,G=D.build,F=YAHOO.env.listeners;B.name=A;B.version=H;B.build=G;B.versions.push(H);B.builds.push(G);B.mainClass=E;for(var C=0;C<F.length;C=C+1){F[C](B);}if(E){E.VERSION=H;E.BUILD=G;}else{YAHOO.log("mainClass is undefined for module "+A,"warn");}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(A){return YAHOO.env.modules[A]||null;};YAHOO.env.ua=function(){var C={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0};var B=navigator.userAgent,A;if((/KHTML/).test(B)){C.webkit=1;}A=B.match(/AppleWebKit\/([^\s]*)/);if(A&&A[1]){C.webkit=parseFloat(A[1]);if(/ Mobile\//.test(B)){C.mobile="Apple";}else{A=B.match(/NokiaN[^\/]*/);if(A){C.mobile=A[0];}}A=B.match(/AdobeAIR\/([^\s]*)/);if(A){C.air=A[0];}}if(!C.webkit){A=B.match(/Opera[\s\/]([^\s]*)/);if(A&&A[1]){C.opera=parseFloat(A[1]);A=B.match(/Opera Mini[^;]*/);if(A){C.mobile=A[0];}}else{A=B.match(/MSIE\s([^;]*)/);if(A&&A[1]){C.ie=parseFloat(A[1]);}else{A=B.match(/Gecko\/([^\s]*)/);if(A){C.gecko=1;A=B.match(/rv:([^\s\)]*)/);if(A&&A[1]){C.gecko=parseFloat(A[1]);}}}}}return C;}();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var B=YAHOO_config.listener,A=YAHOO.env.listeners,D=true,C;if(B){for(C=0;C<A.length;C=C+1){if(A[C]==B){D=false;break;}}if(D){A.push(B);}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var A=YAHOO.lang,C=["toString","valueOf"],B={isArray:function(D){if(D){return A.isNumber(D.length)&&A.isFunction(D.splice);}return false;},isBoolean:function(D){return typeof D==="boolean";},isFunction:function(D){return typeof D==="function";},isNull:function(D){return D===null;},isNumber:function(D){return typeof D==="number"&&isFinite(D);},isObject:function(D){return(D&&(typeof D==="object"||A.isFunction(D)))||false;},isString:function(D){return typeof D==="string";},isUndefined:function(D){return typeof D==="undefined";},_IEEnumFix:(YAHOO.env.ua.ie)?function(F,E){for(var D=0;D<C.length;D=D+1){var H=C[D],G=E[H];if(A.isFunction(G)&&G!=Object.prototype[H]){F[H]=G;}}}:function(){},extend:function(H,I,G){if(!I||!H){throw new Error("extend failed, please check that "+"all dependencies are included.");}var E=function(){};E.prototype=I.prototype;H.prototype=new E();H.prototype.constructor=H;H.superclass=I.prototype;if(I.prototype.constructor==Object.prototype.constructor){I.prototype.constructor=I;}if(G){for(var D in G){if(A.hasOwnProperty(G,D)){H.prototype[D]=G[D];}}A._IEEnumFix(H.prototype,G);}},augmentObject:function(H,G){if(!G||!H){throw new Error("Absorb failed, verify dependencies.");}var D=arguments,F,I,E=D[2];if(E&&E!==true){for(F=2;F<D.length;F=F+1){H[D[F]]=G[D[F]];}}else{for(I in G){if(E||!(I in H)){H[I]=G[I];}}A._IEEnumFix(H,G);}},augmentProto:function(G,F){if(!F||!G){throw new Error("Augment failed, verify dependencies.");}var D=[G.prototype,F.prototype];for(var E=2;E<arguments.length;E=E+1){D.push(arguments[E]);}A.augmentObject.apply(this,D);},dump:function(D,I){var F,H,K=[],L="{...}",E="f(){...}",J=", ",G=" => ";if(!A.isObject(D)){return D+"";}else{if(D instanceof Date||("nodeType" in D&&"tagName" in D)){return D;}else{if(A.isFunction(D)){return E;}}}I=(A.isNumber(I))?I:3;if(A.isArray(D)){K.push("[");for(F=0,H=D.length;F<H;F=F+1){if(A.isObject(D[F])){K.push((I>0)?A.dump(D[F],I-1):L);}else{K.push(D[F]);}K.push(J);}if(K.length>1){K.pop();}K.push("]");}else{K.push("{");for(F in D){if(A.hasOwnProperty(D,F)){K.push(F+G);if(A.isObject(D[F])){K.push((I>0)?A.dump(D[F],I-1):L);}else{K.push(D[F]);}K.push(J);}}if(K.length>1){K.pop();}K.push("}");}return K.join("");},substitute:function(S,E,L){var I,H,G,O,P,R,N=[],F,J="dump",M=" ",D="{",Q="}";for(;;){I=S.lastIndexOf(D);if(I<0){break;}H=S.indexOf(Q,I);if(I+1>=H){break;}F=S.substring(I+1,H);O=F;R=null;G=O.indexOf(M);if(G>-1){R=O.substring(G+1);O=O.substring(0,G);}P=E[O];if(L){P=L(O,P,R);}if(A.isObject(P)){if(A.isArray(P)){P=A.dump(P,parseInt(R,10));}else{R=R||"";var K=R.indexOf(J);if(K>-1){R=R.substring(4);}if(P.toString===Object.prototype.toString||K>-1){P=A.dump(P,parseInt(R,10));}else{P=P.toString();}}}else{if(!A.isString(P)&&!A.isNumber(P)){P="~-"+N.length+"-~";N[N.length]=F;}}S=S.substring(0,I)+P+S.substring(H+1);}for(I=N.length-1;I>=0;I=I-1){S=S.replace(new RegExp("~-"+I+"-~"),"{"+N[I]+"}","g");}return S;},trim:function(D){try{return D.replace(/^\s+|\s+$/g,"");}catch(E){return D;}},merge:function(){var G={},E=arguments;for(var F=0,D=E.length;F<D;F=F+1){A.augmentObject(G,E[F],true);}return G;},later:function(K,E,L,G,H){K=K||0;E=E||{};var F=L,J=G,I,D;if(A.isString(L)){F=E[L];}if(!F){throw new TypeError("method undefined");}if(!A.isArray(J)){J=[G];}I=function(){F.apply(E,J);};D=(H)?setInterval(I,K):setTimeout(I,K);return{interval:H,cancel:function(){if(this.interval){clearInterval(D);}else{clearTimeout(D);}}};},isValue:function(D){return(A.isObject(D)||A.isString(D)||A.isNumber(D)||A.isBoolean(D));}};A.hasOwnProperty=(Object.prototype.hasOwnProperty)?function(D,E){return D&&D.hasOwnProperty(E);}:function(D,E){return !A.isUndefined(D[E])&&D.constructor.prototype[E]!==D[E];};B.augmentObject(A,B,true);YAHOO.util.Lang=A;A.augment=A.augmentProto;YAHOO.augment=A.augmentProto;YAHOO.extend=A.extend;})();YAHOO.register("yahoo",YAHOO,{version:"2.6.0",build:"1321"});

/*
Copyright (c) 2008, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 2.6.0
*/
YAHOO.util.CustomEvent=function(D,B,C,A){this.type=D;this.scope=B||window;this.silent=C;this.signature=A||YAHOO.util.CustomEvent.LIST;this.subscribers=[];if(!this.silent){}var E="_YUICEOnSubscribe";if(D!==E){this.subscribeEvent=new YAHOO.util.CustomEvent(E,this,true);}this.lastError=null;};YAHOO.util.CustomEvent.LIST=0;YAHOO.util.CustomEvent.FLAT=1;YAHOO.util.CustomEvent.prototype={subscribe:function(B,C,A){if(!B){throw new Error("Invalid callback for subscriber to '"+this.type+"'");}if(this.subscribeEvent){this.subscribeEvent.fire(B,C,A);}this.subscribers.push(new YAHOO.util.Subscriber(B,C,A));},unsubscribe:function(D,F){if(!D){return this.unsubscribeAll();}var E=false;for(var B=0,A=this.subscribers.length;B<A;++B){var C=this.subscribers[B];if(C&&C.contains(D,F)){this._delete(B);E=true;}}return E;},fire:function(){this.lastError=null;var K=[],E=this.subscribers.length;if(!E&&this.silent){return true;}var I=[].slice.call(arguments,0),G=true,D,J=false;if(!this.silent){}var C=this.subscribers.slice(),A=YAHOO.util.Event.throwErrors;for(D=0;D<E;++D){var M=C[D];if(!M){J=true;}else{if(!this.silent){}var L=M.getScope(this.scope);if(this.signature==YAHOO.util.CustomEvent.FLAT){var B=null;if(I.length>0){B=I[0];}try{G=M.fn.call(L,B,M.obj);}catch(F){this.lastError=F;if(A){throw F;}}}else{try{G=M.fn.call(L,this.type,I,M.obj);}catch(H){this.lastError=H;if(A){throw H;}}}if(false===G){if(!this.silent){}break;}}}return(G!==false);},unsubscribeAll:function(){for(var A=this.subscribers.length-1;A>-1;A--){this._delete(A);}this.subscribers=[];return A;},_delete:function(A){var B=this.subscribers[A];if(B){delete B.fn;delete B.obj;}this.subscribers.splice(A,1);},toString:function(){return"CustomEvent: "+"'"+this.type+"', "+"scope: "+this.scope;}};YAHOO.util.Subscriber=function(B,C,A){this.fn=B;this.obj=YAHOO.lang.isUndefined(C)?null:C;this.override=A;};YAHOO.util.Subscriber.prototype.getScope=function(A){if(this.override){if(this.override===true){return this.obj;}else{return this.override;}}return A;};YAHOO.util.Subscriber.prototype.contains=function(A,B){if(B){return(this.fn==A&&this.obj==B);}else{return(this.fn==A);}};YAHOO.util.Subscriber.prototype.toString=function(){return"Subscriber { obj: "+this.obj+", override: "+(this.override||"no")+" }";};if(!YAHOO.util.Event){YAHOO.util.Event=function(){var H=false;var I=[];var J=[];var G=[];var E=[];var C=0;var F=[];var B=[];var A=0;var D={63232:38,63233:40,63234:37,63235:39,63276:33,63277:34,25:9};var K=YAHOO.env.ua.ie?"focusin":"focus";var L=YAHOO.env.ua.ie?"focusout":"blur";return{POLL_RETRYS:2000,POLL_INTERVAL:20,EL:0,TYPE:1,FN:2,WFN:3,UNLOAD_OBJ:3,ADJ_SCOPE:4,OBJ:5,OVERRIDE:6,CAPTURE:7,lastError:null,isSafari:YAHOO.env.ua.webkit,webkit:YAHOO.env.ua.webkit,isIE:YAHOO.env.ua.ie,_interval:null,_dri:null,DOMReady:false,throwErrors:false,startInterval:function(){if(!this._interval){var M=this;var N=function(){M._tryPreloadAttach();};this._interval=setInterval(N,this.POLL_INTERVAL);}},onAvailable:function(R,O,S,Q,P){var M=(YAHOO.lang.isString(R))?[R]:R;for(var N=0;N<M.length;N=N+1){F.push({id:M[N],fn:O,obj:S,override:Q,checkReady:P});}C=this.POLL_RETRYS;this.startInterval();},onContentReady:function(O,M,P,N){this.onAvailable(O,M,P,N,true);},onDOMReady:function(M,O,N){if(this.DOMReady){setTimeout(function(){var P=window;if(N){if(N===true){P=O;}else{P=N;}}M.call(P,"DOMReady",[],O);},0);}else{this.DOMReadyEvent.subscribe(M,O,N);}},_addListener:function(O,M,X,S,N,a){if(!X||!X.call){return false;}if(this._isValidCollection(O)){var Y=true;for(var T=0,V=O.length;T<V;++T){Y=this._addListener(O[T],M,X,S,N,a)&&Y;}return Y;}else{if(YAHOO.lang.isString(O)){var R=this.getEl(O);if(R){O=R;}else{this.onAvailable(O,function(){YAHOO.util.Event._addListener(O,M,X,S,N,a);});return true;}}}if(!O){return false;}if("unload"==M&&S!==this){J[J.length]=[O,M,X,S,N,a];return true;}var b=O;if(N){if(N===true){b=S;}else{b=N;}}var P=function(c){return X.call(b,YAHOO.util.Event.getEvent(c,O),S);};var Z=[O,M,X,P,b,S,N,a];var U=I.length;I[U]=Z;if(this.useLegacyEvent(O,M)){var Q=this.getLegacyIndex(O,M);if(Q==-1||O!=G[Q][0]){Q=G.length;B[O.id+M]=Q;G[Q]=[O,M,O["on"+M]];E[Q]=[];O["on"+M]=function(c){YAHOO.util.Event.fireLegacyEvent(YAHOO.util.Event.getEvent(c),Q);};}E[Q].push(Z);}else{try{this._simpleAdd(O,M,P,a);}catch(W){this.lastError=W;this._removeListener(O,M,X,a);return false;}}return true;},addListener:function(O,Q,N,P,M){return this._addListener(O,Q,N,P,M,false);},addFocusListener:function(O,N,P,M){return this._addListener(O,K,N,P,M,true);},removeFocusListener:function(N,M){return this._removeListener(N,K,M,true);},addBlurListener:function(O,N,P,M){return this._addListener(O,L,N,P,M,true);},removeBlurListener:function(N,M){return this._removeListener(N,L,M,true);},fireLegacyEvent:function(Q,O){var S=true,M,U,T,V,R;U=E[O].slice();for(var N=0,P=U.length;N<P;++N){T=U[N];if(T&&T[this.WFN]){V=T[this.ADJ_SCOPE];R=T[this.WFN].call(V,Q);S=(S&&R);}}M=G[O];if(M&&M[2]){M[2](Q);}return S;},getLegacyIndex:function(N,O){var M=this.generateId(N)+O;if(typeof B[M]=="undefined"){return -1;}else{return B[M];}},useLegacyEvent:function(M,N){return(this.webkit&&this.webkit<419&&("click"==N||"dblclick"==N));},_removeListener:function(N,M,V,Y){var Q,T,X;if(typeof N=="string"){N=this.getEl(N);}else{if(this._isValidCollection(N)){var W=true;for(Q=N.length-1;Q>-1;Q--){W=(this._removeListener(N[Q],M,V,Y)&&W);}return W;}}if(!V||!V.call){return this.purgeElement(N,false,M);}if("unload"==M){for(Q=J.length-1;Q>-1;Q--){X=J[Q];if(X&&X[0]==N&&X[1]==M&&X[2]==V){J.splice(Q,1);return true;}}return false;}var R=null;var S=arguments[4];if("undefined"===typeof S){S=this._getCacheIndex(N,M,V);}if(S>=0){R=I[S];}if(!N||!R){return false;}if(this.useLegacyEvent(N,M)){var P=this.getLegacyIndex(N,M);var O=E[P];if(O){for(Q=0,T=O.length;Q<T;++Q){X=O[Q];if(X&&X[this.EL]==N&&X[this.TYPE]==M&&X[this.FN]==V){O.splice(Q,1);break;}}}}else{try{this._simpleRemove(N,M,R[this.WFN],Y);}catch(U){this.lastError=U;return false;}}delete I[S][this.WFN];delete I[S][this.FN];
I.splice(S,1);return true;},removeListener:function(N,O,M){return this._removeListener(N,O,M,false);},getTarget:function(O,N){var M=O.target||O.srcElement;return this.resolveTextNode(M);},resolveTextNode:function(N){try{if(N&&3==N.nodeType){return N.parentNode;}}catch(M){}return N;},getPageX:function(N){var M=N.pageX;if(!M&&0!==M){M=N.clientX||0;if(this.isIE){M+=this._getScrollLeft();}}return M;},getPageY:function(M){var N=M.pageY;if(!N&&0!==N){N=M.clientY||0;if(this.isIE){N+=this._getScrollTop();}}return N;},getXY:function(M){return[this.getPageX(M),this.getPageY(M)];},getRelatedTarget:function(N){var M=N.relatedTarget;if(!M){if(N.type=="mouseout"){M=N.toElement;}else{if(N.type=="mouseover"){M=N.fromElement;}}}return this.resolveTextNode(M);},getTime:function(O){if(!O.time){var N=new Date().getTime();try{O.time=N;}catch(M){this.lastError=M;return N;}}return O.time;},stopEvent:function(M){this.stopPropagation(M);this.preventDefault(M);},stopPropagation:function(M){if(M.stopPropagation){M.stopPropagation();}else{M.cancelBubble=true;}},preventDefault:function(M){if(M.preventDefault){M.preventDefault();}else{M.returnValue=false;}},getEvent:function(O,M){var N=O||window.event;if(!N){var P=this.getEvent.caller;while(P){N=P.arguments[0];if(N&&Event==N.constructor){break;}P=P.caller;}}return N;},getCharCode:function(N){var M=N.keyCode||N.charCode||0;if(YAHOO.env.ua.webkit&&(M in D)){M=D[M];}return M;},_getCacheIndex:function(Q,R,P){for(var O=0,N=I.length;O<N;O=O+1){var M=I[O];if(M&&M[this.FN]==P&&M[this.EL]==Q&&M[this.TYPE]==R){return O;}}return -1;},generateId:function(M){var N=M.id;if(!N){N="yuievtautoid-"+A;++A;M.id=N;}return N;},_isValidCollection:function(N){try{return(N&&typeof N!=="string"&&N.length&&!N.tagName&&!N.alert&&typeof N[0]!=="undefined");}catch(M){return false;}},elCache:{},getEl:function(M){return(typeof M==="string")?document.getElementById(M):M;},clearCache:function(){},DOMReadyEvent:new YAHOO.util.CustomEvent("DOMReady",this),_load:function(N){if(!H){H=true;var M=YAHOO.util.Event;M._ready();M._tryPreloadAttach();}},_ready:function(N){var M=YAHOO.util.Event;if(!M.DOMReady){M.DOMReady=true;M.DOMReadyEvent.fire();M._simpleRemove(document,"DOMContentLoaded",M._ready);}},_tryPreloadAttach:function(){if(F.length===0){C=0;clearInterval(this._interval);this._interval=null;return ;}if(this.locked){return ;}if(this.isIE){if(!this.DOMReady){this.startInterval();return ;}}this.locked=true;var S=!H;if(!S){S=(C>0&&F.length>0);}var R=[];var T=function(V,W){var U=V;if(W.override){if(W.override===true){U=W.obj;}else{U=W.override;}}W.fn.call(U,W.obj);};var N,M,Q,P,O=[];for(N=0,M=F.length;N<M;N=N+1){Q=F[N];if(Q){P=this.getEl(Q.id);if(P){if(Q.checkReady){if(H||P.nextSibling||!S){O.push(Q);F[N]=null;}}else{T(P,Q);F[N]=null;}}else{R.push(Q);}}}for(N=0,M=O.length;N<M;N=N+1){Q=O[N];T(this.getEl(Q.id),Q);}C--;if(S){for(N=F.length-1;N>-1;N--){Q=F[N];if(!Q||!Q.id){F.splice(N,1);}}this.startInterval();}else{clearInterval(this._interval);this._interval=null;}this.locked=false;},purgeElement:function(Q,R,T){var O=(YAHOO.lang.isString(Q))?this.getEl(Q):Q;var S=this.getListeners(O,T),P,M;if(S){for(P=S.length-1;P>-1;P--){var N=S[P];this._removeListener(O,N.type,N.fn,N.capture);}}if(R&&O&&O.childNodes){for(P=0,M=O.childNodes.length;P<M;++P){this.purgeElement(O.childNodes[P],R,T);}}},getListeners:function(O,M){var R=[],N;if(!M){N=[I,J];}else{if(M==="unload"){N=[J];}else{N=[I];}}var T=(YAHOO.lang.isString(O))?this.getEl(O):O;for(var Q=0;Q<N.length;Q=Q+1){var V=N[Q];if(V){for(var S=0,U=V.length;S<U;++S){var P=V[S];if(P&&P[this.EL]===T&&(!M||M===P[this.TYPE])){R.push({type:P[this.TYPE],fn:P[this.FN],obj:P[this.OBJ],adjust:P[this.OVERRIDE],scope:P[this.ADJ_SCOPE],capture:P[this.CAPTURE],index:S});}}}}return(R.length)?R:null;},_unload:function(S){var M=YAHOO.util.Event,P,O,N,R,Q,T=J.slice();for(P=0,R=J.length;P<R;++P){N=T[P];if(N){var U=window;if(N[M.ADJ_SCOPE]){if(N[M.ADJ_SCOPE]===true){U=N[M.UNLOAD_OBJ];}else{U=N[M.ADJ_SCOPE];}}N[M.FN].call(U,M.getEvent(S,N[M.EL]),N[M.UNLOAD_OBJ]);T[P]=null;N=null;U=null;}}J=null;if(I){for(O=I.length-1;O>-1;O--){N=I[O];if(N){M._removeListener(N[M.EL],N[M.TYPE],N[M.FN],N[M.CAPTURE],O);}}N=null;}G=null;M._simpleRemove(window,"unload",M._unload);},_getScrollLeft:function(){return this._getScroll()[1];},_getScrollTop:function(){return this._getScroll()[0];},_getScroll:function(){var M=document.documentElement,N=document.body;if(M&&(M.scrollTop||M.scrollLeft)){return[M.scrollTop,M.scrollLeft];}else{if(N){return[N.scrollTop,N.scrollLeft];}else{return[0,0];}}},regCE:function(){},_simpleAdd:function(){if(window.addEventListener){return function(O,P,N,M){O.addEventListener(P,N,(M));};}else{if(window.attachEvent){return function(O,P,N,M){O.attachEvent("on"+P,N);};}else{return function(){};}}}(),_simpleRemove:function(){if(window.removeEventListener){return function(O,P,N,M){O.removeEventListener(P,N,(M));};}else{if(window.detachEvent){return function(N,O,M){N.detachEvent("on"+O,M);};}else{return function(){};}}}()};}();(function(){var EU=YAHOO.util.Event;EU.on=EU.addListener;EU.onFocus=EU.addFocusListener;EU.onBlur=EU.addBlurListener;
/* DOMReady: based on work by: Dean Edwards/John Resig/Matthias Miller */
if(EU.isIE){YAHOO.util.Event.onDOMReady(YAHOO.util.Event._tryPreloadAttach,YAHOO.util.Event,true);var n=document.createElement("p");EU._dri=setInterval(function(){try{n.doScroll("left");clearInterval(EU._dri);EU._dri=null;EU._ready();n=null;}catch(ex){}},EU.POLL_INTERVAL);}else{if(EU.webkit&&EU.webkit<525){EU._dri=setInterval(function(){var rs=document.readyState;if("loaded"==rs||"complete"==rs){clearInterval(EU._dri);EU._dri=null;EU._ready();}},EU.POLL_INTERVAL);}else{EU._simpleAdd(document,"DOMContentLoaded",EU._ready);}}EU._simpleAdd(window,"load",EU._load);EU._simpleAdd(window,"unload",EU._unload);EU._tryPreloadAttach();})();}YAHOO.util.EventProvider=function(){};YAHOO.util.EventProvider.prototype={__yui_events:null,__yui_subscribers:null,subscribe:function(A,C,F,E){this.__yui_events=this.__yui_events||{};
var D=this.__yui_events[A];if(D){D.subscribe(C,F,E);}else{this.__yui_subscribers=this.__yui_subscribers||{};var B=this.__yui_subscribers;if(!B[A]){B[A]=[];}B[A].push({fn:C,obj:F,override:E});}},unsubscribe:function(C,E,G){this.__yui_events=this.__yui_events||{};var A=this.__yui_events;if(C){var F=A[C];if(F){return F.unsubscribe(E,G);}}else{var B=true;for(var D in A){if(YAHOO.lang.hasOwnProperty(A,D)){B=B&&A[D].unsubscribe(E,G);}}return B;}return false;},unsubscribeAll:function(A){return this.unsubscribe(A);},createEvent:function(G,D){this.__yui_events=this.__yui_events||{};var A=D||{};var I=this.__yui_events;if(I[G]){}else{var H=A.scope||this;var E=(A.silent);var B=new YAHOO.util.CustomEvent(G,H,E,YAHOO.util.CustomEvent.FLAT);I[G]=B;if(A.onSubscribeCallback){B.subscribeEvent.subscribe(A.onSubscribeCallback);}this.__yui_subscribers=this.__yui_subscribers||{};var F=this.__yui_subscribers[G];if(F){for(var C=0;C<F.length;++C){B.subscribe(F[C].fn,F[C].obj,F[C].override);}}}return I[G];},fireEvent:function(E,D,A,C){this.__yui_events=this.__yui_events||{};var G=this.__yui_events[E];if(!G){return null;}var B=[];for(var F=1;F<arguments.length;++F){B.push(arguments[F]);}return G.fire.apply(G,B);},hasEvent:function(A){if(this.__yui_events){if(this.__yui_events[A]){return true;}}return false;}};YAHOO.util.KeyListener=function(A,F,B,C){if(!A){}else{if(!F){}else{if(!B){}}}if(!C){C=YAHOO.util.KeyListener.KEYDOWN;}var D=new YAHOO.util.CustomEvent("keyPressed");this.enabledEvent=new YAHOO.util.CustomEvent("enabled");this.disabledEvent=new YAHOO.util.CustomEvent("disabled");if(typeof A=="string"){A=document.getElementById(A);}if(typeof B=="function"){D.subscribe(B);}else{D.subscribe(B.fn,B.scope,B.correctScope);}function E(J,I){if(!F.shift){F.shift=false;}if(!F.alt){F.alt=false;}if(!F.ctrl){F.ctrl=false;}if(J.shiftKey==F.shift&&J.altKey==F.alt&&J.ctrlKey==F.ctrl){var G;if(F.keys instanceof Array){for(var H=0;H<F.keys.length;H++){G=F.keys[H];if(G==J.charCode){D.fire(J.charCode,J);break;}else{if(G==J.keyCode){D.fire(J.keyCode,J);break;}}}}else{G=F.keys;if(G==J.charCode){D.fire(J.charCode,J);}else{if(G==J.keyCode){D.fire(J.keyCode,J);}}}}}this.enable=function(){if(!this.enabled){YAHOO.util.Event.addListener(A,C,E);this.enabledEvent.fire(F);}this.enabled=true;};this.disable=function(){if(this.enabled){YAHOO.util.Event.removeListener(A,C,E);this.disabledEvent.fire(F);}this.enabled=false;};this.toString=function(){return"KeyListener ["+F.keys+"] "+A.tagName+(A.id?"["+A.id+"]":"");};};YAHOO.util.KeyListener.KEYDOWN="keydown";YAHOO.util.KeyListener.KEYUP="keyup";YAHOO.util.KeyListener.KEY={ALT:18,BACK_SPACE:8,CAPS_LOCK:20,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,META:224,NUM_LOCK:144,PAGE_DOWN:34,PAGE_UP:33,PAUSE:19,PRINTSCREEN:44,RIGHT:39,SCROLL_LOCK:145,SHIFT:16,SPACE:32,TAB:9,UP:38};YAHOO.register("event",YAHOO.util.Event,{version:"2.6.0",build:"1321"});

/*
Copyright (c) 2008, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 2.6.0
*/
YAHOO.util.Connect={_msxml_progid:["Microsoft.XMLHTTP","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],_http_headers:{},_has_http_headers:false,_use_default_post_header:true,_default_post_header:"application/x-www-form-urlencoded; charset=UTF-8",_default_form_header:"application/x-www-form-urlencoded",_use_default_xhr_header:true,_default_xhr_header:"XMLHttpRequest",_has_default_headers:true,_default_headers:{},_isFormSubmit:false,_isFileUpload:false,_formNode:null,_sFormData:null,_poll:{},_timeOut:{},_polling_interval:50,_transaction_id:0,_submitElementValue:null,_hasSubmitListener:(function(){if(YAHOO.util.Event){YAHOO.util.Event.addListener(document,"click",function(B){var A=YAHOO.util.Event.getTarget(B);if(A.nodeName.toLowerCase()=="input"&&(A.type&&A.type.toLowerCase()=="submit")){YAHOO.util.Connect._submitElementValue=encodeURIComponent(A.name)+"="+encodeURIComponent(A.value);}});return true;}return false;})(),startEvent:new YAHOO.util.CustomEvent("start"),completeEvent:new YAHOO.util.CustomEvent("complete"),successEvent:new YAHOO.util.CustomEvent("success"),failureEvent:new YAHOO.util.CustomEvent("failure"),uploadEvent:new YAHOO.util.CustomEvent("upload"),abortEvent:new YAHOO.util.CustomEvent("abort"),_customEvents:{onStart:["startEvent","start"],onComplete:["completeEvent","complete"],onSuccess:["successEvent","success"],onFailure:["failureEvent","failure"],onUpload:["uploadEvent","upload"],onAbort:["abortEvent","abort"]},setProgId:function(A){this._msxml_progid.unshift(A);},setDefaultPostHeader:function(A){if(typeof A=="string"){this._default_post_header=A;}else{if(typeof A=="boolean"){this._use_default_post_header=A;}}},setDefaultXhrHeader:function(A){if(typeof A=="string"){this._default_xhr_header=A;}else{this._use_default_xhr_header=A;}},setPollingInterval:function(A){if(typeof A=="number"&&isFinite(A)){this._polling_interval=A;}},createXhrObject:function(F){var E,A;try{A=new XMLHttpRequest();E={conn:A,tId:F};}catch(D){for(var B=0;B<this._msxml_progid.length;++B){try{A=new ActiveXObject(this._msxml_progid[B]);E={conn:A,tId:F};break;}catch(C){}}}finally{return E;}},getConnectionObject:function(A){var C;var D=this._transaction_id;try{if(!A){C=this.createXhrObject(D);}else{C={};C.tId=D;C.isUpload=true;}if(C){this._transaction_id++;}}catch(B){}finally{return C;}},asyncRequest:function(F,C,E,A){var D=(this._isFileUpload)?this.getConnectionObject(true):this.getConnectionObject();var B=(E&&E.argument)?E.argument:null;if(!D){return null;}else{if(E&&E.customevents){this.initCustomEvents(D,E);}if(this._isFormSubmit){if(this._isFileUpload){this.uploadFile(D,E,C,A);return D;}if(F.toUpperCase()=="GET"){if(this._sFormData.length!==0){C+=((C.indexOf("?")==-1)?"?":"&")+this._sFormData;}}else{if(F.toUpperCase()=="POST"){A=A?this._sFormData+"&"+A:this._sFormData;}}}if(F.toUpperCase()=="GET"&&(E&&E.cache===false)){C+=((C.indexOf("?")==-1)?"?":"&")+"rnd="+new Date().valueOf().toString();}D.conn.open(F,C,true);if(this._use_default_xhr_header){if(!this._default_headers["X-Requested-With"]){this.initHeader("X-Requested-With",this._default_xhr_header,true);}}if((F.toUpperCase()==="POST"&&this._use_default_post_header)&&this._isFormSubmit===false){this.initHeader("Content-Type",this._default_post_header);}if(this._has_default_headers||this._has_http_headers){this.setHeader(D);}this.handleReadyState(D,E);D.conn.send(A||"");if(this._isFormSubmit===true){this.resetFormState();}this.startEvent.fire(D,B);if(D.startEvent){D.startEvent.fire(D,B);}return D;}},initCustomEvents:function(A,C){var B;for(B in C.customevents){if(this._customEvents[B][0]){A[this._customEvents[B][0]]=new YAHOO.util.CustomEvent(this._customEvents[B][1],(C.scope)?C.scope:null);A[this._customEvents[B][0]].subscribe(C.customevents[B]);}}},handleReadyState:function(C,D){var B=this;var A=(D&&D.argument)?D.argument:null;if(D&&D.timeout){this._timeOut[C.tId]=window.setTimeout(function(){B.abort(C,D,true);},D.timeout);}this._poll[C.tId]=window.setInterval(function(){if(C.conn&&C.conn.readyState===4){window.clearInterval(B._poll[C.tId]);delete B._poll[C.tId];if(D&&D.timeout){window.clearTimeout(B._timeOut[C.tId]);delete B._timeOut[C.tId];}B.completeEvent.fire(C,A);if(C.completeEvent){C.completeEvent.fire(C,A);}B.handleTransactionResponse(C,D);}},this._polling_interval);},handleTransactionResponse:function(F,G,A){var D,C;var B=(G&&G.argument)?G.argument:null;try{if(F.conn.status!==undefined&&F.conn.status!==0){D=F.conn.status;}else{D=13030;}}catch(E){D=13030;}if(D>=200&&D<300||D===1223){C=this.createResponseObject(F,B);if(G&&G.success){if(!G.scope){G.success(C);}else{G.success.apply(G.scope,[C]);}}this.successEvent.fire(C);if(F.successEvent){F.successEvent.fire(C);}}else{switch(D){case 12002:case 12029:case 12030:case 12031:case 12152:case 13030:C=this.createExceptionObject(F.tId,B,(A?A:false));if(G&&G.failure){if(!G.scope){G.failure(C);}else{G.failure.apply(G.scope,[C]);}}break;default:C=this.createResponseObject(F,B);if(G&&G.failure){if(!G.scope){G.failure(C);}else{G.failure.apply(G.scope,[C]);}}}this.failureEvent.fire(C);if(F.failureEvent){F.failureEvent.fire(C);}}this.releaseObject(F);C=null;},createResponseObject:function(A,G){var D={};var I={};try{var C=A.conn.getAllResponseHeaders();var F=C.split("\n");for(var E=0;E<F.length;E++){var B=F[E].indexOf(":");if(B!=-1){I[F[E].substring(0,B)]=F[E].substring(B+2);}}}catch(H){}D.tId=A.tId;D.status=(A.conn.status==1223)?204:A.conn.status;D.statusText=(A.conn.status==1223)?"No Content":A.conn.statusText;D.getResponseHeader=I;D.getAllResponseHeaders=C;D.responseText=A.conn.responseText;D.responseXML=A.conn.responseXML;if(G){D.argument=G;}return D;},createExceptionObject:function(H,D,A){var F=0;var G="communication failure";var C=-1;var B="transaction aborted";var E={};E.tId=H;if(A){E.status=C;E.statusText=B;}else{E.status=F;E.statusText=G;}if(D){E.argument=D;}return E;},initHeader:function(A,D,C){var B=(C)?this._default_headers:this._http_headers;B[A]=D;if(C){this._has_default_headers=true;}else{this._has_http_headers=true;
}},setHeader:function(A){var B;if(this._has_default_headers){for(B in this._default_headers){if(YAHOO.lang.hasOwnProperty(this._default_headers,B)){A.conn.setRequestHeader(B,this._default_headers[B]);}}}if(this._has_http_headers){for(B in this._http_headers){if(YAHOO.lang.hasOwnProperty(this._http_headers,B)){A.conn.setRequestHeader(B,this._http_headers[B]);}}delete this._http_headers;this._http_headers={};this._has_http_headers=false;}},resetDefaultHeaders:function(){delete this._default_headers;this._default_headers={};this._has_default_headers=false;},setForm:function(M,H,C){var L,B,K,I,P,J=false,F=[],O=0,E,G,D,N,A;this.resetFormState();if(typeof M=="string"){L=(document.getElementById(M)||document.forms[M]);}else{if(typeof M=="object"){L=M;}else{return ;}}if(H){this.createFrame(C?C:null);this._isFormSubmit=true;this._isFileUpload=true;this._formNode=L;return ;}for(E=0,G=L.elements.length;E<G;++E){B=L.elements[E];P=B.disabled;K=B.name;if(!P&&K){K=encodeURIComponent(K)+"=";I=encodeURIComponent(B.value);switch(B.type){case"select-one":if(B.selectedIndex>-1){A=B.options[B.selectedIndex];F[O++]=K+encodeURIComponent((A.attributes.value&&A.attributes.value.specified)?A.value:A.text);}break;case"select-multiple":if(B.selectedIndex>-1){for(D=B.selectedIndex,N=B.options.length;D<N;++D){A=B.options[D];if(A.selected){F[O++]=K+encodeURIComponent((A.attributes.value&&A.attributes.value.specified)?A.value:A.text);}}}break;case"radio":case"checkbox":if(B.checked){F[O++]=K+I;}break;case"file":case undefined:case"reset":case"button":break;case"submit":if(J===false){if(this._hasSubmitListener&&this._submitElementValue){F[O++]=this._submitElementValue;}else{F[O++]=K+I;}J=true;}break;default:F[O++]=K+I;}}}this._isFormSubmit=true;this._sFormData=F.join("&");this.initHeader("Content-Type",this._default_form_header);return this._sFormData;},resetFormState:function(){this._isFormSubmit=false;this._isFileUpload=false;this._formNode=null;this._sFormData="";},createFrame:function(A){var B="yuiIO"+this._transaction_id;var C;if(YAHOO.env.ua.ie){C=document.createElement('<iframe id="'+B+'" name="'+B+'" />');if(typeof A=="boolean"){C.src="javascript:false";}}else{C=document.createElement("iframe");C.id=B;C.name=B;}C.style.position="absolute";C.style.top="-1000px";C.style.left="-1000px";document.body.appendChild(C);},appendPostData:function(A){var D=[],B=A.split("&"),C,E;for(C=0;C<B.length;C++){E=B[C].indexOf("=");if(E!=-1){D[C]=document.createElement("input");D[C].type="hidden";D[C].name=decodeURIComponent(B[C].substring(0,E));D[C].value=decodeURIComponent(B[C].substring(E+1));this._formNode.appendChild(D[C]);}}return D;},uploadFile:function(D,N,E,C){var I="yuiIO"+D.tId,J="multipart/form-data",L=document.getElementById(I),O=this,K=(N&&N.argument)?N.argument:null,M,H,B,G;var A={action:this._formNode.getAttribute("action"),method:this._formNode.getAttribute("method"),target:this._formNode.getAttribute("target")};this._formNode.setAttribute("action",E);this._formNode.setAttribute("method","POST");this._formNode.setAttribute("target",I);if(YAHOO.env.ua.ie){this._formNode.setAttribute("encoding",J);}else{this._formNode.setAttribute("enctype",J);}if(C){M=this.appendPostData(C);}this._formNode.submit();this.startEvent.fire(D,K);if(D.startEvent){D.startEvent.fire(D,K);}if(N&&N.timeout){this._timeOut[D.tId]=window.setTimeout(function(){O.abort(D,N,true);},N.timeout);}if(M&&M.length>0){for(H=0;H<M.length;H++){this._formNode.removeChild(M[H]);}}for(B in A){if(YAHOO.lang.hasOwnProperty(A,B)){if(A[B]){this._formNode.setAttribute(B,A[B]);}else{this._formNode.removeAttribute(B);}}}this.resetFormState();var F=function(){if(N&&N.timeout){window.clearTimeout(O._timeOut[D.tId]);delete O._timeOut[D.tId];}O.completeEvent.fire(D,K);if(D.completeEvent){D.completeEvent.fire(D,K);}G={tId:D.tId,argument:N.argument};try{G.responseText=L.contentWindow.document.body?L.contentWindow.document.body.innerHTML:L.contentWindow.document.documentElement.textContent;G.responseXML=L.contentWindow.document.XMLDocument?L.contentWindow.document.XMLDocument:L.contentWindow.document;}catch(P){}if(N&&N.upload){if(!N.scope){N.upload(G);}else{N.upload.apply(N.scope,[G]);}}O.uploadEvent.fire(G);if(D.uploadEvent){D.uploadEvent.fire(G);}YAHOO.util.Event.removeListener(L,"load",F);setTimeout(function(){document.body.removeChild(L);O.releaseObject(D);},100);};YAHOO.util.Event.addListener(L,"load",F);},abort:function(E,G,A){var D;var B=(G&&G.argument)?G.argument:null;if(E&&E.conn){if(this.isCallInProgress(E)){E.conn.abort();window.clearInterval(this._poll[E.tId]);delete this._poll[E.tId];if(A){window.clearTimeout(this._timeOut[E.tId]);delete this._timeOut[E.tId];}D=true;}}else{if(E&&E.isUpload===true){var C="yuiIO"+E.tId;var F=document.getElementById(C);if(F){YAHOO.util.Event.removeListener(F,"load");document.body.removeChild(F);if(A){window.clearTimeout(this._timeOut[E.tId]);delete this._timeOut[E.tId];}D=true;}}else{D=false;}}if(D===true){this.abortEvent.fire(E,B);if(E.abortEvent){E.abortEvent.fire(E,B);}this.handleTransactionResponse(E,G,true);}return D;},isCallInProgress:function(B){if(B&&B.conn){return B.conn.readyState!==4&&B.conn.readyState!==0;}else{if(B&&B.isUpload===true){var A="yuiIO"+B.tId;return document.getElementById(A)?true:false;}else{return false;}}},releaseObject:function(A){if(A&&A.conn){A.conn=null;A=null;}}};YAHOO.register("connection",YAHOO.util.Connect,{version:"2.6.0",build:"1321"});

/*------------------ Yahoo Connections ------------------*/