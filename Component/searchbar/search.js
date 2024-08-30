import React, { useState } from "react";
import { Card } from "@tremor/react";
import Link from "next/link";
import { userRows } from "../../Component/Data";

const Search = () => {
  const [cardHeight, setCardHeight] = useState("19rem");
  const [name, setName] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    const maxHeight = 547;
    const newHeight = parseInt(cardHeight) + 545;
    if (!isExpanded && newHeight >= maxHeight) {
      setIsExpanded(true);
      setCardHeight(`${maxHeight}px`);
    } else if (isExpanded) {
      setIsExpanded(false);
      setCardHeight("303px");
    } else {
      setCardHeight(`${newHeight}px`);
    }
  };

  const iconClassName = isExpanded
    ? "fa-solid fa-chevron-up arrowdown"
    : "fa-solid fa-chevron-down arrowdown";

  const filterPeople = () => {
    return userRows.filter((person) => {
      return person.fullName.toLowerCase().includes(name.toLowerCase());
    });
  };

  const filteredPeople = filterPeople();

  return (
    <div>
      <Card className='cardsearch mt-6 carddark boxshadow' style={{ height: cardHeight }}>
        <div className='flex justify-between items-center borderin pb-3 '>
          <div className='flex justify-center items-center'>
            <i className='fa-regular fa-magnifying-glass'></i>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Search'
              className='inpt carddark'
            />
          </div>
        </div>
        <ul role='list' className='divide-y divide-gray-100 '>
          {filteredPeople.map((person, index) => (
            <Link href={`Pages/${person.id}`} key={index}>
              <li
                key={index}
                className='sr-list flex w-full p-4 justify-between  gap-x-6 py-5 sr-list items-center'
                style={{
                  borderBottom:
                    index === filteredPeople.length - 1
                      ? "none"
                      : "1px solid rgb(209 210 214 / 49%)",
                }}
              >
                <div className='flex min-w-0 gap-x-4 items-end'>
                  <img
                    style={{ width: "3rem", height: "3rem" }}
                    className='h-10 rounded flex-none mr-3 bg-gray-50'
                    src={person.img}
                    alt=''
                  />
                  <div className='min-w-0 flex-auto  sr-list'>
                    <p className='text-sm font-semibold leading-6 sr-list'>{person.fullName}</p>
                    <p className='mt-1 truncate text-xs leading-5 sr-list gray'>{person.email}</p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </Card>
      <div className='text-center ch flex justify-center '>
        <i className={iconClassName} onClick={handleClick}></i>
      </div>
    </div>
  );
};

export default Search;
