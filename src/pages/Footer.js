import photo from "../image/photo3.png";
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="text-center space-y-4 py-10">
      <div className="flex justify-center items-center gap-5 ">
        <img src={photo} alt="" className="rounded-full w-[70px] h-[70px] ring-2 ring-[#FF451B] ring-offset-1" />
        <h2 className="text-xl font-bold">Riaz Uddin</h2>
      </div>
      <p>© {year}.All rights reserved by Riaz Uddin.</p>
    </div>
  );
};

export default Footer;
