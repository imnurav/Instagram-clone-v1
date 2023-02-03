import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
export default function Suggestion() {
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestion(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestion for you</h3>
        <button className="font-semibold text-gray-600">See all</button>
      </div>
      {suggestion.map((suggestion) => (
        <div key={suggestion.id} className="flex justify-between mt-3">
          <img
            className="rounded-full h-10 border p-[2px]"
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.username}</h2>
            <h3 className="text-sm text-gray-400">{suggestion.jobTitle}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
