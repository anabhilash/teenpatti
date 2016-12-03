/**
 * Created by ABHILASH on 03-12-2016.
 */
function createDesk(i){
	var prefix="deck"
	var desk = document.createElement("div");
	desk.id=prefix+i
    window.table.appendChild(desk);
}

function createDesks(){
		var i=0
		for(i=0;i<window.playerCount;i++){
			createDesk(i)
		}
}
 
function createtable(){
	var playerCount=document.getElementById("playerCount").value;
	if(!isNaN(playerCount)){
		if(playerCount>=1&&playerCount<=5){
			
			window.playerCount=playerCount
			
			var table=document.createElement("div")
			table.id="table"
			document.body.appendChild(table)
			window.table=table
			
			createDesks()
		
		}
		else{
			alert("Players should be between 1 and 5")
		}
	}
	else{
		alert("players should be an integer")
	}
	
}