import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

// MedKit Manager Page Component
export default function MedKitManager() {
  const [items, setItems] = useState([
    { id: 1, name: 'Combat Gauze', quantity: 1, critical: true },
    { id: 7, name: 'Chest Seal', quantity: 1, critical: true },
    { id: 10, name: 'Ibuprofen', quantity: 1, critical: true },
    { id: 13, name: 'Burn Dressing', quantity: 1, critical: true },
    { id: 2, name: 'Pressure Dressing', quantity: 1, critical: false },
    { id: 3, name: 'Adhesive Tape', quantity: 1, critical: false },
    { id: 5, name: 'NPA', quantity: 1, critical: false },
    { id: 6, name: 'Shears', quantity: 1, critical: false },
    { id: 8, name: 'Disinfectant', quantity: 1, critical: false },
    { id: 9, name: 'Gloves', quantity: 1, critical: false },
    { id: 11, name: 'Pen Light', quantity: 1, critical: false },
    { id: 12, name: 'Marker', quantity: 1, critical: false }
  ]);

  const updateQuantity = (id, increment) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + increment);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const saveMedkit = () => {
    const medkit = [];

    for(let item of items) {
      medkit.push({
        base64: false,
        expiration: 1578435000,
        expiration_ttl: 300,
        key: item.name,
        value: `${item.quantity}`
      });
    }
    console.log(medkit);

    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ medkit }),  // Send the medkit object in the body
    };
  
    fetch('/api/kv-update', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Medify - MedKit Manager</title>
        <meta name="description" content="Manage your medkit inventory effectively" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar Section */}
      <header className="w-full bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Link href="/">
            <img src="/assets/icon.png" alt="Medify Logo" width={120} height={120} className="ml-2" />
            </Link>
          </div>
          
        </div>
      </header>



      {/* MedKit Manager Section */}
      <main className="max-w-7xl mx-auto mt-8 px-4">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Medkit Manager</h2>
          <h2 className="text-2xl font-semibold text-white mb-6 py-2 px-12 bg-emerald-600 rounded-xl cursor-pointer" onClick={saveMedkit}>Save Medkit</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stats Cards */}
          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <p className="text-lg font-bold text-gray-800">Critical Items</p>
            <p className="text-3xl font-bold text-red-600 mt-1">
              {items.filter(item => item.critical).reduce((total, item) => total + item.quantity, 0)}
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <p className="text-lg font-bold text-gray-800">Low Stock Items</p>
            <p className="text-3xl font-bold text-yellow-500 mt-1">
              {items.filter(item => item.quantity < 5).length}
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md text-center">
            <p className="text-lg font-bold text-gray-800">Total Items</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">
              {items.reduce((total, item) => total + item.quantity, 0)}
            </p>
          </div>
        </div>

        {/* Inventory List */}
        <div className="mt-4 bg-red-100 p-2 rounded-lg">
          <h3 className="text-md font-bold text-red-600">Low/Empty Items:</h3>
          <ul className="list-disc ml-5">
            {items.filter(item => item.quantity === 0).map(item => (
              <li key={item.id} className="text-sm text-red-600">
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-2">
          {items.map(item => (
            <div key={item.id} className={`p-3 rounded-lg shadow-md ${item.critical ? 'border-red-500 border' : 'border-gray-200 border'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="flex items-center gap-1 text-sm text-black">
                  {item.name}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    className="text-gray-600 p-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <MinusCircle className="w-3 h-3" />
                  </button>
                  <span className="text-base font-bold text-black">{item.quantity}</span>
                  <button
                    className="text-gray-600 p-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <PlusCircle className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// Running the App
// Make sure all dependencies are installed by running:
// npm install
// To run the app, use the command:
// npm run dev
// This will start the development server at http://localhost:3000.
