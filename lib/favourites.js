export async function getFavouritePostData() {    
    
  const postData = await fetch('http://localhost:3000/api/favourites', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await postData.json()
 
  return {     
    data
  }
}