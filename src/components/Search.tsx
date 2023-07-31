interface SearchProps {
  onChange: (query: string) => void;
  placeholder: string;
  query: string;
}

const Search = ({ onChange, placeholder, query }: SearchProps) => (
  <input
    className="form-control search-input my-3 fs-3 p-3"
    onChange={(e) => onChange(e.currentTarget.value)}
    placeholder={placeholder}
    style={{ border: "3px solid #a4d2f5" }}
    type="search"
    value={query}
  />
);

export default Search;
