import tableServices from "@/constants/table-services";
import { useState } from "react";

const TableServices = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="mx-0 rounded-lg border border-border sm:mx-2 md:m-5">
            <section
                className="m-2 my-4 cursor-pointer rounded-lg border border-primary bg-primary/10 p-2 transition-colors duration-300 hover:bg-primary sm:m-4 sm:p-3 md:m-6 md:p-4"
                onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}>
                <button
                    type="button"
                    className="flex w-full items-center justify-between px-2 py-2 text-left font-semibold sm:px-4 sm:py-3"
                >
                    <span>All Services</span>
                    <span className="text-xl transition-transform duration-300">{isOpen ? "−" : "+"}</span>
                </button>
            </section>


            <div className={`max-w-full my-2 mx-4 overflow-auto overscroll-contain transition-all duration-300 ease-in-out ${isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
                }`}>
                <table className="w-full min-w-[1100px] border-collapse text-xs sm:text-sm">
                    <thead>
                        <tr>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">ID</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Name</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Sector</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Type</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Benefit</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Time</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Tools</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Machinery</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Manpower</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Safety</th>
                            <th className="sticky top-0 border border-border bg-primary/20 px-3 py-2 sm:px-4">Dashboard</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableServices.map(service => (
                            <tr key={service.id} className="transition-colors duration-200 hover:bg-primary/10">
                                <td className="border border-border px-3 py-2 sm:px-4">{service.id}</td>
                                <td className="border border-border px-3 py-2 sm:px-4">{service.name}</td>
                                <td className="border border-border px-3 py-2 sm:px-4">{service.sector}</td>
                                <td className="border border-border p-2 sm:p-3 align-middle">
                                    <div className="flex items-center justify-center h-full w-full">
                                        <span className="w-3/4 aspect-square max-w-[40px] min-w-[32px] rounded-full dark:bg-emerald-400 bg-emerald-800 text-primary-foreground flex items-center justify-center text-xs font-medium">
                                            {service.type}
                                        </span>
                                    </div>
                                </td>
                                <td className="border border-border px-3 py-2 sm:px-4">{service.benefit}</td>
                                <td className="border border-border px-3 py-2 sm:px-4">{service.time}</td>
                                <td className="border border-border px-3 py-2 sm:px-4">{service.tools}</td>
                                <td className="border border-border px-3 py-2 sm:px-4">{service.machinery}</td>
                                <td className="border border-border px-3 py-2 sm:px-4">{service.manpower}</td>
                                <td className="border border-border px-3 py-2 sm:px-4">{service.safety}</td>
                                <td className="border border-border px-3 py-2 sm:px-4">{service.dashboard}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableServices;
