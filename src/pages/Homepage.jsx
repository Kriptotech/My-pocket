import { Footer } from "../components/footer/Index";
import { AboutUs } from "../features/homepage/components/about_us/Index";
import { FAQ } from "../features/homepage/components/FAQ/Index";
import { FirstRow } from "../features/homepage/components/first_row/Index";
import { Hero } from "../features/homepage/components/hero/Index";
import { OtherServices } from "../features/homepage/components/other_services/Index";
import { OurMeetings } from "../features/homepage/components/our_meetings/Index";
import { OurServices } from "../features/homepage/components/our_services/Index";
import { OurTeam } from "../features/homepage/components/our_team/Index";
import { PaymentsMethods } from "../features/homepage/components/payment_methods/Index";
import { SecondRow } from "../features/homepage/components/second_row/Index";
import { WhatsAppLogo } from "../features/homepage/components/whatsapp_logo/Index";
import { WhyChooseUs } from "../features/homepage/components/why_choose_us/Index";

export function Homepage() {
    return (
        <div>
            <Hero />
            <AboutUs />
            {/* <FirstRow /> */}
            {/* <WhyChooseUs /> */}
            {/* <OurTeam /> */}
            <SecondRow />
            <OurServices />
            <FAQ />
            {/* <PaymentsMethods /> */}
            <OtherServices />
            <OurMeetings />
            <WhatsAppLogo />
            <Footer />
        </div>
    );
}
