using UnityEngine;
using System.Collections;

public class DoorScript1 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
		
	
	void openSesame(){
		Debug.Log ("open sesame");
		Destroy (this.gameObject);
		
	}
	public void OnCollision(Collision other){
		Debug.Log ("howdy");
	}
}
