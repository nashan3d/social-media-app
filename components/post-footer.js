import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'






export default function PostFooter(props){
    console.log('profile-Image',props.data.data);
    const postData = props.data;
  return (
    <>
           <ul className={utilStyles.list}>           
           {postData.data.posts.map(({id,postDescription,postLikes,postComments})=> (
             <li className={utilStyles.listItem} key={id}>           
             <p>{postDescription}</p>
             <span>{postLikes} Likes</span>
             <span>View {postComments} comments</span>
           </li>
           ))}
         </ul>      
    </>
  );
};
