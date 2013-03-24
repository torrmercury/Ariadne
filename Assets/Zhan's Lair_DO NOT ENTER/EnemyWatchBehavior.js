#pragma strict

var player1: Transform;
var player2: Transform;
var speed = 18;
var wallBuffer = 7.0;
var damping = 6.0;

function Start () {

}

function Update () {
	var hit : RaycastHit;
    var rayDirection1 = player1.position - transform.position;
    var rayDirection2 = player2.position - transform.position;
 	var hit1 = false;
 	var hit2 = false;
 	var hitDistance1 = 9999.99;
 	var hitDistance2 = 9999.99;
 	
 	var hitDistanceForward = 9999.99;
 	var hitDistanceNorth = 9999.99;
 	var hitDistanceSouth = 9999.99;
 	var hitDistanceWest = 9999.99;
 	var hitDistanceEast = 9999.99;
 	
 	var controller : CharacterController = GetComponent(CharacterController);
 	
 	
    if (Physics.Raycast(transform.position, rayDirection1, hit)) {
        if (hit.transform == player1) {
    		hit1 = true;
    		//Debug.Log("HIT 1");
            hitDistance1 = Vector3.Distance(player1.position, transform.position);
        }
    }
    if (Physics.Raycast(transform.position, rayDirection2, hit)) {
        if (hit.transform == player2) {
	    	hit2 = true;
	    	//Debug.Log("HIT 2");
            hitDistance2 = Vector3.Distance(player2.position, transform.position);
        }
    }
    if (Physics.Raycast(transform.position, transform.forward, hit)){
    	if (hit.transform != player1 && hit.transform != player2){
            hitDistanceForward = Vector3.Distance(hit.point, transform.position);
    	}
    }
    if (Physics.Raycast(transform.position, Vector3(0,0,1), hit)){
            hitDistanceNorth = Vector3.Distance(hit.point, transform.position);
    }
    if (Physics.Raycast(transform.position, Vector3(0,0,-1), hit)){
            hitDistanceSouth = Vector3.Distance(hit.point, transform.position);
    }
    if (Physics.Raycast(transform.position, Vector3(-1,0,0), hit)){
            hitDistanceWest = Vector3.Distance(hit.point, transform.position);
    }
    if (Physics.Raycast(transform.position, Vector3(1,0,0), hit)){
            hitDistanceEast = Vector3.Distance(hit.point, transform.position);
    }
    
    
    /*	1:chase closest player
    	2:move forward
    	3:randomly move up, down, left, or right
    */
    var moveDirection = Vector3.zero;
    if(hit1){
    	if(hit2){
    		if(hitDistance1 < hitDistance2){
    			moveDirection = (player1.position - transform.position);
    		} else{
    			moveDirection = (player2.position - transform.position);
    		}
    	} else{
    		moveDirection = (player1.position - transform.position);
    	}
    }else if(hit2){
    	moveDirection = (player2.position - transform.position);
    }else if(hitDistanceForward > wallBuffer){
    	moveDirection = transform.forward;
    }else{
    	var randomnum = Random.Range(0,4);
    	switch(randomnum){
    		case 0:
    			moveDirection = Vector3(1,0,0);
    			break;
    		case 1:
    			moveDirection = Vector3(-1,0,0);
    			break;
    		case 2:
    			moveDirection = Vector3(0,0,1);
    			break;
    		case 3:
    			moveDirection = Vector3(0,0,-1);
    			break;
    	}
    }
    
    //remove x or z component if moving too close to a wall
    //this effect is ignored when getting close to the player
	if(!(hit1 && hitDistance1 < 1.5 * wallBuffer) && !(hit2 && hitDistance2 < 1.5 * wallBuffer)){
	    if(hitDistanceNorth < wallBuffer && moveDirection.z > 0){
	    	moveDirection.z = 0;
	    }
	    if(hitDistanceSouth < wallBuffer && moveDirection.z < 0){
	    	moveDirection.z = 0;
	    }
	    if(hitDistanceWest < wallBuffer && moveDirection.x < 0){
	    	moveDirection.x = 0;
	    }
	    if(hitDistanceEast < wallBuffer && moveDirection.x > 0){
	    	moveDirection.x = 0;
	    }
	}
	//remove y component always to keep rotation upright
    moveDirection.y = 0;
    
    //Debug.Log(moveDirection);
    transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(moveDirection), Time.deltaTime * damping);
    
    controller.Move(moveDirection.normalized * Time.deltaTime * speed);
    
    //hit detection based on distance
    if(hit1 && hitDistance1 < 5.0){
		Debug.Log("player 1 collision");
	}else if(hit2 && hitDistance2 < 5.0){
		Debug.Log("player 2 collision");
	}
}