
import {
  SparklesIcon,
  CubeIcon,
  ScissorsIcon,
  AdjustmentsHorizontalIcon,
  CloudIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="p-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-green-700">Transforming Outdoor Spaces with Excellence</h1>
        <p className="text-lg mt-2">Expert landscaping services in Central Florida, bringing your vision to life.</p>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Request a Free Estimate</button>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center"><SparklesIcon className="w-5 h-5 mr-2" /> Landscape Design & Installation</li>
          <li className="flex items-center"><CubeIcon className="w-5 h-5 mr-2" /> Hardscaping</li>
          <li className="flex items-center"><ScissorsIcon className="w-5 h-5 mr-2" /> Lawn Maintenance</li>
          <li className="flex items-center"><CloudIcon className="w-5 h-5 mr-2" /> Irrigation Systems</li>
          <li className="flex items-center"><AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" /> Tree Trimming & Removal</li>
          <li className="flex items-center"><Squares2X2Icon className="w-5 h-5 mr-2" /> Mulching & Sodding</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Why We Don't Mow</h2>
        <p className="mt-2">To stay focused on high-quality specialty services, we no longer offer regular lawn mowing. This allows our team to concentrate on landscape design, irrigation, and seasonal upgrades — giving customers better long-term value.</p>
      </section>

      <footer className="mt-10 border-t pt-4 text-sm text-center">
        <p>&copy; 2025 Jimenez Landscaping, LLC</p>
        <p className="mt-2">Scan our QR to visit again:</p>
        <img src="/qr_jimenez.png" alt="Jimenez Landscaping QR Code" className="mx-auto mt-2 w-32 h-32" />
      </footer>
    </div>
  );
}
