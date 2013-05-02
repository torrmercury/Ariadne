using UnityEngine;
using System.Collections;
 
public class lobby : MonoBehaviour
{
	public GameObject wall1;
	public GameObject wall2;
	
	public bool first = false;
    // Use this for initialization
    void Start()
    {
        PhotonNetwork.ConnectUsingSettings("v1.0");
    }
 
    void OnGUI()
    {
        GUILayout.Label(PhotonNetwork.connectionStateDetailed.ToString());
    }
	void OnJoinedLobby()
	{
		PhotonNetwork.JoinRandomRoom();
		
	}
	void OnPhotonRandomJoinFailed()
	{
		first = true;
	    PhotonNetwork.CreateRoom(null);
	}
	void OnJoinedRoom()
	{
		if ( first){
			
			GameObject monster = PhotonNetwork.Instantiate("_Player1Controller", new Vector3(-32.0f,1.25f,-54.0f), Quaternion.identity, 0);
			JoystickControl1 joy1 = monster.GetComponent<JoystickControl1>();
			joy1.enabled = true;
			JoystickControl2 joy2 = monster.GetComponent<JoystickControl2>();
			joy2.enabled = false;
			
			Camera camera = monster.GetComponentInChildren<Camera>();
			camera.enabled = true;
		}
		else { 
			
			GameObject monster = PhotonNetwork.Instantiate("_Player2Controller", new Vector3(-30.0f,1.25f,-53.0f), Quaternion.identity, 0);
			JoystickControl1 joy1 = monster.GetComponent<JoystickControl1>();
			joy1.enabled = false;
			JoystickControl2 joy2 = monster.GetComponent<JoystickControl2>();
			joy2.enabled = true;
			
			Camera camera = monster.GetComponentInChildren<Camera>();
			camera.enabled = true;
		}
		
	}
}