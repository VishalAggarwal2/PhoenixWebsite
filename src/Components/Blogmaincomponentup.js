import blogupcss from "./Blogmaincomponentup.module.css"
import TopBlogdata from "./TopBlogdata"

export default function Blogmaincomponent(){
    return (
        <>
        <div className={blogupcss.maincontainer}>
            <div className={blogupcss.maincontainerleft} >
            <img className={blogupcss.containerimage} src={TopBlogdata[0].url} alt="BLOG-IMG" />
            </div>
            <div className={blogupcss.maincontainerright}>
            <p  className={blogupcss.blogdate} >
            {TopBlogdata[0].date}
            </p>
            <h2 className={blogupcss.blogheading} >
            {TopBlogdata[0].heading}
            </h2>
            <p className={blogupcss.blogsubheading}>
            {TopBlogdata[0].subheading}
            </p>
            </div>
        </div>
        </>
    );
}