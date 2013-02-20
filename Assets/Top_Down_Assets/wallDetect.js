#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision) {
    // Debug-draw all contact points and normals
    for (var contact : ContactPoint in collision.contacts) {
        Debug.Log("im here");
    }
}