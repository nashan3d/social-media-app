import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import styled from 'styled-components'
import Link from 'next/link'
import {updatePost} from '../lib/update-post'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import Router from 'next/router'




const name = 'Nashan Haris'
export const siteTitle = 'Social Media App'

const ProfileCard = styled.div`
  width: 100%; 
  border-radius: 5px;
  display:flex;
  margin: 15px auto;  
  padding:5px;
  align-items: center; 
`;

const Card = styled.div`
  width: 100%;   
  margin: auto; 
  align-items: center; 
 
`;

const WrapUpCard = styled.div`
width: 100%; 
border-radius: 5px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
margin: 10px auto; 
align-items: center; 
padding:5px;
bottom:50px;
`;




const Nav = styled.div`
width: 100%; 
height:10vh;
border-radius: 5px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
display:flex;
margin-left: 10px;
margin-bottom: 10px;
justify-content:center;  
align-items: center; 
padding:5px;
@media (max-width: 425px) {
    display: none;        
  }
`

const Footer = styled.div`
  display:none;
  @media (max-width: 425px) {
    width: 100%; 
    height:15vh;
    border-radius: 5px;    
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    display:flex;
    margin-left: 10px;
    margin-top: 10px;
    justify-content:space-between;  
    align-items: center; 
    padding:5px;          
  }
`


export default function Layout(props,posts) { 
  console.log('posts',props);
    const makeFav = async (id,favourite) =>{
        console.log('favourite',posts);
        const updated = updatePost(id,favourite);
               
        Router.reload('/');
        
    }
    const postData = props;
   return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>     
      </Head>
      
      <header className={styles.header}>
      
        <Nav>        
                <div>
                    <Link href="/">
                      <a style={{color:'blue',fontWeight:'700',textDecoration: 'none',marginRight:'10px'}}>HOME</a>
                    </Link >                
                </div>
                <div>
                    <Link href="/favourites">
                      <a style={{color:'blue',fontWeight:'700',textDecoration: 'none'}}>FAVOURITES</a>
                    </Link>
                </div>
        </Nav> 
     
      <section>       
                  
           {postData.data.posts.map(({id,profileImageUrl,postOwnerName,postDescription,
             imageUrl,postLikes,postComments,price,imageName,isFavourite})=> (
             <div key={id}>
             
             <WrapUpCard>
                <ProfileCard>
                    
                    <Image
                        priority                   
                        src={`/images/${profileImageUrl}`}                         
                        className={utilStyles.borderCircle}
                        height={100}
                        width={100}
                        alt={imageName}
                            />
                    <span className={utilStyles.headingXl}>{postOwnerName}</span>                    
                   
                </ProfileCard>
                <Card>
                    
                    <Image
                        priority
                        className={utilStyles.imageContainer}
                        src={`/images/${imageUrl}`}                         
                        height={400}
                        width={800}
                        alt={imageName}
                            />
                    
                    <div style={{ color: 'white', float: 'left', marginTop: '-90px', position: 'absolute', marginLeft: '20px', fontSize: '18px', fontWeight: '400'}}>
                        <p style={{opacity:0.8}}>{imageName}</p>
                        <p><strong>AED {price}</strong></p>
                    </div>

                    <div style={{float:'right',width:'40px',position:'relative',marginTop:'-80px',marginRight: '40px'}}>
                        <FontAwesomeIcon onClick={() => makeFav(id,isFavourite)} color={isFavourite ===1 ? '#FC619C' : '#18C7D4'} border fixedWidth icon={faHeart}></FontAwesomeIcon>
                    </div>
                    
                </Card>                

                {posts  ? (
                    <div>                   

                    <div style={{ marginTop: '10px', paddingLeft: '5px', marginBottom: '10px' }}>                        
                        <FontAwesomeIcon color={'blue'} width={20} border fixedWidth icon={faHeart}></FontAwesomeIcon>
                        <span style={{ color:'blue',paddingTop: '0px', paddingLeft: '9px', position: 'absolute', fontWeight: '700' }}>{postLikes} Likes</span>
                    </div>
                    <div style={{ color: 'gray', fontWeight: '700', marginLeft: '5px', marginBottom: '10px' }}>{postDescription}</div>
                    <div style={{ color: 'blue', fontWeight: '300', marginLeft: '5px', marginBottom: '10px' }}>#iphone #cases #mobilephones</div>
                    <div style={{color: 'gray', marginLeft: '5px', marginBottom: '10px' }}>View {postComments} comments</div>
                    

                </div>
                ) : (
                    <span></span>
                )}   

             </WrapUpCard>
           </div>
           ))}
               
      </section>
     
      <Footer>
          <div>
              <Link href="/">
                <a style={{color:'blue',fontWeight:'400',textDecoration: 'none'}}>HOME</a>
              </Link >                
          </div>
          <div>
              <Link href="/favourites">
                <a style={{color:'blue',fontWeight:'400',textDecoration: 'none'}}>FAVOURITES</a>
              </Link>
          </div>
      </Footer>
     
      </header>      
    </div>
  )
}