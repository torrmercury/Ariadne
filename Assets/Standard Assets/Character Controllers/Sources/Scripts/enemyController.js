
var moveSpeed = 10.0;
var damping = 6.0;
var counter = 0;

function Update (){
	if ( counter++ > 300){
   		follow();
   	}
}
 

//enemy moves toward player
function follow(){
	
	transform.Translate(moveSpeed *Vector3(0,0,1)* Time.deltaTime); 
}

function OnTriggerEnter (other : Collider) {
    other.rigidbody.MovePosition(Vector3(0,0,1));
}