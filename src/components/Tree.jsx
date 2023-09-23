import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import { motion } from "framer-motion";
  
  const BooksTree = ({ booksData }) => {
    return (
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {booksData.map((book, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={book.date}
              iconStyle={{ background: book.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={book.icon}
                    alt={book.title}
                    className="w-[100%] h-[100%] object-contain"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              }
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">{book.title}</h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {book.author}
                </p>
              </div>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                {book.description.map((desc, index) => (
                  <li
                    key={`book-desc-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  };
  
  export default BooksTree;
  