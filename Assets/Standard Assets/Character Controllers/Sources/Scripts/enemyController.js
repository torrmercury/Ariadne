
    var moveSpeed = 10.0;
    var damping = 6.0;
     
    function Update (){
	    follow();
    }
     
    
    //enemy moves toward player
    function follow(){
   		transform.Translate(moveSpeed *Vector3(0,0,1)* Time.deltaTime); 
    }
    