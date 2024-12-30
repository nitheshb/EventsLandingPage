
import Link from 'next/link';
import { CardSpotlight } from './CardSpotlight'; // Assuming you have the CardSpotlight component imported

export default function Pricing() {
  return (
    <div className="min-h-screen rounded-[20px] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Choose your plan</h2>
          <p className="text-lg text-gray-600">Start free and fall in love with our pro features</p>
          <div className="flex justify-end">
            <button className="text-gray-600 hover:text-gray-900">Show more</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <CardSpotlight radius={350} color="#6C2BD9">
            <div className="bg-[#171717] rounded-3xl p-8 text-white overflow-hidden max-h-[500px]">
              <h3 className="text-2xl font-semibold mb-2">title1</h3>
              <p className="text-lg mb-6">1 month</p>
              <div className="text-4xl font-bold mb-8">
                <span className="text-2xl">Rp</span>100.00
              </div>
              <ul className="space-y-4 mb-8">
                <li>30 items in the menu</li>
                <li>Access to the menu creation tool</li>
                <li>Full access to QR tool</li>
              </ul>
              <Link
                href="#"
                className="block w-full py-3 px-6 text-center rounded-full bg-[#82E616] text-white font-semibold hover:bg-opacity-90 transition duration-300"
              >
                Get Now
              </Link>
            </div>
          </CardSpotlight>

          {/* Card 2 */}
          <CardSpotlight radius={350} color="#FFFFFF">
            <div className="bg-[#171717] rounded-3xl p-8 text-white shadow-lg overflow-hidden max-h-[500px]">
              <h3 className="text-2xl font-semibold mb-2">title3</h3>
              <p className="text-lg text-gray-600 mb-6">3 months</p>
              <div className="text-4xl font-bold text-white mb-8">
                <span className="text-2xl">Rp</span>250.00
              </div>
              <ul className="space-y-4 mb-8 text-white">
                <li>30 items in the menu</li>
                <li>Unlimited views</li>
                <li>Access to the menu creation tool</li>
                <li>Full access to QR tool</li>
              </ul>
              <Link
                href="#"
                className="block w-full py-3 px-6 text-center rounded-full border-2 border-gray-200 text-gray-800 font-semibold hover:bg-gray-50 transition duration-300"
              >
                Get Now
              </Link>
            </div>
          </CardSpotlight>

          {/* Card 3 */}
          <CardSpotlight radius={350} color="#FFFFFF">
            <div className="bg-[#171717] rounded-3xl text-white p-8 shadow-lg overflow-hidden max-h-[500px]">
              <h3 className="text-2xl font-semibold mb-2">title6</h3>
              <p className="text-lg text-gray-600 mb-6">6 months</p>
              <div className="text-4xl font-bold text-white mb-8">
                <span className="text-2xl">Rp</span>450.00
              </div>
              <ul className="space-y-4 mb-8 text-white">
                <li>30 items in the menu</li>
                <li>Unlimited views</li>
              </ul>
              <Link
                href="#"
                className="block w-full py-3 px-6 text-center rounded-full border-2 border-gray-200 text-gray-800 font-semibold hover:bg-gray-50 transition duration-300"
              >
                Get Now
              </Link>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </div>







  );
}
