import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSearchQuery } from "../redux/taskSlice";


const SearchWrapper = styled.div`
  width: 100%;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
   @media (max-width: 768px) {
    width: 100%;
  }
`;

const Search = () => {
  const searchQuery = useSelector((state) => state.task.searchQuery);
  const dispatch=useDispatch()
  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        placeholder="Search tasks by title..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </SearchWrapper>
  );
};

export default Search;
