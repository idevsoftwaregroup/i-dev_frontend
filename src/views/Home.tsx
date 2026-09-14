import { useState } from "react";

import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section>
      {/* Search */}

      <div
        className="field label border border-style round large grey3"
        dir="rtl"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: "1px solid #dedede",
          }}
          placeholder=" "
        />

        <label>جستجو کن</label>

        <i className="large">search</i>
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
