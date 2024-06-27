import { FaTwitter, FaFacebook, FaYoutube, FaPinterest, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
    <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
         <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2022, All Rights Reserved
            </div>
            <div className="flex justify-center items-center flex-col md:items-start">
              <h1 className="text-4xl font-bold font-playfair">GFGL</h1>
              <h1 className="text-xl font-bold font-playfair">Good Food, Good Life</h1>
            </div>

             <div className="flex justify-center space-x-4">
                <a href="#">
                    <FaTwitter className="text-xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-xl"/>
                </a>
                <a href="#">
                  <FaYoutube className="text-xl"/>
                </a>
                <a href="#">
                    <FaPinterest className="text-xl" />
                </a>
                <a href="#">
                    <FaInstagram className="text-xl" />
                </a>
            </div>
         </div>
          <div className="font-lato flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Recipes</a>
                <a href="#" className="hover:underline">Contact Us</a>
                <a href="#" className="hover:underline">About</a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:underline">Sign In</a>
                <a href="#" className="hover:underline">Community</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>

           <div className="flex flex-col justify-between">
            <form action="">
                <div className="flex space-x-3">
                    <input type="text" className="flex-1 px-4  focus:outline-none " placeholder="Updated in your inbox"/>
                    <button className="px-6 py-2 text-black bg-white focus:outline-none">
                        Go
                    </button>
                </div>
            </form>
            <div className="hidden text-white md:block">
                Copyright &copy; 2024, All Rights Reserved
            </div>
           </div>
    </div>
  </footer>
  );
}