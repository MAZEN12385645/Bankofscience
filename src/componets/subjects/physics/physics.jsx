const Physics = () => {
  // لو PDFs في نفس فولدر هذا الملف
  const pdfFiles = import.meta.glob("./*.pdf", { eager: true });
  const pdfs = Object.entries(pdfFiles);

  return (
    <div className="container w-90 h-fit max-lg:w-60 pt-1 bg-opacity-10 text-white mt-5 rounded-lg">
      {pdfs.map(([path, file], i) => (
       <div
          key={i}
          className="border-2 bg-blue-300/10  border-blue-700 flex justify-center items-center mt-2 rounded-lg w-full "
       >
       <a
          key={i}
          href={file.default}
          target="_blank"
          className="block  mt-2 max-lg:text-sm  no-underline text-white"
        >
          {path.split("/").pop()} {/* اسم الملف */}
        </a>
        </div>
      ))}
    </div>
  );
};

export default Physics;
