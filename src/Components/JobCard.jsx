import { Briefcase, Building2, Calendar } from "lucide-react";

const JobCard = ({ job, status }) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-5 mb-4 hover:shadow-lg transition-all duration-300 cursor-grab active:cursor-grabbing border border-gray-200">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-gray-500" />
            {job.title}
          </h3>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-gray-400" />
            {job.company}
          </p>
        </div>

        {/* Status Badge */}
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full
            ${
              status === "Applied"
                ? "bg-yellow-100 text-yellow-700"
                : status === "Interview"
                ? "bg-blue-100 text-blue-700"
                : status === "Offer"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
        >
          {status}
        </span>
      </div>

      {/* Footer (Optional Date Placeholder) */}
      <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
        <Calendar className="w-3 h-3" />
        Added recently
      </p>
    </div>
  );
};

export default JobCard;
