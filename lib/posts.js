  export async function getPostData() {    
    
    const postData = await fetch('http://localhost:3000/api/posts', {
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