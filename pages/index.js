import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Landing Page Component for Medify
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Medify - Revolutionizing Field Medical Care</title>
        <meta name="description" content="Revolutionizing Field Medical Care with AI and Blockchain Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar Section */}
      <header className="w-full bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="flex items-center">
            <Image src="/assets/icon.png" alt="Medify Logo" width={120} height={120} className="ml-4" />
          </div>
          <nav className="space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600">Features</a>
            <a href="#" className="text-gray-700 hover:text-green-600">How It Works</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Team</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Login</a>
            <Link href="/upload">
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
                Open App
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mt-16 px-6">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Revolutionizing Field Medical Care with AI and Blockchain Technology
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            "Instant Wound Assessment, Tailored Treatment Plans, and Secure Record-Keeping – All in One App"
          </p>
          <p className="text-gray-700 mb-8">
            Medify provides field medics, emergency responders, and healthcare professionals with an AI-powered assistant for rapid wound identification, customized treatment guidance, and secure, blockchain-backed data storage. Whether you're on the frontlines or in remote locations, Medify ensures you have reliable, ethical, and efficient medical support at your fingertips.
          </p>
          <Link href="/upload">
            <button className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800">
              Open App
            </button>
          </Link>
        </div>
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <img src="/hero-image-placeholder.png" alt="App illustration" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-3xl font-bold text-gray-800">20,000+</p>
          <p className="text-gray-600">U.S. Service Members Wounded in Afghanistan</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-800">75%</p>
          <p className="text-gray-600">Wound Infections Prevented with Timely Care</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-800">1,500</p>
          <p className="text-gray-600">Medics in Remote Areas Using AI Assistance Globally</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-800">10 Minutes</p>
          <p className="text-gray-600">Average Time Saved Per Wound Assessment with Medify</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto mt-24 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">How Medify Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 1: Upload Wound Image</h3>
            <p className="text-gray-600 mb-8">
              Simply take a photo of the wound and upload it through the Medify interface. Our advanced AI model analyzes the wound, assessing factors like type, size, depth, and severity to provide a precise identification.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 2: Input Available Supplies</h3>
            <p className="text-gray-600 mb-8">
              Specify the contents of your medkit by manually entering the supplies you have on hand. This information allows Medify to customize treatment recommendations based on your available resources.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 3: Receive AI-Powered Wound Assessment</h3>
            <p className="text-gray-600 mb-8">
              Medify's AI identifies the wound type (e.g., abrasion, laceration, puncture) and assesses its severity. This step provides critical insight that informs the customized treatment plan.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 4: Get Customized Treatment and Dosage Instructions</h3>
            <p className="text-gray-600 mb-8">
              Based on the wound assessment and the listed medkit supplies, Medify generates a step-by-step treatment plan, including recommended use of available supplies, and dosage information for medications such as adrenaline, if necessary.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 5: Secure and Private Record-Keeping with Blockchain Technology</h3>
            <p className="text-gray-600">
              To ensure utmost privacy and security, Medify uses blockchain technology for record-keeping. Each wound assessment, treatment step, and dosage recommendation is stored securely to provide a tamper-proof history of care for each patient.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section with CTA */}
      <footer className="w-full mt-24 bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p className="text-white text-lg mb-6">Ready to provide smarter medical care?</p>
          <Link href="/upload">
            <button className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800">
              Open App
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}

// Running the App
// Make sure all dependencies are installed by running:
// npm install
// To run the app, use the command:
// npm run dev
// This will start the development server at http://localhost:3000.
