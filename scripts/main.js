
//Page Handling
var tabs = new Array();
var menuitems;

//Game Elements
var money = 0;
var workers = 0;

//Resource Elements

var resourceList = new Array();
var forestDrops = new Array();


var forestMeter = document.getElementById("forest-meter");
var mineMeter = document.getElementById("mine-meter");
var forest = {name:"Forest",timer:100,current:0,lvl:1,assignedWorkers:0,running:0,meter:0,drops:[
	{name:"wood",qty:0},{name:"vine",qty:0},{name:"razor leaf",qty:0}]};
var mine = {name:"Mine",timer:200,current:0,lvl:1,assignedWorkers:0,running:0,meter:1,drops:[
	{name:"stone",qty:0},{name:"iron",qty:0},{name:"platinum",qty:0}]};
var messages = ["Using your hands, collect whatever resources you can grab","You awake in the middle of town. Damp and covered with dirt, you look around to see the remnants of a great fire."];
//Inventory
var resourceInv = [];


$(document).ready(function(){
	//Tab Collection, FORGET TO ADD IT HERE OR IT WON'T SHOW UP
	tabs = [document.getElementById("resourcemap"),document.getElementById("town"),document.getElementById("workshop"),document.getElementById("shop"),document.getElementById("heroes")];
	//menuitems = document.getElementById("menuitems");

	resourceList.push(forest);
	resourceList.push(mine);

	//write location objects

	$.each(resourceList, function(key, value){
		//console.log(value.name + " Level " + value.lvl);
		$("#locations").append("<table width='250'>" +
		"<thead colspan='2'>" + value.name + " Level " + value.lvl + "</thead>" +
		"<tr><td colspan='2'><div class='meter'><span id='meter" + value.meter + "' style='width: 0%'></span></div></td></tr>" +
		"<tr><td rowspan='2' class='harvest'><Button class='harvest' onclick='harvest(" + key + ")'>Harvest</button></td><td valign='top'><Button class='worker'>+Worker</Button></td></tr>" +
		"<tr><td valign='bottom'><Button class='worker'>-Worker</Button></td></tr></table>");
		//console.log(key);
	});


	//Menu Item Set
	$("#menuitems").HTML = "Money:" + money + "</br>" + "Workers:" + workers + "</br>";



	//Tab Switching Logic
	for(i = 0; i<tabs.length; i++){
		if(tabs[i].id == "town"){	   
			tabs[i].className = "tab-content";
			$("#infobox").html(messages[i]);
		}	
		else{	   
			tabs[i].className = "tab-content hide";
		} 
	}
   
   
   //Game Loop call
	var fps = 60;   
	setInterval(function(){
		 update();
	}, 1000/fps);

	
	
});


//Game Loop Code ---------------------------------------------------------------------------------------------------------------
function update(){
	
	for(i=0;i<resourceList.length;i++){
		 
		 if(resourceList[i].running==1 && resourceList[i].current < resourceList[i].timer)
		 {
			resourceList[i].current++;
			console.log(resourceList[i].current);
			$("#meter" + resourceList[i].meter).css("width",(((resourceList[i].current/resourceList[i].timer)*100) + "%"));
			console.log($("#meter" + resourceList[i].meter).css("width"));
			 
		 }
		 if(resourceList[i].running==1 && resourceList[i].current == resourceList[i].timer)
		 {
			 
			 resourceList[i].running = 0;
			 resourceList[i].current = 0;
			 console.log("reset " + resourceList[i].name);
			 $("#meter" + resourceList[i].meter).css("width","0%");
			 
			 //isItemInList = findInvItem(resourceList[i].drops[0].name);
			 itemExists = findInvItemIndex(resourceList[i].drops[0].name);
			 
			 
			 
			 //console.log(isItemInList);
			 //console.log(itemInListIndex);
			 
			 if (itemExists === undefined || itemExists.length == 0) {
				resourceInv.push(resourceList[i].drops[0]);
				resourceInv[resourceInv.length-1].qty +=1;
			 }
			 else{
				 
				 
				 resourceInv[itemExists[0]].qty += 1;
				 
			 }
			 
			 
			 console.log(resourceInv[i]);
			 if(resourceInv[0].qty == null)
			 {
				 resourceInv[0].qty = 0;			 
			 }
			 //resourceInv[0].qty = resourceInv[0].qty + 1;
			 console.log(resourceInv[0].name + ": " + resourceInv[0].qty);
			 
		 }
		 
		
		 
		 
	 }
	try {
			updateResourceList();
		}
		catch(err) {
			$("resource-list").html = "Current Inventory";
		}
}

function hideTab() {
   var resourceTab = document.getElementsByTagName("resourcemap");
   
   resourceTab.className="tab-content hide";
   
    }

function showTab(tabName) {
   
   for(i=0;i<tabs.length;i++)
   {
	   if(tabs[i].id == tabName){
		   
		   tabs[i].className = "tab-content";
		   $("#infobox").html(messages[i]);
	   }
	   else{
		   
		   tabs[i].className = "tab-content hide";
	   }   
   }   
 }
 
function findInvItem(itemName){
    return $.grep(resourceInv, function(n, i){
      return n.name == itemName;
    });
}
function findInvItemIndex(name){
	
	indexes = $.map(resourceInv, function(obj, index) {
		if(obj.name == name) {
			return index;
		}
	});
	
	return indexes;
}
 
 function harvest(id) {
	 
	 resourceList[id].running = 1;
	 
 }
 
 function updateResourceList() {	 
		
		 $("#resource-list").html("");
		 $("#resource-list").append("Current Inventory:</br>");
		 $.each(resourceInv, function(i, value){
			  $("#resource-list").append(resourceInv[i].name + ": " + resourceInv[i].qty + "</br>");
		 });
		 
		 
		 ;
		 //rBlock.innerHTML = resourceInv[i].name + ": " + resourceInv[i].qty;
		 
	 
 }
