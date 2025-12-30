
export default function PricingSelection({selectedPlan, setSelectedPlan}: {selectedPlan: string, setSelectedPlan: (p: "yearly" | "monthly") => void}) {

  return (
    <div className="w-full">
      <div 
        onClick={() => setSelectedPlan('yearly')}
        className={`flex gap-6 p-6 bg-[#f1f6f4] border-4 rounded cursor-pointer max-w-[680px] mx-auto transition-all ${
          selectedPlan === 'yearly' ? 'border-[#2be080]' : 'border-[#bac8ce]'
        }`}
      >
        <div className="relative w-6 h-6 rounded-full border-2 border-black flex items-center justify-center shrink-0">
          {selectedPlan === 'yearly' && (
            <div className="absolute w-1.5 h-1.5 bg-black rounded-full"></div>
          )}
        </div>
        <div>
          <div className="text-base md:text-lg font-semibold text-[#032b41] mb-2">Premium Plus Yearly</div>
          <div className="text-xl md:text-2xl font-bold text-[#032b41] mb-2">$99.99/year</div>
          <div className="text-[#6b757b] text-xs md:text-sm">7-day free trial included</div>
        </div>
      </div>

      <div className="flex items-center gap-2 max-w-[240px] mx-auto my-6 text-sm text-[#6b757b] before:content-[''] before:flex-grow before:h-[1px] before:bg-[#bac8ce] after:content-[''] after:flex-grow after:h-[1px] after:bg-[#bac8ce]">
        <div>or</div>
      </div>

      <div 
        onClick={() => setSelectedPlan('monthly')}
        className={`flex gap-6 p-6 bg-[#f1f6f4] border-4 rounded cursor-pointer max-w-[680px] mx-auto transition-all ${
          selectedPlan === 'monthly' ? 'border-[#2be080]' : 'border-[#bac8ce]'
        }`}
      >
        <div className="relative w-6 h-6 rounded-full border-2 border-black flex items-center justify-center shrink-0">
          {selectedPlan === 'monthly' && (
            <div className="absolute w-1.5 h-1.5 bg-black rounded-full"></div>
          )}
        </div>
        <div>
          <div className="text-base md:text-lg font-semibold text-[#032b41] mb-2">Premium Monthly</div>
          <div className="text-xl md:text-2xl font-bold text-[#032b41] mb-2">$9.99/month</div>
          <div className="text-[#6b757b] text-xs md:text-sm">No trial included</div>
        </div>
      </div>

    </div>
  );
};

