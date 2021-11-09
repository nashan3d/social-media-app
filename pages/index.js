import Layout, { siteTitle } from '../components/layout'
import {getPostData } from '../lib/posts'


export async function getStaticProps() {
    const postData = await getPostData() 
    
    return {
      props: {
        postData
      }
    }
}

export default function Home({postData}) {
    
  return (         
          <Layout data={postData.data}></Layout>
        
  )
}