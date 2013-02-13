    var distance;
    var target : Transform;
    var attackRange = 10.0;
    var moveSpeed = 10.0;
    var damping = 6.0;
     
    function Update (){
   		distance = Vector3.Distance(target.position, transform.position);
   		//Debug.Log("Distance to player: "+distance);
	    follow();
	   
    }
     
    
    //enemy moves toward player
    function follow(){
    	//distance = Vector3.Distance(target.position, transform.position);
    	distance = target.position - transform.position;
    	//Debug.Log("Distance:"+distance);
   		transform.Translate(moveSpeed *Vector3(0,0,1)* Time.deltaTime); 
    }
     