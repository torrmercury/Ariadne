using UnityEngine;
using System.Collections;

[RequireComponent(typeof(AudioSource))]
public class Aggro_Switch : MonoBehaviour {
	
	bool switched = false;
	public GameObject enemy;
	public GameObject player1;
	public GameObject player2;
	public GameObject goal;
	private float timeSwitched;
	private int switchPosition;
	
	void Start () {
		timeSwitched = 0.0f;
		switchPosition = 0;
	}
	
	// Update is called once per frame
	void Update () {
		if (switched && Time.time - timeSwitched > 25 ){
			switched = false;
			Light light =  transform.GetComponentInChildren<Light>();
			light.color = Color.green;	
		}
	}
	public void OnTriggerStay(Collider other){
		if(!switched){
			if (player1 == other.gameObject && (Input.GetButton("Activate1") || Input.GetKeyDown(KeyCode.R))){
				switched = true;
				enemy.SendMessage("targetP2");
		    	enemyTargetTracker.TARGET_PLAYER = 1;
				audio.Play();
				FlipAnimation();
				Light light =  transform.GetComponentInChildren<Light>();
				light.color = Color.red;
				timeSwitched = Time.time;
				
			} else if(player2 == other.gameObject && Input.GetButton("Activate2")){
				switched = true;
				enemy.SendMessage("targetP1");
				enemyTargetTracker.TARGET_PLAYER = 0;
				audio.Play();
				FlipAnimation();
				Light light =  transform.GetComponentInChildren<Light>();
				light.color = Color.red;
				timeSwitched = Time.time;
			}
		}
	}
	void FlipAnimation(){
		if(switchPosition == 0){
			transform.Find("lever").animation.Play("FlipRight");
			switchPosition = 1;
		}else if(switchPosition == 1){
			transform.Find("lever").animation.PlayQueued("FlipLeft");
			switchPosition = 2;
		}else{
			transform.Find("lever").animation.PlayQueued("FlipRight");
			switchPosition = 1;
		}
	}
}
