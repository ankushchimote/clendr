import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10 mb-1">Sort by</p>
      <p className="italic text-gray-500">(Labels)</p>
      <div className="flex">
      <ul>
        <li className="flex "><div className="bg-green-400 w-4 h-4 rounded-full mt-1" /><span className="px-2">Holiday</span></li>
      </ul>
      <ul>
        <li className="flex "><div className="bg-red-400 w-4 h-4 rounded-full mt-1" /><span className="pl-2">Work</span></li>
      </ul>
      </div>
      <div className="flex">
      <ul>
        <li className="flex "><div className="bg-blue-400 w-4 h-4 rounded-full mt-1" /><span className="px-2">Personal</span></li>
      </ul>
      <ul>
        <li className="flex "><div className="bg-purple-400 w-4 h-4 rounded-full mt-1" /><span className="pl-2">Random</span></li>
      </ul>
      </div>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ label: lbl, checked: !checked })
            }
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
}
