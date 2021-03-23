import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { LightBulbOutline, UserGroupOutline, UserOutline } from 'heroicons-react';

export default function WorkStoreDispatch() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={clsx(
        'relative w-full min-h-screen p-24 transition',
        activeTab === 0 && 'bg-c-green-500',
        activeTab === 1 && 'bg-c-brown-500',
        activeTab === 2 && 'bg-c-blue-500',
      )}
    >
      <nav className="flex items-end justify-center">
        <div className="flex space-x-8">
          <Tab onClick={() => setActiveTab(0)} isActive={activeTab === 0}>
            Work
          </Tab>
          <Tab onClick={() => setActiveTab(1)} isActive={activeTab === 1}>
            Store
          </Tab>
          <Tab onClick={() => setActiveTab(2)} isActive={activeTab === 2}>
            Warehouse
          </Tab>
        </div>
      </nav>

      <div className="py-24">
        {activeTab === 0 && <WorkContent />}
        {activeTab === 1 && <StoreContent />}
        {activeTab === 2 && <WarehouseContent />}
      </div>
    </div>
  );
}

const WorkContent = () => {
  const spaceOptions = [
    { text: 'Private office', Icon: UserOutline },
    { text: 'Creative studio', Icon: LightBulbOutline },
    { text: 'Dedicated and open desks', Icon: UserGroupOutline },
  ];

  const communualFacilities = [
    'Breakout spaces',
    'Meeting rooms',
    'Kitchen',
    'Function spaces',
    'Outdoor terrace with BBQ and bar',
    'Dedicated podcast room',
    // 'Exclusive 7-day access',
    'Flexible photography studio',
    'Convenient parking',
  ];

  return (
    <div className="flex items-center w-full max-w-4xl mx-auto space-x-8">
      <div className="space-y-8">
        <p className="text-3xl font-medium text-c-green-900">
          Communal, private, or creative work spaces for everyone
        </p>

        <p className="text-lg text-c-green-800">
          It’s all the rage: office and desk space with communal facilities. We are more than a
          cluster of secure spaces, we're a place of mixed use, great diversity, and connectivity.
          We even allow visitation of pets with approval from the community manager.
        </p>

        <div className="flex space-x-2">
          {spaceOptions.map(({ text, Icon }) => (
            <div className="flex-1 px-4 pt-4 pb-2 space-y-2 rounded-lg bg-c-green-200">
              <Icon className="text-c-green-500" />

              <p className="text-lg text-c-green-900">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-c-green-800">
          We also offer a variety of facilities and events to promote a vibrant atmosphere
          including:
        </p>

        <Options options={communualFacilities} className="text-c-green-100 bg-c-green-700" />
      </div>

      <div className="flex-shrink-0 w-full max-w-sm">
        <Image
          width="3334"
          quality="100"
          height="3989"
          src="/images/IMG_9424.png"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

const StoreContent = () => {
  const options = [
    'Fire rated',
    'Monitored secure storage',
    'Exclusive 7-day access',
    'Short, medium, and long-term flexible spaces',
    'Keyless entry',
  ];

  return (
    <div className="flex items-center w-full max-w-4xl mx-auto space-x-8">
      <div className="flex-shrink-0 w-full max-w-md">
        <Image
          width="646"
          height="800"
          quality="100"
          src="/images/StorageRoom.png"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="space-y-8">
        <p className="text-3xl font-medium text-white">Self storage</p>

        <p className="text-lg text-c-brown-900">
          Premium prices for land in Melbourne have many people opting for off-site storage. Our
          rates are highly competitive. Managed by friendly and engaging staff, supported by state
          of the art storage software. 1000m2 dedicated to individual storage units. Various sizes
          available, starting at 2.25m2.
        </p>

        <Options options={options} className="text-white bg-c-brown-600" />
      </div>
    </div>
  );
};

const WarehouseContent = () => {
  const options = [
    'Fire rated',
    '7 day access',
    'Sizes starting from 10m2',
    'Ground level vehicle access',
    'Monitored security',
    'Secure, monitored delivery and dispatch',
    'Printing and packaging stations',
  ];

  return (
    <div className="flex items-center w-full max-w-4xl mx-auto space-x-8">
      <div className="space-y-8">
        <p className="text-3xl font-medium text-white">
          Short-term, secure storage of items for easy pick-up and drop-off
        </p>

        <p className="text-lg text-c-blue-200">
          We have long had a growing community of trades people who we greatly value and wish to
          dedicate awesome facilities that will help them run their ships like clockwork. Many of
          these trades use the warehousing in the early hours of the day, gather the tools they need
          for the day’s productivity, and return at the end of the day to secure their valuables.
        </p>

        <Options options={options} className="text-white bg-c-blue-700" />

        <div className="p-6 space-y-2 rounded-lg shadow-lg bg-c-blue-200">
          <p className="text-2xl font-medium text-c-blue-900">E-commerce capabilities</p>

          <p className="text-c-blue-700">
            We make dispatching orders a breeze with all the equipment on site that you will need to
            receive your deliveries, be that receiving parcels or boxes to unloading pallets from a
            truck or containers.
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 w-full max-w-sm">
        <Image
          src="/images/IMG_9452.png"
          width="2467"
          height="3918"
          quality="100"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

const Tab = ({ children, isActive = false, ...rest }) => (
  <a
    role="button"
    className={clsx(
      'text-4xl py-4 border-b-4 transition',
      isActive ? 'border-white' : 'border-transparent',
      isActive ? 'text-white' : 'text-white opacity-50 hover:text-white',
    )}
    {...rest}
  >
    {children}
  </a>
);

const Options = ({ options = [], className }) => (
  <div className="flex flex-wrap items-start">
    {options.map(option => (
      <p className={clsx('px-3 my-1 mr-2 py-1 rounded-md', className)}>{option}</p>
    ))}
  </div>
);
