import MailchimpForm from "@components/common/mailchimp-form";

export default function Newsletter(){
    return (
        <div className="newsletter-wrapper h-[300px] bg-cover bg-center items-center justify-center flex" style={{backgroundImage:"url(/newsletter.png)"}}>
            <div className="container mx-5">
                <h3 className="text-[34px] text-black font-semibold">Sign up to our newsletter</h3>
                <p className="">Stay up to date with all our best offers.</p>
                <br></br>
                <MailchimpForm layout="subscribe" />
            </div>
        </div>
    )
}