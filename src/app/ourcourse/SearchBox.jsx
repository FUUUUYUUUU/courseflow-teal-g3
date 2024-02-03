export function SearchBox({ search, onSearch }) {
  return (
    <div className="flex self-center flex-col relative">
      <input
        type="text"
        id="search-box"
        placeholder="Search..."
        className="max-w-50 self-center mt-10 rounded-md h-10 border border-
        [#CCD0D7] border-solid p-[20]  text-center"
        value={search}
        // onChange={(e) => {
        //   if (e.target.value.length > 5) {
        //     setQuery(e.target.value);
        //   } else if (!e.target.value.length) {
        //     setQuery(null);
        //   }
        // }}
        onChange={(e) => onSearch(e.target.value)}
      />
      <i>
        <img
          src="icons/magnifying.png"
          className=" absolute top-[50px] left-[13px]"
        />
      </i>
      <span className="self-center">
        {search.length < 7 &&
          search.length > 0 &&
          "Plese enter atlease 5 character"}
      </span>
    </div>
  );
}
