export const TestimonialCard = ({ name, handle, text, color }) => {
  return (
    <div className="border border-slate-300 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-semibold text-sm shadow-inner`}
          >
            {name.charAt(0)}
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold">{name}</span>
            <span className="text-xs font-medium text-slate-500">{handle}</span>
          </div>
        </div>
      </div>
      <p className="text-slate-500 text-sm font-medium leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </div>
  );
};
