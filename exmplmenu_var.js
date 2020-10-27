/*********************************************************************
*  (c) Ger Versluis 2000 version 5.411 24 December 2001              *
*        HV Menu v5.411- by Ger Versluis (http://www.burmees.nl/)    *
*            For info write to menus@burmees.nl                      *
*        Updated Jan 31st, 2003 by Dynamic Drive for Opera7)         *
*      Visit http://www.dynamicdrive.com for this script and more    *
**********************************************************************/

var NoOffFirstLineMenus=13;      // Number of first level items
var LowBgColor='#282828';        // Background color when mouse is not over
var LowSubBgColor='#282828';     // Background color when mouse is not over on subs
var HighBgColor='#cc9966';       // Background color when mouse is over
var HighSubBgColor='#cc9966';    // Background color when mouse is over on subs
var FontLowColor='#cc9966';      // Font color when mouse is not over
var FontSubLowColor='#cc9966';   // Font color subs when mouse is not over
var FontHighColor='#282828';     // Font color when mouse is over
var FontSubHighColor='#282828';  // Font color subs when mouse is over
var BorderColor='#282828';       // Border color
var BorderSubColor='#282828';    // Border color for subs
var BorderWidth=1;               // Border width
var BorderBtwnElmnts=0;          // Border between elements 1 or 0
var FontFamily="Tahoma,Verdana,Arial,sans-serif"  // Font family menu items
var FontSize=10;                 // Font size menu items
var FontBold=0;                  // Bold menu items 1 or 0
var FontItalic=0;                // Italic menu items 1 or 0
var MenuTextCentered='center';   // Item text position 'left', 'center' or 'right'
var MenuCentered='left';         // Menu horizontal position 'left', 'center' or 'right'
var MenuVerticalCentered='top';  // Menu vertical position 'top', 'middle','bottom' or static
var ChildOverlap=0.1;            // horizontal overlap child/ parent
var ChildVerticalOverlap=0.3;    // vertical overlap child/ parent
var StartTop=188;                // Menu offset x coordinate
var StartLeft=1;                 // Menu offset y coordinate
var VerCorrect=0;                // Multiple frames y correction
var HorCorrect=0;                // Multiple frames x correction
var LeftPaddng=3;                // Left padding
var TopPaddng=2;                 // Top padding
var FirstLineHorizontal=0;       // SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
var MenuFramesVertical=1;        // Frames in cols or rows 1 or 0
var DissapearDelay=1000;         // delay before menu folds in
var TakeOverBgColor=1;           // Menu frame takes over background color subitem frame
var FirstLineFrame='navig';      // Frame where first level appears
var SecLineFrame='space';        // Frame where sub levels appear
var DocTargetFrame='space';      // Frame where target documents appear
var TargetLoc='';                // span id for relative positioning
var HideTop=0;                   // Hide first level when loading new document 1 or 0
var MenuWrap=1;                  // enables/ disables menu wrap 1 or 0
var RightToLeft=0;               // enables/ disables right to left unfold 1 or 0
var UnfoldsOnClick=0;            // Level 1 unfolds onclick/ onmouseover
var WebMasterCheck=0;            // menu tree checking on or off 1 or 0
var ShowArrow=1;                 // Uses arrow gifs when 1
var KeepHilite=1;                // Keep selected path highligthed
var Arrws=['tri1.gif',6,11,'tridown.gif',10,5,'trileft.gif',5,10];  // Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//        MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//        For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","index.html","",0,24,132);

Menu2=new Array("Intro & Plans","planning.html","",0);

Menu3=new Array("History","history_.html","",3);
          Menu3_1   = new Array("I: \"Then\"",       "history_1.html",    "",1,24,150);
          Menu3_1_1 = new Array("Timothy Hackworth", "history_th.html",   "",0,24,170);
          Menu3_2   = new Array("II: \"Now\"",       "history_2.html",    "",0);
          Menu3_3   = new Array("III: \"Maybe\"",    "history_3.html",    "",1);
          Menu3_3_1 = new Array("The HLR Crest",     "history_crest.html","",0,24,150);

Menu4=new Array("Construction","build_.html","",5);
          Menu4_1   = new Array("Phase 1",           "build_1.html",      "",0,24,150);
          Menu4_2   = new Array("St Helens Station", "build_sth.html",    "",0);
          Menu4_3   = new Array("Turntable",         "build_ttable.html", "",0);
          Menu4_4   = new Array("Buildings",         "build_build.html",  "",0);
          Menu4_5   = new Array("Point rodding",     "build_ptrod.html",  "",0);

Menu5=new Array("Vegetation","plants.html","",0);

Menu6=new Array("Stock","stock_.html","",3);
          Menu6_1   = new Array("Loco roster",       "stock_locos.html",     "",0,24,150);
          Menu6_2   = new Array("Passenger stock",   "stock_passenger.html", "",0);
          Menu6_3   = new Array("Goods vehicles",    "stock_goods.html",     "",2);
          Menu6_3_1 = new Array("Snow plough",       "stock_plough.html",    "",0,24,150);
          Menu6_3_2 = new Array("Treacle tankers",   "stock_tanker.html",    "",0);

Menu7=new Array("Journal","journal.html","",0);

Menu8=new Array("Visits","visits.html","",0);

Menu9=new Array("Visitors","visitors.html","",0);

Menu10=new Array("Links","links_.html","",3);
          Menu10_1  = new Array("Garden railways",   "links_garden.html",    "",0,24,150);
          Menu10_2  = new Array("Trade",             "links_trade.html",     "",0);
          Menu10_3  = new Array("General",           "links_other.html",     "",0);

Menu11=new Array("Library","library.html","",0);

Menu12=new Array("Contact me","contact.html","",0);

Menu13=new Array("Site map","sitemap.html","",0);