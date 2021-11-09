import {getFavouritePostData } from '../lib/favourites'
import Head from 'next/head'
import Layout from '../components/layout'



export async function getStaticProps({ params }) {
    const postData = await getFavouritePostData() 
    
    return {
      props: {
        postData
      }
    }
  }


  export default function FavouritePost({postData}) {
        
    return (
      <>
         <Head>
         <title>{postData.title}</title>
        </Head>
        <Layout data={postData.data}></Layout>
      </>
    )
  }