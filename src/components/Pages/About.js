import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import AssetHome1 from "../../images/asset_about.png";
import image from "../../images/kalpesh.jpg";
import image2 from "../../images/aayu.jpg";
import Colors from "../../utils/Colors";
import Constants from "../../constants/Constants";
import { AiOutlineMail } from "react-icons/ai";
import CustomButton from "../Component/CustomButton";

const MBox = ({ item }) => {
  return (
    <div className="flex flex-col">
      <div className="flex-col rounded-lg bg-dark-blue flex">
        <img src={item.imgUrl} alt="mentor" className="h-72 w-64 rounded-lg" />
      </div>
      <div className="flex justify-center flex-col items-center">
        <h3 className="mt-6 font-primayfont text-dark-blue font-bold text-xl">
          {item.name}
        </h3>
        <p className="mt-2 font-primayfont font-normal text-base text text-grey">
          {item.post}
        </p>
      </div>
    </div>
  )
}

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const teams = [
    {
      name: "Aayu Kharbanda",
      post: "Founder & CEO",
      imgUrl: image2,
    },
    {
      name: "Kalpesh Lohar",
      post: "Founder & CTO",
      imgUrl: image,
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || query === "") {
      alert("Please fill all fields");
    } else {

    }
  };

  return (
    <div className="min-h-half">
      <div style={{ background: Constants.homeBackgroundGradient }}>
        <div>
          <Header />
        </div>
        {/* section 1 */}
        <section className="flex flex-col justify-center items-center">
          <div className="px-4 lg:px-60 flex flex-col justify-center items-center">
            <div className="flex pt-10 flex-wrap">
              <h1 className="font-bold  capitalize flex lg:hidden font-primayfont text-2xl text-dark-blue align-middle text-center">
                it’s not about us, it is about you.               </h1>
              <h1
                className="font-bold capitalize  hidden lg:flex font-primayfont text-dark-blue align-middle text-center"
                style={{ fontSize: 48 }}
              >
                it’s not about us, it is about you.               </h1>
            </div>
            <h2 className="font-normal text-base lg:text-lg mt-5 text-dark-blue text-center align-middle mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique eget turpis nisl cras diam. Ullamcorper malesuada quam nisl, adipiscing tincidunt quis. Pellentesque arcu in id consequat, ultricies sapien condimentum. Dictum dignissim ligula neque quisque odio viverra ipsum potenti est. Odio enim mattis quis in tristique ut tellus interdum sit. Dolor, egestas et in volutpat facilisi semper aliquam. Sit sed integer nascetur arcu feugiat in gravida volutpat. Imperdiet vitae natoque vitae senectus nam. Eget enim penatibus vitae interdum iaculis. Vivamus ullamcorper augue ut sollicitudin pellentesque nisi mattis leo, in. Proin orci quis tincidunt ut tristique montes, maecenas. Congue dolor adipiscing amet luctus id consectetur. Vel, sem pulvinar amet gravida purus faucibus ornare.
            </h2>
          </div>
        </section>
      </div>

      {/* section 2 */}
      <section className="px-4 mb-48 sm:mb-36 lg:mb-20 items-center flex justify-center h-2/3 ">
        <img className="w-10/12 md:w-2/3" alt="Home page" src={AssetHome1} />
      </section>
      <section className="px-4 -mt-80 bg-dark-blue md:px-28">
        <div className="pt-40 sm:pt-48 lg:pt-64 mt-24 md:mt-32">
          <h3 className="font-bold font-primayfont text-xl text-white lg:text-4xl">
            Get In Touch
          </h3>
          <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-14 lg:justify-between lg:w-full">
            <div className="flex flex-col w-full lg:w-2/5">
              <h4 className="font-bold font-primayfont text-lg text-white lg:text-xl">
                Have Any Question?
              </h4>
              <p className="font-primayfont font-light mt-4 lg:mt-8 text-base text-white pr-2 my-2 mb-11">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit.
              </p>
              <div className="flex flex-col">
                <div className="flex">
                  <AiOutlineMail size={24} color={Colors.orageAbout} />
                  <p className="font-primayfont font-light ml-3 text-base text-orageAbout">
                    Email Information
                  </p>
                </div>
                <p className="font-primayfont font-light mt-4 text-base text-white">
                  info.edukith@gmail.com
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center items-center mt-9 lg:mt-0 lg:w-3/5">
              <form
                onSubmit={handleSubmit}
                className="w-full lg:max-w-lg mb-16 flex justify-center items-center flex-col"
              >
                <div className="flex w-full flex-wrap -mx-3 mb-6">
                  <div className="w-full">
                    <label className="label-form text-white" htmlhtmlFor="grid-password">
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="E.g. Jane Doe"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-wrap -mx-3 mb-6">
                  <div className="w-full">
                    <label className="label-form text-white" htmlhtmlFor="grid-password">
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="E.g. janedoe@gmail.com"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-full   mb-6">
                  <div className="w-full">
                    <label className="label-form text-white" htmlhtmlFor="grid-password">
                      Message
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="query"
                      onChange={(e) => setQuery(e.target.value)}
                      type="text"
                      placeholder="E.g. I have query"
                      rows="6"
                      column="3"
                    />
                  </div>
                </div>
                <CustomButton text="Send Messages" />
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Our Mentors  */}
      <section
        style={{
          background: Constants.homeBackgroundGradient,
        }}
        className="py-5 px-4 md:px-28"
      >
        <div className="py-10 sm:py-16 lg:py-40">
          <h3 className="font-bold font-primayfont text-xl text-dark-blue lg:text-4xl">
            Meet the team
          </h3>
          <div className="flex flex-col lg:flex-row w-full lg:mt-7 lg:justify-between lg:w-full">
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="font-primayfont font-light text-base text-dark-blue pr-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi dui purus etiam ornare sed aliquam. Facilisi turpis vitae maecenas venenatis vivamus nunc. Felis morbi sagittis sit lectus proin parturient. Massa mauris, aliquam est malesuada ornare sagittis. Sed sagittis urna diam lorem purus.

                Orci condimentum orci quis lobortis mi, neque. Massa nam accumsan, tortor varius feugiat sodales ac. In nunc sit arcu lectus cras suspendisse id ultrices.

                Tincidunt in in nibh fermentum. Sagittis pretium scelerisque pellentesque in pharetra vitae amet. Commodo commodo, fames risus dictum sed odio egestas sapien, nibh. Phasellus rhoncus eu lobortis tortor dictumst. Morbi augue ipsum ut pellentesque consectetur lobortis.
              </p>
            </div>
            <div className="flex w-full justify-center items-center mt-9 lg:mt-0 lg:w-1/2">
              <div className="flex space-x-9 ">
                {teams.map((item, index) => {
                  return (
                    <MBox item={item} key={index} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
