import { useState } from "react";

import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section>
      {/* Search */}

      <div className="field label round large" dir="rtl">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder=" "
          dir="rtl"
          style={{
            border: "1px solid #dedede",
            padding: "10px 45px 10px 15px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <i className="large">search</i>
          <span>جستجو کن</span>
        </label>
      </div>

      <div className="large-space"></div>

      {/* Banner */}

      <Banner searchTerm={searchTerm} />

      <div className="large-space"></div>

      {/* Categories */}

      <div className="right margin bottom3 bold large" dir="RTL">
        <h6 className="right bold">دسته بندی</h6>
      </div>

      <Categories />

      <div className="large-space"></div>

      {/* Articles */}

      <div className="right margin bottom3 bold large" dir="RTL">
        <h6 className="right bold">آخرین مقاله های دنیای فناوری</h6>
      </div>

      <Articles />

      <div className="large-space"></div>
    </section>
  );
}
