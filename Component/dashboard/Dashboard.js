import Link from "next/link";
import React, { useEffect, useState } from "react";

const Dashboard = ({ isHidden }) => {
  const [darkMode, setDarkMode] = useState(false);
  const lightStyles = {
    "--textcolor2": "#000",
    "--textcolor3": "rgb(15 23 42 / 74%)",
    "--arrow-down": "rgb(195 195 195 / 82%)",
    "--hidden-list": "rgb(229, 231, 235)",
    "--nav": "rgb(79, 70, 229)",
    "--boxcolor": "#f8f8f8",
    "--cardbox": "#fff",
    "--cardbox2": "#f8f8f9",
    "--textcircle": "rgb(15, 23, 42)",
    "--boxShadow":
      "0 0 rgba(195, 195, 195, 0.82), 0 0 rgba(195, 195, 195, 0.82),0 1px 3px 0 rgba(195, 195, 195, 0.82), 0 1px 2px -1px rgba(195, 195, 195, 0.82)",
    "--hover-users": "rgb(229, 231, 235)",
    "--hover-users-text": "rgb(79, 70, 229)",
    "--catch-blue": "rgb(15, 23, 42)",
  };

  const darkStyles = {
    "--nav": "rgb(15, 23, 42)",
    "--boxcolor": "#1a1625",
    "--textcircle": "rgb(229, 231, 235)",
    "--textcolor2": "#fff",
    "--hidden-list": "rgb(63 70 86)",
    "--textcolor3": "#fff",
    "--arrow-down": "#2f2b3a",
    "--cardbox": "#2f2b3a",
    "--cardbox2": "#46424f",
    "--boxShadow":
      "0 0 rgba(195, 195, 195, 0.10), 0 0 rgba(195, 195, 195, 0.10),0 1px 3px 0 rgba(195, 195, 195, 0.10), 0 1px 2px -1px rgba(195, 195, 195, 0.10)",
    "--hover-users": "#46424f",
    "--hover-users-text": "rgb(117, 111, 222)",
    "--catch-blue": "rgb(117 111 222)",
  };

  const applyStyles = (isDarkMode) => {
    const styles = isDarkMode ? darkStyles : lightStyles;
    Object.entries(styles).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Store newDarkMode in localStorage
    localStorage.setItem("darkMode", newDarkMode.toString());

    // Apply styles based on new dark mode setting
    applyStyles(newDarkMode);
  };

  // Check value from localStorage on initial load
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      const isDarkMode = savedDarkMode === "true";
      setDarkMode(isDarkMode);
      applyStyles(isDarkMode);
    }
  }, []);

  return (
    <div>
      <div className={`h-100 ${isHidden ? "hidden" : ""} hiddenlist hidden-list2`}>
        <nav className='dqsh2'>
          <ul>
            <li className='px-4 py-3 list-s'>
              <i className='fa-duotone fa-moon' onClick={toggleDarkMode}></i>
            </li>
            <Link href={"/"}>
              <li className='px-4 py-3 list-s'>
                <i className='fa-solid fa-house'></i>
              </li>
            </Link>
            <Link href={"/Users"}>
              <li className='px-4 py-3 list-s'>
                <i className='fa-solid fa-users'></i>
              </li>
            </Link>
            <Link href={"/AddCandidate"}>
              <li className='px-4 py-3 list-s'>
                <i className='fa-solid fa-user-plus'></i>
              </li>
            </Link>
            <li className='px-4 py-3 list-s'>
              <i className='fa-solid fa-gear'></i>
            </li>
          </ul>
        </nav>
      </div>
      <div className='showlist'>
        <div className='flex justify-between items-baseline mt-8'>
        <h1 className='ml-6 font-sans font-bold'>Zab Vote</h1>

          <i className='fa-duotone fa-moon mr-6' onClick={toggleDarkMode}></i>
        </div>
        <nav>
          <ul className='ml-6 mt-6'>
            <h5 className='h5d'>Main</h5>
            <Link href={"/"}>
              <li className='px-4 py-3 list-s mt-1'>
                <i className='fa-solid fa-house mr-2'></i>Homepage
              </li>
            </Link>
            <Link href={"/Users"}>
              <li className='px-4 py-3 list-s mt-2'>
                <i className='fa-solid fa-users mr-2'></i>Users
              </li>
            </Link>
            <Link href={"/AddCandidate"}>
              <li className='px-4 py-3 list-s mt-2'>
                <i className='fa-solid fa-user-plus mr-2'></i>Add Candidate
              </li>
            </Link>
          </ul>
          <ul className='ml-6 mt-3'>
            <h5 className='h5d'>Maintenance</h5>
            <Link href={"/Settings"}>
              <li className='px-4 py-3 list-s mt-2'>
                <i className='fa-solid fa-gear mr-2 mt-2'></i>Settings
              </li>
            </Link>
          </ul>
          <Link
            href={"https://github.com/Hasankhankor"}
            style={{ textDecoration: "none" }}
            className='hoverblue'
          >
            <i className='fa-brands fa-github ml-4'></i>
            <p className='mt-8 ml-2 text-start inline-block'>Developed by Hasan ♡</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
