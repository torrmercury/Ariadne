using UnityEngine;
using System.Collections;

public class DoorSwitch : MonoBehaviour {
	
	
	public GameObject enemy;
	public GameObject door;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	public void OnTriggerEnter(Collider other){
		door.SendMessage("openSesame");
		Destroy (this);
	}
}
