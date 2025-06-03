"use client";

import React from 'react';

// SVG Icon Components (or use a library like lucide-react if preferred and available)
const BugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
    <path d="M12 20A8 8 0 0 0 12 4a8 8 0 0 0 0 16Z"/>
    <path d="M12 14a2 2 0 0 0 0-4M8 9a2 2 0 0 0 0 4h8a2 2 0 0 0 0-4Z"/>
    <path d="M16 9a2 2 0 0 1 0 4"/>
    <path d="m9 18 2-3"/><path d="m15 18-2-3"/>
    <path d="M9 6l2 3"/><path d="m15 6-2 3"/>
  </svg>
);

const CancelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const TransmitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const AnomalyReportForm: React.FC = () => {
  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleTransmit = () => {
    console.log("Transmit clicked");
  };

  const handleSeveritySelect = (level: string) => {
    console.log("Severity selected:", level);
    // In a real app, you would set state here to manage the selected severity
  };

  return (
    <div className="bg-[#1E2246] text-gray-300 min-h-screen p-8 font-mono flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl">
        <header className="mb-10">
          <div className="flex items-center">
            <span className="text-cyan-400 text-2xl mr-2">{">_"}</span>
            <h1 className="text-3xl font-bold text-cyan-400">NEW ANOMALY REPORT</h1>
            <span className="text-cyan-400 text-3xl ml-2 animate-pulse">█</span>
          </div>
          <p className="text-sm text-cyan-600 ml-10">DATA INPUT TERMINAL</p>
        </header>

        <main className="border-2 border-purple-500 p-8 rounded-lg shadow-[0_0_25px_0_rgba(168,85,247,0.3)]">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-8">
              <label htmlFor="anomalyTitle" className="block text-sm font-medium text-purple-400 mb-1">
                ANOMALY TITLE <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BugIcon />
                </span>
                <input
                  type="text"
                  id="anomalyTitle"
                  name="anomalyTitle"
                  placeholder="ENTER ANOMALY TITLE..."
                  className="block w-full bg-[#161A38] border border-purple-500 rounded-md py-3 pl-10 pr-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder-gray-500 text-gray-300"
                  aria-label="Anomaly Title"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="detailedDescription" className="block text-sm font-medium text-purple-400 mb-1">
                DETAILED DESCRIPTION <span className="text-red-500">*</span>
              </label>
              <textarea
                id="detailedDescription"
                name="detailedDescription"
                rows={6}
                placeholder="ENTER DETAILED DESCRIPTION OF THE ANOMALY..."
                className="block w-full bg-[#161A38] border border-purple-500 rounded-md py-3 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder-gray-500 text-gray-300 resize-none"
                aria-label="Detailed Description"
                aria-required="true"
              />
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-medium text-purple-400 mb-3">SEVERITY LEVEL</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => handleSeveritySelect('low')}
                  onKeyDown={(e) => e.key === 'Enter' && handleSeveritySelect('low')}
                  tabIndex={0}
                  aria-label="Set severity to Low"
                  className="py-3 px-4 border-2 rounded-md text-center font-semibold
                             bg-[#161A38] text-blue-400 border-blue-500
                             hover:bg-blue-500/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#1E2246]
                             transition-colors duration-150"
                >
                  LOW
                </button>
                <button
                  type="button"
                  onClick={() => handleSeveritySelect('medium')}
                  onKeyDown={(e) => e.key === 'Enter' && handleSeveritySelect('medium')}
                  tabIndex={0}
                  aria-label="Set severity to Medium"
                  className="py-3 px-4 border-2 rounded-md text-center font-semibold
                             bg-yellow-600/30 text-yellow-400 border-yellow-500 shadow-[0_0_15px_0_rgba(234,179,8,0.5)]
                             hover:bg-yellow-500/80 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#1E2246]
                             transition-colors duration-150"
                >
                  MEDIUM
                </button>
                <button
                  type="button"
                  onClick={() => handleSeveritySelect('high')}
                  onKeyDown={(e) => e.key === 'Enter' && handleSeveritySelect('high')}
                  tabIndex={0}
                  aria-label="Set severity to High"
                  className="py-3 px-4 border-2 rounded-md text-center font-semibold
                             bg-[#161A38] text-orange-400 border-orange-500
                             hover:bg-orange-500/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#1E2246]
                             transition-colors duration-150"
                >
                  HIGH
                </button>
                <button
                  type="button"
                  onClick={() => handleSeveritySelect('critical')}
                  onKeyDown={(e) => e.key === 'Enter' && handleSeveritySelect('critical')}
                  tabIndex={0}
                  aria-label="Set severity to Critical"
                  className="py-3 px-4 border-2 rounded-md text-center font-semibold
                             bg-[#161A38] text-red-400 border-red-500
                             hover:bg-red-500/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[#1E2246]
                             transition-colors duration-150"
                >
                  CRITICAL
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                onKeyDown={(e) => e.key === 'Enter' && handleCancel()}
                tabIndex={0}
                aria-label="Cancel bug report"
                className="py-3 px-6 rounded-md font-semibold flex items-center justify-center
                           bg-red-700/80 text-red-200 border border-red-600 shadow-[0_0_15px_0_rgba(220,38,38,0.6)]
                           hover:bg-red-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#1E2246]
                           transition-colors duration-150"
              >
                <CancelIcon />
                CANCEL
              </button>
              <button
                type="submit" // Changed to submit for form semantics, though handled by onClick
                onClick={handleTransmit}
                onKeyDown={(e) => e.key === 'Enter' && handleTransmit()}
                tabIndex={0}
                aria-label="Transmit bug report"
                className="py-3 px-6 rounded-md font-semibold flex items-center justify-center
                           bg-green-700/80 text-green-200 border border-green-600 shadow-[0_0_15px_0_rgba(22,163,74,0.6)]
                           hover:bg-green-600/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#1E2246]
                           transition-colors duration-150"
              >
                <TransmitIcon />
                TRANSMIT BUG REPORT
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AnomalyReportForm; 