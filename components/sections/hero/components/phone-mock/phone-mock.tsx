import {
  ClinicWidget,
  HealthCheckWidget,
  MockAnalytic,
  MockHeader,
  MockWidgets,
  Notch,
} from "./components";

const PhoneMock = () => {
  return (
    <div className="relative flex flex-col items-center gap-6">
      {/* Top Right Card - Health Check */}
      <HealthCheckWidget />

      {/* Bottom Left Card - Features Grid */}
      <ClinicWidget />

      {/* Center Phone Frame */}
      <div className="relative h-[560px] w-[280px] rounded-[3rem] border border-slate-800 bg-[#1f1f26] p-3 shadow-2xl shadow-black/50 sm:h-[640px] sm:w-[320px]">
        {/* Phone Notch */}
        <Notch />

        {/* Phone Content */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-[#18181C]">
          <div className="h-full px-5 pt-16 pb-5">
            <MockHeader />
            <MockAnalytic />
            <MockWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PhoneMock };
