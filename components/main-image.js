import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'




export default function ImageContent (props){
  const postData = props.data;
  return (
    <>    
        
      {postData.data.posts.map(({id,imageUrl,imageName,
          price}) => (
        <div key={id}>
          <span className={utilStyles.imageText}>AED {price}{imageName}</span>
          <Image
                    priority
                    className={utilStyles.imageContainer}
                    src={`/images/${imageUrl}`}                         
                    height={400}
                    width={800}
                    alt={imageName}
                />
        </div>
      ))}
    </>
  );
};
