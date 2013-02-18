#pragma strict

var player1: Transform;
var player2: Transform;
var speed = 10;

function Start () {

}

function Update () {
	var hit : RaycastHit;
    var rayDirection1 = player1.position - transform.position;
    var rayDirection2 = player2.position - transform.position;
 	var hit1 = false;
 	var hit2 = false;
 	var hitDistance1 = Vector3.zero.magnitude;
 	var hitDistance2 = Vector3.zero.magnitude;
 	var controller : CharacterController = GetComponent(CharacterController);
 	
 	
    if (Physics.Raycast(transform.position, rayDirection1, hit)) {
        if (hit.transform == player1) {
    		hit1 = true;
    		Debug.Log("HIT 1");
            hitDistance1 = Vector3.Distance(player1.position, transform.position);
        }
    }
    if (Physics.Raycast(transform.position, rayDirection2, hit)) {
        if (hit.transform == player2) {
	    	hit2 = true;
	    	Debug.Log("HIT 2");
            hitDistance2 = Vector3.Distance(player2.position, transform.position);
        }
    }
    
    if(hit1){
    	if(hit2){
    		if(hitDistance1 < hitDistance2){
    			controller.Move((player1.position - transform.position).normalized * Time.deltaTime * speed);
    		} else{
    			controller.Move((player2.position - transform.position).normalized * Time.deltaTime * speed);
    		}
    	} else{
    		controller.Move((player1.position - transform.position).normalized * Time.deltaTime * speed);
    	}
    }else if(hit2){
    	controller.Move((player2.position - transform.position).normalized * Time.deltaTime * speed);
    } 
}