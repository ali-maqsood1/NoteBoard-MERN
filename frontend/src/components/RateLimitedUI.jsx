import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-[#00f0ff10] border border-[#00f0ff40] rounded-lg shadow-[0_0_20px_#00f0ff30]">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-[#00f0ff20] p-4 rounded-full mb-4 md:mb-0 md:mr-6 shadow-[0_0_12px_#00f0ff]">
            <ZapIcon className="size-10 text-[#00f0ff] drop-shadow-[0_0_4px_#00f0ff]" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#00f0ff] drop-shadow-[0_0_4px_#00f0ff] mb-2">
              Rate Limit Reached
            </h3>
            <p className="text-white mb-1">
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <p className="text-sm text-white/60">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
