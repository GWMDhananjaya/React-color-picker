import { useSelector } from "react-redux"; // Importing the `useSelector` hook from react-redux library
import PropTypes from "prop-types"; // Importing PropTypes for prop validation

// Defining a functional component called `ThemeProvider` which takes `children` as props
export default function ThemeProvider({ children }) {
  // Using the `useSelector` hook to extract the `theme` from the Redux store
  const { theme } = useSelector((state) => state.theme);

  return (
    // Wrapping content in a `div` with class name equal to the current theme
    <div className={theme}>
      {/* Nested div for background and text color based on theme */}
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children} {/* Rendering children components */}
      </div>
    </div>
  );
}

// **PropTypes Validation**
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure `children` is a valid React node
};
