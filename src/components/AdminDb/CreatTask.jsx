import React from "react";

const CreatTask = () => {
  return (
    <>
      <div className="flex items-center justify-center p-4">
        <form
          className="
            w-full max-w-6xl
            bg-white
            dark:bg-[#0b0b0b]/60 backdrop-blur-xl
            rounded-2xl
            p-5 sm:p-8
            grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8
            border border-gray-300 dark:border-zinc-800
            shadow-md
            dark:shadow-2xl
            transition-all duration-300 hover:-translate-y-1
          "
        >
          {/* LEFT SIDE */}
          <div className="space-y-4">
            {/* Task Title */}
            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Make a UI design"
                className="
                  w-full rounded-lg px-4 py-2.5
                  bg-gray-100 dark:bg-zinc-900
                  border border-gray-300 dark:border-zinc-700
                  text-gray-900 dark:text-zinc-100
                  placeholder:text-gray-400 dark:placeholder:text-zinc-500
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/70
                  focus:border-emerald-500
                  transition
                "
              />
            </div>

            {/* Date */}
            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Date
              </label>
              <input
                type="date"
                className="
                  w-full rounded-lg px-4 py-2.5
                  bg-gray-100 dark:bg-zinc-900
                  border border-gray-300 dark:border-zinc-700
                  text-gray-900 dark:text-zinc-100
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/70
                  focus:border-emerald-500
                  transition
                "
              />
            </div>

            {/* Assign To */}
            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Assign to
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Employee ID"
                  className="
                    w-full rounded-lg px-4 py-2.5
                    bg-gray-100 dark:bg-zinc-900
                    border border-gray-300 dark:border-zinc-700
                    text-gray-900 dark:text-zinc-100
                    placeholder:text-gray-400 dark:placeholder:text-zinc-500
                    focus:outline-none
                    focus:ring-2 focus:ring-emerald-500/70
                    focus:border-emerald-500
                    transition
                  "
                />
                <input
                  type="text"
                  placeholder="Employee Name"
                  className="
                    w-full rounded-lg px-4 py-2.5
                    bg-gray-100 dark:bg-zinc-900
                    border border-gray-300 dark:border-zinc-700
                    text-gray-900 dark:text-zinc-100
                    placeholder:text-gray-400 dark:placeholder:text-zinc-500
                    focus:outline-none
                    focus:ring-2 focus:ring-emerald-500/70
                    focus:border-emerald-500
                    transition
                  "
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Category
              </label>
              <input
                type="text"
                placeholder="Design, Development, etc"
                className="
                  w-full rounded-lg px-4 py-2.5
                  bg-gray-100 dark:bg-zinc-900
                  border border-gray-300 dark:border-zinc-700
                  text-gray-900 dark:text-zinc-100
                  placeholder:text-gray-400 dark:placeholder:text-zinc-500
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/70
                  focus:border-emerald-500
                  transition
                "
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">
            {/* Description */}
            <div className="flex-1">
              <label className="block font-semibold text-sm mb-1 text-gray-700 dark:text-zinc-300">
                Description
              </label>
              <textarea
                className="
                  w-full h-[90%] md:h-[96%]
                  rounded-lg px-4 py-3
                  bg-gray-100 dark:bg-zinc-900
                  border border-gray-300 dark:border-zinc-700
                  text-gray-900 dark:text-zinc-100
                  placeholder:text-gray-400 dark:placeholder:text-zinc-500
                  resize-none
                  focus:outline-none
                  focus:ring-2 focus:ring-emerald-500/70
                  focus:border-emerald-500
                  transition
                "
                placeholder="Write task details here..."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full rounded-lg py-3 mt-2
                bg-emerald-500 hover:bg-emerald-600
                dark:bg-emerald-600 dark:hover:bg-emerald-500
                text-white font-semibold
                shadow-md
                
                transition active:scale-[0.97]
              "
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatTask;
