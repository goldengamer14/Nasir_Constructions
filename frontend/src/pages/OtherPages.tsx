export const ProjectsDonePage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
        COMPLETED PROJECTS
      </h2>
      <div className="rounded-lg bg-gray-100 p-12 text-center">
        <p className="text-xl text-gray-600">Projects gallery coming soon...</p>
      </div>
    </div>
  );
};

export const CurrentProjectPage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
        SITE PROGRESS
      </h2>
      <div className="mx-auto max-w-4xl">
        <img
          src="/imgs/Progress.jpeg"
          alt="Site Progress"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export const FutureProjectPage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
        FUTURE PROJECT
      </h2>
      <div className="mx-auto max-w-4xl">
        <img
          src="/imgs/Construction.jpeg"
          alt="Future Construction"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export const ContactPage = () => {
  return (
    <div className="container mx-auto px-5 pb-20">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
        CONTACT US
      </h2>
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
        <div className="space-y-4 text-center">
          <div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Phone</h3>
            <p className="text-lg text-gray-600">+91 1234567890</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Email</h3>
            <p className="text-lg text-gray-600">info@nasirconstructions.com</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">Address</h3>
            <p className="text-lg text-gray-600">
              Buldhana & Akola District, Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
