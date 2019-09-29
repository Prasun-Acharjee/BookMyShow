import firebase from "../firebase";

export const onclick=(movies)=>dispatch=>
{
    const db=firebase.firestore();
    var arr=[];
    var id=[];
    db.collection(`${movies}`).get().then((query)=>{
        query.forEach((doc)=>{
            arr=arr.concat(doc)
        })
        dispatch({type:"ON_CLICK",payload:arr})
    });   
}
export const like=(movies,id,noofLike)=>dispatch=>
{
    const db=firebase.firestore();
    db.collection(`${movies}`).doc(`${id}`).set({Likes: Number(noofLike+1)},{merge:true}).then((doc)=>dispatch({type:"ON_LIKE",payload:{arr:doc}}))
    
}

export const book=(movies,id,Tickets,name,email,phone)=>dispatch=>
{
    const db=firebase.firestore();
    db.collection(`${movies}`).doc(`${id}`).set({Tickets:Number(Tickets-1)},{merge:true}).then((doc)=>{db.collection("User").add({Name:name,Phone:phone,email:email,movieID:id}).then((doc)=>dispatch({type:"ON_BOOK"}))});
}
    