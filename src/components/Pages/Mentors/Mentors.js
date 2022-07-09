import React, { useState, useEffect } from "react";
import PageHeading from "../../PageHeading";

import ReactPaginate from "react-paginate";
import "./pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { getMentors } from "../../../actions/mentors";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";
import MentorBox from "../../Component/MentorBox";
import Header from "../../Header/Header";

const Mentors = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();
  let { mentors, loading } = useSelector((state) => state.mentors);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    dispatch(getMentors());
    setPageCount(Math.ceil(mentors.length / usersPerPage));
  }, [dispatch, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Search bar
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = mentors.filter((value) => {
      console.log(value.name);
      return (
        value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.work.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.education.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.choices.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="min-h-half">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(43, 195, 252, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <div>
          <Header />
        </div>
        <PageHeading title="Our Mentors" />
        <div className="search pt-3 w-full flex flex-row-reverse items-end px-20">
          <input
            type="text"
            placeholder="Search a Mentor by Name, Work, Education, or Skills"
            className="border px-2 py-1 w-96"
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {loading && <Loading />}
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
        <div className="mentors flex flex-col flex-wrap py-10 items-center">
          <div className="row1 flex flex-wrap items-center justify-center mb-2">
            {wordEntered.length === 0 ? (
              mentors &&
              mentors
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map((user) => {
                  return user.isListed ? (
                    <MentorBox
                      user={user}
                      key={user.id}
                      onClickButton={() => {
                        localStorage.setItem("mentorId", user.name);
                        navigate("/book-call-now");
                      }}
                      onClickProfile={() => {
                        navigate(`/mentors/${user._id}`);
                      }}
                    />
                  ) : null;
                })
            ) : filteredData.length > 0 ? (
              filteredData
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map((user) => {
                  return user.isListed ? (
                    <MentorBox
                      user={user}
                      key={user._id}
                      onClickButton={() => {
                        localStorage.setItem("mentorId", user.name);
                        navigate("/book-call-now");
                      }}
                      onClickProfile={() => {
                        navigate(`/mentors/${user._id}`);
                      }}
                    />
                  ) : null;
                })
            ) : (
              <p className="text-xl">No Mentors Found</p>
            )}
          </div>
          {mentors && mentors.length > usersPerPage && (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
