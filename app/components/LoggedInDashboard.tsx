"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function LoggedInDashboard() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      console.log("User ID:", user.id);
    }
  }, [user]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-yellow-50 p-8 flex flex-col items-center mx-auto">
      <nav className="w-full bg-[#F6CF57] p-4 rounded-xl flex justify-between max-w-6xl items-center mb-8 shadow-md">
        <h1
          className="text-4xl font-bold text-black"
          style={{ fontFamily: "Pokemon" }}
        >
          WikiChu
        </h1>
        <div className="flex items-center space-x-6">
          <div className="text-lg font-semibold text-gray-700"></div>
          <UserButton
            appearance={{
              elements: {
                avatarBox: { width: "3.5rem", height: "3.5rem" },
              },
            }}
          />
        </div>
      </nav>

      <div className="w-full bg-white rounded-xl max-w-6xl p-6 shadow-md mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome back, {user.fullName || "Editor"}!
            </h2>
            <p className="text-gray-600">
              Continue your editing journey with WikiChu!
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full grid grid-cols-2 max-w-6xl gap-4 mb-8 text-black">
        <div className="bg-yellow-100 p-4 rounded-xl text-center">
          <div className="text-lg font-bold text-gray-700">511 Coins</div>
          <div className="text-sm text-gray-500">Earned</div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl text-center">
          <div className="text-lg font-bold text-gray-700">7 Days</div>
          <div className="text-sm text-gray-500">Streak</div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="w-full bg-yellow-100 rounded-xl max-w-6xl p-6 mb-8">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Your Learning Path
          </h2>
          <div className="text-sm text-gray-600">35% Complete</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div className="bg-yellow-400 h-4 rounded-full w-[35%]" />
        </div>

        <div className="relative flex flex-row justify-between items-center w-full">
          {[
            {
              id: 1,
              label: "Lesson 1",
              subLabel: "Greetings",
              completed: true,
            },
            {
              id: 2,
              label: "Lesson 2",
              subLabel: "Basic Edits",
              completed: true,
            },
            {
              id: 3,
              label: "Lesson 3",
              subLabel: "Intermediate Edits",
              completed: false,
            },
            {
              id: 4,
              label: "Lesson 4",
              subLabel: "Advanced Edits",
              completed: false,
            },
            {
              id: 5,
              label: "Bonus Content",
              subLabel: "Extra Resources",
              completed: false,
            },
            {
              id: 6,
              label: "Final Test",
              subLabel: "Apply Your Skills",
              completed: false,
            },
          ].map((node) => (
            <div
              key={node.id}
              className="relative z-10 flex flex-col items-center"
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center border-4 ${
                  node.completed
                    ? "bg-yellow-300 border-yellow-400"
                    : "bg-gray-200 border-gray-300"
                } shadow-md mb-4`}
              ></div>
              <div className="text-center">
                <div className="font-bold text-gray-700 -translate-y-4">
                  {node.label}
                </div>
                <div className="text-xs text-gray-500 -translate-y-2">
                  {node.subLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
