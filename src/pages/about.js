import Image from "next/image";
import { getFileContentBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import Breadcrumb from "../components/common/Breadcrumb";
import BreadcrumbBanner from "../components/common/BreadcrumbBanner";
import HeadMeta from "../components/elements/HeadMeta";
import SectionTitleTwo from "../components/elements/SectionTitleTwo";
import FooterOne from "../components/footer/FooterTwo";
import HeaderThree from "../components/header/HeaderThree";
import TeamOne from "../components/team/TeamOne";
import WidgetNewsletter from "../components/widget/WidgetNewsletter";
import WidgetPost from "../components/widget/WidgetPost";
import WidgetSocialShare from "../components/widget/WidgetSocialShare";
import { removeDuplicates } from "../utils";

const AboutUs = ({ aboutData, allPosts }) => {

    const AuthorList = removeDuplicates(allPosts, 'author_name');

    return (
        <>
             <HeadMeta metaTitle="Home Three"/>
            <HeaderThree />
            <Breadcrumb aPage="About Us" />
            <BreadcrumbBanner pageTitle="About Us" />
            <div className="axil-about-us section-gap-top p-b-xs-20">
                <div className="container">
                    <figure className="m-b-xs-40">
                        <Image
                            src="/images/about.jpg"
                            height={451}
                            width={500}
                            alt="about us"
                            className="img-fluid mx-auto"
                        />
                    </figure>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="about-us-content">
                                <div dangerouslySetInnerHTML={{ __html: aboutData.content }}></div>
                            </div>
                        </div>
                        <h1>Meet the Founder</h1>
                        {/* End of .col-lg-8 */}
                        <div className="card mb-3" style={{ maxWwidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 pt-3">
                            <Image
                            src="/images/project.png"
                            height={460}
                            width={350}
                            alt="about us"
                            className="img-fluid rounded-start"
                            />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title fs-1 fw-light">Jerome Downie</h1>
                                <p className="card-text"><small>Founder of Stream Auto Supply</small></p>
                                <p className="card-text"><em>&quot; Started out as an Entrepreneur, Now the Owner of an All-Island Wide Auto Parts Company &quot;</em></p>
                                <figcaption className="blockquote-footer"><em>Stream Auto Supply</em></figcaption>
                            </div>
                            </div>
                        </div>
                        </div>




                    </div>
                </div>
            </div>
           
            <FooterOne />
        </>
    );
}

export default AboutUs;


export async function getStaticProps() {

    const allPosts = getAllPosts([
        'slug',
        'title',
        'featureImg',
        'cate',
        'cate_bg',
        'author_name',
        'author_img',
        'author_desg',
        'author_social'
    ])

    const aboutData = getFileContentBySlug('AboutData', 'src/data/about')
    const content = await markdownToHtml(aboutData.content || "")
    return {
        props: {
            aboutData: {
                ...aboutData,
                content
            },
            allPosts
        }
    }
}





