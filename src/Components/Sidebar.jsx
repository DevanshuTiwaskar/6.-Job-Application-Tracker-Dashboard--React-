import { Briefcase, CheckCircle, XCircle, Users } from "lucide-react";

const Sidebar = ({ columns }) => {
  return (
    <aside className="w-full md:w-64 bg-white shadow-md p-4 gap-4 md:sticky md:top-0 md:h-screen flex flex-row md:flex-col justify-around md:justify-start">
      <h2 className="text-xl font-bold mb-4 hidden md:block">Job Tracker</h2>
      <nav className="flex flex-row md:flex-col gap-6 md:gap-4 w-full">
        <SidebarItem icon={<Briefcase />} label="Applied" count={columns.applied.items.length} />
        <SidebarItem icon={<Users />} label="Interview" count={columns.interview.items.length} />
        <SidebarItem icon={<CheckCircle />} label="Offer" count={columns.offer.items.length} />
        <SidebarItem icon={<XCircle />} label="Rejected" count={columns.rejected.items.length} />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label, count }) => (
  <div className="flex items-center justify-center md:justify-between gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
    <div className="flex items-center gap-2">
      {icon}
      <span className="hidden md:inline">{label}</span>
    </div>
    <span className="text-sm text-gray-600">({count})</span>
  </div>
);

export default Sidebar;
