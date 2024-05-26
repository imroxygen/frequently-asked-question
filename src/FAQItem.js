import { useEffect, useState } from "react";

const FAQItem = ({ da, ind }) => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (ind == 0) {
      setIsShow(true);
    }
  }, []);
  const handleChange = (ind) => {
    setIsShow((isShow) => !isShow);
  };
  return (
    <>
      <div className="ques-container">
        <div className="ques-box" onClick={() => handleChange(ind)}>
          <button className={isShow ? "arrow" : ""}>></button>
          <div>{da.question}</div>
        </div>
        {isShow && <div className="ans-box">{da.answer}</div>}
      </div>
    </>
  );
};
export default FAQItem;
