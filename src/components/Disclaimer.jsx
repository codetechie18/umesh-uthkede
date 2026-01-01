import { Shield } from 'lucide-react';

function Disclaimer() {
  return (
    <div className="bg-gray-800 rounded-lg p-4 text-center">
      <div className="flex items-center justify-center mb-2">
      
        <h4 className="text-white font-semibold">Important Disclaimer</h4>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">
        This website is for informational and public awareness purposes only.
        No user data is collected or stored. All content represents political vision
        and public policy proposals for discussion and democratic engagement.
      </p>
    </div>
  );
}

export default Disclaimer;
