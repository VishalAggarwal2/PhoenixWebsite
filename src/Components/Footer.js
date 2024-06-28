import { Link } from "react-router-dom"
import FooterCSS from "./Footer.module.css"

export default function Footer(){
    const gotoTop = ()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
    return (
        <section className={FooterCSS.footer}>
           <div className={FooterCSS.footerup}>
                <div className={FooterCSS.left_section}>
                    <div className={FooterCSS.text_section}>
                       <div className={FooterCSS.left_text}>
                       <Link onClick={gotoTop} className={FooterCSS.left_link} to={"/"}><p >Home</p></Link>
                       <Link onClick={gotoTop} className={FooterCSS.left_link} to={"/blogs"}><p >Blogs</p></Link>
                       <Link onClick={gotoTop} className={FooterCSS.left_link} to={"/fests"}><p >Fests</p></Link>
                       </div>

                       <div className={FooterCSS.right_text}>
                       <Link onClick={gotoTop} className={FooterCSS.right_link} to={"/events"}><p >Events</p></Link>
                       <Link onClick={gotoTop} className={FooterCSS.right_link} to={"/our_team_y20"}><p >Our Team</p></Link>
                       <Link onClick={gotoTop} className={FooterCSS.right_link} to={"/credits"}><p >Credits</p></Link>
                       </div>

                    </div>
                </div>
                <div className={FooterCSS.mid_section}>
                    <div className={FooterCSS.mid2_section}>
                        <img className={FooterCSS.phoenix_logo} src={"./logo.png"}  alt="logo" />
                    
                        <div className={FooterCSS.social_icons}>
                            <a className={FooterCSS.anchor} href="https://www.linkedin.com/company/phoenix-lnmiit/mycompany/" target="_blank" rel="noopener noreferrer"><img className={FooterCSS.social} src={"./linkedin.png"}  alt="logo" /></a>
                            <a className={FooterCSS.anchor} href="https://www.instagram.com/phoenix.lnmiit/" target="_blank" rel="noopener noreferrer"><img className={FooterCSS.social} src={"./instagram.png"}  alt="logo" /></a>
                            <a className={FooterCSS.anchor} href="https://www.facebook.com/phoenix.lnmiit/" target="_blank" rel="noopener noreferrer"><img className={FooterCSS.social} src={"./facebook.png"}  alt="logo" /></a>
                        </div>
                    </div>
                    
                </div>

                <div className={FooterCSS.right_section}>
                    <div className={FooterCSS.sub_section}>
                       <p className={FooterCSS.sub_text}>Subscribe to our Newsletter</p>
                        <div className={FooterCSS.sub_form}>
                            <div className={FooterCSS.sub_input_div}>
                                <input className={FooterCSS.sub_input} type="email" placeholder="xyz@gmail.com"></input>
                            </div>
                            <div className={FooterCSS.sub_button_div}>
                            <a className={FooterCSS.sub_anchor} href="/">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>

           </div>
           <p className={FooterCSS.rights_text}>© 2023 All Rights Reserved. Phoenix ®</p>
        </section>
    );
}