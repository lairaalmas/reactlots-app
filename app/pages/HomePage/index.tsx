import { SearchForm } from "../../components/SearchForm";
import { SearchResults } from "../../components/SearchResults";

const HomePage = () => <div className="d-flex flex-column gap-5">
  <section>
    <h2>Banner</h2>
  </section>
  <section>
    <h2>Search Fields</h2>
    <SearchForm />
  </section>
  <section>
    <h2>Search Results</h2>
    <SearchResults />
  </section>
</div>;

export default HomePage;