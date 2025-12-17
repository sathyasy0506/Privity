import React from "react";
import { X } from "lucide-react";
import { useEffect } from "react";

const defaultLocations = [
  {
    state: "KERALA",
    items: [
      { place: "South", phone: "+919961047677" },
      { place: "Central", phone: "+919507332211" },
      { place: "North", phone: "+919946780001" },
    ],
  },
];

const LocationModal = ({ isOpen, onClose, locations = defaultLocations }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 md:hidden"
      aria-modal="true"
      role="dialog"
      aria-label="Our Locations"
    >
      <div className="bg-white rounded-2xl w-[94%] max-w-lg shadow-xl animate-scaleIn max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold"> Contact Number</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="Close locations"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-3 overflow-y-auto space-y-4">


          {locations.map((loc) => (
            <div key={loc.state}>
              {/* <h4 className="text-lg font-semibold mb-2">{loc.state}</h4> */}
              <div className="grid grid-cols-1 gap-2 text-gray-700">
                {loc.items.map((it) => (
                  <div
                    key={it.phone}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div>
                      <p className="text-sm">
                        {it.place} –{" "}
                        <span className="font-semibold">{it.phone}</span>
                      </p>
                    </div>

                    {/* Call button only */}
                    <div className="flex gap-2">
                      <a
                        href={`tel:${it.phone.replace(/\s+/g, "")}`}
                        className="px-3 py-2 rounded-md border flex items-center justify-center text-sm"
                        aria-label={`Call ${it.place}`}
                      >
                        Call
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="p-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border hover:bg-gray-100"
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LocationModal;
