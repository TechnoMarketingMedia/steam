import { getAllPosts } from "../../lib/api";
import CategoryOne from "../components/category/CategoryOne";
import HeadMeta from "../components/elements/HeadMeta";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderThree from "../components/header/HeaderThree";
import PostSectionFive from "../components/post/PostSectionFive";
import SliderTwo from "../components/slider/SliderTwo";
import PostLayoutTen from "../components/post/layout/PostLayoutTen";
import axios from 'axios';

const HomeThree = ({allPosts,categories}) => {
  return (  
      <>
    <HeadMeta metaTitle="Home Three"/>
    <HeaderThree />
    <SliderTwo slidePost={allPosts} />
    <CategoryOne cateData={allPosts} cate={categories}/>
    <PostLayoutTen/>
    <FooterTwo />
    </>
   );
}
 
export default HomeThree;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'postFormat',
    'story',
    'trending',
    'title',
    'excerpt',
    'featureImg',
    'cate',
    'cate_bg',
    'cate_img',
    'author_name',
    'author_img',
    'date',
    'post_views',
    'post_share',
  ])

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/entry`);
  const categories = res.data
  
  return {
    props: { allPosts,categories }
  }
}

