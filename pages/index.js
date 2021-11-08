import Layout, { siteTitle } from '../components/layout'
import {getPostData } from '../lib/posts'


export async function getStaticProps() {
    const postData = await getPostData() 
    //console.log(postData);  
    return {
      props: {
        postData
      }
    }
}

export default function Home({postData}) {
    console.log('index',postData.data);
    const posts = ['1']
  return (         
          <Layout data={postData.data} posts></Layout>
        
  )
}