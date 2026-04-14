import { Banner } from "../../components/Banner";
import { SearchForm } from "../../components/SearchForm";
import { SearchResults } from "../../components/SearchResults";

const HomePage = () => <div className="d-flex flex-column">
  <section>
    <Banner world='wc' />
  </section>
  <section className="rlt-search__container">
    <SearchForm />
  </section>
  <section className="container my-5 py-5">
    <h2>Search Results</h2>
    <SearchResults />
  </section>
</div>;

export default HomePage;