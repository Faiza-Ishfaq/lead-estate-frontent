import {
  ShieldCheckIcon,
  UserGroupIcon,
  BellAlertIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";

export default function WhyChooseUs() {

  const features = [
    {
      title: "Verified Listings",
      desc: "Every property is carefully reviewed to ensure authenticity and accuracy.",
      icon: ShieldCheckIcon
    },
    {
      title: "Trusted Agents",
      desc: "Connect with professional and experienced real estate agents.",
      icon: UserGroupIcon
    },
    {
      title: "Smart Property Alerts",
      desc: "Get notified instantly when new properties match your search criteria.",
      icon: BellAlertIcon
    },
    {
      title: "Easy Visit Scheduling",
      desc: "Book property visits with agents quickly and conveniently.",
      icon: CalendarDaysIcon
    }
  ];

  return (
    <section className="py-18 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#1A2B3C]">
            Why Choose Our Platform
          </h2>

          <p className="text-[#333] mt-4 leading-relaxed">
            We simplify the process of finding and managing properties by
            combining verified listings, trusted agents, and intelligent tools
            designed to help you make confident real estate decisions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition duration-500 cursor-pointer"
              >

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#1A2B3C]/10 group-hover:bg-[#C5A059]/20 transition mb-6">

                  <Icon className="w-7 h-7 text-[#1A2B3C] group-hover:text-[#C5A059] transition" />

                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1A2B3C] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#333] leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}