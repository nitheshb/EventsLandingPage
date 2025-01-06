import { CardSpotlight } from "./CardSpotlight";

export function CardSpotlightDemo() {
  return (
    <div className="min-h-screen rounded-[20px] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Choose your plan</h2>
              <p className="text-lg text-gray-600">
                Start free and fall in love with our pro features
              </p>
            </div>
            <button className="text-gray-600 hover:text-gray-900">Show more</button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {[
            // {
            //   title: "Authentication steps",
            //   steps: [
            //     "Enter your email address",
            //     "Create a strong password",
            //     "Set up two-factor authentication",
            //     "Verify your identity",
            //   ],
            //   description:
            //     "Ensuring your account is properly secured helps protect your personal information and data.",
            // },
            // {
            //   title: "Password Tips",
            //   steps: [
            //     "Use at least 12 characters",
            //     "Include letters, numbers, and symbols",
            //     "Avoid common words or phrases",
            //     "Don’t reuse passwords across sites",
            //   ],
            //   description:
            //     "A strong password helps safeguard your account from unauthorized access.",
            // },
            // {
            //   title: "Account Recovery Steps",
            //   steps: [
            //     "Go to the account recovery page",
            //     "Enter your registered email",
            //     "Follow the recovery link sent to your email",
            //     "Reset your password",
            //   ],
            //   description:
            //     "Recover your account quickly and securely if you ever lose access.",
            // },

            {
              title: "Standard Package",
              steps: [
                "1 Event Pass",
                "Access to Main Event Area",
                "Networking Opportunities",
                "Event Materials",
              ],
              description: "Perfect for small gatherings and one-day events, with essential access and networking opportunities.",
              price: "$199",
            },
            {
              title: "Premium Package",
              steps: [
                "Up to 3 Event Passes",
                "VIP Access to All Areas",
                "Exclusive Networking Sessions",
                "Custom Event Materials",
                "Priority Seating",
              ],
              description: "For those who want a premium experience, with VIP access and enhanced networking opportunities.",
              price: "$499",
            },
            {
              title: "VIP Package",
              steps: [
                "Up to 5 Event Passes",
                "Full VIP Access with All-Access Pass",
                "Exclusive VIP Lounge Access",
                "Personalized Event Support",
                "Priority Registration",
              ],
              description: "The ultimate package for VIP attendees, offering full access and exclusive perks.",
              price: "$999",
            },
          ].map(({ title, steps, description }) => (
            <CardSpotlight
              key={title}
              className="h-[450px] w-full sm:w-[400px] lg:w-96 flex flex-col justify-between overflow-hidden relative p-8"
              radius={350}
              borderRadius="rounded-3xl"
            >
              <div>
                <p className="text-xl font-bold relative z-20 mt-2 text-white">{title}</p>
                <div className="text-neutral-200 mt-4 relative z-20">
                  <ul className="list-none mt-2">
                    {steps.map((step) => (
                      <Step key={step} title={step} />
                    ))}
                  </ul>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">{description}</p>
              </div>
              <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded relative z-20 hover:bg-blue-600 self-center">
                Get Now
              </button>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
