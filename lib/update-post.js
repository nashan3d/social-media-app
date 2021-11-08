
export async function updatePost(id,isFavourite) {    
    //let isFavourite = 1;
    const postData = await fetch('http://localhost:3000/api/posts/'+id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({favourite : isFavourite ===1 ? 0 : 1})
        
      });

      const data = await postData.json()
      return({
            data 
      })
    
  }