using UnityEngine;
using System.Collections;

public class DoorSwitch : MonoBehaviour {
	
	public GameObject player;
	public GameObject enemy;
	//public GameObject door;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	public void OnTriggerEnter(Collider other){
		//destorys itself if the key is meant for the player
		if ( player == other.gameObject){
			Destroy (this);
		}
	}
}
