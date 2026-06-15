import { HeartPulse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-1.5 rounded-lg shadow-sm">
              <HeartPulse size={20} />
            </div>
            <h3 className="font-extrabold text-2xl tracking-tight text-white">
              MedCare
            </h3>
          </div>
          <p className="text-gray-400 text-sm font-medium">© 2024 MedCare. Bảo lưu mọi quyền.</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a 
            href="https://www.facebook.com/share/1BFscrdWeB/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 shadow-sm border border-gray-700"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.2-6.32V10.1a8.49 8.49 0 0 0 4.19 1.11v-3.2a4.93 4.93 0 0 1-2.07-.32z"/>
            </svg>
          </a>
        </div>
        
      </div>
    </footer>
  );
}
