    var distance;
    var target : Transform;
    var lookAtDistance = 15.0;
    var attackRange = 10.0;
    var moveSpeed = 10.0;
    var damping = 6.0;
    private var isItAttacking = false;
     
    function Update (){
   		distance = Vector3.Distance(target.position, transform.position);
   		Debug.Log("Distance to player: "+distance);
	    if(distance < 1000){
	    	lookAt();
	    	follow();
	   }
    }
     
    //orientates enemy toward player 
    function lookAt (){
    	var rotation = Quaternion.LookRotation(target.position - transform.position);
   		transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
   		

    }
    //enemy moves toward player
    function follow(){
    	distance = Vector3.Distance(target.position, transform.position);
    	Debug.Log("Distance:"+distance);
   		transform.Translate(moveSpeed * distance * Time.deltaTime); 
    }
     