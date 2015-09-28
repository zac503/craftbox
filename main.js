
var tabs = new Array;

function init() {
	
	tabs = [document.getElementById("resourcemap"),document.getElementById("workshop"),document.getElementById("shop"),document.getElementById("heroes")];
	
	
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