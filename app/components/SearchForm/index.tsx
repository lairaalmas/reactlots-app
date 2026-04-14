import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import type { Neighborhood } from "../../types/neighborhood";
import type { World } from "../../types/world";

type FilterDataSelectionFields = {
  label: string;
  defaultSelection: string;
  items: World[] | Neighborhood[] | [];
}
type FilterData = {
  world: FilterDataSelectionFields,
  neighborhood: FilterDataSelectionFields,
}

export const SearchForm = () => {
  const { worlds, neighborhoods, filters } = useLoaderData();
  const navigate = useNavigate();

  const [selectedWorld, setSelectedWorld] = useState(filters?.world ?? '');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(filters?.neighborhood ?? '');

  const filterData: FilterData = {
    world: {
      label: 'World',
      defaultSelection: 'All',
      items: worlds || [],
    },
    neighborhood: { 
      label: "Neighbordhood",
      defaultSelection: 'All',
      items: neighborhoods || [],
    }
  };

  const { world, neighborhood: neigh } = filterData;

  const handleWorldChange = (id: string) => {
    setSelectedWorld(id);
    setSelectedNeighborhood('');
  }
  const handleNeighborgoodChange = (id: string) => {
    setSelectedNeighborhood(id);
  }
  const handleClear = () => {
    setSelectedWorld('');
    setSelectedNeighborhood('');
    navigate('/');
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const params = new URLSearchParams();

    if (selectedWorld) params.set('world', selectedWorld);
    if (selectedNeighborhood) params.set('neighborhood', selectedNeighborhood);

    const queryString = params.toString();
    navigate(queryString ? `/?${queryString}` : '/');
  }

  return <form className="sims-font d-flex flex-column gap-3" onSubmit={handleSubmit}>
    <div>
      <label htmlFor={world.label}>{world.label}</label>
      
      <select className="form-select" id={world.label} value={selectedWorld || ''} onChange={(event) => handleWorldChange(event.target.value)}>
        <option value="">{world.defaultSelection}</option>

        {world.items.map((item) => (
          <option key={item.id} value={item.id}>{item.title}</option>
        ))}
      </select>
    </div>

    <div>
      <label htmlFor={neigh.label}>{neigh.label}</label>

      <select className="form-select" id={neigh.label} value={selectedNeighborhood || ''} onChange={(event) => handleNeighborgoodChange(event.target.value)}>
        <option value="">{neigh.defaultSelection}</option>

        {neigh.items.map((item) => (
          <option key={item.id} value={item.id}>{item.title}</option>
        ))}
      </select>
    </div>

    <div>
      <button type="submit" className="btn bg-info me-2">Search</button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  </form>
};