#pragma strict

var player1: Transform;
var player2: Transform;
var goal: Transform;
var speed = 1;
var chaseRange = 5; // will chase player regardless of flashlight within this range
var wallBuffer = 7.0;
var damping = 6.0;

private var playerLight1 : Light;
private var playerLight2 : Light;
private var selfRespawnPoint;
private var selfRespawnRotation;
private var selfRespawning;

function Start () {
	playerLight1 = player1.Find("Main Camera").Find("Spotlight").GetComponent("Light");
	playerLight2 = player2.Find("Main Camera").Find("Spotlight").GetComponent("Light");
	selfRespawnPoint = this.transform.position;
	selfRespawnRotation = this.transform.localRotation;
	selfRespawning = false;
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
	    	//Debug.Log("HIT 1");
	        hitDistance1 = Vector3.Distance(player1.position, transform.position);
            if(hitDistance1 < chaseRange || playerLight1.enabled){
	    		hit1 = true;
		    } else{
		    	hitDistance1 = 9999.99;
		    }
        }
    }
    
    if (Physics.Raycast(transform.position, rayDirection2, hit)) {
        if (hit.transform == player2) {
	    	//Debug.Log("HIT 2");
            hitDistance2 = Vector3.Distance(player2.position, transform.position);
        	if(hitDistance2 < chaseRange || playerLight2.enabled){
	    		hit2 = true;
	    	} else{
	    		hitDistance2 = 9999.99;
	    	}
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
    //Debug.Log("N:" + hitDistanceNorth + " S:" + hitDistanceSouth + " W:" + hitDistanceWest + " E:" + hitDistanceEast);
    
    
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
    	var randomnum = -1;
    	while(randomnum < 0){
    		randomnum = Random.Range(0,4);
    		switch(randomnum){
	    		case 0:
	    			if(hitDistanceNorth < wallBuffer){
	    				randomnum = -1;
	    			} else{
	    				moveDirection = Vector3(0,0,1);
	    			}
	    			break;
	    		case 1:
	    			if(hitDistanceSouth < wallBuffer){
	    				randomnum = -1;
	    			} else{
	    				moveDirection = Vector3(0,0,-1);
	    			}
	    			break;
	    		case 2:
	    			if(hitDistanceEast < wallBuffer){
	    				randomnum = -1;
	    			} else{
	    				moveDirection = Vector3(1,0,0);
	    			}
	    			break;
	    		case 3:
	    			if(hitDistanceWest < wallBuffer){
	    				randomnum = -1;
	    			} else{
	    				moveDirection = Vector3(-1,0,0);
	    			}
	    			break;
    		}
    	}
    	//Debug.Log(randomnum);
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
    if(moveDirection != Vector3.zero){
    	transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(moveDirection), Time.deltaTime * damping);
    }else{
    	transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler(Vector3.zero), Time.deltaTime * damping);
    }
    controller.Move(moveDirection.normalized * Time.deltaTime * speed);
    
    //hit detection based on distance
    if(hit1 && hitDistance1 < 1.0){
		this.transform.Find("demon").animation.CrossFade("demonattack");
		Debug.Log("player 1 collision");
		if(!selfRespawning){
			goal.SendMessage("player1Died");
			selfRespawn();
		}
	}else if(hit2 && hitDistance2 < 1.0){
		this.transform.Find("demon").animation.CrossFade("demonattack");
		Debug.Log("player 2 collision");
		if(!selfRespawning){
			goal.SendMessage("player2Died");
			selfRespawn();
		}
	}else if(hit1 && hitDistance1 < 8.0){
		speed = 1.5;
		this.transform.Find("demon").animation.CrossFade("demonrun");
	}else if(hit2 && hitDistance2 < 8.0){
		speed = 1.5;
		this.transform.Find("demon").animation.CrossFade("demonrun");
	}else{
		speed = 1;
		this.transform.Find("demon").animation.CrossFade("demonwalk");
	}
}

function selfRespawn(){
	selfRespawning = true;
	yield WaitForSeconds(5);
	this.transform.position = selfRespawnPoint;
	this.transform.localRotation = selfRespawnRotation;
	selfRespawning = false;
}