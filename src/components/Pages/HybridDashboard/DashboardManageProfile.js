import React, { useEffect, useState } from "react";
import Img from "../../../images/Group_214.svg";
import { useNavigate } from "react-router-dom";
import HybridDashboardNavigator from "../../Component/HybridDashboardNavigator";
import Header from "../../Header/Header";
import HeaderSeprater from "../../Component/HeaderSeprater";
import Colors from "../../../utils/Colors";
import CustomButton from "../../Component/CustomButton";
import { ImNext, ImOffice } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { saveEducationalDetailsAction, saveExperienceDetailsAction } from "../../../actions/users";
import Constants from "../../../constants/Constants";
import { useDispatch } from "react-redux";

const MapComponentEducation = ({ data, onRemove }) => {
  return (
    <div className="flex border-1 border-textInputBorder rounded-lg px-3 py-3 justify-between max-w-lg mb-6">
      <div className="flex ">
        <div className="border-1 border-dark-blue h-11 w-11 rounded-full bg-dark-blue">
          <IoIosSchool size={42} color={Colors.white} className="py-2 px-2" />
        </div>
        <div className="ml-3">
          <h3 className="font-primayfont text-dark-blue text-base font-normal">
            Studied {data.specialization} from {data.college}
          </h3>
          <p className="font-primayfont w-max text-dark-blue bg-chipGrey rounded-lg px-2 py-2 text-xs font-normal mt-2 capitalize">
            {data.startYear} - {data.endYear}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <AiOutlineClose size={24} color={Colors.dark_blue} onClick={onRemove} />
      </div>
    </div>
  );
};

const MapComponentExperience = ({ data, onRemove }) => {
  return (
    <div className="flex border-1 border-textInputBorder rounded-lg px-3 py-3 justify-between max-w-lg mb-6">
      <div className="flex ">
        <div className="border-1 border-dark-blue h-11 w-11 rounded-full bg-dark-blue">
          <ImOffice size={42} color={Colors.white} className="py-2 px-2" />
        </div>
        <div className="ml-3">
          <h3 className="font-primayfont text-dark-blue text-base font-normal">
            Worked as {data.designation} in {data.company}
          </h3>
          <p className="font-primayfont w-max text-dark-blue bg-chipGrey rounded-lg px-2 py-2 text-xs font-normal mt-2 capitalize">
            {data.startYear} - {data.endYear}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <AiOutlineClose size={24} color={Colors.dark_blue} onClick={onRemove} />
      </div>
    </div>
  );
};

const DashboardManageProfile = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inf = JSON.parse(localStorage.getItem(Constants.userInfo))

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [education, setEducation] = useState([])
  const [univercity, setUnivercity] = useState("");
  const [degree, setdegree] = useState("");

  const [experience, setExperience] = useState([])
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");

  const saveEducation = (education) => {
    setEducation(arr => [...arr, education]);
    setUnivercity('')
    setdegree('')
    setStartDate(new Date())
    setEndDate(new Date())
  };

  const removeEducation = (index) => {
    setEducation(education.filter((item, i) => i !== index))
  }

  const saveExperience = (experience) => {
    setExperience(arr => [...arr, experience]);
    setCompany('')
    setDesignation('')
    setStartDate(new Date())
    setEndDate(new Date())
  };

  const removeExperience = (index) => {
    setExperience(experience.filter((item, i) => i !== index))
  }

  const reformatDate = (date) => {
    var arr = date.split("-")
    return [arr[2], arr[1], arr[0]].join('/')
  }

  const addEducationToArr = () => {
    if (univercity.length > 1 && degree.length > 1) {
      saveEducation({
        college: univercity,
        startYear: reformatDate(startDate),
        endYear: reformatDate(endDate),
        specialization: degree
      })
    } else {
      alert("Please fill all Details")
    }
  }

  const hitSaveEducation = () => {
    if (education.length > 0) {
      dispatch(saveEducationalDetailsAction(inf.email, education))
    } else {
      alert("Please add atleast one Education Details")
    }
  }

  const addExperienceToArr = () => {
    if (company.length > 1 && designation.length > 1) {
      saveExperience({
        company,
        startYear: reformatDate(startDate),
        endYear: reformatDate(endDate),
        designation
      })
    } else {
      alert("Please fill all Details")
    }
  }

  const hitSaveExperience = () => {
    if (experience.length > 0) {
      dispatch(saveExperienceDetailsAction(inf.email, experience))
    } else {
      alert("Please add atleast one Education Details")
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const [img, setImg] = useState()

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const saveButton = (click) => {
    return (
      <CustomButton
        styleClass={"mt-2 px-4 py-2"}
        text={"Save"}
        onClick={click}
      />
    )
  }

  const renderBasicInformations = () => {
    return (
      <>
        <div className="flex flex-row items-center pt-6">
          <img src={img ? img : 'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png'} height={100} width={70} alt={"sample"} />
          <input accept="image/*" className="font-primayfont ml-4 py-2 h-12 px-9 text-white rounded-lg font-bold text-base" onChange={onImageChange} type="file" name="upload" />
        </div>
        {/* Basic information from start */}
        <div className="mb-4 mt-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            name="Gender"
            id="gender-select"

            className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
          >
            <option className="bg-white text-dark-blue" value="male">
              Male
            </option>
            <option className="bg-white text-dark-blue" value="female">
              Female
            </option>
            <option className="bg-white text-dark-blue" value="other">
              Other
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="linkedin"
          >
            LinkedIn (Mandatory for Mentor)
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="linkedin"
            type="text"
            placeholder="Enter profile link"
            border-hrlightBlue
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="address"
            type="text"
            placeholder="Enter address here"
            border-hrlightBlue
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="language"
          >
            Language you Spoke
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="languages"
            type="text"
            placeholder="Enter languages (Comma seprated)"
            border-hrlightBlue
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="username"
          >
            What is your Industry?
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="username"
            type="text"
            placeholder="Computer Science"
            border-hrlightBlue
          />
        </div>
        {saveButton(() => { alert("j") })}
      </>
    );
  };

  const renderMentorshipInformations = () => {
    return (
      <>
        <div className="mb-4 mt-6">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="website"
          >
            Website (optional)
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="website"
            type="text"
            placeholder="Enter Website (If any have)"
            border-hrlightBlue
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="skills"
          >
            Skills
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="skills"
            type="text"
            placeholder="Enter Your Skills (Comma sperated, Enter minimum 5 Skills)"
            border-hrlightBlue
          />
        </div>
        <div>
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="username"
          >
            Why do you want to be a mentor? (Non-visible)
          </label>
          <textarea
            className=" rounded-lg w-full h-36 pt-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="whymentor"
            type="text"
            placeholder="Why do you want to be a mentor?"
            border-hrlightBlue
          />
        </div>
        {saveButton(()=>{alert("Filled")})}
      </>
    );
  };

  const renderEducations = () => {
    return (
      <>
        <p className="font-primayfont text-dark-blue text-sm font-normal lg:text-base mt-4">
          Provide your education details such as University and Degree. These details will be visible on your main
          profile(For Mentors).
          Please save added details before leaving tab
        </p>

        {/* First and Last name  */}
        <div className="flex space-x-4 lg:space-x-9">
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              University
            </p>
            <input
              type="text"
              value={univercity}
              onChange={(e) => {
                setUnivercity(e.target.value);
              }}
              placeholder="ABC University"
              className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
            />
          </div>
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              Degree
            </p>
            <input
              type="text"
              value={degree}
              onChange={(e) => {
                setdegree(e.target.value);
              }}
              placeholder="e.g. B.Tech"
              className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
            />
          </div>
        </div>
        <div className="flex space-x-4 lg:space-x-9">
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              Start month
            </p>
            <input type={"date"} className='border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full' onChange={(e) => setStartDate(e.target.value)} value={startDate} />
          </div>
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              Last month
            </p>
            <input type={"date"} className='border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full' onChange={(e) => setEndDate(e.target.value)} value={endDate} />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4 lg:space-x-9 mt-6 mb-9">
          <div className="field w-1/2">
            <CustomButton
              text="Save"
              styleClass="w-full"
              onClick={() => hitSaveEducation()}
            />
          </div>
          <div className="field w-1/2">
            <CustomButton text="Add Another" styleClass="w-full" onClick={addEducationToArr} />
          </div>
        </div>
        <div className="flex flex-col">
          {education.map((education, index) => {
            return <MapComponentEducation data={education} index={index} key={index} onRemove={() => {
              removeEducation(index)
            }} />
          })}
        </div>
      </>
    );
  };

  const renderExperiences = () => {
    return (
      <>
        <p className="font-primayfont text-dark-blue text-sm font-normal lg:text-base mt-4">
          Tell us about the experience you have gained throughout. These details will be visible on your main
          profile(For Mentors).
          Please save added details before leaving tab
        </p>

        <div className="flex space-x-4 lg:space-x-9">
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              Company
            </p>
            <input
              type="text"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              placeholder="Amazon, Google..."
              className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
            />
          </div>
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              Designation
            </p>
            <input
              type="text"
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
              placeholder="Product Designer"
              className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
            />
          </div>
        </div>
        <div className="flex space-x-4 lg:space-x-9">
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              Start month
            </p>
            <input type={"date"} className='border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full' onChange={(e) => setStartDate(e.target.value)} value={startDate} />
          </div>
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              Last month
            </p>
            <input type={"date"} className='border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full' onChange={(e) => setEndDate(e.target.value)} value={endDate} />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 lg:space-x-9 mt-6 mb-9">
          <div className="field w-1/2">
            <CustomButton
              text="Save"
              styleClass="w-full"
              onClick={() => hitSaveExperience()}
            />
          </div>
          <div className="field w-1/2">
            <CustomButton text="Add Another" styleClass="w-full" onClick={addExperienceToArr} />
          </div>
        </div>

        <div className="flex flex-col">
          {experience.map((experience, index) => {
            return <MapComponentExperience data={experience} index={index} key={index} onRemove={() => {
              removeExperience(index)
            }} />
          })}
        </div>
      </>
    );
  };

  // const renderLoginSecurity = () => {
  //   return (
  //     <form className="lg:max-w-md">
  //       <div className="mb-2">
  //         <label
  //           className="block text-textBlack text-sm font-normal font-primayfont mb-2"
  //           htmlFor="username"
  //         >
  //           Email
  //         </label>
  //         <input
  //           className="rounded-lg w-full py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
  //           id="username"
  //           type="email"
  //           placeholder="email@example.com"
  //           border-hrlightBlue
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           className="block text-textBlack text-sm font-normal font-primayfont mb-2"
  //           htmlFor="username"
  //         >
  //           Password
  //         </label>
  //         <input
  //           className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
  //           id="username"
  //           type="password"
  //           placeholder="Your Password here"
  //           border-hrlightBlue
  //         />
  //       </div>
  //       <button
  //         className=" font-primayfont mt-6  w-full  py-3 text-white  rounded-lg font-bold text-base"
  //         style={{
  //           background: " linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
  //         }}
  //       >
  //         Update
  //       </button>
  //       <button className=" font-primayfont mt-4 w-full  py-3 text-white bg-red rounded-lg font-bold text-base">
  //         Delete Account
  //       </button>
  //     </form>
  //   );
  // };

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <HybridDashboardNavigator activeManageProfile={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full mb-14">
          <p className="font-primayfont text-dark-blue font-bold text-xl capitalize mt-7">
            Manage Profile
          </p>
          <div className="flex flex-row h-9 mt-6 lg:justify-between">
            <div className="flex flex-row">
              <div>
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue cursor-pointer"
                  onClick={() => handletab(1)}
                >
                  Basic Information
                </p>
                {showtab === 1 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div>
              <div className="ml-6">
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue cursor-pointer"
                  onClick={() => handletab(2)}
                >
                  Mentorship
                </p>
                {showtab === 2 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div>
              <div className="ml-6">
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue cursor-pointer"
                  onClick={() => handletab(3)}
                >
                  Education
                </p>
                {showtab === 3 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div>
              <div className="ml-6">
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue cursor-pointer"
                  onClick={() => handletab(4)}
                >
                  Experience
                </p>
                {showtab === 4 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div>
              {/* <div className="ml-6">
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue cursor-pointer"
                  onClick={() => handletab(5)}
                >
                  Login security
                </p>
                {showtab === 5 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div> */}
            </div>
          </div>
          <hr
            className="w-full -mt-1 lg:w-full"
            style={{ color: Colors.hrlightBlue }}
          />
          <div className={showtab === 1 ? "lg:max-w-md" : "hidden"}>
            {renderBasicInformations()}
          </div>
          <div className={showtab === 2 ? "lg:max-w-md" : "hidden"}>
            {renderMentorshipInformations()}
          </div>
          <div className={showtab === 3 ? "lg:max-w-md" : "hidden"}>
            {renderEducations()}
          </div>
          <div className={showtab === 4 ? "lg:max-w-md" : "hidden"}>
            {renderExperiences()}
          </div>
          {/* <div className={showtab === 5 ? "pt-6" : "hidden"}>
            {renderLoginSecurity()}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardManageProfile;
