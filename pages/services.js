
import {
  SparklesIcon,
  CubeIcon,
  ScissorsIcon,
  AdjustmentsHorizontalIcon,
  CloudIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';

export default function Services() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center"><ScissorsIcon className="w-5 h-5 mr-2" /> Shrub & Hedge Trimming</li>
        <li className="flex items-center"><Squares2X2Icon className="w-5 h-5 mr-2" /> Weed Control & Prevention</li>
        <li className="flex items-center"><CubeIcon className="w-5 h-5 mr-2" /> Mulch & Rock Installation</li>
        <li className="flex items-center"><SparklesIcon className="w-5 h-5 mr-2" /> Seasonal Yard Cleanups</li>
        <li className="flex items-center"><CloudIcon className="w-5 h-5 mr-2" /> Irrigation Maintenance & Repair</li>
        <li className="flex items-center"><Squares2X2Icon className="w-5 h-5 mr-2" /> Sod Installation & Lawn Restoration</li>
        <li className="flex items-center"><SparklesIcon className="w-5 h-5 mr-2" /> Landscape Design & Planting</li>
        <li className="flex items-center"><AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" /> Tree Trimming & Small Tree Removal</li>
        <li className="flex items-center"><CubeIcon className="w-5 h-5 mr-2" /> Storm Cleanup & Pressure Washing</li>
      </ul>
    </div>
  );
}
