"use client"
import React from "react";

const Faq = () => {
	return (
		<div className="bg bg-shaded rounded-lg">
			<h2 className="text-2xl mx-auto text-center md:text-start font-semibold font-montserrat my-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">FAQ</h2>
			<FaqBox />
		</div>
	);
};



const FaqBox = () => {
	

  const data = [
    {
      index: 1,
      question: "Question1",
      answer: "answer 1",
    },
    {
      index: 2,
      question: "Question 2",
      answer: "1",
    },
  ];

  const [toggles, setToggles] = React.useState(data.map(() => false));

  function handleToggle(index) {
    setToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[index] = !newToggles[index];
      return newToggles;
    });
  }

  return (

    <div>
      <ul>
        {data.map((item, index) => (
          <li key={item.index} className="mb-4 px-[40px]">
            <div className="border p-2 rounded-lg">
              <div className="flex justify-between text-md font-montserrat">
                {item.question}
                <button className="cursor-pointer" onClick={() => handleToggle(index)}>
                  {toggles[index] ? "-" : "+"}
                </button>
              </div>

              <div>
                {toggles[index] && (
                  <div className="mt-3 text-sm font-extralight text-text-secondary font-montserrat">
                    {item.answer}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;


