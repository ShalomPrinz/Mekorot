interface SearchProps {
  onChange: (query: string) => void;
  placeholder: string;
}

const Search = ({ onChange, placeholder }: SearchProps) => (
  <input
    className="form-control search-input my-3 fs-3 p-3 w-75"
    onChange={(e) => onChange(e.currentTarget.value)}
    placeholder={placeholder}
    style={{ border: "3px solid #a4d2f5" }}
    type="search"
  />
);

export default Search;
