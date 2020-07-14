import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "../loader/loader.css";
import Loader from "../loader/loader";
const Highmargin = React.lazy(() => import("../high-margin/highmargin"));
const Lowhmargin = React.lazy(() => import("../low-margin/lowmargin"));
const Top = React.lazy(() => import("../top-fluctating-recipes/top"));
const Tags = React.lazy(() => import("../tags/tags"));
const Rendertable = React.lazy(() => import("./table"));

const Listuser = () => {
  const [listofContent, setListcontent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [is_incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let res = await axios.get(
        `https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=1&${is_incorrect}`
      );

      setListcontent(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [is_incorrect]);

  let data =
    listofContent && listofContent.results ? listofContent.results : [];

  const changeData = () => {
    setIncorrect(true);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", width: "100%" }}>
        <Suspense fallback={<Loader />}>
          <Highmargin />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Lowhmargin />
        </Suspense>

        <Suspense fallback={<Loader />}>
          <Top data={data && data} />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Tags changeData={changeData} />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Rendertable data={data} loading={loading} />
        </Suspense>
      </div>
    </React.Fragment>
  );
};
export default Listuser;
