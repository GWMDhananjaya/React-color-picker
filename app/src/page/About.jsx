/*
  This component represents the About page of the Pencraft website.
  It provides information about Pencraft, an author's vlog dedicated to sharing insights, tips, and experiences in the world of writing and publishing.
  It is designed to be a central destination for inspiration and knowledge for both aspiring writers and seasoned authors.
*/

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      {/* Container for About content */}
      <div className='max-w-2xl mx-auto p-5 text-center'>
        <div>
          {/* Title */}
          <h1 className='text-3xl font font-semibold text-center my-1'>
            About Color picker
          </h1>
          {/* Description */}
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            A Color Picker web tool is an online application that lets you easily choose and customize colors using an interactive palette or sliders. It instantly generates standardized color codes—such as HEX, RGB, or HSL—making it a handy resource for designers and developers to ensure consistent color usage across web and graphic projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
