// JavaScript functions to insert common code into web pages.
// (c) RaspberRypple / The Haggerleases Rly Co: 1999, 2004
// Feel free to use, but please acknowledge and inform author.

// write contact email address 


function hello() {
  document.write("hello1234");
}
function emailLink() {
  var part1="webmaster";
  var part2="haggerleases.";
  var part3="co.";
  var part4="uk";
  document.write("<a onFocus='if(this.blur)this.blur()' href='mailto:");
  document.write(part1);
  document.write("@");
  document.write(part2);
  document.write(part3);
  document.write(part4);
  document.write("?subject=Haggerleases Light Railway");
/*
  document.write("&body=Your comments/suggestions/ideas/questions:%0d%0a%0d%0a%0d%0a%0d%0a");
  document.write("If you don%92t mind, please tell me some more:%0d%0a");
  document.write("Your railway%92s name:%0d%0a");
  document.write("Its scale / gauge:%0d%0a");
  document.write("Its Web site%92s URL:%0d%0a");
  document.write("Does it follow a prototype? (even loosely!) Which?%0d%0a");
  document.write("Where in the UK / world is it?%0d%0a");
*/
  document.write("'>");
  document.write(part1);
  document.write("@");
  document.write(part2);
  document.write(part3);
  document.write(part4);
  document.write("</a>");
}

// --- marginPic ---

// Create a thumbnail with a link to larger version (using pic function).
// All thumbnails are 170 x 120. Note use of class='thumb' on <img>
// Parameters:
//   arguments[0] - path to source (no extension) "_s.jpg" added for thumb; ".jpg" added for link
//   arguments[1] - thumb short desc.  ": click for larger picture" added
//   arguments[2] - link window title  prefixed with "HLR | " 
//   arguments[3] - link long desc
//   arguments[4] - link image width
//   arguments[5] - link image height
function marginPic(path, thumbDesc, winTitle, linkDesc, w, h) {
	picArg="\"" + path + ".jpg\",\"HLR | " + winTitle + "\",\"" + linkDesc + "\",\"" + w + "\",\"" + h + "\"";
  cls="margin_border";
if (arguments.length > 6) {
	cls=arguments[6];
}
//  	document.write(cls);
	
	document.write("<a onFocus='if(this.blur)this.blur()' href='" + path + ".jpg' "
	             + "target='hlrpic' onFocus='if(this.blur)this.blur()' ");
	document.write("onClick='pic(" + picArg + "); return false;'>");
	document.write("<img class='" + cls + "' src='" + path + "_s.jpg' "
	             + "alt='" + thumbDesc + "' "
	             + "title='" + thumbDesc + ": click for larger picture'>");
	document.write("</a>");

//	document.write("picArg = " + picArg + "]");
}

// --- pic ---

PicWindow=null;
function pic(img, title, longtitle) {
if (arguments.length > 5) {
  PicWindow=window.open('', 'hlrpic', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=100,top=80');
}
else {
  PicWindow=window.open('', 'hlrpic', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,left=100,top=80');
}
PicWindow.document.close();
doc=PicWindow.document.open();
x=680;
y=610;
if (arguments.length > 4) {
  x=arguments[3]*1 + 90;
  y=arguments[4]*1 +200;
}
else if (arguments.length > 3) {
  if (arguments[3] == "small") {x=480; y=410;}
  else if (arguments[3] == "medium") {x=580; y=510;}
}

doc.write('<html><head>');
doc.write('<title>' + title + '</title>');
doc.write('<script>window.resizeTo('+x+','+y+')</script>');
doc.write('<style type="text/css">@import "hlr.css";</style>');
/*
doc.write('<link rel="StyleSheet" href="http://www.haggerleases.co.uk/hlr.css">');
doc.write('<script language="JavaScript" src="http://www.haggerleases.co.uk/hlr.js"></script>');
doc.write("hello 9");
*/
doc.write('</head>');
doc.write('<body>');
doc.write('<p class=picNav>');
doc.write('<a href="javascript: self.close()" onFocus="if(this.blur)this.blur()">Close Window</a>');
doc.write('</p><br />');

doc.write('<div class=picimg>');

doc.write('<table align="center" cellspacing="0" cellpadding="0" border="0"><tr>');
doc.write('<td class="shadow_img"><img src="' + img + '" border="0"></td>');
doc.write('<td class="shadow_r"><img src="shadow_t.gif" border="0"></td>');
doc.write('</tr><tr>');
doc.write('<td class="shadow_b"><img src="shadow_l.gif" border="0"></td>');
doc.write('<td class="shadow_c"></td>');
doc.write('</tr></table>');
   
doc.write('<br clear="all" />');
doc.write(longtitle + '</div>');
doc.write('</body></html>');
PicWindow.focus();
}


//no shadow
function noshadowpic(img, title, longtitle) {
if (arguments.length > 5) {
  PicWindow=window.open('', 'hlrpic', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=100,top=80');
}
else {
  PicWindow=window.open('', 'hlrpic', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,left=100,top=80');
}
PicWindow.document.close();
doc=PicWindow.document.open();
x=arguments[3]*1 + 90;
y=arguments[4]*1 +150;
doc.write('<script>window.resizeTo('+x+','+y+')</script>');
doc.write('<title>' + title + '</title>');
doc.write('<link rel="StyleSheet" href="hlr.css">');
doc.write('<script language="JavaScript" src="hlr.js"></script>');
doc.write('<p class=picNav>');
doc.write('<a href="javascript: self.close()" onFocus="if(this.blur)this.blur()">Close Window</a>');
doc.write('</p><br />');
doc.write('<div class=picimg>');

doc.write('<img src="' + img + '" border="0">');
   
doc.write('<br clear="all" /><br />');
doc.write( longtitle + '</div>');
PicWindow.focus();
}

// write 'revision' note
function revised (y,m,d) {
	var DAY = 60 * 1000 * 60 * 24
	var today = new Date();
	var rev = new Date(y,m-1,d);
	var delta = (today.getTime() - rev.getTime()) / DAY;

	if (delta < 183) {
		document.write("<p id='revised'>");
		if (delta < 32) {
			document.write("This page was updated ");
			if (delta < 1) document.write("today.");
			else if (delta < 4) document.write("within the last three days.");
			else if (delta < 9) document.write("within the last week.");
			else if (delta < 15) document.write("within the last fortnight.");
			else document.write("within the last month.");
			if (delta < 9) document.write(" <img src='new.gif' align='absmiddle' />");
		}
		else {
			var month = "";
			if      (m == 1) month = "January";
			else if (m == 2) month = "February";
			else if (m == 3) month = "March";
			else if (m == 4) month = "April";
			else if (m == 5) month = "May";
			else if (m == 6) month = "June";
			else if (m == 7) month = "July";
			else if (m == 8) month = "August";
			else if (m == 9) month = "September";
			else if (m ==10) month = "October";
			else if (m ==11) month = "November";
			else if (m ==12) month = "December";
			document.write("This page was last updated in " + month + ".");
		}
	}
	document.write("</p>");
}



// page footer - includes copyright()
// Parameters: this function normally takes no parameters
//             if a parameter is supplied, the picture is suppressed
function footer() {
  document.write('<br clear="all" />');
  document.write('<p><a onFocus="if(this.blur)this.blur()" href="#" class="toplink" id="bottom">top</a></p>');
  document.write('<br clear="all" />');
  document.write('<p style="text-align:center;color:#604020;margin-top:1em;padding-left:0px;">');
  if (arguments.length == 0) {
    document.write('<img src="engraving.jpg" width="833" height="106" style="border:none;">');
  }
  document.write('<br />&copy; ');
  document.write('<span style="font-size:1.2em;font-style:italic;font-family:baskerville,"times new roman",serif;">The Haggerleases Rly&nbsp;C<sup><u>o</u></sup></span>');
  document.write(' <span style="font-size:0.9em">1999, ' + (new Date()).getFullYear() + '</span></p>');

  document.write('<div id="footnav">');
  document.write('<a onFocus="if(this.blur)this.blur()" href="index.html">Home<br />');
  document.write('<a onFocus="if(this.blur)this.blur()" href="planning.html">Intro&nbsp;&amp&nbsp;Plans</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="history_.html">History</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="build_.html">Construction</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="plants.html">Vegetation</a>&nbsp;<br />');
  document.write('<a onFocus="if(this.blur)this.blur()" href="stock_.html">Stock</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="journal.html">Journal</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="visits.html">Visits</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="visitors.html">Visitors</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="gallery.html">Gallery</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="links_.html">Links</a>&nbsp;<br />');
  document.write('<a onFocus="if(this.blur)this.blur()" href="library.html">Library</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="contact.html">Contact&nbsp;me</a>&nbsp;| ');
  document.write('<a onFocus="if(this.blur)this.blur()" href="sitemap.html">Site&nbsp;map</a>');
  document.write('</div>');

  document.write('<p style="padding-top:25em;margin-bottom:0em;"></p>');
}



// include copyright notice (deprecated, but still used in index files!)
// Parameters: this function takes no parameters
function copyright() {
  document.write('<p style="text-align:center;color:#604020;margin-top:1em;">');
  document.write('&copy; ');
  document.write('<span style="font-size:1.2em;font-style:italic;font-family:baskerville,"times new roman",serif;">The Haggerleases Rly&nbsp;C<sup><u>o</u></sup></span>');
  document.write(' <span style="font-size:0.9em">1999, ' + (new Date()).getFullYear() + '</span></p>');
  document.write('<br /><br /><br /><br /><br /><br /><br /><br />');
}



function shadow_pic(src) {
document.write('<table align="center" cellspacing="0" cellpadding="0" border="0"><tr>');
document.write('<td class="shadow_img"><img src="' + src + '" border="0"></td>');
document.write('<td class="shadow_r"><img src="shadow_t.gif" border="0" style="border:none;"></td>');
document.write('</tr><tr>');
document.write('<td class="shadow_b"><img src="shadow_l.gif" border="0" style="border:none;"></td>');
document.write('<td class="shadow_c"></td>');
document.write('</tr></table>');
}

function shadow_text(src) {
c="";
if(arguments.length>1)c=arguments[1];
document.write('<table align="center" cellspacing="0" cellpadding="0" border="0" style="margin-right:20px;"><tr>');
document.write('<td><div class="shadow_text' + c + '">' + src + '</div></td>');
document.write('<td class="shadow_r"><img src="shadow_t.gif" border="0"></td>');
document.write('</tr><tr>');
document.write('<td class="shadow_b"><img src="shadow_l.gif" border="0"></td>');
document.write('<td class="shadow_c"></td>');
document.write('</tr></table>');
}
function shadow_text_top() {
c="";
if(arguments.length>0)c=arguments[0];
document.write('<table align="center" cellspacing="0" cellpadding="0" border="0"><tr>');
document.write('<td class="'+c+'">');
}
function shadow_text_bottom() {
document.write('</td>');
document.write('<td class="shadow_r"><img src="shadow_t.gif" border="0"></td>');
document.write('</tr><tr>');
document.write('<td class="shadow_b"><img src="shadow_l.gif" border="0"></td>');
document.write('<td class="shadow_c"></td>');
document.write('</tr></table>');
}





// history stuff
var cname = "haggerleases.co.uk";
var t = document.title.split('|');
var u = document.URL.split('/');
var v = "";
var maxHist = 7;

function setCookie()
{
   value = v + "#<a href='" + u[u.length-1] + "'>" + t[t.length-1] + "</a>";
/*
document.write("<br>v: " + v + "<br>");
*/
	document.cookie = cname+"="+value+"; path=/";
}

function getCookie()
{
	var nameEQ = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) v = c.substring(nameEQ.length,c.length);
	}
	var s = v.split('#');
	if (s.length>maxHist) 
	{
		v = "";
		for(var i=s.length-maxHist; i<s.length; i++)
		{
			v = v + '#' + s[i];
		}
	}
 return v;
}

function getHistory()
{
	v = getCookie();
	if (v!="") {
		var fv = v.substring(1,v.length);
		    fv = fv.replace(/#/g, " > ");
		    fv = fv + " > " + t[t.length-1];
		document.write("<div id='trail'>Your trail: " + fv + "</div>");
	}
	setCookie();	
}

// navigation

function navigation(thisPage) {
	getHistory();
	
	a1 = "previous";
	a2 = "next";
	
	// fwdback (top right) navigation...
	document.write("<div id='fwdback'>");
	
	//...back
	document.write("&nbsp;&lt;<a onFocus='if(this.blur)this.blur()' href='");
	if(thisPage == "index"           ) document.write("'></a>");
	if(thisPage == "planning"        ) document.write("index"           );
	if(thisPage == "history_"        ) document.write("planning"        );
	if(thisPage == "history_1"       ) document.write("history_"        );
	if(thisPage == "history_th"      ) document.write("history_1"       );
	if(thisPage == "history_2"       ) document.write("history_th"      );
	if(thisPage == "history_3"       ) document.write("history_2"       );
	if(thisPage == "history_crest"   ) document.write("history_3"       );
	if(thisPage == "build_"          ) document.write("history_crest"   );
	if(thisPage == "build_1"         ) document.write("build_"          );
	if(thisPage == "build_sth"       ) document.write("build_1"         );
	if(thisPage == "build_ttable"    ) document.write("build_sth"       );
	if(thisPage == "build_build"     ) document.write("build_ttable"    );
	if(thisPage == "build_ptrod"     ) document.write("build_build"     );
	if(thisPage == "plants"          ) document.write("build_ptrod"     );
	if(thisPage == "stock_"          ) document.write("plants"          );
	if(thisPage == "stock_locos"     ) document.write("stock_"          );
	if(thisPage == "stock_passenger" ) document.write("stock_locos"     );
	if(thisPage == "stock_goods"     ) document.write("stock_passenger" );
	if(thisPage == "stock_plough"    ) document.write("stock_goods"     );
	if(thisPage == "stock_tanker"    ) document.write("stock_plough"    );
	if(thisPage == "journal"         ) document.write("stock_tanker"    );
	if(thisPage == "visits"          ) document.write("journal"         );
	if(thisPage == "visitors"        ) document.write("visits"          );
	if(thisPage == "links_"          ) document.write("visitors"        );
	if(thisPage == "links_garden"    ) document.write("links_"          );
	if(thisPage == "links_trade"     ) document.write("links_garden"    );
	if(thisPage == "links_other"     ) document.write("links_trade"     );
	if(thisPage == "library"         ) document.write("links_other"     );
	if(thisPage == "contact"         ) document.write("library"         );
	                                 
	if(thisPage != "index"           ) document.write(".html'>&nbsp;" + a1 + "&nbsp;</a>|");
	
	// ..forward
	document.write("<a onFocus='if(this.blur)this.blur()' href='");
	
	if(thisPage == "index"           ) document.write("planning"        );
	if(thisPage == "planning"        ) document.write("history_"        );
	if(thisPage == "history_"        ) document.write("history_1"       );
	if(thisPage == "history_1"       ) document.write("history_th"      );
	if(thisPage == "history_th"      ) document.write("history_2"       );
	if(thisPage == "history_2"       ) document.write("history_3"       );
	if(thisPage == "history_3"       ) document.write("history_crest"   );
	if(thisPage == "history_crest"   ) document.write("build_"          );
	if(thisPage == "build_"          ) document.write("build_1"         );
	if(thisPage == "build_1"         ) document.write("build_sth"       );
	if(thisPage == "build_sth"       ) document.write("build_ttable"    );
	if(thisPage == "build_ttable"    ) document.write("build_build"     );
	if(thisPage == "build_build"     ) document.write("build_ptrod"     );
	if(thisPage == "build_ptrod"     ) document.write("plants"          );
	if(thisPage == "plants"          ) document.write("stock_"          );
	if(thisPage == "stock_"          ) document.write("stock_locos"     );
	if(thisPage == "stock_locos"     ) document.write("stock_passenger" );
	if(thisPage == "stock_passenger" ) document.write("stock_goods"     );
	if(thisPage == "stock_goods"     ) document.write("stock_plough"    );
	if(thisPage == "stock_plough"    ) document.write("stock_tanker"    );
	if(thisPage == "stock_tanker"    ) document.write("journal"         );
	if(thisPage == "journal"         ) document.write("visits"          );
	if(thisPage == "visits"          ) document.write("visitors"        );
	if(thisPage == "visitors"        ) document.write("links_"          );
	if(thisPage == "links_"          ) document.write("links_garden"    );
	if(thisPage == "links_garden"    ) document.write("links_trade"     );
	if(thisPage == "links_trade"     ) document.write("links_other"     );
	if(thisPage == "links_other"     ) document.write("library"         );
	if(thisPage == "library"         ) document.write("contact"         );
	if(thisPage == "contact"         ) document.write("index.html'>&nbsp;Home&nbsp;</a>");
	                                 
	if(thisPage != "contact"         ) document.write(".html'>&nbsp;" + a2 + "&nbsp;</a>&gt;&nbsp;");
	document.write("</div>");
	
	// main navigation (left margin)...  [no longer used]
/*	
	document.write("<div id='navigation'>");
	document.write("<ul>");
	
	if(thisPage == "index"        ) document.write("<li><span id='thispage'>Home</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='index.html'>Home</a></li>");
	
	if(thisPage == "planning"     ) document.write("<li><span id='thispage'>Intro &amp; Plans</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='planning.html'>Intro &amp; Plans</a></li>");
	
	// history
	if(thisPage.indexOf("history_")>-1) {
		if(thisPage == "history_"     ) document.write("<li><span id='thispage'>History</span>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='history_.html'>History</a>");
		document.write("<ul>");
		
		if(thisPage == "history_1"    ) document.write("<li id='thispage'>Part I - &ldquo;Then&rdquo;</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='history_1.html'>Part I - &ldquo;Then&rdquo;</a></li>");
		
		if(thisPage == "history_th"    ) document.write("<li id='thispage'>Hackworth</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='history_th.html'>Hackworth</a></li>");
		
		if(thisPage == "history_2"    ) document.write("<li id='thispage'>Part II - &ldquo;Now&rdquo;</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='history_2.html'>Part II - &ldquo;Now&rdquo;</a></li>");
		
		if(thisPage == "history_3"    ) document.write("<li id='thispage'>Part III - &ldquo;Maybe&rdquo;</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='history_3.html'>Part III - &ldquo;Maybe&rdquo;</a></li>");
		
		if(thisPage == "history_crest") document.write("<li id='thispage'>HLR crest</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='history_crest.html'>HLR crest</a></li>");
		document.write("</ul>");
		document.write("</li>");
	}
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='history_.html'>History</a></li>");
	// end history
	
	// build
	if(thisPage.indexOf("build_")>-1) {
		if(thisPage == "build_"     ) document.write("<li><span id='thispage'>Construction</span>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='build_.html'>Construction</a>");
		document.write("<ul>");
		
		if(thisPage == "build_1"        ) document.write("<li id='thispage'>Phase 1</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='build_1.html'>Phase 1</a></li>");
		
		if(thisPage == "build_sth"      ) document.write("<li id='thispage'>St Helens</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='build_sth.html'>St Helens</a></li>");
		
		if(thisPage == "build_ttable"   ) document.write("<li id='thispage'>Turntable</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='build_ttable.html'>Turntable</a></li>");
		
		if(thisPage == "build_build"    ) document.write("<li id='thispage'>Buildings</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='build_build.html'>Buildings</a></li>");
		
		if(thisPage == "build_ptrod"    ) document.write("<li id='thispage'>Point rods</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='build_ptrod.html'>Point rods</a></li>");
		
		document.write("</ul>");
		document.write("</li>");
	}
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='build_.html'>Construction</a></li>");
	// end build
	
	if(thisPage == "plants"       ) document.write("<li><span id='thispage'>Vegetation</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='plants.html'>Vegetation</a></li>");
	
	
	// stock
	if(thisPage.indexOf("stock_")>-1) {
		if(thisPage == "stock_"         ) document.write("<li><span id='thispage'>Stock</span>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='stock_.html'>Stock</a>");
		document.write("<ul>");
		
		if(thisPage == "stock_locos"    ) document.write("<li id='thispage'>Loco roster</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='stock_locos.html'>Loco roster</a></li>");
		
		if(thisPage == "stock_passenger") document.write("<li id='thispage'>Passenger</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='stock_passenger.html'>Passenger</a></li>");
		
		if(thisPage == "stock_goods"    ) document.write("<li id='thispage'>Goods vehicles</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='stock_goods.html'>Goods vehicles</a></li>");
		
		if(thisPage == "stock_plough"   ) document.write("<li id='thispage'>Snow plough</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='stock_plough.html'>Snow plough</a></li>");

		if(thisPage == "stock_tanker"   ) document.write("<li id='thispage'>Treacle tankers</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='stock_tanker.html'>Treacle tankers</a></li>");

		document.write("</ul>");
		document.write("</li>");
	}
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='stock_.html'>Stock</a></li>");
	// end stock
	
	
	if(thisPage == "journal"      ) document.write("<li><span id='thispage'>Journal</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='journal.html'>Journal</a></li>");
	
	if(thisPage == "visits"       ) document.write("<li><span id='thispage'>Visits</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='visits.html'>Visits</a></li>");
	
	if(thisPage == "visitors"     ) document.write("<li><span id='thispage'>Visitors</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='visitors.html'>Visitors</a></li>");
	
	/*
	if(thisPage == "gallery"     ) document.write("<li><span id='thispage'>Gallery</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='gallery.html'>Gallery</a></li>");
	* /
	
	// links
	if(thisPage.indexOf("links_")>-1) {
		if(thisPage == "links_"       ) document.write("<li><span id='thispage'>Links</span>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='links_.html'>Links</a>");
		
		document.write("<ul>");
		
		if(thisPage == "links_garden" ) document.write("<li id='thispage'>Garden rail</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='links_garden.html'>Garden rail</a></li>");
		
		if(thisPage == "links_trade"  ) document.write("<li id='thispage'>Trade</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='links_trade.html'>Trade</a></li>");
	
		if(thisPage == "links_other"  ) document.write("<li id='thispage'>General</span></li>");
		else document.write("<li><a onFocus='if(this.blur)this.blur()' href='links_other.html'>General</a></li>");
		
		document.write("</ul>");
		document.write("</li>");
	}
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='links_.html'>Links</a></li>");
	// end links
	
	
	if(thisPage == "library"      ) document.write("<li><span id='thispage'>Library</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='library.html'>Library</a></li>");
	
	if(thisPage == "contact"      ) document.write("<li><span id='thispage'>Contact me</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='contact.html'>Contact me</a></li>");
	
	if(thisPage == "sitemap"      ) document.write("<li><span id='thispage'>Site map</span></li>");
	else document.write("<li><a onFocus='if(this.blur)this.blur()' href='sitemap.html'>Site map</a></li>");
	
	document.write("</ul>");
	document.write("</div>");
*/
}