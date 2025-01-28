import React from "react";
import Highlight from "./Highlight";
import ProjectUI from "./ProjectUI";

const MyWork = React.forwardRef( function MyWork(props,ref) {
  return (
    <div className="w-full flex flex-col items-center mt-14" ref={ref}>
      <h4 className="font-thin font-ovo text-lg pb-2  text-gray-600">
        My portfolio
      </h4>
      <h2 className="text-4xl font-medium pb-8 tracking-wider  text-gray-800">
        My latest work
      </h2>
      <div className="w-[60%] flex flex-col items-center ">
        <p className="text-lg text-gray-600 font-ovo leading-8 pb-8 font-thin tracking-wider text-center lg:text-left">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>
        <div className="w-full flex flex-col  items-center gap-4">

          <ProjectUI
            tittle="AdminEase Dashboard"
            description="A dynamic and user-friendly admin panel designed to streamline
                  business operations. The dashboard includes an intuitive overview
                  section, user analytics, sales insights, orders management, and
                  customizable settings for seamless control."
            href=" https://admin-dashboard-pied-nu-73.vercel.app/"
            point={[
              "Responsive Design",
              "Data Visualization",
              "User Analytics",
              "Sales Tracking",
              "Order Management",
              "Modern UI/UX",
            ]}
            img="/admin.png"
          />
          <ProjectUI
            tittle=" TaskFlow Manager"
            description="A sleek and efficient task management app that empowers users to seamlessly manage their to-do lists. With features to add, delete, and update task statuses, TaskFlow Manager helps users stay organized and productive. View all tasks at a glance, or filter tasks by their status—Pending, Active, Completed, or Failed—for better focus and control."
            href="https://task-app-sand.vercel.app/"
            point={[
              "Add Tasks",
              "Delete Tasks",
              "Edit Task States",
              "Filter by Status",
              "Active Tasks",
              "Failed Tasks",
              "User-Friendly",
              "Responsive Design"
            ]}
            img="/task.png"
          />


        </div>
      </div>
    </div>
  );
})
export default MyWork