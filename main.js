
//Page Handling
var tabs = new Array;
var menuitems;

//Game Elements
var money = 0;
var workers = 0;

//Resource Elements

var resourceList = new Array();
var forestMeter = document.getElementById("forest-meter");
var forest = {name:"Forest",timer:40,current:0,lvl:1,assignedWorkers:0,running:0,meter:forestMeter};


function init() {
	
	tabs = [document.getElementById("resourcemap"),document.getElementById("workshop"),document.getElementById("shop"),document.getElementById("heroes")];
	menuitems = document.getElementById("menuitems");
	
	resourceList[0] = forest;
	
	console.log(forest.running);

	
	//Menu Item Set
	menuitems.innerHTML = "Money:" + money + "</br>" + "Workers:" + workers + "</br>";
	
	
	//Tab Switching Logic
	for(i = 0; i<tabs.length; i++)
	{
	   if(tabs[i].id == "resourcemap"){
		   
		   tabs[i].className = "tab-content";
	   }
	   else{
		   
		   tabs[i].className = "tab-content hide";
	   }   
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
	   }
	   else{
		   
		   tabs[i].className = "tab-content hide";
	   }   
   }   
 }
 
 function harvest(id) {
	 
	 resourceList[id].running = 1;
	 
 }
 
 
 
 
//Game Refresh Loop 
 window.setInterval(function(){
	 
	 for(i=0;i<resourceList.length;i++){
		 
		 if(resourceList[i].running==1 && resourceList[i].current < resourceList[i].timer)
		 {
			resourceList[i].current++;
			console.log(resourceList[i].current);
			document.getElementById("forest-meter").style.width = ((resourceList[i].current/resourceList[i].timer)*100) + "%";
			console.log(document.getElementById("forest-meter").style.width);
			 
		 }
		 if(resourceList[i].running==1 && resourceList[i].current == resourceList[i].timer)
		 {
			 
			 resourceList[i].running = 0;
			 resourceList[i].current = 0;
			 console.log("reset " + resourceList[i].name);
			 document.getElementById("forest-meter").style.width = "0%";
			 
		 }
		 
	 }
	 

}, 500);