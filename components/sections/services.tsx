import { archivo } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import styles from "@/styles/styles"

import { Service } from "../service"

export function Services() {
  return (
    <section className="relative flex w-full flex-col ">
      <div
        className={cn(
          "flex w-full flex-col items-start justify-between border-b bg-primary py-8 text-white lg:flex-row lg:items-end lg:bg-transparent lg:pb-8 lg:pt-20 lg:text-black",
          styles.paddingX
        )}
      >
        <h2
          className={cn(
            "section-title flex pb-4 text-4xl lg:pb-0 lg:text-7xl",
            archivo.className
          )}
        >
          our <br /> services
        </h2>

        <div className="flex lg:max-w-lg">
          <p className="text-foreground">
            <span className="text-foreground lg:text-primary">
              The SheGuards are top-notch, private, all-female security firm.
            </span>{" "}
            We are fully licensed, exceptionally and excellently trained, and
            equiped for duty.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-2">
        <div className="col-span-2 w-full border-b lg:col-span-1 lg:border-r">
          <Service
            title="official meeting security"
            description="Professional security services for corporate meetings, conferences, and official gatherings. Our trained personnel ensure the safety and smooth operation of your important business events."
            summary="We provide comprehensive meeting security including guest assistance, access control, premises monitoring, and crime deterrence. Our team is proactive in identifying suspicious behavior and serves as your first line of defense in emergency situations."
          />
        </div>
        <div className="col-span-2 w-full border-b lg:col-span-1">
          <Service
            title="escort services"
            description="Close protection services for high-profile individuals requiring personal security. Our escort services ensure client safety through careful monitoring and threat assessment."
            summary="We provide close protection by maintaining vigilant oversight of our clients, steering them away from potentially dangerous areas and individuals. Our services include thorough security checks of client vehicles and accommodations before use."
          />
        </div>
        <div className="col-span-2 border-b lg:col-span-1 lg:border-r ">
          <Service
            title="clubs | pubs | lounge security"
            description="Specialized security services for nightlife venues including clubs, pubs, and lounges. Our team manages crowd control and maintains a safe environment for all patrons."
            summary="We expertly manage and monitor large crowd behavior to ensure guest safety. Our comprehensive security procedures include thorough entry screening and weapon detection, effectively preventing theft and other criminal activities."
          />
        </div>
        <div className="col-span-2 border-b lg:col-span-1">
          <Service
            title="party (private or public) security"
            description="Comprehensive security solutions for both private and public party events. We ensure your celebrations remain safe and enjoyable for all attendees."
            summary="We manage guest lists to ensure only authorized individuals access the premises. Our services prioritize crowd control and continuous monitoring for malicious activities, ensuring your event proceeds safely and smoothly."
          />
        </div>
        <div className="col-span-2 border-b lg:col-span-1 lg:border-r ">
        <Service
            title="security consultancy"
            description="Expert security consultation services to assess and improve your current security measures. We provide strategic recommendations tailored to your specific needs and risk profile."
            summary="We conduct comprehensive security assessments and provide professional recommendations to enhance your safety protocols. Our consultancy services include risk analysis, security system evaluation, and customized protection strategies for your unique requirements."
          />
        </div>
        <div className="col-span-2 border-b lg:col-span-1">
        <Service
            title="airport pickups & all kinds of events"
            description="Professional airport pickup services and comprehensive event security for all occasions. Our versatile team is equipped to handle diverse security needs across various event types."
            summary="We provide secure airport pickup services for your guests, ensuring safe transport to designated locations. Our highly trained team offers comprehensive security solutions for all types of events you may be organizing, adapting to your specific requirements."
          />
        </div>
      </div>
    </section>
  )
}
