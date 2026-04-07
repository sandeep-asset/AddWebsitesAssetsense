import { FaArrowUp } from "react-icons/fa";
import useScrollTop from "./useScrollTop";


const ScrollTopButton = () => {
  const { visible, scrollToTop } = useScrollTop(200);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-14 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTopButton;